'use client';

import { XCircleIcon } from '@heroicons/react/24/outline';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@web/components/ui/alert-dialog';
import { Badge } from '@web/components/ui/badge';
import { Button } from '@web/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@web/components/ui/card';
import { Checkbox } from '@web/components/ui/checkbox';
import { Input } from '@web/components/ui/input';
import { Label } from '@web/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@web/components/ui/select';
import { Switch } from '@web/components/ui/switch';
import { Textarea } from '@web/components/ui/textarea';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAdminTrpc } from '../../_trpc';

const SLOT_KEYS = [
    'astromech', 'cannon', 'cargo', 'command', 'configuration', 'crew',
    'device', 'forcepower', 'gunner', 'hardpoint', 'hyperdrive', 'illicit',
    'missile', 'modification', 'sensor', 'tacticalrelay', 'talent', 'team',
    'tech', 'title', 'torpedo', 'turret',
];

const SLOT_TYPES = [
    'Astromech', 'Cannon', 'Cargo', 'Command', 'Configuration', 'Crew', 'Device',
    'Force Power', 'Gunner', 'Hardpoint', 'Hyperdrive', 'Illicit', 'Missile',
    'Modification', 'Sensor', 'Tactical Relay', 'Talent', 'Team', 'Tech',
    'Title', 'Torpedo', 'Turret',
];

const ARC_TYPES = [
    'Front Arc', 'Rear Arc', 'Left Arc', 'Right Arc',
    'Full Front Arc', 'Full Rear Arc', 'Bullseye Arc', 'Single Turret Arc', 'Double Turret Arc',
];

const FORCE_SIDES = ['light', 'dark'] as const;

const ACTION_TYPES = [
    'Barrel Roll', 'Boost', 'Calculate', 'Cloak', 'Coordinate', 'Evade',
    'Focus', 'Jam', 'Lock', 'Reload', 'Reinforce', 'Rotate Arc', 'SLAM',
] as const;

const DIFFICULTIES = ['White', 'Red', 'Purple'] as const;

const STAT_TYPES = ['attack', 'agility', 'hull', 'shields', 'energy', 'charges'] as const;

const DEVICE_TYPES = ['Bomb', 'Mine', 'Obstacle', 'Remote'] as const;

const COST_TYPES = ['fixed', 'agility', 'initiative', 'size', 'faction'] as const;
type CostType = typeof COST_TYPES[number];

const COST_TYPE_LABELS: Record<CostType, string> = {
    fixed: 'Fixed Value',
    agility: 'Variable (Agility)',
    initiative: 'Variable (Initiative)',
    size: 'Variable (Size)',
    faction: 'Variable (Faction)',
};

interface CostState {
    type: CostType;
    fixedValue: string;
    agilityValues: Record<string, string>; // "0"-"3"
    initiativeValues: Record<string, string>; // "0"-"6"
    sizeValues: { Small: string; Medium: string; Large: string; Huge: string };
    factionValues: Record<string, string>;
}

function emptyCostState(): CostState {
    return {
        type: 'fixed',
        fixedValue: '0',
        agilityValues: { '0': '0', '1': '0', '2': '0', '3': '0' },
        initiativeValues: { '0': '0', '1': '0', '2': '0', '3': '0', '4': '0', '5': '0', '6': '0' },
        sizeValues: { Small: '0', Medium: '0', Large: '0', Huge: '0' },
        factionValues: Object.fromEntries(FACTION_KEYS.map(f => [f, '0'])),
    };
}

function costStateFromData(data: any): CostState {
    const state = emptyCostState();
    if (!data) return state;
    if ('variable' in data) {
        switch (data.variable) {
            case 'agility':
                state.type = 'agility';
                if (data.values) Object.entries(data.values).forEach(([k, v]) => { state.agilityValues[k] = String(v); });
                break;
            case 'initiative':
                state.type = 'initiative';
                if (data.values) Object.entries(data.values).forEach(([k, v]) => { state.initiativeValues[k] = String(v); });
                break;
            case 'size':
                state.type = 'size';
                if (data.values) {
                    if (data.values.Small != null) state.sizeValues.Small = String(data.values.Small);
                    if (data.values.Medium != null) state.sizeValues.Medium = String(data.values.Medium);
                    if (data.values.Large != null) state.sizeValues.Large = String(data.values.Large);
                    if (data.values.Huge != null) state.sizeValues.Huge = String(data.values.Huge);
                }
                break;
            case 'faction':
                state.type = 'faction';
                if (data.values) Object.entries(data.values).forEach(([k, v]) => { state.factionValues[k] = String(v); });
                break;
        }
    } else if ('value' in data) {
        state.type = 'fixed';
        state.fixedValue = String(data.value);
    }
    return state;
}

function costStateToData(state: CostState): any {
    switch (state.type) {
        case 'fixed':
            return { value: parseInt(state.fixedValue) || 0 };
        case 'agility':
            return { variable: 'agility', values: Object.fromEntries(Object.entries(state.agilityValues).map(([k, v]) => [parseInt(k), parseInt(v) || 0])) };
        case 'initiative':
            return { variable: 'initiative', values: Object.fromEntries(Object.entries(state.initiativeValues).map(([k, v]) => [parseInt(k), parseInt(v) || 0])) };
        case 'size': {
            const values: any = { Small: parseInt(state.sizeValues.Small) || 0, Medium: parseInt(state.sizeValues.Medium) || 0, Large: parseInt(state.sizeValues.Large) || 0 };
            const huge = parseInt(state.sizeValues.Huge);
            if (huge) values.Huge = huge;
            return { variable: 'size', values };
        }
        case 'faction':
            return { variable: 'faction', values: Object.fromEntries(Object.entries(state.factionValues).map(([k, v]) => [k, parseInt(v) || 0])) };
    }
}

const BASE_SIZES = ['Small', 'Medium', 'Large', 'Huge'] as const;

const FACTION_KEYS = [
    'rebelalliance', 'scumandvillainy', 'galacticempire', 'resistance',
    'firstorder', 'galacticrepublic', 'separatistalliance',
] as const;

const FACTION_KEY_LABELS: Record<string, string> = {
    rebelalliance: 'Rebel Alliance',
    scumandvillainy: 'Scum and Villainy',
    galacticempire: 'Galactic Empire',
    resistance: 'Resistance',
    firstorder: 'First Order',
    galacticrepublic: 'Galactic Republic',
    separatistalliance: 'Separatist Alliance',
};

const RESTRICTION_FIELD_TYPES = [
    'factions', 'baseSizes', 'chassis', 'arcs', 'action', 'sides', 'equipped',
    'keywords', 'character', 'solitary', 'non-limited', 'initiative', 'stat', 'shipAbility',
] as const;

type RestrictionFieldType = typeof RESTRICTION_FIELD_TYPES[number];

const RESTRICTION_FIELD_LABELS: Record<RestrictionFieldType, string> = {
    factions: 'Factions',
    baseSizes: 'Base Sizes',
    chassis: 'Chassis',
    arcs: 'Arcs',
    action: 'Action',
    sides: 'Force Sides',
    equipped: 'Equipped Slots',
    keywords: 'Keywords',
    character: 'Character',
    solitary: 'Solitary',
    'non-limited': 'Non-Limited',
    initiative: 'Initiative',
    stat: 'Stat',
    shipAbility: 'Ship Ability',
};

interface RestrictionGroupState {
    enabledFields: RestrictionFieldType[];
    factions: string[];
    baseSizes: string[];
    chassis: string[];
    arcs: string[];
    hasAction: boolean;
    actionType: string;
    actionDifficulty: string;
    sides: string[];
    equipped: string[];
    keywords: string[];
    character: string[];
    solitary: boolean;
    nonLimited: boolean;
    hasInitiative: boolean;
    initiativeMin: string;
    initiativeMax: string;
    hasStat: boolean;
    statType: string;
    statValue: string;
    shipAbility: string[];
}

function emptyRestrictionGroup(): RestrictionGroupState {
    return {
        enabledFields: [],
        factions: [], baseSizes: [], chassis: [], arcs: [],
        hasAction: false, actionType: 'Focus', actionDifficulty: '',
        sides: [], equipped: [], keywords: [], character: [],
        solitary: false, nonLimited: false,
        hasInitiative: false, initiativeMin: '', initiativeMax: '',
        hasStat: false, statType: 'attack', statValue: '1',
        shipAbility: [],
    };
}

function restrictionGroupFromData(r: any): RestrictionGroupState {
    const enabled: RestrictionFieldType[] = [];
    if (Array.isArray(r.factions) && r.factions.length > 0) enabled.push('factions');
    if (Array.isArray(r.baseSizes) && r.baseSizes.length > 0) enabled.push('baseSizes');
    if (Array.isArray(r.chassis) && r.chassis.length > 0) enabled.push('chassis');
    if (Array.isArray(r.arcs) && r.arcs.length > 0) enabled.push('arcs');
    if (r.action) enabled.push('action');
    if (Array.isArray(r.sides) && r.sides.length > 0) enabled.push('sides');
    if (Array.isArray(r.equipped) && r.equipped.length > 0) enabled.push('equipped');
    if (Array.isArray(r.keywords) && r.keywords.length > 0) enabled.push('keywords');
    if (Array.isArray(r.character) && r.character.length > 0) enabled.push('character');
    if (r.solitary) enabled.push('solitary');
    if (r['non-limited']) enabled.push('non-limited');
    if (r.initiative) enabled.push('initiative');
    if (r.stat) enabled.push('stat');
    if (Array.isArray(r.shipAbility) && r.shipAbility.length > 0) enabled.push('shipAbility');

    return {
        enabledFields: enabled,
        factions: Array.isArray(r.factions) ? r.factions : [],
        baseSizes: Array.isArray(r.baseSizes) ? r.baseSizes : [],
        chassis: Array.isArray(r.chassis) ? r.chassis : [],
        arcs: Array.isArray(r.arcs) ? r.arcs : [],
        hasAction: !!r.action,
        actionType: r.action?.type ?? 'Focus',
        actionDifficulty: r.action?.difficulty ?? '',
        sides: Array.isArray(r.sides) ? r.sides : [],
        equipped: Array.isArray(r.equipped) ? r.equipped : [],
        keywords: Array.isArray(r.keywords) ? r.keywords : [],
        character: Array.isArray(r.character) ? r.character : [],
        solitary: !!r.solitary,
        nonLimited: !!r['non-limited'],
        hasInitiative: !!r.initiative,
        initiativeMin: r.initiative?.min?.toString() ?? '',
        initiativeMax: r.initiative?.max?.toString() ?? '',
        hasStat: !!r.stat,
        statType: r.stat?.type ?? 'attack',
        statValue: r.stat?.value?.toString() ?? '1',
        shipAbility: Array.isArray(r.shipAbility) ? r.shipAbility : [],
    };
}

function restrictionGroupToData(g: RestrictionGroupState): any {
    const result: any = {};
    if (g.factions.length > 0) result.factions = g.factions;
    if (g.baseSizes.length > 0) result.baseSizes = g.baseSizes;
    if (g.chassis.length > 0) result.chassis = g.chassis;
    if (g.arcs.length > 0) result.arcs = g.arcs;
    if (g.hasAction) {
        const action: any = { type: g.actionType };
        if (g.actionDifficulty) action.difficulty = g.actionDifficulty;
        result.action = action;
    }
    if (g.sides.length > 0) result.sides = g.sides;
    if (g.equipped.length > 0) result.equipped = g.equipped;
    if (g.keywords.length > 0) result.keywords = g.keywords;
    if (g.character.length > 0) result.character = g.character;
    if (g.solitary) result.solitary = true;
    if (g.nonLimited) result['non-limited'] = true;
    if (g.hasInitiative) {
        const init: any = {};
        if (g.initiativeMin) init.min = parseInt(g.initiativeMin);
        if (g.initiativeMax) init.max = parseInt(g.initiativeMax);
        result.initiative = init;
    }
    if (g.hasStat) result.stat = { type: g.statType, value: parseInt(g.statValue) };
    if (g.shipAbility.length > 0) result.shipAbility = g.shipAbility;
    // Only return if there's at least one field set
    return Object.keys(result).length > 0 ? result : null;
}

const GRANT_KINDS = ['slot', 'stat', 'action', 'arc'] as const;

interface ActionState {
    type: string;
    difficulty: string;
    hasLinked: boolean;
    linkedType: string;
    linkedDifficulty: string;
}

interface GrantState {
    kind: 'slot' | 'stat' | 'action' | 'arc';
    value: string;
    slot: string;
    stat: string;
    arc: string;
    actionType: string;
    actionDifficulty: string;
    actionHasLinked: boolean;
    actionLinkedType: string;
    actionLinkedDifficulty: string;
}

interface DeviceState {
    name: string;
    type: string;
    effect: string;
    image: string;
    initiative: string;
    hasCharges: boolean;
    chargesValue: string;
    chargesRecovers: string;
    hasAttack: boolean;
    attackArc: string;
    attackValue: string;
    attackMinrange: string;
    attackMaxrange: string;
    attackOrdnance: boolean;
}

function emptyGrant(): GrantState {
    return {
        kind: 'slot', value: '1', slot: 'Talent', stat: 'hull', arc: 'Front Arc',
        actionType: 'Focus', actionDifficulty: 'White', actionHasLinked: false,
        actionLinkedType: 'Focus', actionLinkedDifficulty: 'White',
    };
}

function emptyDevice(): DeviceState {
    return {
        name: '', type: 'Bomb', effect: '', image: '', initiative: '',
        hasCharges: false, chargesValue: '1', chargesRecovers: '0',
        hasAttack: false, attackArc: 'Front Arc', attackValue: '3',
        attackMinrange: '1', attackMaxrange: '3', attackOrdnance: false,
    };
}

function grantFromData(g: any): GrantState {
    const state = emptyGrant();
    state.value = g.value?.toString() ?? '1';
    if (g.slot) { state.kind = 'slot'; state.slot = g.slot; }
    else if (g.stat) { state.kind = 'stat'; state.stat = g.stat; if (g.arc) state.arc = g.arc; }
    else if (g.action) {
        state.kind = 'action';
        state.actionType = g.action.type ?? 'Focus';
        state.actionDifficulty = g.action.difficulty ?? 'White';
        state.actionHasLinked = !!g.action.linked;
        state.actionLinkedType = g.action.linked?.type ?? 'Focus';
        state.actionLinkedDifficulty = g.action.linked?.difficulty ?? 'White';
    }
    else if (g.arc) { state.kind = 'arc'; state.arc = g.arc; }
    return state;
}

function grantToData(g: GrantState): any {
    const result: any = { value: parseInt(g.value) };
    if (g.kind === 'slot') result.slot = g.slot;
    else if (g.kind === 'stat') { result.stat = g.stat; if (g.stat === 'attack' && g.arc) result.arc = g.arc; }
    else if (g.kind === 'action') {
        const action: any = { type: g.actionType, difficulty: g.actionDifficulty };
        if (g.actionHasLinked) action.linked = { type: g.actionLinkedType, difficulty: g.actionLinkedDifficulty };
        result.action = action;
    }
    else if (g.kind === 'arc') result.arc = g.arc;
    return result;
}

function deviceFromData(d: any): DeviceState {
    return {
        name: d.name ?? '', type: d.type ?? 'Bomb', effect: d.effect ?? '',
        image: d.image ?? '', initiative: d.initiative?.toString() ?? '',
        hasCharges: !!d.charges, chargesValue: d.charges?.value?.toString() ?? '1',
        chargesRecovers: d.charges?.recovers?.toString() ?? '0',
        hasAttack: !!d.attack, attackArc: d.attack?.arc ?? 'Front Arc',
        attackValue: d.attack?.value?.toString() ?? '3',
        attackMinrange: d.attack?.minrange?.toString() ?? '1',
        attackMaxrange: d.attack?.maxrange?.toString() ?? '3',
        attackOrdnance: d.attack?.ordnance ?? false,
    };
}

function deviceToData(d: DeviceState): any {
    const result: any = { name: d.name, type: d.type, effect: d.effect };
    if (d.image) result.image = d.image;
    if (d.initiative) result.initiative = parseInt(d.initiative);
    if (d.hasCharges) result.charges = { value: parseInt(d.chargesValue), recovers: parseInt(d.chargesRecovers) };
    if (d.hasAttack) result.attack = {
        arc: d.attackArc, value: parseInt(d.attackValue),
        minrange: parseInt(d.attackMinrange), maxrange: parseInt(d.attackMaxrange),
        ordnance: d.attackOrdnance,
    };
    return result;
}

interface SideState {
    title: string;
    type: string;
    ability: string;
    text: string;
    slots: string[];
    ffg: string;
    image: string;
    artwork: string;
    hasCharges: boolean;
    chargesValue: string;
    chargesRecovers: string;
    hasForce: boolean;
    forceValue: string;
    forceRecovers: boolean;
    forceSides: string[];
    hasAttack: boolean;
    attackArc: string;
    attackValue: string;
    attackMinrange: string;
    attackMaxrange: string;
    attackOrdnance: boolean;
    conditions: string[];
    actions: ActionState[];
    grants: GrantState[];
    hasDevice: boolean;
    device: DeviceState;
}

function emptySide(): SideState {
    return {
        title: '', type: 'Talent', ability: '', text: '',
        slots: ['Talent'], ffg: '', image: '', artwork: '',
        hasCharges: false, chargesValue: '1', chargesRecovers: '0',
        hasForce: false, forceValue: '1', forceRecovers: true, forceSides: ['light'],
        hasAttack: false, attackArc: 'Front Arc', attackValue: '3', attackMinrange: '1', attackMaxrange: '3', attackOrdnance: false,
        conditions: [],
        actions: [], grants: [], hasDevice: false, device: emptyDevice(),
    };
}

function sideFromData(s: any): SideState {
    return {
        title: s.title ?? '',
        type: s.type ?? 'Talent',
        ability: s.ability ?? '',
        text: s.text ?? '',
        slots: Array.isArray(s.slots) ? s.slots : [],
        ffg: s.ffg?.toString() ?? '',
        image: s.image ?? '',
        artwork: s.artwork ?? '',
        hasCharges: !!s.charges,
        chargesValue: s.charges?.value?.toString() ?? '1',
        chargesRecovers: s.charges?.recovers?.toString() ?? '0',
        hasForce: !!s.force,
        forceValue: s.force?.value?.toString() ?? '1',
        forceRecovers: (s.force?.recovers ?? 1) > 0,
        forceSides: Array.isArray(s.force?.side) ? s.force.side : ['light'],
        hasAttack: !!s.attack,
        attackArc: s.attack?.arc ?? 'Front Arc',
        attackValue: s.attack?.value?.toString() ?? '3',
        attackMinrange: s.attack?.minrange?.toString() ?? '1',
        attackMaxrange: s.attack?.maxrange?.toString() ?? '3',
        attackOrdnance: s.attack?.ordnance ?? false,
        conditions: Array.isArray(s.conditions) ? s.conditions : [],
        actions: Array.isArray(s.actions) ? s.actions.map((a: any) => ({
            type: a.type ?? 'Focus', difficulty: a.difficulty ?? 'White',
            hasLinked: !!a.linked, linkedType: a.linked?.type ?? 'Focus',
            linkedDifficulty: a.linked?.difficulty ?? 'White',
        })) : [],
        grants: Array.isArray(s.grants) ? s.grants.map(grantFromData) : [],
        hasDevice: !!s.device,
        device: s.device ? deviceFromData(s.device) : emptyDevice(),
    };
}

function sideToData(s: SideState): any {
    const result: any = {
        title: s.title,
        type: s.type,
        slots: s.slots,
    };
    if (s.ability) result.ability = s.ability;
    if (s.text) result.text = s.text;
    if (s.ffg) result.ffg = parseInt(s.ffg);
    if (s.image) result.image = s.image;
    if (s.artwork) result.artwork = s.artwork;
    if (s.hasCharges) result.charges = { value: parseInt(s.chargesValue), recovers: parseInt(s.chargesRecovers) };
    if (s.hasForce) result.force = { value: parseInt(s.forceValue), recovers: s.forceRecovers ? 1 : 0, side: s.forceSides };
    if (s.hasAttack) result.attack = {
        arc: s.attackArc, value: parseInt(s.attackValue),
        minrange: parseInt(s.attackMinrange), maxrange: parseInt(s.attackMaxrange),
        ordnance: s.attackOrdnance,
    };
    if (s.conditions.length > 0) result.conditions = s.conditions;
    if (s.actions.length > 0) {
        result.actions = s.actions.map(a => {
            const action: any = { type: a.type, difficulty: a.difficulty };
            if (a.hasLinked) action.linked = { type: a.linkedType, difficulty: a.linkedDifficulty };
            return action;
        });
    }
    if (s.grants.length > 0) result.grants = s.grants.map(grantToData);
    if (s.hasDevice && s.device.name) result.device = deviceToData(s.device);
    return result;
}

export default function UpgradeEditPage() {
    const params = useParams()!;
    const router = useRouter();
    const trpc = useAdminTrpc();
    const upgradeId = params.id as string;
    const isNew = upgradeId === 'new';

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    // Form state
    const [ruleset, setRuleset] = useState<'xwa' | 'legacy'>('xwa');
    const [slot, setSlot] = useState('talent');
    const [xws, setXws] = useState('');
    const [limited, setLimited] = useState('0');
    const [cost, setCost] = useState<CostState>(emptyCostState());
    const [sides, setSides] = useState<[SideState, SideState | null]>([emptySide(), null]);
    const [restrictions, setRestrictions] = useState<RestrictionGroupState[]>([]);
    const [standard, setStandard] = useState(true);
    const [extended, setExtended] = useState(true);
    const [epic, setEpic] = useState(true);
    const [wildspace, setWildspace] = useState(false);
    const [standarized, setStandarized] = useState(false);
    const [keywords, setKeywords] = useState<string[]>([]);
    const [keywordInput, setKeywordInput] = useState('');
    const [standardLoadoutOnly, setStandardLoadoutOnly] = useState(false);
    const [availableConditions, setAvailableConditions] = useState<{ Id: string; Xws: string; Name: string }[]>([]);

    const setRestrictionsData = (data: any) => {
        if (Array.isArray(data) && data.length > 0) {
            setRestrictions(data.map(restrictionGroupFromData));
        } else {
            setRestrictions([]);
        }
    };

    const updateRestrictionGroup = (index: number, updates: Partial<RestrictionGroupState>) => {
        setRestrictions(prev => prev.map((g, i) => i === index ? { ...g, ...updates } : g));
    };

    const updateSide = (index: 0 | 1, updates: Partial<SideState>) => {
        setSides(prev => {
            const copy: [SideState, SideState | null] = [{ ...prev[0] }, prev[1] ? { ...prev[1] } : null];
            if (copy[index]) {
                copy[index] = { ...copy[index]!, ...updates };
            }
            return copy;
        });
    };

    useEffect(() => {
        if (isNew) return;
        async function load() {
            try {
                const result = await trpc.admin.upgrades.get.query({ id: upgradeId });
                if (!result) {
                    router.push('/admin/upgrades');
                    return;
                }
                setRuleset(result.Ruleset as 'xwa' | 'legacy');
                setSlot(result.Slot);
                setXws(result.Xws);
                setLimited(result.Limited.toString());
                setCost(costStateFromData(result.Cost));
                const sidesArr = result.Sides as any[];
                setSides([
                    sideFromData(sidesArr[0] ?? {}),
                    sidesArr[1] ? sideFromData(sidesArr[1]) : null,
                ]);
                setRestrictionsData(result.Restrictions);
                setStandard(result.Standard);
                setExtended(result.Extended);
                setEpic(result.Epic);
                setWildspace(result.Wildspace);
                setStandarized(result.Standarized);
                setKeywords(Array.isArray(result.Keywords) ? result.Keywords : []);
                setStandardLoadoutOnly(result.StandardLoadoutOnly);

                // Load conditions for selector
                const conds = await trpc.admin.conditions.list.query({ ruleset: result.Ruleset as 'xwa' | 'legacy' });
                setAvailableConditions(conds);
            } catch (err: any) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [upgradeId]);

    const handleSave = async () => {
        if (!xws) {
            toast.error('XWS is required');
            return;
        }
        setSaving(true);
        try {
            const sidesData = [sideToData(sides[0])];
            if (sides[1]) sidesData.push(sideToData(sides[1]));

            const data: any = {
                slot,
                xws,
                limited: parseInt(limited),
                cost: costStateToData(cost),
                sides: sidesData,
                standard,
                extended,
                epic,
                wildspace,
                standarized,
                standardLoadoutOnly,
                keywords: keywords.length > 0 ? keywords : undefined,
            };

            const restrictionsData = restrictions.map(restrictionGroupToData).filter(Boolean);
            if (restrictionsData.length > 0) data.restrictions = restrictionsData;

            if (isNew) {
                data.ruleset = ruleset;
                const result = await trpc.admin.upgrades.create.mutate(data);
                toast.success('Upgrade created');
                router.push(`/admin/upgrades/${result.id}`);
            } else {
                data.id = upgradeId;
                await trpc.admin.upgrades.update.mutate(data);
                toast.success('Upgrade updated');
            }
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        try {
            await trpc.admin.upgrades.delete.mutate({ id: upgradeId });
            toast.success('Upgrade deleted');
            router.push('/admin/upgrades');
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    if (loading) return <div className="text-muted-foreground">Loading...</div>;

    const renderSideEditor = (side: SideState, index: 0 | 1) => (
        <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Side {index + 1}</CardTitle>
                {index === 1 && (
                    <Button variant="ghost" size="sm" onClick={() => setSides([sides[0], null])}>
                        Remove Side 2
                    </Button>
                )}
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Title</Label>
                        <Input value={side.title} onChange={(e) => updateSide(index, { title: e.target.value })} />
                    </div>
                    <div>
                        <Label>Type</Label>
                        <Select value={side.type} onValueChange={(v) => updateSide(index, { type: v })}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                                {SLOT_TYPES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Label>Ability</Label>
                    <Textarea value={side.ability} onChange={(e) => updateSide(index, { ability: e.target.value })} rows={3} />
                </div>

                <div>
                    <Label>Flavor Text</Label>
                    <Textarea value={side.text} onChange={(e) => updateSide(index, { text: e.target.value })} rows={2} />
                </div>

                <div>
                    <Label>Slots</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {side.slots.map((s, i) => (
                            <Badge key={`${s}-${i}`} variant="secondary" className="gap-1 h-7 text-sm">
                                {s}
                                <button
                                    type="button"
                                    onClick={() => updateSide(index, { slots: side.slots.filter((_, idx) => idx !== i) })}
                                    className="ml-0.5 hover:text-destructive"
                                >
                                    <XCircleIcon className="w-3.5 h-3.5" />
                                </button>
                            </Badge>
                        ))}
                        <Select onValueChange={(v) => updateSide(index, { slots: [...side.slots, v] })}>
                            <SelectTrigger className="w-[160px] h-7">
                                <SelectValue placeholder="Add slot..." />
                            </SelectTrigger>
                            <SelectContent>
                                {SLOT_TYPES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Label>FFG ID</Label>
                        <Input value={side.ffg} onChange={(e) => updateSide(index, { ffg: e.target.value })} type="number" />
                    </div>
                    <div>
                        <Label>Image URL</Label>
                        <Input value={side.image} onChange={(e) => updateSide(index, { image: e.target.value })} />
                    </div>
                    <div>
                        <Label>Artwork URL</Label>
                        <Input value={side.artwork} onChange={(e) => updateSide(index, { artwork: e.target.value })} />
                    </div>
                </div>

                {/* Charges */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Switch checked={side.hasCharges} onCheckedChange={(v) => updateSide(index, { hasCharges: v })} />
                        <Label>Charges</Label>
                    </div>
                    {side.hasCharges && (
                        <div className="ml-6 flex gap-4 border rounded-md p-3">
                            <div>
                                <Label>Value</Label>
                                <Input value={side.chargesValue} onChange={(e) => updateSide(index, { chargesValue: e.target.value })} type="number" min="0" className="w-[80px]" />
                            </div>
                            <div>
                                <Label>Recovers</Label>
                                <Input value={side.chargesRecovers} onChange={(e) => updateSide(index, { chargesRecovers: e.target.value })} type="number" min="0" className="w-[80px]" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Force */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Switch checked={side.hasForce} onCheckedChange={(v) => updateSide(index, { hasForce: v })} />
                        <Label>Force</Label>
                    </div>
                    {side.hasForce && (
                        <div className="ml-6 space-y-3 border rounded-md p-3">
                            <div className="flex items-center gap-4">
                                <div>
                                    <Label>Value</Label>
                                    <Input value={side.forceValue} onChange={(e) => updateSide(index, { forceValue: e.target.value })} type="number" min="1" className="w-[80px]" />
                                </div>
                                <div className="flex items-center gap-2 pt-5">
                                    <Checkbox checked={side.forceRecovers} onCheckedChange={(v) => updateSide(index, { forceRecovers: !!v })} />
                                    <Label>Recovers</Label>
                                </div>
                            </div>
                            <div>
                                <Label>Side(s)</Label>
                                <div className="flex gap-4 mt-1">
                                    {FORCE_SIDES.map(fs => (
                                        <label key={fs} className="flex items-center gap-2 text-sm">
                                            <Checkbox
                                                checked={side.forceSides.includes(fs)}
                                                onCheckedChange={(checked) => {
                                                    const newSides = checked
                                                        ? [...side.forceSides, fs]
                                                        : side.forceSides.length > 1 ? side.forceSides.filter(x => x !== fs) : side.forceSides;
                                                    updateSide(index, { forceSides: newSides });
                                                }}
                                            />
                                            {fs.charAt(0).toUpperCase() + fs.slice(1)}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Attack */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Switch checked={side.hasAttack} onCheckedChange={(v) => updateSide(index, { hasAttack: v })} />
                        <Label>Attack</Label>
                    </div>
                    {side.hasAttack && (
                        <div className="ml-6 space-y-3 border rounded-md p-3">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Arc</Label>
                                    <Select value={side.attackArc} onValueChange={(v) => updateSide(index, { attackArc: v })}>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            {ARC_TYPES.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Value</Label>
                                    <Input value={side.attackValue} onChange={(e) => updateSide(index, { attackValue: e.target.value })} type="number" min="0" className="w-[80px]" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <Label>Min Range</Label>
                                    <Input value={side.attackMinrange} onChange={(e) => updateSide(index, { attackMinrange: e.target.value })} type="number" min="0" max="5" className="w-[80px]" />
                                </div>
                                <div>
                                    <Label>Max Range</Label>
                                    <Input value={side.attackMaxrange} onChange={(e) => updateSide(index, { attackMaxrange: e.target.value })} type="number" min="0" max="5" className="w-[80px]" />
                                </div>
                                <div className="flex items-center gap-2 pt-5">
                                    <Checkbox checked={side.attackOrdnance} onCheckedChange={(v) => updateSide(index, { attackOrdnance: !!v })} />
                                    <Label>Ordnance</Label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Conditions */}
                <div>
                    <Label>Conditions</Label>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {side.conditions.map((cond, i) => {
                            const condName = availableConditions.find(c => c.Xws === cond)?.Name ?? cond;
                            return (
                                <Badge key={`${cond}-${i}`} variant="secondary" className="gap-1 h-7 text-sm">
                                    {condName}
                                    <button
                                        type="button"
                                        onClick={() => updateSide(index, { conditions: side.conditions.filter((_, idx) => idx !== i) })}
                                        className="ml-0.5 hover:text-destructive"
                                    >
                                        <XCircleIcon className="w-3.5 h-3.5" />
                                    </button>
                                </Badge>
                            );
                        })}
                        {availableConditions.length > 0 && (
                            <Select onValueChange={(v) => { if (!side.conditions.includes(v)) updateSide(index, { conditions: [...side.conditions, v] }); }}>
                                <SelectTrigger className="w-[200px] h-7">
                                    <SelectValue placeholder="Add condition..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {availableConditions
                                        .filter(c => !side.conditions.includes(c.Xws))
                                        .map(c => <SelectItem key={c.Id} value={c.Xws}>{c.Name}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div>
                    <Label className="text-base font-semibold">Actions</Label>
                    <div className="mt-2 space-y-2 border rounded-md p-3">
                        {side.actions.map((action, i) => (
                            <div key={i} className="flex flex-wrap items-end gap-2 pb-2 border-b last:border-b-0 last:pb-0">
                                <div>
                                    <Label className="text-xs">Difficulty</Label>
                                    <Select value={action.difficulty} onValueChange={(v) => {
                                        const updated = [...side.actions];
                                        updated[i] = { ...updated[i], difficulty: v };
                                        updateSide(index, { actions: updated });
                                    }}>
                                        <SelectTrigger className="w-[100px] h-8"><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            {DIFFICULTIES.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="text-xs">Type</Label>
                                    <Select value={action.type} onValueChange={(v) => {
                                        const updated = [...side.actions];
                                        updated[i] = { ...updated[i], type: v };
                                        updateSide(index, { actions: updated });
                                    }}>
                                        <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            {ACTION_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center gap-2 pb-1">
                                    <Checkbox checked={action.hasLinked} onCheckedChange={(v) => {
                                        const updated = [...side.actions];
                                        updated[i] = { ...updated[i], hasLinked: !!v };
                                        updateSide(index, { actions: updated });
                                    }} />
                                    <Label className="text-xs">Linked</Label>
                                </div>
                                {action.hasLinked && (
                                    <>
                                        <div>
                                            <Label className="text-xs">Link Diff.</Label>
                                            <Select value={action.linkedDifficulty} onValueChange={(v) => {
                                                const updated = [...side.actions];
                                                updated[i] = { ...updated[i], linkedDifficulty: v };
                                                updateSide(index, { actions: updated });
                                            }}>
                                                <SelectTrigger className="w-[100px] h-8"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {DIFFICULTIES.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label className="text-xs">Link Type</Label>
                                            <Select value={action.linkedType} onValueChange={(v) => {
                                                const updated = [...side.actions];
                                                updated[i] = { ...updated[i], linkedType: v };
                                                updateSide(index, { actions: updated });
                                            }}>
                                                <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {ACTION_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </>
                                )}
                                <button type="button" onClick={() => updateSide(index, { actions: side.actions.filter((_, idx) => idx !== i) })} className="pb-1 hover:text-destructive">
                                    <XCircleIcon className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                        <Button type="button" variant="outline" size="sm" onClick={() => updateSide(index, { actions: [...side.actions, { type: 'Focus', difficulty: 'White', hasLinked: false, linkedType: 'Focus', linkedDifficulty: 'White' }] })}>
                            Add Action
                        </Button>
                    </div>
                </div>

                {/* Grants */}
                <div>
                    <Label className="text-base font-semibold">Grants</Label>
                    <div className="mt-2 space-y-2 border rounded-md p-3">
                        {side.grants.map((grant, i) => (
                            <div key={i} className="flex flex-wrap items-end gap-2 pb-2 border-b last:border-b-0 last:pb-0">
                                <div>
                                    <Label className="text-xs">Kind</Label>
                                    <Select value={grant.kind} onValueChange={(v) => {
                                        const updated = [...side.grants];
                                        updated[i] = { ...updated[i], kind: v as GrantState['kind'] };
                                        updateSide(index, { grants: updated });
                                    }}>
                                        <SelectTrigger className="w-[100px] h-8"><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            {GRANT_KINDS.map(k => <SelectItem key={k} value={k}>{k}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="text-xs">Value</Label>
                                    <Input value={grant.value} onChange={(e) => {
                                        const updated = [...side.grants];
                                        updated[i] = { ...updated[i], value: e.target.value };
                                        updateSide(index, { grants: updated });
                                    }} type="number" className="w-[70px] h-8" />
                                </div>
                                {grant.kind === 'slot' && (
                                    <div>
                                        <Label className="text-xs">Slot</Label>
                                        <Select value={grant.slot} onValueChange={(v) => {
                                            const updated = [...side.grants];
                                            updated[i] = { ...updated[i], slot: v };
                                            updateSide(index, { grants: updated });
                                        }}>
                                            <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                {SLOT_TYPES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                                {grant.kind === 'stat' && (
                                    <>
                                        <div>
                                            <Label className="text-xs">Stat</Label>
                                            <Select value={grant.stat} onValueChange={(v) => {
                                                const updated = [...side.grants];
                                                updated[i] = { ...updated[i], stat: v };
                                                updateSide(index, { grants: updated });
                                            }}>
                                                <SelectTrigger className="w-[120px] h-8"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {STAT_TYPES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {grant.stat === 'attack' && (
                                            <div>
                                                <Label className="text-xs">Arc</Label>
                                                <Select value={grant.arc || 'Front Arc'} onValueChange={(v) => {
                                                    const updated = [...side.grants];
                                                    updated[i] = { ...updated[i], arc: v };
                                                    updateSide(index, { grants: updated });
                                                }}>
                                                    <SelectTrigger className="w-[160px] h-8"><SelectValue /></SelectTrigger>
                                                    <SelectContent>
                                                        {ARC_TYPES.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        )}
                                    </>
                                )}
                                {grant.kind === 'arc' && (
                                    <div>
                                        <Label className="text-xs">Arc</Label>
                                        <Select value={grant.arc} onValueChange={(v) => {
                                            const updated = [...side.grants];
                                            updated[i] = { ...updated[i], arc: v };
                                            updateSide(index, { grants: updated });
                                        }}>
                                            <SelectTrigger className="w-[160px] h-8"><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                {ARC_TYPES.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                                {grant.kind === 'action' && (
                                    <>
                                        <div>
                                            <Label className="text-xs">Difficulty</Label>
                                            <Select value={grant.actionDifficulty} onValueChange={(v) => {
                                                const updated = [...side.grants];
                                                updated[i] = { ...updated[i], actionDifficulty: v };
                                                updateSide(index, { grants: updated });
                                            }}>
                                                <SelectTrigger className="w-[100px] h-8"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {DIFFICULTIES.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label className="text-xs">Action</Label>
                                            <Select value={grant.actionType} onValueChange={(v) => {
                                                const updated = [...side.grants];
                                                updated[i] = { ...updated[i], actionType: v };
                                                updateSide(index, { grants: updated });
                                            }}>
                                                <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {ACTION_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex items-center gap-2 pb-1">
                                            <Checkbox checked={grant.actionHasLinked} onCheckedChange={(v) => {
                                                const updated = [...side.grants];
                                                updated[i] = { ...updated[i], actionHasLinked: !!v };
                                                updateSide(index, { grants: updated });
                                            }} />
                                            <Label className="text-xs">Linked</Label>
                                        </div>
                                        {grant.actionHasLinked && (
                                            <>
                                                <div>
                                                    <Label className="text-xs">Link Diff.</Label>
                                                    <Select value={grant.actionLinkedDifficulty} onValueChange={(v) => {
                                                        const updated = [...side.grants];
                                                        updated[i] = { ...updated[i], actionLinkedDifficulty: v };
                                                        updateSide(index, { grants: updated });
                                                    }}>
                                                        <SelectTrigger className="w-[100px] h-8"><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            {DIFFICULTIES.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div>
                                                    <Label className="text-xs">Link Type</Label>
                                                    <Select value={grant.actionLinkedType} onValueChange={(v) => {
                                                        const updated = [...side.grants];
                                                        updated[i] = { ...updated[i], actionLinkedType: v };
                                                        updateSide(index, { grants: updated });
                                                    }}>
                                                        <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            {ACTION_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                                <button type="button" onClick={() => updateSide(index, { grants: side.grants.filter((_, idx) => idx !== i) })} className="pb-1 hover:text-destructive">
                                    <XCircleIcon className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                        <Button type="button" variant="outline" size="sm" onClick={() => updateSide(index, { grants: [...side.grants, emptyGrant()] })}>
                            Add Grant
                        </Button>
                    </div>
                </div>

                {/* Device */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Switch checked={side.hasDevice} onCheckedChange={(v) => updateSide(index, { hasDevice: v })} />
                        <Label>Device</Label>
                    </div>
                    {side.hasDevice && (
                        <div className="ml-6 space-y-3 border rounded-md p-3">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Name</Label>
                                    <Input value={side.device.name} onChange={(e) => updateSide(index, { device: { ...side.device, name: e.target.value } })} />
                                </div>
                                <div>
                                    <Label>Type</Label>
                                    <Select value={side.device.type} onValueChange={(v) => updateSide(index, { device: { ...side.device, type: v } })}>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            {DEVICE_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label>Effect</Label>
                                <Textarea value={side.device.effect} onChange={(e) => updateSide(index, { device: { ...side.device, effect: e.target.value } })} rows={3} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Image URL</Label>
                                    <Input value={side.device.image} onChange={(e) => updateSide(index, { device: { ...side.device, image: e.target.value } })} />
                                </div>
                                <div>
                                    <Label>Initiative</Label>
                                    <Input value={side.device.initiative} onChange={(e) => updateSide(index, { device: { ...side.device, initiative: e.target.value } })} type="number" min="0" placeholder="Optional" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Switch checked={side.device.hasCharges} onCheckedChange={(v) => updateSide(index, { device: { ...side.device, hasCharges: v } })} />
                                <Label>Charges</Label>
                            </div>
                            {side.device.hasCharges && (
                                <div className="ml-6 flex gap-4 border rounded-md p-3">
                                    <div>
                                        <Label>Value</Label>
                                        <Input value={side.device.chargesValue} onChange={(e) => updateSide(index, { device: { ...side.device, chargesValue: e.target.value } })} type="number" min="0" className="w-[80px]" />
                                    </div>
                                    <div>
                                        <Label>Recovers</Label>
                                        <Input value={side.device.chargesRecovers} onChange={(e) => updateSide(index, { device: { ...side.device, chargesRecovers: e.target.value } })} type="number" min="0" className="w-[80px]" />
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <Switch checked={side.device.hasAttack} onCheckedChange={(v) => updateSide(index, { device: { ...side.device, hasAttack: v } })} />
                                <Label>Attack</Label>
                            </div>
                            {side.device.hasAttack && (
                                <div className="ml-6 space-y-3 border rounded-md p-3">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>Arc</Label>
                                            <Select value={side.device.attackArc} onValueChange={(v) => updateSide(index, { device: { ...side.device, attackArc: v } })}>
                                                <SelectTrigger><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {ARC_TYPES.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label>Value</Label>
                                            <Input value={side.device.attackValue} onChange={(e) => updateSide(index, { device: { ...side.device, attackValue: e.target.value } })} type="number" min="0" className="w-[80px]" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <Label>Min Range</Label>
                                            <Input value={side.device.attackMinrange} onChange={(e) => updateSide(index, { device: { ...side.device, attackMinrange: e.target.value } })} type="number" min="0" max="5" className="w-[80px]" />
                                        </div>
                                        <div>
                                            <Label>Max Range</Label>
                                            <Input value={side.device.attackMaxrange} onChange={(e) => updateSide(index, { device: { ...side.device, attackMaxrange: e.target.value } })} type="number" min="0" max="5" className="w-[80px]" />
                                        </div>
                                        <div className="flex items-center gap-2 pt-5">
                                            <Checkbox checked={side.device.attackOrdnance} onCheckedChange={(v) => updateSide(index, { device: { ...side.device, attackOrdnance: !!v } })} />
                                            <Label>Ordnance</Label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <Button variant="ghost" size="sm" onClick={() => router.push('/admin/upgrades')} className="mb-2">
                        ← Back to Upgrades
                    </Button>
                    <h1 className="text-3xl font-bold">{isNew ? 'New Upgrade' : xws}</h1>
                </div>
                {!isNew && (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive">Delete Upgrade</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Delete {xws}?</AlertDialogTitle>
                                <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Upgrade Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                        {isNew && (
                            <div>
                                <Label>Ruleset</Label>
                                <Select value={ruleset} onValueChange={(v) => setRuleset(v as 'xwa' | 'legacy')}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="xwa">XWA</SelectItem>
                                        <SelectItem value="legacy">Legacy</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                        <div>
                            <Label>Primary Slot</Label>
                            <Select value={slot} onValueChange={setSlot}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {SLOT_KEYS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>XWS</Label>
                            <Input value={xws} onChange={(e) => setXws(e.target.value)} />
                        </div>
                        <div>
                            <Label>Limited</Label>
                            <Input value={limited} onChange={(e) => setLimited(e.target.value)} type="number" min="0" />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                            <Switch checked={standard} onCheckedChange={setStandard} />
                            <Label>Standard</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch checked={extended} onCheckedChange={setExtended} />
                            <Label>Extended</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch checked={epic} onCheckedChange={setEpic} />
                            <Label>Epic</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch checked={wildspace} onCheckedChange={setWildspace} />
                            <Label>Wildspace</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch checked={standarized} onCheckedChange={setStandarized} />
                            <Label>Standardized</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch checked={standardLoadoutOnly} onCheckedChange={setStandardLoadoutOnly} />
                            <Label>Standard Loadout Only</Label>
                        </div>
                    </div>

                    <div className="border rounded-md p-4">
                        <div className="flex items-center gap-4 mb-3">
                            <Label className="text-base font-semibold shrink-0">Cost</Label>
                            <Select value={cost.type} onValueChange={(v) => setCost(prev => ({ ...prev, type: v as CostType }))}>
                                <SelectTrigger className="w-[200px] h-8"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {COST_TYPES.map(t => <SelectItem key={t} value={t}>{COST_TYPE_LABELS[t]}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>

                        {cost.type === 'fixed' && (
                            <div>
                                <Label className="text-xs">Points</Label>
                                <Input value={cost.fixedValue} onChange={(e) => setCost(prev => ({ ...prev, fixedValue: e.target.value }))} type="number" min="0" className="w-[100px]" />
                            </div>
                        )}

                        {cost.type === 'agility' && (
                            <div className="grid grid-cols-4 gap-3">
                                {Object.keys(cost.agilityValues).sort().map(k => (
                                    <div key={k}>
                                        <Label className="text-xs">Agility {k}</Label>
                                        <Input value={cost.agilityValues[k]} onChange={(e) => setCost(prev => ({ ...prev, agilityValues: { ...prev.agilityValues, [k]: e.target.value } }))} type="number" min="0" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {cost.type === 'initiative' && (
                            <div className="grid grid-cols-4 gap-3">
                                {Object.keys(cost.initiativeValues).sort((a, b) => Number(a) - Number(b)).map(k => (
                                    <div key={k}>
                                        <Label className="text-xs">Initiative {k}</Label>
                                        <Input value={cost.initiativeValues[k]} onChange={(e) => setCost(prev => ({ ...prev, initiativeValues: { ...prev.initiativeValues, [k]: e.target.value } }))} type="number" min="0" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {cost.type === 'size' && (
                            <div className="grid grid-cols-4 gap-3">
                                {(['Small', 'Medium', 'Large', 'Huge'] as const).map(s => (
                                    <div key={s}>
                                        <Label className="text-xs">{s}</Label>
                                        <Input value={cost.sizeValues[s]} onChange={(e) => setCost(prev => ({ ...prev, sizeValues: { ...prev.sizeValues, [s]: e.target.value } }))} type="number" min="0" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {cost.type === 'faction' && (
                            <div className="grid grid-cols-2 gap-3">
                                {FACTION_KEYS.map(f => (
                                    <div key={f} className="flex items-center gap-2">
                                        <Label className="text-xs w-[140px] shrink-0">{FACTION_KEY_LABELS[f]}</Label>
                                        <Input value={cost.factionValues[f]} onChange={(e) => setCost(prev => ({ ...prev, factionValues: { ...prev.factionValues, [f]: e.target.value } }))} type="number" min="0" className="w-[80px]" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="border rounded-md p-4">
                        <Label className="text-base font-semibold">Restrictions</Label>
                        <p className="text-xs text-muted-foreground mb-3">Within a group, fields are OR (any must match). Groups are AND (all must match).</p>
                        <div className="space-y-2">
                            {restrictions.map((group, gi) => {
                                const activeFields = group.enabledFields;
                                const availableFields = RESTRICTION_FIELD_TYPES.filter(f => !activeFields.includes(f));

                                const removeField = (field: RestrictionFieldType) => {
                                    const updates: Partial<RestrictionGroupState> = {
                                        enabledFields: group.enabledFields.filter(f => f !== field),
                                    };
                                    switch (field) {
                                        case 'factions': updates.factions = []; break;
                                        case 'baseSizes': updates.baseSizes = []; break;
                                        case 'chassis': updates.chassis = []; break;
                                        case 'arcs': updates.arcs = []; break;
                                        case 'action': updates.hasAction = false; break;
                                        case 'sides': updates.sides = []; break;
                                        case 'equipped': updates.equipped = []; break;
                                        case 'keywords': updates.keywords = []; break;
                                        case 'character': updates.character = []; break;
                                        case 'solitary': updates.solitary = false; break;
                                        case 'non-limited': updates.nonLimited = false; break;
                                        case 'initiative': updates.hasInitiative = false; break;
                                        case 'stat': updates.hasStat = false; break;
                                        case 'shipAbility': updates.shipAbility = []; break;
                                    }
                                    updateRestrictionGroup(gi, updates);
                                };

                                const addField = (field: RestrictionFieldType) => {
                                    const updates: Partial<RestrictionGroupState> = {
                                        enabledFields: [...group.enabledFields, field],
                                    };
                                    switch (field) {
                                        case 'action': updates.hasAction = true; break;
                                        case 'solitary': updates.solitary = true; break;
                                        case 'non-limited': updates.nonLimited = true; break;
                                        case 'initiative': updates.hasInitiative = true; break;
                                        case 'stat': updates.hasStat = true; break;
                                        default: break;
                                    }
                                    updateRestrictionGroup(gi, updates);
                                };

                                return (
                                    <div key={gi}>
                                        {gi > 0 && (
                                            <div className="flex items-center gap-2 my-2">
                                                <div className="flex-1 border-t" />
                                                <span className="text-xs font-medium text-muted-foreground uppercase">and</span>
                                                <div className="flex-1 border-t" />
                                            </div>
                                        )}
                                        <div className="border rounded-md p-3 space-y-3 bg-muted/30">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">
                                                    Group {gi + 1}
                                                </span>
                                                <Button type="button" variant="ghost" size="sm" onClick={() => setRestrictions(restrictions.filter((_, i) => i !== gi))}>
                                                    <XCircleIcon className="w-4 h-4" />
                                                </Button>
                                            </div>

                                            {/* Render only active fields */}
                                            {activeFields.map(field => (
                                                <div key={field} className="flex items-start gap-2">
                                                    <div className="flex-1">
                                                        {field === 'factions' && (
                                                            <div>
                                                                <Label className="text-xs">Factions</Label>
                                                                <div className="flex flex-wrap gap-2 mt-1">
                                                                    {group.factions.map((f, i) => (
                                                                        <Badge key={f} variant="secondary" className="gap-1 h-6 text-xs">
                                                                            {FACTION_KEY_LABELS[f] ?? f}
                                                                            <button type="button" onClick={() => updateRestrictionGroup(gi, { factions: group.factions.filter((_, idx) => idx !== i) })} className="ml-0.5 hover:text-destructive">
                                                                                <XCircleIcon className="w-3 h-3" />
                                                                            </button>
                                                                        </Badge>
                                                                    ))}
                                                                    <Select onValueChange={(v) => { if (!group.factions.includes(v)) updateRestrictionGroup(gi, { factions: [...group.factions, v] }); }}>
                                                                        <SelectTrigger className="w-[180px] h-6 text-xs"><SelectValue placeholder="Add faction..." /></SelectTrigger>
                                                                        <SelectContent>
                                                                            {FACTION_KEYS.map(f => <SelectItem key={f} value={f}>{FACTION_KEY_LABELS[f]}</SelectItem>)}
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'baseSizes' && (
                                                            <div>
                                                                <Label className="text-xs">Base Sizes</Label>
                                                                <div className="flex flex-wrap gap-2 mt-1">
                                                                    {group.baseSizes.map((s, i) => (
                                                                        <Badge key={s} variant="secondary" className="gap-1 h-6 text-xs">
                                                                            {s}
                                                                            <button type="button" onClick={() => updateRestrictionGroup(gi, { baseSizes: group.baseSizes.filter((_, idx) => idx !== i) })} className="ml-0.5 hover:text-destructive">
                                                                                <XCircleIcon className="w-3 h-3" />
                                                                            </button>
                                                                        </Badge>
                                                                    ))}
                                                                    <Select onValueChange={(v) => { if (!group.baseSizes.includes(v)) updateRestrictionGroup(gi, { baseSizes: [...group.baseSizes, v] }); }}>
                                                                        <SelectTrigger className="w-[120px] h-6 text-xs"><SelectValue placeholder="Add size..." /></SelectTrigger>
                                                                        <SelectContent>
                                                                            {BASE_SIZES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'chassis' && (
                                                            <div>
                                                                <Label className="text-xs">Chassis</Label>
                                                                <div className="flex flex-wrap gap-2 mt-1">
                                                                    {group.chassis.map((c, i) => (
                                                                        <Badge key={`${c}-${i}`} variant="secondary" className="gap-1 h-6 text-xs">
                                                                            {c}
                                                                            <button type="button" onClick={() => updateRestrictionGroup(gi, { chassis: group.chassis.filter((_, idx) => idx !== i) })} className="ml-0.5 hover:text-destructive">
                                                                                <XCircleIcon className="w-3 h-3" />
                                                                            </button>
                                                                        </Badge>
                                                                    ))}
                                                                    <form className="flex gap-1" onSubmit={(e) => {
                                                                        e.preventDefault();
                                                                        const input = (e.target as HTMLFormElement).elements.namedItem('chassis') as HTMLInputElement;
                                                                        const v = input.value.trim();
                                                                        if (v) { updateRestrictionGroup(gi, { chassis: [...group.chassis, v] }); input.value = ''; }
                                                                    }}>
                                                                        <Input name="chassis" placeholder="Add chassis..." className="w-[140px] h-6 text-xs" />
                                                                        <Button type="submit" variant="outline" size="sm" className="h-6 text-xs">Add</Button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'arcs' && (
                                                            <div>
                                                                <Label className="text-xs">Arcs</Label>
                                                                <div className="flex flex-wrap gap-2 mt-1">
                                                                    {group.arcs.map((a, i) => (
                                                                        <Badge key={a} variant="secondary" className="gap-1 h-6 text-xs">
                                                                            {a}
                                                                            <button type="button" onClick={() => updateRestrictionGroup(gi, { arcs: group.arcs.filter((_, idx) => idx !== i) })} className="ml-0.5 hover:text-destructive">
                                                                                <XCircleIcon className="w-3 h-3" />
                                                                            </button>
                                                                        </Badge>
                                                                    ))}
                                                                    <Select onValueChange={(v) => { if (!group.arcs.includes(v)) updateRestrictionGroup(gi, { arcs: [...group.arcs, v] }); }}>
                                                                        <SelectTrigger className="w-[160px] h-6 text-xs"><SelectValue placeholder="Add arc..." /></SelectTrigger>
                                                                        <SelectContent>
                                                                            {ARC_TYPES.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'action' && (
                                                            <div>
                                                                <Label className="text-xs">Action</Label>
                                                                <div className="flex gap-2 mt-1">
                                                                    <Select value={group.actionType} onValueChange={(v) => updateRestrictionGroup(gi, { actionType: v })}>
                                                                        <SelectTrigger className="w-[140px] h-7 text-xs"><SelectValue /></SelectTrigger>
                                                                        <SelectContent>
                                                                            {ACTION_TYPES.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <Select value={group.actionDifficulty || '_any'} onValueChange={(v) => updateRestrictionGroup(gi, { actionDifficulty: v === '_any' ? '' : v })}>
                                                                        <SelectTrigger className="w-[100px] h-7 text-xs"><SelectValue /></SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectItem value="_any">Any</SelectItem>
                                                                            {DIFFICULTIES.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'sides' && (
                                                            <div>
                                                                <Label className="text-xs">Force Sides</Label>
                                                                <div className="flex gap-4 mt-1">
                                                                    {FORCE_SIDES.map(s => (
                                                                        <label key={s} className="flex items-center gap-1 text-xs">
                                                                            <Checkbox
                                                                                checked={group.sides.includes(s)}
                                                                                onCheckedChange={(v) => updateRestrictionGroup(gi, {
                                                                                    sides: v ? [...group.sides, s] : group.sides.filter(x => x !== s)
                                                                                })}
                                                                            />
                                                                            {s}
                                                                        </label>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'equipped' && (
                                                            <div>
                                                                <Label className="text-xs">Equipped Slots</Label>
                                                                <div className="flex flex-wrap gap-2 mt-1">
                                                                    {group.equipped.map((e, i) => (
                                                                        <Badge key={`${e}-${i}`} variant="secondary" className="gap-1 h-6 text-xs">
                                                                            {e}
                                                                            <button type="button" onClick={() => updateRestrictionGroup(gi, { equipped: group.equipped.filter((_, idx) => idx !== i) })} className="ml-0.5 hover:text-destructive">
                                                                                <XCircleIcon className="w-3 h-3" />
                                                                            </button>
                                                                        </Badge>
                                                                    ))}
                                                                    <Select onValueChange={(v) => updateRestrictionGroup(gi, { equipped: [...group.equipped, v] })}>
                                                                        <SelectTrigger className="w-[140px] h-6 text-xs"><SelectValue placeholder="Add slot..." /></SelectTrigger>
                                                                        <SelectContent>
                                                                            {SLOT_TYPES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                                                        </SelectContent>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'keywords' && (
                                                            <div>
                                                                <Label className="text-xs">Keywords</Label>
                                                                <div className="flex flex-wrap gap-2 mt-1">
                                                                    {group.keywords.map((kw, i) => (
                                                                        <Badge key={`${kw}-${i}`} variant="secondary" className="gap-1 h-6 text-xs">
                                                                            {kw}
                                                                            <button type="button" onClick={() => updateRestrictionGroup(gi, { keywords: group.keywords.filter((_, idx) => idx !== i) })} className="ml-0.5 hover:text-destructive">
                                                                                <XCircleIcon className="w-3 h-3" />
                                                                            </button>
                                                                        </Badge>
                                                                    ))}
                                                                    <form className="flex gap-1" onSubmit={(e) => {
                                                                        e.preventDefault();
                                                                        const input = (e.target as HTMLFormElement).elements.namedItem('keyword') as HTMLInputElement;
                                                                        const v = input.value.trim();
                                                                        if (v) { updateRestrictionGroup(gi, { keywords: [...group.keywords, v] }); input.value = ''; }
                                                                    }}>
                                                                        <Input name="keyword" placeholder="Add keyword..." className="w-[140px] h-6 text-xs" />
                                                                        <Button type="submit" variant="outline" size="sm" className="h-6 text-xs">Add</Button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'character' && (
                                                            <div>
                                                                <Label className="text-xs">Character</Label>
                                                                <div className="flex flex-wrap gap-2 mt-1">
                                                                    {group.character.map((c, i) => (
                                                                        <Badge key={`${c}-${i}`} variant="secondary" className="gap-1 h-6 text-xs">
                                                                            {c}
                                                                            <button type="button" onClick={() => updateRestrictionGroup(gi, { character: group.character.filter((_, idx) => idx !== i) })} className="ml-0.5 hover:text-destructive">
                                                                                <XCircleIcon className="w-3 h-3" />
                                                                            </button>
                                                                        </Badge>
                                                                    ))}
                                                                    <form className="flex gap-1" onSubmit={(e) => {
                                                                        e.preventDefault();
                                                                        const input = (e.target as HTMLFormElement).elements.namedItem('character') as HTMLInputElement;
                                                                        const v = input.value.trim();
                                                                        if (v) { updateRestrictionGroup(gi, { character: [...group.character, v] }); input.value = ''; }
                                                                    }}>
                                                                        <Input name="character" placeholder="Add character..." className="w-[140px] h-6 text-xs" />
                                                                        <Button type="submit" variant="outline" size="sm" className="h-6 text-xs">Add</Button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'shipAbility' && (
                                                            <div>
                                                                <Label className="text-xs">Ship Ability</Label>
                                                                <div className="flex flex-wrap gap-2 mt-1">
                                                                    {group.shipAbility.map((sa, i) => (
                                                                        <Badge key={`${sa}-${i}`} variant="secondary" className="gap-1 h-6 text-xs">
                                                                            {sa}
                                                                            <button type="button" onClick={() => updateRestrictionGroup(gi, { shipAbility: group.shipAbility.filter((_, idx) => idx !== i) })} className="ml-0.5 hover:text-destructive">
                                                                                <XCircleIcon className="w-3 h-3" />
                                                                            </button>
                                                                        </Badge>
                                                                    ))}
                                                                    <form className="flex gap-1" onSubmit={(e) => {
                                                                        e.preventDefault();
                                                                        const input = (e.target as HTMLFormElement).elements.namedItem('shipAbility') as HTMLInputElement;
                                                                        const v = input.value.trim();
                                                                        if (v) { updateRestrictionGroup(gi, { shipAbility: [...group.shipAbility, v] }); input.value = ''; }
                                                                    }}>
                                                                        <Input name="shipAbility" placeholder="Add ship ability..." className="w-[160px] h-6 text-xs" />
                                                                        <Button type="submit" variant="outline" size="sm" className="h-6 text-xs">Add</Button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'solitary' && (
                                                            <div className="flex items-center gap-1 text-xs pt-1">
                                                                <Label className="text-xs">Solitary</Label>
                                                            </div>
                                                        )}
                                                        {field === 'non-limited' && (
                                                            <div className="flex items-center gap-1 text-xs pt-1">
                                                                <Label className="text-xs">Non-Limited</Label>
                                                            </div>
                                                        )}
                                                        {field === 'initiative' && (
                                                            <div>
                                                                <Label className="text-xs">Initiative</Label>
                                                                <div className="flex gap-2 mt-1">
                                                                    <div>
                                                                        <Label className="text-xs text-muted-foreground">Min</Label>
                                                                        <Input value={group.initiativeMin} onChange={(e) => updateRestrictionGroup(gi, { initiativeMin: e.target.value })} type="number" min="0" max="6" className="w-[70px] h-7 text-xs" placeholder="—" />
                                                                    </div>
                                                                    <div>
                                                                        <Label className="text-xs text-muted-foreground">Max</Label>
                                                                        <Input value={group.initiativeMax} onChange={(e) => updateRestrictionGroup(gi, { initiativeMax: e.target.value })} type="number" min="0" max="6" className="w-[70px] h-7 text-xs" placeholder="—" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {field === 'stat' && (
                                                            <div>
                                                                <Label className="text-xs">Stat</Label>
                                                                <div className="flex gap-2 mt-1">
                                                                    <Select value={group.statType} onValueChange={(v) => updateRestrictionGroup(gi, { statType: v })}>
                                                                        <SelectTrigger className="w-[110px] h-7 text-xs"><SelectValue /></SelectTrigger>
                                                                        <SelectContent>
                                                                            {STAT_TYPES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <Input value={group.statValue} onChange={(e) => updateRestrictionGroup(gi, { statValue: e.target.value })} type="number" min="0" className="w-[70px] h-7 text-xs" placeholder="Value" />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0 mt-1 shrink-0" onClick={() => removeField(field)}>
                                                        <XCircleIcon className="w-3.5 h-3.5" />
                                                    </Button>
                                                </div>
                                            ))}

                                            {/* Add OR constraint selector */}
                                            {availableFields.length > 0 && (
                                                <Select onValueChange={(v) => addField(v as RestrictionFieldType)}>
                                                    <SelectTrigger className="w-[200px] h-7 text-xs"><SelectValue placeholder="Add OR constraint..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {availableFields.map(f => <SelectItem key={f} value={f}>{RESTRICTION_FIELD_LABELS[f]}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                            <Button type="button" variant="outline" size="sm" onClick={() => setRestrictions([...restrictions, emptyRestrictionGroup()])}>
                                {restrictions.length > 0 ? 'Add AND Group' : 'Add Restriction'}
                            </Button>
                        </div>
                    </div>



                    <div>
                        <Label>Keywords</Label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {keywords.map((kw, i) => (
                                <Badge key={`${kw}-${i}`} variant="secondary" className="gap-1 h-7 text-sm">
                                    {kw}
                                    <button
                                        type="button"
                                        onClick={() => setKeywords(keywords.filter((_, idx) => idx !== i))}
                                        className="ml-0.5 hover:text-destructive"
                                    >
                                        <XCircleIcon className="w-3.5 h-3.5" />
                                    </button>
                                </Badge>
                            ))}
                            <form
                                className="flex gap-1"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const v = keywordInput.trim();
                                    if (v) {
                                        setKeywords([...keywords, v]);
                                        setKeywordInput('');
                                    }
                                }}
                            >
                                <Input
                                    value={keywordInput}
                                    onChange={(e) => setKeywordInput(e.target.value)}
                                    placeholder="Add keyword..."
                                    className="w-[160px] h-7"
                                />
                                <Button type="submit" variant="outline" size="sm" className="h-7">Add</Button>
                            </form>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Sides</h2>
                    {!sides[1] && (
                        <Button variant="outline" onClick={() => setSides([sides[0], emptySide()])}>
                            Add Side 2
                        </Button>
                    )}
                </div>

                {renderSideEditor(sides[0], 0)}
                {sides[1] && renderSideEditor(sides[1], 1)}
            </div>

            <div className="mt-6">
                <Button onClick={handleSave} disabled={saving} size="lg">
                    {saving ? 'Saving...' : isNew ? 'Create Upgrade' : 'Save Changes'}
                </Button>
            </div>
        </div>
    );
}
