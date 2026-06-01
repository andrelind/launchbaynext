'use client';

import { Badge } from '@web/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@web/components/ui/card';
import { useEffect, useState } from 'react';
import { useAdminTrpc } from './_trpc';

type VersionInfo = { version: string | null };

export default function AdminDashboard() {
    const trpc = useAdminTrpc();
    const [xwaVersion, setXwaVersion] = useState<VersionInfo>({ version: null });
    const [legacyVersion, setLegacyVersion] = useState<VersionInfo>({ version: null });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            try {
                const [xwa, legacy] = await Promise.all([
                    trpc.gameData.version.query({ ruleset: 'xwa' }),
                    trpc.gameData.version.query({ ruleset: 'legacy' }),
                ]);
                setXwaVersion(xwa);
                setLegacyVersion(legacy);
            } catch (err: any) {
                setError(err.message || 'Failed to load');
            } finally {
                setLoading(false);
            }
        }
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <div className="text-muted-foreground">Loading...</div>;
    if (error) return <div className="text-destructive">Error: {error}</div>;

    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            XWA Ruleset
                            <Badge variant="outline">xwa</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Version: <code className="text-xs">{xwaVersion.version ?? 'Not seeded'}</code>
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            Legacy Ruleset
                            <Badge variant="outline">legacy</Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Version: <code className="text-xs">{legacyVersion.version ?? 'Not seeded'}</code>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
