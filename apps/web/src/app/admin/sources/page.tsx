'use client';

import { Badge } from '@web/components/ui/badge';
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
import { sourceKeys } from 'lbn-core/src/helpers/enums';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAdminTrpc } from '../_trpc';

export default function SourcesPage() {
    const trpc = useAdminTrpc();
    const router = useRouter();
    const [sources, setSources] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState<string>('');

    const loadSources = async () => {
        setLoading(true);
        try {
            const result = await trpc.admin.sources.list.query({
                category: category || undefined,
            });
            setSources(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadSources();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Sources</h1>
                <Link href="/admin/sources/new">
                    <Button>Add Source</Button>
                </Link>
            </div>

            <div className="mb-4">
                <Select value={category || "all"} onValueChange={(v) => setCategory(v === "all" ? "" : v)}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {sourceKeys.map(c => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
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
                            <TableHead>Category</TableHead>
                            <TableHead>Wave</TableHead>
                            <TableHead>SKU</TableHead>
                            <TableHead>Released</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sources.map((source: any) => (
                            <TableRow key={source.Id} className="cursor-pointer" onClick={() => router.push(`/admin/sources/${source.Id}`)}>
                                <TableCell className="font-medium">{source.Name}</TableCell>
                                <TableCell><code className="text-xs">{source.Xws}</code></TableCell>
                                <TableCell>
                                    <Badge variant="outline">{source.Category}</Badge>
                                </TableCell>
                                <TableCell>{source.Wave ?? '—'}</TableCell>
                                <TableCell className="text-xs">{source.Sku ?? '—'}</TableCell>
                                <TableCell>{source.Released ? 'Yes' : 'No'}</TableCell>
                            </TableRow>
                        ))}
                        {sources.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center text-muted-foreground">
                                    No sources found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
