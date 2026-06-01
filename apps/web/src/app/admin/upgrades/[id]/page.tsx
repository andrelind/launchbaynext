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
    const [costStr, setCostStr] = useState('{"value": 0}');
    const [sides, setSides] = useState<[SideState, SideState | null]>([emptySide(), null]);
    const [restrictionsStr, setRestrictionsStr] = useState('');
    const [standard, setStandard] = useState(true);
    const [extended, setExtended] = useState(true);
    const [epic, setEpic] = useState(true);
    const [wildspace, setWildspace] = useState(false);
    const [standarized, setStandarized] = useState(false);
    const [keywords, setKeywords] = useState<string[]>([]);
    const [keywordInput, setKeywordInput] = useState('');
    const [standardLoadoutOnly, setStandardLoadoutOnly] = useState(false);
    const [availableConditions, setAvailableConditions] = useState<{ Id: string; Xws: string; Name: string }[]>([]);

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
                setCostStr(result.Cost ? JSON.stringify(result.Cost, null, 2) : '');
                const sidesArr = result.Sides as any[];
                setSides([
                    sideFromData(sidesArr[0] ?? {}),
                    sidesArr[1] ? sideFromData(sidesArr[1]) : null,
                ]);
                setRestrictionsStr(result.Restrictions ? JSON.stringify(result.Restrictions, null, 2) : '');
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

    const parseOptionalJson = (str: string) => {
        if (!str.trim()) return undefined;
        return JSON.parse(str);
    };

    const handleSave = async () => {
        if (!xws) {
            toast.error('XWS is required');
            return;
        }
        setSaving(true);
        try {
            let cost;
            try { cost = parseOptionalJson(costStr); } catch { toast.error('Invalid Cost JSON'); setSaving(false); return; }

            const sidesData = [sideToData(sides[0])];
            if (sides[1]) sidesData.push(sideToData(sides[1]));

            const data: any = {
                slot,
                xws,
                limited: parseInt(limited),
                cost,
                sides: sidesData,
                standard,
                extended,
                epic,
                wildspace,
                standarized,
                standardLoadoutOnly,
                keywords: keywords.length > 0 ? keywords : undefined,
            };

            try { data.restrictions = parseOptionalJson(restrictionsStr); } catch { toast.error('Invalid Restrictions JSON'); setSaving(false); return; }

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

                    <div>
                        <Label>Cost (JSON)</Label>
                        <Textarea value={costStr} onChange={(e) => setCostStr(e.target.value)} rows={4} className="font-mono text-xs"
                            placeholder='{"value": 5} or {"variable": "size", "values": {"Small": 2, "Medium": 4, "Large": 6}}' />
                    </div>

                    <div>
                        <Label>Restrictions (JSON array, optional)</Label>
                        <Textarea value={restrictionsStr} onChange={(e) => setRestrictionsStr(e.target.value)} rows={4} className="font-mono text-xs"
                            placeholder='[{"baseSizes": ["Small", "Medium"]}]' />
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
