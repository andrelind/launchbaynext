'use client';

import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
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
import { Button } from '@web/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@web/components/ui/card';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@web/components/ui/command';
import { Input } from '@web/components/ui/input';
import { Label } from '@web/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@web/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@web/components/ui/select';
import { Switch } from '@web/components/ui/switch';
import { sourceKeys } from 'lbn-core/src/helpers/enums';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { useAdminTrpc } from '../../_trpc';

type ContentType = 'ships' | 'pilots' | 'upgrades';

function ContentsSection({
    label,
    type,
    entries,
    onUpdate,
    trpc,
}: {
    label: string;
    type: ContentType;
    entries: Record<string, number>;
    onUpdate: (entries: Record<string, number>) => void;
    trpc: ReturnType<typeof useAdminTrpc>;
}) {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<{ xws: string; name: string }[]>([]);
    const [searching, setSearching] = useState(false);
    const debounceRef = useRef<ReturnType<typeof setTimeout>>();

    const handleSearch = (value: string) => {
        setSearchQuery(value);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        if (value.length < 2) {
            setResults([]);
            return;
        }
        debounceRef.current = setTimeout(async () => {
            setSearching(true);
            try {
                const res = await trpc.admin.sources.searchXws.query({ type, search: value });
                setResults(res.filter(r => !(r.xws in entries)));
            } catch {
                setResults([]);
            } finally {
                setSearching(false);
            }
        }, 300);
    };

    const addEntry = (xws: string) => {
        onUpdate({ ...entries, [xws]: 1 });
        setOpen(false);
        setSearchQuery('');
        setResults([]);
    };

    const removeEntry = (xws: string) => {
        const next = { ...entries };
        delete next[xws];
        onUpdate(next);
    };

    const setCount = (xws: string, count: number) => {
        if (count < 1) {
            removeEntry(xws);
        } else {
            onUpdate({ ...entries, [xws]: count });
        }
    };

    const sorted = Object.entries(entries).sort(([a], [b]) => a.localeCompare(b));

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <Label className="text-base font-semibold">{label} ({sorted.length})</Label>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">Add {label.slice(0, -1)}</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] p-0" align="end">
                        <Command shouldFilter={false}>
                            <CommandInput
                                placeholder={`Search ${label.toLowerCase()}...`}
                                value={searchQuery}
                                onValueChange={handleSearch}
                            />
                            <CommandList>
                                <CommandEmpty>{searching ? 'Searching...' : searchQuery.length < 2 ? 'Type at least 2 characters' : 'No results'}</CommandEmpty>
                                <CommandGroup>
                                    {results.map(r => (
                                        <CommandItem key={r.xws} value={r.xws} onSelect={() => addEntry(r.xws)}>
                                            <span className="font-medium">{r.name}</span>
                                            {r.name !== r.xws && <span className="ml-2 text-xs text-muted-foreground">{r.xws}</span>}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            {sorted.length > 0 && (
                <div className="border rounded-md divide-y">
                    {sorted.map(([xws, count]) => (
                        <div key={xws} className="flex items-center justify-between px-3 py-1.5">
                            <code className="text-xs">{xws}</code>
                            <div className="flex items-center gap-1">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => setCount(xws, count - 1)}
                                >
                                    <MinusIcon className="w-3 h-3" />
                                </Button>
                                <span className="w-6 text-center text-sm font-medium">{count}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => setCount(xws, count + 1)}
                                >
                                    <PlusIcon className="w-3 h-3" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 text-muted-foreground hover:text-destructive"
                                    onClick={() => removeEntry(xws)}
                                >
                                    <XMarkIcon className="w-3.5 h-3.5" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SourceEditPage() {
    const params = useParams()!;
    const router = useRouter();
    const trpc = useAdminTrpc();
    const sourceId = params?.id as string | undefined;
    const isNew = !sourceId || sourceId === 'new';

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    const [category, setCategory] = useState('Core Sets');
    const [name, setName] = useState('');
    const [xws, setXws] = useState('');
    const [ffg, setFfg] = useState('');
    const [wave, setWave] = useState('');
    const [sku, setSku] = useState('');
    const [released, setReleased] = useState(true);
    const [ships, setShips] = useState<Record<string, number>>({});
    const [pilots, setPilots] = useState<Record<string, number>>({});
    const [upgrades, setUpgrades] = useState<Record<string, number>>({});

    useEffect(() => {
        if (isNew) return;
        async function load() {
            try {
                const result = await trpc.admin.sources.get.query({ id: sourceId! });
                if (!result) {
                    router.push('/admin/sources');
                    return;
                }
                setCategory(result.Category);
                setName(result.Name);
                setXws(result.Xws);
                setFfg(result.Ffg?.toString() ?? '');
                setWave(result.Wave?.toString() ?? '');
                setSku(result.Sku ?? '');
                setReleased(result.Released);
                const contents = result.Contents as any;
                if (contents) {
                    setShips(contents.ships ?? {});
                    setPilots(contents.pilots ?? {});
                    setUpgrades(contents.upgrades ?? {});
                }
            } catch (err: any) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sourceId]);

    const handleSave = async () => {
        if (!name || !xws) {
            toast.error('Name and XWS are required');
            return;
        }
        setSaving(true);
        try {
            const contents: any = {};
            if (Object.keys(ships).length > 0) contents.ships = ships;
            if (Object.keys(pilots).length > 0) contents.pilots = pilots;
            if (Object.keys(upgrades).length > 0) contents.upgrades = upgrades;

            const data: any = {
                category,
                name,
                xws,
                ffg: ffg ? parseInt(ffg) : undefined,
                wave: wave ? parseInt(wave) : undefined,
                sku: sku || undefined,
                released,
                contents,
            };

            if (isNew) {
                const result = await trpc.admin.sources.create.mutate(data);
                toast.success('Source created');
                router.push(`/admin/sources/${result.id}`);
            } else {
                data.id = sourceId!;
                await trpc.admin.sources.update.mutate(data);
                toast.success('Source updated');
            }
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        try {
            await trpc.admin.sources.delete.mutate({ id: sourceId! });
            toast.success('Source deleted');
            router.push('/admin/sources');
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    if (loading) return <div className="text-muted-foreground">Loading...</div>;

    return (
        <div className="max-w-2xl">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <Button variant="ghost" size="sm" onClick={() => router.push('/admin/sources')} className="mb-2">
                        ← Back to Sources
                    </Button>
                    <h1 className="text-3xl font-bold">{isNew ? 'New Source' : name}</h1>
                </div>
                {!isNew && (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive">Delete</Button>
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
                    <CardTitle>Source Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label>Category</Label>
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="w-[200px]"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                {sourceKeys.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

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
                            <Label>FFG ID</Label>
                            <Input value={ffg} onChange={(e) => setFfg(e.target.value)} type="number" />
                        </div>
                        <div>
                            <Label>Wave</Label>
                            <Input value={wave} onChange={(e) => setWave(e.target.value)} type="number" />
                        </div>
                        <div>
                            <Label>SKU</Label>
                            <Input value={sku} onChange={(e) => setSku(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Switch checked={released} onCheckedChange={setReleased} />
                        <Label>Released</Label>
                    </div>

                    <ContentsSection label="Ships" type="ships" entries={ships} onUpdate={setShips} trpc={trpc} />
                    <ContentsSection label="Pilots" type="pilots" entries={pilots} onUpdate={setPilots} trpc={trpc} />
                    <ContentsSection label="Upgrades" type="upgrades" entries={upgrades} onUpdate={setUpgrades} trpc={trpc} />

                    <Button onClick={handleSave} disabled={saving}>
                        {saving ? 'Saving...' : isNew ? 'Create Source' : 'Save Changes'}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
