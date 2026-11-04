import { describe, expect, test } from 'bun:test';
import {
  UnknownFieldError,
  buildUpdate,
  classifyChange,
  diffPilot,
  diffShip,
  diffUpgrade,
  normalizeCost,
  normalizeGrant,
  normalizePilot,
  normalizeRestrictions,
  normalizeText,
  normalizeUpgrade,
  readField,
  reconcile,
} from './normalize';

const pilot = { xws: 'p', name: 'P', initiative: 1, limited: 0, cost: 30 };
const upgrade = { xws: 'u', name: 'U', limited: 0, sides: [{ title: 'U', type: 'Talent', slots: ['Talent'] }] };

describe('normalizeText', () => {
  test('converts bracketed maneuvers and leaves icons alone', () => {
    expect(normalizeText('a [0 [Stationary]] b')).toBe('a (0 [Stationary]) b');
    expect(normalizeText('[[Bank Left] or [Bank Right]]')).toBe('([Bank Left] or [Bank Right])');
    expect(normalizeText('[Focus]')).toBe('[Focus]');
    expect(normalizeText(undefined)).toBeNull();
  });
});

describe('normalizeRestrictions', () => {
  test('renames fields to our column shape', () => {
    expect(
      normalizeRestrictions(
        [{ sizes: ['Small'] }, { ships: ['a'] }, { names: ['b'] }, { force_side: ['dark'] }, { agility: [2] }],
        'x',
      ),
    ).toEqual([
      { baseSizes: ['Small'] },
      { chassis: ['a'] },
      { character: ['b'] },
      { sides: ['dark'] },
      { stat: { type: 'agility', value: 2 } },
    ]);
  });

  test('accepts both initiative formats', () => {
    expect(normalizeRestrictions([{ initiative: { max: 3 } }], 'x')).toEqual([{ initiative: { max: 3 } }]);
    expect(normalizeRestrictions([{ initiative: ['3 OR LOWER'] }], 'x')).toEqual([{ initiative: { max: 3 } }]);
    expect(normalizeRestrictions([{ initiative: [] }], 'x')).toEqual([{}]);
  });

  test('fixes action arrays, Target Lock and faction typos', () => {
    expect(
      normalizeRestrictions([{ action: [{ type: 'Target Lock', difficulty: 'Red' }], factions: ['firstrorder'] }], 'x'),
    ).toEqual([{ action: { type: 'Lock', difficulty: 'Red' }, factions: ['firstorder'] }]);
  });

  test('drops standardized and returns null when nothing is left', () => {
    expect(normalizeRestrictions([{ standardized: true }], 'x')).toBeNull();
    expect(normalizeRestrictions(undefined, 'x')).toBeNull();
  });

  test('stops on an unknown restriction field', () => {
    expect(() => normalizeRestrictions([{ brandNew: 1 }], 'x')).toThrow(UnknownFieldError);
  });
});

describe('normalizeGrant', () => {
  test('converts each grant type', () => {
    expect(normalizeGrant({ type: 'action', value: { type: 'Focus' } }, 'x')).toEqual({
      action: { type: 'Focus' },
      value: 1,
    });
    expect(normalizeGrant({ type: 'slot', value: 'cannon', amount: 2 }, 'x')).toEqual({ slot: 'Cannon', value: 2 });
    expect(normalizeGrant({ type: 'stat', value: 'attack', arc: 'Front Arc', amount: 3 }, 'x')).toEqual({
      stat: 'attack',
      value: 3,
      arc: 'Front Arc',
    });
    expect(normalizeGrant({ type: 'arc', value: 'Front Arc' }, 'x')).toEqual({ arc: 'Front Arc', value: 1 });
    expect(normalizeGrant({ type: 'force', value: ['dark'], amount: 2 }, 'x')).toEqual({ side: 'dark', value: 2 });
  });

  test('stops on an unknown grant type', () => {
    expect(() => normalizeGrant({ type: 'brandNew', value: 1 }, 'x')).toThrow(UnknownFieldError);
  });
});

describe('normalizeCost', () => {
  test('turns string values into numbers and leaves variable costs alone', () => {
    expect(normalizeCost({ value: '0' })).toEqual({ value: 0 });
    const variable = { variable: 'agility', values: { '0': 2 } };
    expect(normalizeCost(variable)).toEqual(variable);
    expect(normalizeCost(undefined)).toBeNull();
  });
});

describe('normalizePilot and normalizeUpgrade', () => {
  test('wildspace maps to Extended', () => {
    expect(normalizePilot({ ...pilot, wildspace: false }).Extended).toBe(false);
    expect(normalizePilot({ ...pilot, wildspace: true }).Extended).toBe(true);
    expect(normalizePilot(pilot).Extended).toBe(true);
    expect(normalizeUpgrade({ ...upgrade, wildspace: false }).Extended).toBe(false);
  });

  test('standardized restrictions set Standarized', () => {
    expect(normalizeUpgrade({ ...upgrade, restrictions: [{ standardized: true }] }).Standarized).toBe(true);
    expect(normalizeUpgrade(upgrade).Standarized).toBe(false);
  });

  test('stops on unknown fields', () => {
    expect(() => normalizePilot({ ...pilot, brandNew: 1 })).toThrow(UnknownFieldError);
    expect(() => normalizeUpgrade({ ...upgrade, brandNew: 1 })).toThrow(UnknownFieldError);
    expect(() => normalizeUpgrade({ ...upgrade, sides: [{ brandNew: 1 }] })).toThrow(UnknownFieldError);
  });
});

describe('classifyChange', () => {
  test('ignores key order, null and empty values', () => {
    expect(classifyChange({ a: 1, b: 2 }, { b: 2, a: 1 })).toBeNull();
    expect(classifyChange(null, [])).toBeNull();
    expect(classifyChange({ a: 1, b: null }, { a: 1 })).toBeNull();
  });

  test('separates formatting, real changes and cleared values', () => {
    expect(classifyChange('a [0 [Stationary]] b', 'a (0 [Stationary]) b')).toBe('cosmetic');
    expect(classifyChange('Sensor Blindspot', 'Sensor Blackout')).toBe('real');
    expect(classifyChange(30, 31)).toBe('real');
    expect(classifyChange('hand added', null)).toBe('cleared');
  });
});

describe('diffs', () => {
  const live = {
    Name: 'P',
    Caption: null,
    Cost: 30,
    Loadout: null,
    Initiative: 1,
    Limited: 0,
    Standard: true,
    Extended: true,
    Epic: true,
    Image: 'https://infinitearenas.com/p.png',
    Artwork: null,
    Force: { value: 1, recovers: 1, side: ['dark'] },
  };

  const fields = (changes: { field: string }[]) => changes.map(change => change.field);

  test('keeps existing images and fills empty ones', () => {
    const next = normalizePilot({ ...pilot, image: 'https://github/p.png', artwork: 'https://github/a.png' });
    const changes = diffPilot(live, { ...next, Force: live.Force });
    expect(fields(changes)).toEqual(['Artwork']);
    expect(changes[0].next).toBe('https://github/a.png');
  });

  test('keeps the Force side when upstream has none', () => {
    const next = normalizePilot({ ...pilot, force: { value: 1, recovers: 1 }, image: live.Image });
    expect(fields(diffPilot(live, next))).toEqual([]);
  });

  test('reports a real Force change and keeps the side', () => {
    const next = normalizePilot({ ...pilot, force: { value: 2, recovers: 1 }, image: live.Image });
    expect(diffPilot(live, next)[0].next).toEqual({ value: 2, recovers: 1, side: ['dark'] });
  });

  test('keeps an existing ship icon', () => {
    const next = { Name: 'S', Icon: 'https://github/i.png' };
    expect(diffShip({ Name: 'S', Icon: 'https://infinitearenas.com/i.png' }, next)).toEqual([]);
    expect(fields(diffShip({ Name: 'S', Icon: null }, next))).toEqual(['Icon']);
  });

  test('diffs upgrade sides by field and keeps side and device images', () => {
    const liveUpgrade = {
      Limited: 0,
      Standard: true,
      Extended: true,
      Epic: true,
      Standarized: false,
      StandardLoadoutOnly: false,
      Sides: [
        {
          title: 'U',
          type: 'Talent',
          slots: ['Talent'],
          ability: 'old',
          image: 'https://infinitearenas.com/u.png',
          device: { name: 'D', image: 'https://infinitearenas.com/d.png' },
        },
      ],
    };
    const next = normalizeUpgrade({
      ...upgrade,
      sides: [
        {
          ...upgrade.sides[0],
          ability: 'new',
          image: 'https://github/u.png',
          device: { name: 'D', image: 'https://github/d.png' },
        },
      ],
    });
    const changes = diffUpgrade(liveUpgrade, next);
    expect(fields(changes)).toEqual(['Sides[0].ability']);
    expect(changes[0].kind).toBe('real');
  });

  test('reports an added upgrade side', () => {
    const next = normalizeUpgrade({ ...upgrade, sides: [upgrade.sides[0], upgrade.sides[0]] });
    const liveUpgrade = { ...next, Sides: [next.Sides[0]] };
    expect(fields(diffUpgrade(liveUpgrade, next))).toEqual(['Sides[1]']);
  });
});

describe('reconcile', () => {
  const change = (field: string) => ({ field, live: 1, next: 2, kind: 'real' as const });

  test('applies upstream changes when live still has the previous release value', () => {
    const result = reconcile([change('Cost')], [change('Cost')], []);
    expect(result.apply.map(item => item.field)).toEqual(['Cost']);
  });

  test('keeps hand edits when upstream did not change the field', () => {
    const result = reconcile([change('Cost')], [], [change('Cost')]);
    expect(result.apply).toEqual([]);
    expect(result.keptLocal.map(item => item.field)).toEqual(['Cost']);
  });

  test('reports a conflict when both sides changed the field', () => {
    const result = reconcile([change('Cost')], [change('Cost')], [change('Cost')]);
    expect(result.apply).toEqual([]);
    expect(result.conflicts.map(item => item.field)).toEqual(['Cost']);
  });
});

describe('buildUpdate and readField', () => {
  const row = { Cost: 1, Sides: [{ title: 'A', ability: 'old', alt: ['x'] }] };

  test('sets plain columns', () => {
    expect(buildUpdate(row, [{ field: 'Cost', live: 1, next: 2, kind: 'real' }])).toEqual({ Cost: 2 });
  });

  test('rewrites sides, keeps other values and leaves the row untouched', () => {
    const update = buildUpdate(row, [
      { field: 'Sides[0].ability', live: 'old', next: 'new', kind: 'real' },
      { field: 'Sides[0].alt', live: ['x'], next: null, kind: 'real' },
      { field: 'Sides[1]', live: undefined, next: { title: 'B' }, kind: 'real' },
    ]);
    expect(update).toEqual({ Sides: [{ title: 'A', ability: 'new' }, { title: 'B' }] });
    expect(row.Sides[0].ability).toBe('old');
  });

  test('reads plain and side fields', () => {
    expect(readField(row, 'Cost')).toBe(1);
    expect(readField(row, 'Sides[0].ability')).toBe('old');
    expect(readField(row, 'Sides[0]')).toEqual(row.Sides[0]);
    expect(readField(row, 'Sides[3].ability')).toBeUndefined();
  });
});
