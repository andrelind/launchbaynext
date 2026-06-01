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
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@web/components/ui/command';
import { Input } from '@web/components/ui/input';
import { Label } from '@web/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@web/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@web/components/ui/select';
import { Switch } from '@web/components/ui/switch';
import { Textarea } from '@web/components/ui/textarea';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAdminTrpc } from '../../_trpc';

const ALL_SLOTS = [
    'Astromech', 'Cannon', 'Cargo', 'Command', 'Configuration', 'Crew', 'Device',
    'Force Power', 'Gunner', 'Hardpoint', 'Hyperdrive', 'Illicit', 'Missile',
    'Modification', 'Sensor', 'Tactical Relay', 'Talent', 'Team', 'Tech',
    'Title', 'Torpedo', 'Turret',
] as const;

const FORCE_SIDES = ['light', 'dark'] as const;

const ACTION_TYPES = [
    'Barrel Roll', 'Boost', 'Calculate', 'Cloak', 'Coordinate', 'Evade',
    'Focus', 'Jam', 'Lock', 'Reload', 'Reinforce', 'Rotate Arc', 'SLAM',
] as const;

const DIFFICULTIES = ['White', 'Red', 'Purple'] as const;

interface ActionState {
    type: string;
    difficulty: string;
    hasLinked: boolean;
    linkedType: string;
    linkedDifficulty: string;
}

const STAT_TYPES = ['attack', 'agility', 'hull', 'shields', 'energy', 'charges'] as const;

const ARC_TYPES = [
    'Front Arc', 'Left Arc', 'Right Arc', 'Rear Arc',
    'Single Turret Arc', 'Double Turret Arc', 'Full Front Arc', 'Bullseye Arc',
] as const;

interface StatState {
    type: string;
    value: string;
    arc: string;
    recovers: string;
}

export default function PilotEditPage() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const trpc = useAdminTrpc();
    const pilotId = params.id as string;
    const isNew = pilotId === 'new';
    const shipIdParam = searchParams.get('shipId') ?? '';

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);
    const [pilot, setPilot] = useState<any>(null);

    // Form state
    const [shipId, setShipId] = useState(shipIdParam);
    const [name, setName] = useState('');
    const [xws, setXws] = useState('');
    const [caption, setCaption] = useState('');
    const [cost, setCost] = useState('0');
    const [loadout, setLoadout] = useState('');
    const [initiative, setInitiative] = useState('1');
    const [limited, setLimited] = useState('0');
    const [ability, setAbility] = useState('');
    const [text, setText] = useState('');
    const [slots, setSlots] = useState<string[]>([]);
    const [conditions, setConditions] = useState<string[]>([]);
    const [availableConditions, setAvailableConditions] = useState<{ Id: string; Xws: string; Name: string }[]>([]);
    const [hasShipActions, setHasShipActions] = useState(false);
    const [shipActions, setShipActions] = useState<ActionState[]>([]);
    const [hasShipAbility, setHasShipAbility] = useState(false);
    const [shipAbilityName, setShipAbilityName] = useState('');
    const [shipAbilityText, setShipAbilityText] = useState('');
    const [hasForce, setHasForce] = useState(false);
    const [forceValue, setForceValue] = useState('1');
    const [forceRecovers, setForceRecovers] = useState(true);
    const [forceSides, setForceSides] = useState<string[]>(['light']);
    const [hasCharges, setHasCharges] = useState(false);
    const [chargesValue, setChargesValue] = useState('1');
    const [chargesRecovers, setChargesRecovers] = useState('0');
    const [standard, setStandard] = useState(true);
    const [extended, setExtended] = useState(true);
    const [epic, setEpic] = useState(true);
    const [wildspace, setWildspace] = useState(false);
    const [keywords, setKeywords] = useState<string[]>([]);
    const [keywordInput, setKeywordInput] = useState('');
    const [image, setImage] = useState('');
    const [artwork, setArtwork] = useState('');
    const [loadoutMode, setLoadoutMode] = useState<'slots' | 'standardLoadout'>('slots');
    const [standardLoadout, setStandardLoadout] = useState<string[]>([]);
    const [upgradeSearchOpen, setUpgradeSearchOpen] = useState(false);
    const [upgradeSearchQuery, setUpgradeSearchQuery] = useState('');
    const [upgradeSearchResults, setUpgradeSearchResults] = useState<{ Xws: string; Name: string }[]>([]);
    const [upgradeSearchLoading, setUpgradeSearchLoading] = useState(false);
    const [hasPilotStats, setHasPilotStats] = useState(false);
    const [pilotStats, setPilotStats] = useState<StatState[]>([]);
    const [ffg, setFfg] = useState('');
    const [engagement, setEngagement] = useState('');

    useEffect(() => {
        if (isNew) return;
        async function load() {
            try {
                const result = await trpc.admin.pilots.get.query({ id: pilotId });
                if (!result) {
                    router.push('/admin/pilots');
                    return;
                }
                setPilot(result);
                setShipId(result.ShipId);
                setName(result.Name);
                setXws(result.Xws);
                setCaption(result.Caption ?? '');
                setCost(result.Cost.toString());
                setLoadout(result.Loadout?.toString() ?? '');
                setInitiative(result.Initiative.toString());
                setLimited(result.Limited.toString());
                setAbility(result.Ability ?? '');
                setText(result.Text ?? '');
                setSlots(Array.isArray(result.Slots) ? result.Slots : []);
                setConditions(Array.isArray(result.Conditions) ? result.Conditions : []);
                if (Array.isArray(result.ShipActions) && result.ShipActions.length > 0) {
                    setHasShipActions(true);
                    setShipActions(result.ShipActions.map((a: any) => ({
                        type: a.type ?? 'Focus',
                        difficulty: a.difficulty ?? 'White',
                        hasLinked: !!a.linked,
                        linkedType: a.linked?.type ?? 'Focus',
                        linkedDifficulty: a.linked?.difficulty ?? 'White',
                    })));
                }
                if (result.ShipAbility) {
                    setHasShipAbility(true);
                    setShipAbilityName((result.ShipAbility as any).name ?? '');
                    setShipAbilityText((result.ShipAbility as any).text ?? '');
                }
                if (result.Force) {
                    setHasForce(true);
                    setForceValue((result.Force as any).value?.toString() ?? '1');
                    setForceRecovers(((result.Force as any).recovers ?? 1) > 0);
                    setForceSides(Array.isArray((result.Force as any).side) ? (result.Force as any).side : ['light']);
                }
                if (result.Charges) {
                    setHasCharges(true);
                    setChargesValue((result.Charges as any).value?.toString() ?? '1');
                    setChargesRecovers((result.Charges as any).recovers?.toString() ?? '0');
                }
                setStandard(result.Standard);
                setExtended(result.Extended);
                setEpic(result.Epic);
                setWildspace(result.Wildspace);
                setKeywords(Array.isArray(result.Keywords) ? result.Keywords : []);
                setImage(result.Image ?? '');
                setArtwork(result.Artwork ?? '');
                if (Array.isArray(result.StandardLoadout) && result.StandardLoadout.length > 0) {
                    setStandardLoadout(result.StandardLoadout);
                    setLoadoutMode('standardLoadout');
                }
                if (Array.isArray(result.PilotStats) && result.PilotStats.length > 0) {
                    setHasPilotStats(true);
                    setPilotStats(result.PilotStats.map((s: any) => ({
                        type: s.type ?? 'hull',
                        value: s.value?.toString() ?? '0',
                        arc: s.arc ?? '',
                        recovers: s.recovers?.toString() ?? '',
                    })));
                }
                setFfg(result.Ffg?.toString() ?? '');
                setEngagement(result.Engagement?.toString() ?? '');

                // Load conditions for this ruleset
                if (result.Ship?.Ruleset) {
                    const conds = await trpc.admin.conditions.list.query({ ruleset: result.Ship.Ruleset as 'xwa' | 'legacy' });
                    setAvailableConditions(conds);
                }
            } catch (err: any) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [pilotId]);

    const handleSave = async () => {
        if (!name || !xws) {
            toast.error('Name and XWS are required');
            return;
        }
        setSaving(true);
        try {
            const data: any = {
                name,
                xws,
                caption: caption || undefined,
                cost: parseInt(cost),
                loadout: loadout ? parseInt(loadout) : undefined,
                initiative: parseInt(initiative),
                limited: parseInt(limited),
                ability: ability || undefined,
                text: text || undefined,
                slots: loadoutMode === 'slots' && slots.length > 0 ? slots : undefined,
                standardLoadout: loadoutMode === 'standardLoadout' && standardLoadout.length > 0 ? standardLoadout : undefined,
                conditions: conditions.length > 0 ? conditions : undefined,
                force: hasForce ? { value: parseInt(forceValue), recovers: forceRecovers ? 1 : 0, side: forceSides } : undefined,
                keywords: keywords.length > 0 ? keywords : undefined,
                standard,
                extended,
                epic,
                wildspace,
                image: image || undefined,
                artwork: artwork || undefined,
                ffg: ffg ? parseInt(ffg) : undefined,
                engagement: engagement ? parseInt(engagement) : undefined,
            };

            if (hasShipActions && shipActions.length > 0) {
                data.shipActions = shipActions.map(a => {
                    const action: any = { type: a.type, difficulty: a.difficulty };
                    if (a.hasLinked) action.linked = { type: a.linkedType, difficulty: a.linkedDifficulty };
                    return action;
                });
            }
            if (hasShipAbility && shipAbilityName) {
                data.shipAbility = { name: shipAbilityName, text: shipAbilityText };
            }
            if (hasCharges) {
                data.charges = { value: parseInt(chargesValue), recovers: parseInt(chargesRecovers) };
            }
            if (hasPilotStats && pilotStats.length > 0) {
                data.pilotStats = pilotStats.map(s => {
                    const stat: any = { type: s.type, value: parseInt(s.value) };
                    if (s.arc) stat.arc = s.arc;
                    if (s.recovers) stat.recovers = parseInt(s.recovers);
                    return stat;
                });
            }

            if (isNew) {
                data.shipId = shipId;
                const result = await trpc.admin.pilots.create.mutate(data);
                toast.success('Pilot created');
                router.push(`/admin/pilots/${result.id}`);
            } else {
                data.id = pilotId;
                await trpc.admin.pilots.update.mutate(data);
                toast.success('Pilot updated');
            }
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        try {
            await trpc.admin.pilots.delete.mutate({ id: pilotId });
            toast.success('Pilot deleted');
            router.push('/admin/pilots');
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    if (loading) return <div className="text-muted-foreground">Loading...</div>;

    const searchUpgrades = async (query: string) => {
        if (!query.trim() || !pilot?.Ship?.Ruleset) return;
        setUpgradeSearchLoading(true);
        try {
            const results = await trpc.admin.upgrades.list.query({
                ruleset: pilot.Ship.Ruleset as 'xwa' | 'legacy',
                search: query,
            });
            setUpgradeSearchResults(results.map((u: any) => ({ Xws: u.Xws, Name: u.Name })));
        } catch {
            setUpgradeSearchResults([]);
        } finally {
            setUpgradeSearchLoading(false);
        }
    };

    return (
        <div className="max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-2">
                        ← Back
                    </Button>
                    <h1 className="text-3xl font-bold">{isNew ? 'New Pilot' : name}</h1>
                    {pilot?.Ship && (
                        <p className="text-sm text-muted-foreground">{pilot.Ship.Name} · {pilot.Ship.Faction}</p>
                    )}
                </div>
                {!isNew && (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive">Delete Pilot</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Delete {name}?</AlertDialogTitle>
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
                    <CardTitle>Pilot Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Name</Label>
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <Label>XWS</Label>
                            <Input value={xws} onChange={(e) => setXws(e.target.value)} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Caption</Label>
                            <Input value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Optional subtitle" />
                        </div>
                        <div>
                            <Label>FFG ID</Label>
                            <Input value={ffg} onChange={(e) => setFfg(e.target.value)} type="number" />
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <Label>Initiative</Label>
                            <Input value={initiative} onChange={(e) => setInitiative(e.target.value)} type="number" min="0" max="7" />
                        </div>
                        <div>
                            <Label>Cost</Label>
                            <Input value={cost} onChange={(e) => setCost(e.target.value)} type="number" />
                        </div>
                        <div>
                            <Label>Loadout</Label>
                            <Input value={loadout} onChange={(e) => setLoadout(e.target.value)} type="number" placeholder="Optional" />
                        </div>
                        <div>
                            <Label>Limited</Label>
                            <Input value={limited} onChange={(e) => setLimited(e.target.value)} type="number" min="0" />
                        </div>
                    </div>

                    <div>
                        <Label>Ability</Label>
                        <Textarea value={ability} onChange={(e) => setAbility(e.target.value)} rows={3} />
                    </div>

                    <div>
                        <Label>Flavor Text</Label>
                        <Textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} />
                    </div>

                    <div>
                        <Label>Loadout Type</Label>
                        <Select value={loadoutMode} onValueChange={(v) => setLoadoutMode(v as 'slots' | 'standardLoadout')}>
                            <SelectTrigger className="w-[200px] mt-1">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="slots">Slots</SelectItem>
                                <SelectItem value="standardLoadout">Standard Loadout</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {loadoutMode === 'slots' && (
                        <div>
                            <Label>Slots</Label>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {slots.map((slot, i) => (
                                    <Badge key={`${slot}-${i}`} variant="secondary" className="gap-1 h-7 text-sm">
                                        {slot}
                                        <button
                                            type="button"
                                            onClick={() => setSlots(slots.filter((_, idx) => idx !== i))}
                                            className="ml-0.5 hover:text-destructive"
                                        >
                                            <XCircleIcon className="w-3.5 h-3.5" />
                                        </button>
                                    </Badge>
                                ))}
                                <Select onValueChange={(v) => { setSlots([...slots, v]); }}>
                                    <SelectTrigger className="w-[160px] h-7">
                                        <SelectValue placeholder="Add slot..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {ALL_SLOTS.map(s => (
                                            <SelectItem key={s} value={s}>{s}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}

                    {loadoutMode === 'standardLoadout' && (
                        <div>
                            <Label>Standard Loadout</Label>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {standardLoadout.map((upg, i) => (
                                    <Badge key={`${upg}-${i}`} variant="secondary" className="gap-1 h-7 text-sm">
                                        {upg}
                                        <button
                                            type="button"
                                            onClick={() => setStandardLoadout(standardLoadout.filter((_, idx) => idx !== i))}
                                            className="ml-0.5 hover:text-destructive"
                                        >
                                            <XCircleIcon className="w-3.5 h-3.5" />
                                        </button>
                                    </Badge>
                                ))}
                                <Popover open={upgradeSearchOpen} onOpenChange={setUpgradeSearchOpen}>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" size="sm" className="h-7">
                                            Add upgrade...
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[300px] p-0" align="start">
                                        <Command shouldFilter={false}>
                                            <CommandInput
                                                placeholder="Search upgrades..."
                                                value={upgradeSearchQuery}
                                                onValueChange={(v) => {
                                                    setUpgradeSearchQuery(v);
                                                    searchUpgrades(v);
                                                }}
                                            />
                                            <CommandList>
                                                {upgradeSearchLoading && (
                                                    <div className="py-3 text-center text-xs text-muted-foreground">Searching...</div>
                                                )}
                                                {!upgradeSearchLoading && upgradeSearchQuery && upgradeSearchResults.length === 0 && (
                                                    <CommandEmpty>No upgrades found.</CommandEmpty>
                                                )}
                                                <CommandGroup>
                                                    {upgradeSearchResults.map(u => (
                                                        <CommandItem
                                                            key={u.Xws}
                                                            value={u.Xws}
                                                            onSelect={() => {
                                                                setStandardLoadout([...standardLoadout, u.Xws]);
                                                                setUpgradeSearchOpen(false);
                                                                setUpgradeSearchQuery('');
                                                                setUpgradeSearchResults([]);
                                                            }}
                                                        >
                                                            <span>{u.Name}</span>
                                                            <span className="ml-auto text-xs text-muted-foreground">{u.Xws}</span>
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    )}

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
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Image URL</Label>
                            <Input value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div>
                            <Label>Artwork URL</Label>
                            <Input value={artwork} onChange={(e) => setArtwork(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Switch checked={hasForce} onCheckedChange={setHasForce} />
                            <Label>Force</Label>
                        </div>
                        {hasForce && (
                            <div className="ml-6 space-y-3 border rounded-md p-3">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <Label>Value</Label>
                                        <Input value={forceValue} onChange={(e) => setForceValue(e.target.value)} type="number" min="1" className="w-[80px]" />
                                    </div>
                                    <div className="flex items-center gap-2 pt-5">
                                        <Checkbox checked={forceRecovers} onCheckedChange={(v) => setForceRecovers(!!v)} />
                                        <Label>Recovers</Label>
                                    </div>
                                </div>
                                <div>
                                    <Label>Side(s)</Label>
                                    <div className="flex gap-4 mt-1">
                                        {FORCE_SIDES.map(side => (
                                            <label key={side} className="flex items-center gap-2 text-sm">
                                                <Checkbox
                                                    checked={forceSides.includes(side)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            setForceSides([...forceSides, side]);
                                                        } else if (forceSides.length > 1) {
                                                            setForceSides(forceSides.filter(s => s !== side));
                                                        }
                                                    }}
                                                />
                                                {side.charAt(0).toUpperCase() + side.slice(1)}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Switch checked={hasCharges} onCheckedChange={setHasCharges} />
                            <Label>Charges</Label>
                        </div>
                        {hasCharges && (
                            <div className="ml-6 flex gap-4 border rounded-md p-3">
                                <div>
                                    <Label>Value</Label>
                                    <Input value={chargesValue} onChange={(e) => setChargesValue(e.target.value)} type="number" min="0" className="w-[80px]" />
                                </div>
                                <div>
                                    <Label>Recovers</Label>
                                    <Input value={chargesRecovers} onChange={(e) => setChargesRecovers(e.target.value)} type="number" min="0" className="w-[80px]" />
                                </div>
                            </div>
                        )}
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

                    <div>
                        <Label>Conditions</Label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {conditions.map((cond, i) => {
                                const condName = availableConditions.find(c => c.Xws === cond)?.Name ?? cond;
                                return (
                                    <Badge key={`${cond}-${i}`} variant="secondary" className="gap-1 h-7 text-sm">
                                        {condName}
                                        <button
                                            type="button"
                                            onClick={() => setConditions(conditions.filter((_, idx) => idx !== i))}
                                            className="ml-0.5 hover:text-destructive"
                                        >
                                            <XCircleIcon className="w-3.5 h-3.5" />
                                        </button>
                                    </Badge>
                                );
                            })}
                            {availableConditions.length > 0 && (
                                <Select onValueChange={(v) => { if (!conditions.includes(v)) setConditions([...conditions, v]); }}>
                                    <SelectTrigger className="w-[200px] h-7">
                                        <SelectValue placeholder="Add condition..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {availableConditions
                                            .filter(c => !conditions.includes(c.Xws))
                                            .map(c => (
                                                <SelectItem key={c.Id} value={c.Xws}>{c.Name}</SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Switch checked={hasShipActions} onCheckedChange={setHasShipActions} />
                            <Label>Ship Actions Override</Label>
                        </div>
                        {hasShipActions && (
                            <div className="ml-6 space-y-2 border rounded-md p-3">
                                {shipActions.map((action, i) => (
                                    <div key={i} className="flex flex-wrap items-end gap-2 pb-2 border-b last:border-b-0 last:pb-0">
                                        <div>
                                            <Label className="text-xs">Difficulty</Label>
                                            <Select value={action.difficulty} onValueChange={(v) => {
                                                const updated = [...shipActions];
                                                updated[i] = { ...updated[i], difficulty: v };
                                                setShipActions(updated);
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
                                                const updated = [...shipActions];
                                                updated[i] = { ...updated[i], type: v };
                                                setShipActions(updated);
                                            }}>
                                                <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {ACTION_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex items-center gap-2 pb-1">
                                            <Checkbox checked={action.hasLinked} onCheckedChange={(v) => {
                                                const updated = [...shipActions];
                                                updated[i] = { ...updated[i], hasLinked: !!v };
                                                setShipActions(updated);
                                            }} />
                                            <Label className="text-xs">Linked</Label>
                                        </div>
                                        {action.hasLinked && (
                                            <>
                                                <div>
                                                    <Label className="text-xs">Link Diff.</Label>
                                                    <Select value={action.linkedDifficulty} onValueChange={(v) => {
                                                        const updated = [...shipActions];
                                                        updated[i] = { ...updated[i], linkedDifficulty: v };
                                                        setShipActions(updated);
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
                                                        const updated = [...shipActions];
                                                        updated[i] = { ...updated[i], linkedType: v };
                                                        setShipActions(updated);
                                                    }}>
                                                        <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                                                        <SelectContent>
                                                            {ACTION_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => setShipActions(shipActions.filter((_, idx) => idx !== i))}
                                            className="pb-1 hover:text-destructive"
                                        >
                                            <XCircleIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShipActions([...shipActions, { type: 'Focus', difficulty: 'White', hasLinked: false, linkedType: 'Focus', linkedDifficulty: 'White' }])}
                                >
                                    Add Action
                                </Button>
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Switch checked={hasShipAbility} onCheckedChange={setHasShipAbility} />
                            <Label>Ship Ability Override</Label>
                        </div>
                        {hasShipAbility && (
                            <div className="ml-6 space-y-3 border rounded-md p-3">
                                <div>
                                    <Label>Name</Label>
                                    <Input value={shipAbilityName} onChange={(e) => setShipAbilityName(e.target.value)} />
                                </div>
                                <div>
                                    <Label>Text</Label>
                                    <Textarea value={shipAbilityText} onChange={(e) => setShipAbilityText(e.target.value)} rows={3} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Switch checked={hasPilotStats} onCheckedChange={setHasPilotStats} />
                            <Label>Pilot Stat Overrides</Label>
                        </div>
                        {hasPilotStats && (
                            <div className="ml-6 space-y-2 border rounded-md p-3">
                                {pilotStats.map((stat, i) => (
                                    <div key={i} className="flex flex-wrap items-end gap-2 pb-2 border-b last:border-b-0 last:pb-0">
                                        <div>
                                            <Label className="text-xs">Type</Label>
                                            <Select value={stat.type} onValueChange={(v) => {
                                                const updated = [...pilotStats];
                                                updated[i] = { ...updated[i], type: v, arc: v === 'attack' ? (updated[i].arc || 'Front Arc') : '' };
                                                setPilotStats(updated);
                                            }}>
                                                <SelectTrigger className="w-[120px] h-8"><SelectValue /></SelectTrigger>
                                                <SelectContent>
                                                    {STAT_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label className="text-xs">Value</Label>
                                            <Input value={stat.value} onChange={(e) => {
                                                const updated = [...pilotStats];
                                                updated[i] = { ...updated[i], value: e.target.value };
                                                setPilotStats(updated);
                                            }} type="number" min="0" className="w-[70px] h-8" />
                                        </div>
                                        {stat.type === 'attack' && (
                                            <div>
                                                <Label className="text-xs">Arc</Label>
                                                <Select value={stat.arc || 'Front Arc'} onValueChange={(v) => {
                                                    const updated = [...pilotStats];
                                                    updated[i] = { ...updated[i], arc: v };
                                                    setPilotStats(updated);
                                                }}>
                                                    <SelectTrigger className="w-[160px] h-8"><SelectValue /></SelectTrigger>
                                                    <SelectContent>
                                                        {ARC_TYPES.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        )}
                                        {(stat.type === 'charges' || stat.type === 'energy') && (
                                            <div>
                                                <Label className="text-xs">Recovers</Label>
                                                <Input value={stat.recovers} onChange={(e) => {
                                                    const updated = [...pilotStats];
                                                    updated[i] = { ...updated[i], recovers: e.target.value };
                                                    setPilotStats(updated);
                                                }} type="number" min="0" className="w-[70px] h-8" />
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => setPilotStats(pilotStats.filter((_, idx) => idx !== i))}
                                            className="pb-1 hover:text-destructive"
                                        >
                                            <XCircleIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setPilotStats([...pilotStats, { type: 'hull', value: '0', arc: '', recovers: '' }])}
                                >
                                    Add Stat
                                </Button>
                            </div>
                        )}
                    </div>

                    <div>
                        <Label>Engagement</Label>
                        <Input value={engagement} onChange={(e) => setEngagement(e.target.value)} type="number" placeholder="Optional" className="w-[200px]" />
                    </div>

                    <Button onClick={handleSave} disabled={saving}>
                        {saving ? 'Saving...' : isNew ? 'Create Pilot' : 'Save Changes'}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
