'use client';

import { Badge } from '@web/components/ui/badge';
import { Button } from '@web/components/ui/button';
import { Input } from '@web/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@web/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@web/components/ui/table';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAdminTrpc } from '../_trpc';

const FACTIONS = [
    'Rebel Alliance',
    'Galactic Empire',
    'Scum and Villainy',
    'Resistance',
    'First Order',
    'Galactic Republic',
    'Separatist Alliance',
];

export default function ShipsPage() {
    const trpc = useAdminTrpc();
    const router = useRouter();
    const [ships, setShips] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [ruleset, setRuleset] = useState<'xwa' | 'legacy'>('xwa');
    const [faction, setFaction] = useState<string>('');
    const [search, setSearch] = useState('');

    const shouldFetch = faction !== '' || search.length >= 2;

    const loadShips = async () => {
        if (!shouldFetch) {
            setShips([]);
            return;
        }
        setLoading(true);
        try {
            const result = await trpc.admin.ships.list.query({
                ruleset,
                faction: faction || undefined,
                search: search || undefined,
            });
            setShips(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadShips();
    }, [ruleset, faction]);

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Ships</h1>
                <Link href="/admin/ships/new">
                    <Button>Add Ship</Button>
                </Link>
            </div>

            <div className="mb-4 flex gap-4">
                <Select value={ruleset} onValueChange={(v) => setRuleset(v as 'xwa' | 'legacy')}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Ruleset" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="xwa">XWA</SelectItem>
                        <SelectItem value="legacy">Legacy</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={faction || "all"} onValueChange={(v) => setFaction(v === "all" ? "" : v)}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="All Factions" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Factions</SelectItem>
                        {FACTIONS.map(f => (
                            <SelectItem key={f} value={f}>{f}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <div className="flex gap-2">
                    <Input
                        placeholder="Search ships..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-[200px]"
                        onKeyDown={(e) => e.key === 'Enter' && loadShips()}
                    />
                    <Button variant="outline" onClick={loadShips}>Search</Button>
                </div>
            </div>

            {!shouldFetch && ships.length === 0 ? (
                <div className="text-muted-foreground">Select a faction or type at least 2 characters to search</div>
            ) : loading ? (
                <div className="text-muted-foreground">Loading...</div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>XWS</TableHead>
                            <TableHead>Faction</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Pilots</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ships.map(ship => (
                            <TableRow key={ship.Id} className="cursor-pointer" onClick={() => router.push(`/admin/ships/${ship.Id}`)}>
                                <TableCell className="font-medium">{ship.Name}</TableCell>
                                <TableCell><code className="text-xs">{ship.Xws}</code></TableCell>
                                <TableCell>
                                    <Badge variant="outline">{ship.Faction}</Badge>
                                </TableCell>
                                <TableCell>{ship.Size}</TableCell>
                                <TableCell>{ship.Pilots?.length ?? 0}</TableCell>
                            </TableRow>
                        ))}
                        {ships.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-muted-foreground">
                                    No ships found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
