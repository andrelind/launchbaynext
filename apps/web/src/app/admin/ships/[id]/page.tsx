'use client';

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
import { Separator } from '@web/components/ui/separator';
import { Switch } from '@web/components/ui/switch';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@web/components/ui/table';
import { Textarea } from '@web/components/ui/textarea';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAdminTrpc } from '../../_trpc';

const FACTIONS = [
    'Rebel Alliance',
    'Galactic Empire',
    'Scum and Villainy',
    'Resistance',
    'First Order',
    'Galactic Republic',
    'Separatist Alliance',
];

const SIZES = ['Small', 'Medium', 'Large', 'Huge'];

const ACTION_TYPES = [
    'Barrel Roll', 'Boost', 'Calculate', 'Cloak', 'Coordinate', 'Evade',
    'Focus', 'Jam', 'Lock', 'Reload', 'Reinforce', 'Rotate Arc', 'SLAM',
] as const;

const DIFFICULTIES = ['White', 'Red', 'Purple'] as const;

const STAT_TYPES = ['attack', 'agility', 'hull', 'shields', 'energy', 'charges'] as const;

const ARC_TYPES = [
    'Front Arc', 'Left Arc', 'Right Arc', 'Rear Arc',
    'Single Turret Arc', 'Double Turret Arc', 'Full Front Arc', 'Bullseye Arc',
] as const;

interface ActionState {
    type: string;
    difficulty: string;
    hasLinked: boolean;
    linkedType: string;
    linkedDifficulty: string;
}

interface StatState {
    type: string;
    value: string;
    arc: string;
    recovers: string;
}

export default function ShipEditPage() {
    const params = useParams();
    const router = useRouter();
    const trpc = useAdminTrpc();
    const shipId = params.id as string;

    const [ship, setShip] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Editable fields
    const [name, setName] = useState('');
    const [xws, setXws] = useState('');
    const [faction, setFaction] = useState('');
    const [size, setSize] = useState('');
    const [dialStr, setDialStr] = useState('');
    const [stats, setStats] = useState<StatState[]>([]);
    const [actions, setActions] = useState<ActionState[]>([]);
    const [hasAbility, setHasAbility] = useState(false);
    const [abilityName, setAbilityName] = useState('');
    const [abilityText, setAbilityText] = useState('');
    const [ffg, setFfg] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        async function load() {
            try {
                const result = await trpc.admin.ships.get.query({ id: shipId });
                if (!result) {
                    router.push('/admin/ships');
                    return;
                }
                setShip(result);
                setName(result.Name);
                setXws(result.Xws);
                setFaction(result.Faction);
                setSize(result.Size);
                setDialStr(JSON.stringify(result.Dial, null, 2));
                if (Array.isArray(result.Stats)) {
                    setStats(result.Stats.map((s: any) => ({
                        type: s.type ?? 'hull',
                        value: s.value?.toString() ?? '0',
                        arc: s.arc ?? '',
                        recovers: s.recovers?.toString() ?? '',
                    })));
                }
                if (Array.isArray(result.Actions)) {
                    setActions(result.Actions.map((a: any) => ({
                        type: a.type ?? 'Focus',
                        difficulty: a.difficulty ?? 'White',
                        hasLinked: !!a.linked,
                        linkedType: a.linked?.type ?? 'Focus',
                        linkedDifficulty: a.linked?.difficulty ?? 'White',
                    })));
                }
                if (result.Ability) {
                    setHasAbility(true);
                    setAbilityName((result.Ability as any).name ?? '');
                    setAbilityText((result.Ability as any).text ?? '');
                }
                setFfg(result.Ffg?.toString() ?? '');
                setIcon(result.Icon ?? '');
            } catch (err: any) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [shipId]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const data: any = {
                id: shipId,
                name,
                xws,
                faction,
                size,
            };

            try { data.dial = JSON.parse(dialStr); } catch { toast.error('Invalid Dial JSON'); setSaving(false); return; }

            data.stats = stats.map(s => {
                const stat: any = { type: s.type, value: parseInt(s.value) };
                if (s.arc) stat.arc = s.arc;
                if (s.recovers) stat.recovers = parseInt(s.recovers);
                return stat;
            });

            data.actions = actions.map(a => {
                const action: any = { type: a.type, difficulty: a.difficulty };
                if (a.hasLinked) action.linked = { type: a.linkedType, difficulty: a.linkedDifficulty };
                return action;
            });

            if (hasAbility && abilityName) {
                data.ability = { name: abilityName, text: abilityText };
            } else {
                data.ability = null;
            }
            data.ffg = ffg ? parseInt(ffg) : null;
            data.icon = icon || null;

            await trpc.admin.ships.update.mutate(data);
            toast.success('Ship updated');

            // Reload
            const result = await trpc.admin.ships.get.query({ id: shipId });
            setShip(result);
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        try {
            await trpc.admin.ships.delete.mutate({ id: shipId });
            toast.success('Ship deleted');
            router.push('/admin/ships');
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    if (loading) return <div className="text-muted-foreground">Loading...</div>;
    if (!ship) return <div className="text-destructive">Ship not found</div>;

    return (
        <div className="max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <Button variant="ghost" size="sm" onClick={() => router.push('/admin/ships')} className="mb-2">
                        ← Back to Ships
                    </Button>
                    <h1 className="text-3xl font-bold">{ship.Name}</h1>
                    <p className="text-sm text-muted-foreground">
                        {ship.Ruleset} · {ship.Faction} · {ship.Size}
                    </p>
                </div>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete Ship</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Delete {ship.Name}?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This will also delete all {ship.Pilots?.length ?? 0} pilots. This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Ship Details</CardTitle>
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

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <Label>Faction</Label>
                            <Select value={faction} onValueChange={setFaction}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {FACTIONS.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>Size</Label>
                            <Select value={size} onValueChange={setSize}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {SIZES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>FFG ID</Label>
                            <Input value={ffg} onChange={(e) => setFfg(e.target.value)} type="number" />
                        </div>
                    </div>

                    <div>
                        <Label>Icon</Label>
                        <Input value={icon} onChange={(e) => setIcon(e.target.value)} placeholder="Icon identifier" />
                    </div>

                    <div>
                        <Label>Dial (JSON array)</Label>
                        <Textarea value={dialStr} onChange={(e) => setDialStr(e.target.value)} rows={4} className="font-mono text-xs" />
                    </div>

                    {/* Stats */}
                    <div>
                        <Label className="text-base font-semibold">Stats</Label>
                        <div className="mt-2 space-y-2 border rounded-md p-3">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-wrap items-end gap-2 pb-2 border-b last:border-b-0 last:pb-0">
                                    <div>
                                        <Label className="text-xs">Type</Label>
                                        <Select value={stat.type} onValueChange={(v) => {
                                            const updated = [...stats];
                                            updated[i] = { ...updated[i], type: v, arc: v === 'attack' ? (updated[i].arc || 'Front Arc') : '' };
                                            setStats(updated);
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
                                            const updated = [...stats];
                                            updated[i] = { ...updated[i], value: e.target.value };
                                            setStats(updated);
                                        }} type="number" min="0" className="w-[70px] h-8" />
                                    </div>
                                    {stat.type === 'attack' && (
                                        <div>
                                            <Label className="text-xs">Arc</Label>
                                            <Select value={stat.arc || 'Front Arc'} onValueChange={(v) => {
                                                const updated = [...stats];
                                                updated[i] = { ...updated[i], arc: v };
                                                setStats(updated);
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
                                                const updated = [...stats];
                                                updated[i] = { ...updated[i], recovers: e.target.value };
                                                setStats(updated);
                                            }} type="number" min="0" className="w-[70px] h-8" />
                                        </div>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => setStats(stats.filter((_, idx) => idx !== i))}
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
                                onClick={() => setStats([...stats, { type: 'hull', value: '0', arc: '', recovers: '' }])}
                            >
                                Add Stat
                            </Button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div>
                        <Label className="text-base font-semibold">Actions</Label>
                        <div className="mt-2 space-y-2 border rounded-md p-3">
                            {actions.map((action, i) => (
                                <div key={i} className="flex flex-wrap items-end gap-2 pb-2 border-b last:border-b-0 last:pb-0">
                                    <div>
                                        <Label className="text-xs">Difficulty</Label>
                                        <Select value={action.difficulty} onValueChange={(v) => {
                                            const updated = [...actions];
                                            updated[i] = { ...updated[i], difficulty: v };
                                            setActions(updated);
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
                                            const updated = [...actions];
                                            updated[i] = { ...updated[i], type: v };
                                            setActions(updated);
                                        }}>
                                            <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                {ACTION_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex items-center gap-2 pb-1">
                                        <Checkbox checked={action.hasLinked} onCheckedChange={(v) => {
                                            const updated = [...actions];
                                            updated[i] = { ...updated[i], hasLinked: !!v };
                                            setActions(updated);
                                        }} />
                                        <Label className="text-xs">Linked</Label>
                                    </div>
                                    {action.hasLinked && (
                                        <>
                                            <div>
                                                <Label className="text-xs">Link Diff.</Label>
                                                <Select value={action.linkedDifficulty} onValueChange={(v) => {
                                                    const updated = [...actions];
                                                    updated[i] = { ...updated[i], linkedDifficulty: v };
                                                    setActions(updated);
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
                                                    const updated = [...actions];
                                                    updated[i] = { ...updated[i], linkedType: v };
                                                    setActions(updated);
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
                                        onClick={() => setActions(actions.filter((_, idx) => idx !== i))}
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
                                onClick={() => setActions([...actions, { type: 'Focus', difficulty: 'White', hasLinked: false, linkedType: 'Focus', linkedDifficulty: 'White' }])}
                            >
                                Add Action
                            </Button>
                        </div>
                    </div>

                    {/* Ship Ability */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Switch checked={hasAbility} onCheckedChange={setHasAbility} />
                            <Label>Ship Ability</Label>
                        </div>
                        {hasAbility && (
                            <div className="ml-6 space-y-3 border rounded-md p-3">
                                <div>
                                    <Label>Name</Label>
                                    <Input value={abilityName} onChange={(e) => setAbilityName(e.target.value)} />
                                </div>
                                <div>
                                    <Label>Text</Label>
                                    <Textarea value={abilityText} onChange={(e) => setAbilityText(e.target.value)} rows={3} />
                                </div>
                            </div>
                        )}
                    </div>

                    <Button onClick={handleSave} disabled={saving}>
                        {saving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </CardContent>
            </Card>

            <Separator className="my-6" />

            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Pilots ({ship.Pilots?.length ?? 0})</h2>
                <Link href={`/admin/pilots/new?shipId=${shipId}`}>
                    <Button variant="outline">Add Pilot</Button>
                </Link>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>XWS</TableHead>
                        <TableHead>Init</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Limited</TableHead>
                        <TableHead>Formats</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(ship.Pilots || [])
                        .sort((a: any, b: any) => a.Initiative - b.Initiative || a.Name.localeCompare(b.Name))
                        .map((pilot: any) => (
                            <TableRow key={pilot.Id} className="cursor-pointer" onClick={() => router.push(`/admin/pilots/${pilot.Id}`)}>
                                <TableCell className="font-medium">
                                    {pilot.Name}
                                    {pilot.Caption && <span className="ml-1 text-xs text-muted-foreground">— {pilot.Caption}</span>}
                                </TableCell>
                                <TableCell><code className="text-xs">{pilot.Xws}</code></TableCell>
                                <TableCell>{pilot.Initiative}</TableCell>
                                <TableCell>{pilot.Cost}</TableCell>
                                <TableCell>{pilot.Limited > 0 ? `${pilot.Limited}` : '—'}</TableCell>
                                <TableCell className="flex gap-1">
                                    {pilot.Standard && <Badge variant="outline" className="text-xs">Std</Badge>}
                                    {pilot.Extended && <Badge variant="outline" className="text-xs">Ext</Badge>}
                                    {pilot.Epic && <Badge variant="outline" className="text-xs">Epic</Badge>}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
