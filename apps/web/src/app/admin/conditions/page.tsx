'use client';

import { Button } from '@web/components/ui/button';
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

export default function ConditionsPage() {
    const trpc = useAdminTrpc();
    const router = useRouter();
    const [conditions, setConditions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [ruleset, setRuleset] = useState<'xwa' | 'legacy'>('xwa');

    const loadConditions = async () => {
        setLoading(true);
        try {
            const result = await trpc.admin.conditions.list.query({ ruleset });
            setConditions(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadConditions();
    }, [ruleset]);

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Conditions</h1>
                <Link href="/admin/conditions/new">
                    <Button>Add Condition</Button>
                </Link>
            </div>

            <div className="mb-4">
                <Select value={ruleset} onValueChange={(v) => setRuleset(v as 'xwa' | 'legacy')}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Ruleset" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="xwa">XWA</SelectItem>
                        <SelectItem value="legacy">Legacy</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {loading ? (
                <div className="text-muted-foreground">Loading...</div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>XWS</TableHead>
                            <TableHead>Ability</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {conditions.map((c: any) => (
                            <TableRow key={c.Id} className="cursor-pointer" onClick={() => router.push(`/admin/conditions/${c.Id}`)}>
                                <TableCell className="font-medium">{c.Name}</TableCell>
                                <TableCell><code className="text-xs">{c.Xws}</code></TableCell>
                                <TableCell className="max-w-[400px] truncate text-sm">{c.Ability}</TableCell>
                            </TableRow>
                        ))}
                        {conditions.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground">
                                    No conditions found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
