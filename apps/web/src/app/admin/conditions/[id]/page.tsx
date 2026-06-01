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
import { Button } from '@web/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@web/components/ui/card';
import { Input } from '@web/components/ui/input';
import { Label } from '@web/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@web/components/ui/select';
import { Textarea } from '@web/components/ui/textarea';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAdminTrpc } from '../../_trpc';

export default function ConditionEditPage() {
    const params = useParams()!;
    const router = useRouter();
    const trpc = useAdminTrpc();
    const conditionId = params.id as string;
    const isNew = conditionId === 'new';

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    const [ruleset, setRuleset] = useState<'xwa' | 'legacy'>('xwa');
    const [name, setName] = useState('');
    const [xws, setXws] = useState('');
    const [ability, setAbility] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (isNew) return;
        async function load() {
            try {
                const result = await trpc.admin.conditions.get.query({ id: conditionId });
                if (!result) {
                    router.push('/admin/conditions');
                    return;
                }
                setRuleset(result.Ruleset as 'xwa' | 'legacy');
                setName(result.Name);
                setXws(result.Xws);
                setAbility(result.Ability ?? '');
                setImage(result.Image ?? '');
            } catch (err: any) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conditionId]);

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
                ability: ability || undefined,
                image: image || undefined,
            };

            if (isNew) {
                data.ruleset = ruleset;
                const result = await trpc.admin.conditions.create.mutate(data);
                toast.success('Condition created');
                router.push(`/admin/conditions/${result.id}`);
            } else {
                data.id = conditionId;
                await trpc.admin.conditions.update.mutate(data);
                toast.success('Condition updated');
            }
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        try {
            await trpc.admin.conditions.delete.mutate({ id: conditionId });
            toast.success('Condition deleted');
            router.push('/admin/conditions');
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    if (loading) return <div className="text-muted-foreground">Loading...</div>;

    return (
        <div className="max-w-2xl">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <Button variant="ghost" size="sm" onClick={() => router.push('/admin/conditions')} className="mb-2">
                        ← Back to Conditions
                    </Button>
                    <h1 className="text-3xl font-bold">{isNew ? 'New Condition' : name}</h1>
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
                    <CardTitle>Condition Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isNew && (
                        <div>
                            <Label>Ruleset</Label>
                            <Select value={ruleset} onValueChange={(v) => setRuleset(v as 'xwa' | 'legacy')}>
                                <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="xwa">XWA</SelectItem>
                                    <SelectItem value="legacy">Legacy</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}

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

                    <div>
                        <Label>Ability</Label>
                        <Textarea value={ability} onChange={(e) => setAbility(e.target.value)} rows={4} />
                    </div>

                    <div>
                        <Label>Image URL</Label>
                        <Input value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <Button onClick={handleSave} disabled={saving}>
                        {saving ? 'Saving...' : isNew ? 'Create Condition' : 'Save Changes'}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
