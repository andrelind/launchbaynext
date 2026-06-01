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

const SLOTS = [
    'astromech', 'cannon', 'cargo', 'command', 'configuration', 'crew',
    'device', 'forcepower', 'gunner', 'hardpoint', 'hyperdrive', 'illicit',
    'missile', 'modification', 'sensor', 'tacticalrelay', 'talent', 'team',
    'tech', 'title', 'torpedo', 'turret',
];

export default function UpgradesPage() {
    const trpc = useAdminTrpc();
    const router = useRouter();
    const [upgrades, setUpgrades] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [ruleset, setRuleset] = useState<'xwa' | 'legacy'>('xwa');
    const [slot, setSlot] = useState<string>('');
    const [search, setSearch] = useState('');

    const shouldFetch = slot !== '' || search.length >= 2;

    const loadUpgrades = async () => {
        if (!shouldFetch) {
            setUpgrades([]);
            return;
        }
        setLoading(true);
        try {
            const result = await trpc.admin.upgrades.list.query({
                ruleset,
                slot: slot || undefined,
                search: search || undefined,
            });
            setUpgrades(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUpgrades();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ruleset, slot]);

    const getTitle = (upgrade: any) => {
        const sides = upgrade.Sides as any[];
        return sides?.[0]?.title ?? upgrade.Xws;
    };

    const getCostDisplay = (upgrade: any) => {
        const cost = upgrade.Cost as any;
        if (!cost) return '—';
        if (cost.value !== undefined) return cost.value.toString();
        if (cost.variable) return `Var(${cost.variable})`;
        return '?';
    };

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Upgrades</h1>
                <Link href="/admin/upgrades/new">
                    <Button>Add Upgrade</Button>
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

                <Select value={slot || "all"} onValueChange={(v) => setSlot(v === "all" ? "" : v)}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="All Slots" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Slots</SelectItem>
                        {SLOTS.map(s => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <div className="flex gap-2">
                    <Input
                        placeholder="Search upgrades..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-[200px]"
                        onKeyDown={(e) => e.key === 'Enter' && loadUpgrades()}
                    />
                    <Button variant="outline" onClick={loadUpgrades}>Search</Button>
                </div>
            </div>

            {!shouldFetch && upgrades.length === 0 ? (
                <div className="text-muted-foreground">Select a slot or type at least 2 characters to search</div>
            ) : loading ? (
                <div className="text-muted-foreground">Loading...</div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>XWS</TableHead>
                            <TableHead>Slot</TableHead>
                            <TableHead>Cost</TableHead>
                            <TableHead>Limited</TableHead>
                            <TableHead>Formats</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {upgrades.map((upgrade: any) => (
                            <TableRow key={upgrade.Id} className="cursor-pointer" onClick={() => router.push(`/admin/upgrades/${upgrade.Id}`)}>
                                <TableCell className="font-medium">{getTitle(upgrade)}</TableCell>
                                <TableCell><code className="text-xs">{upgrade.Xws}</code></TableCell>
                                <TableCell>
                                    <Badge variant="outline">{upgrade.Slot}</Badge>
                                </TableCell>
                                <TableCell>{getCostDisplay(upgrade)}</TableCell>
                                <TableCell>{upgrade.Limited > 0 ? upgrade.Limited : '—'}</TableCell>
                                <TableCell className="flex gap-1">
                                    {upgrade.Standard && <Badge variant="outline" className="text-xs">Std</Badge>}
                                    {upgrade.Extended && <Badge variant="outline" className="text-xs">Ext</Badge>}
                                    {upgrade.Epic && <Badge variant="outline" className="text-xs">Epic</Badge>}
                                </TableCell>
                            </TableRow>
                        ))}
                        {upgrades.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center text-muted-foreground">
                                    No upgrades found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
