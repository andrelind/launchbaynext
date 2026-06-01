'use client';

import { Button } from '@web/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@web/components/ui/card';
import { Input } from '@web/components/ui/input';
import { Label } from '@web/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@web/components/ui/select';
import { Textarea } from '@web/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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

export default function NewShipPage() {
    const router = useRouter();
    const trpc = useAdminTrpc();
    const [saving, setSaving] = useState(false);

    const [ruleset, setRuleset] = useState<'xwa' | 'legacy'>('xwa');
    const [name, setName] = useState('');
    const [xws, setXws] = useState('');
    const [faction, setFaction] = useState('Rebel Alliance');
    const [size, setSize] = useState('Small');
    const [dialStr, setDialStr] = useState('[]');
    const [statsStr, setStatsStr] = useState('[{"type":"attack","value":2,"arc":"Front Arc"},{"type":"agility","value":3},{"type":"hull","value":3},{"type":"shields","value":2}]');
    const [actionsStr, setActionsStr] = useState('[{"difficulty":"White","type":"Focus"}]');
    const [abilityStr, setAbilityStr] = useState('');

    const handleSave = async () => {
        if (!name || !xws) {
            toast.error('Name and XWS are required');
            return;
        }
        setSaving(true);
        try {
            let dial, stats, actions;
            try { dial = JSON.parse(dialStr); } catch { toast.error('Invalid Dial JSON'); setSaving(false); return; }
            try { stats = JSON.parse(statsStr); } catch { toast.error('Invalid Stats JSON'); setSaving(false); return; }
            try { actions = JSON.parse(actionsStr); } catch { toast.error('Invalid Actions JSON'); setSaving(false); return; }

            let ability;
            if (abilityStr.trim()) {
                try { ability = JSON.parse(abilityStr); } catch { toast.error('Invalid Ability JSON'); setSaving(false); return; }
            }

            const result = await trpc.admin.ships.create.mutate({
                ruleset,
                name,
                xws,
                faction,
                size,
                dial,
                stats,
                actions,
                ability,
            });

            toast.success('Ship created');
            router.push(`/admin/ships/${result.id}`);
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="max-w-4xl">
            <Button variant="ghost" size="sm" onClick={() => router.push('/admin/ships')} className="mb-2">
                ← Back to Ships
            </Button>
            <h1 className="mb-6 text-3xl font-bold">New Ship</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Ship Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
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
                        <div>
                            <Label>Faction</Label>
                            <Select value={faction} onValueChange={setFaction}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {FACTIONS.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Name</Label>
                            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="T-65 X-wing" />
                        </div>
                        <div>
                            <Label>XWS</Label>
                            <Input value={xws} onChange={(e) => setXws(e.target.value)} placeholder="t65xwing" />
                        </div>
                    </div>

                    <div>
                        <Label>Size</Label>
                        <Select value={size} onValueChange={setSize}>
                            <SelectTrigger className="w-[200px]"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                {SIZES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label>Dial (JSON array)</Label>
                        <Textarea value={dialStr} onChange={(e) => setDialStr(e.target.value)} rows={4} className="font-mono text-xs" />
                    </div>

                    <div>
                        <Label>Stats (JSON array)</Label>
                        <Textarea value={statsStr} onChange={(e) => setStatsStr(e.target.value)} rows={6} className="font-mono text-xs" />
                    </div>

                    <div>
                        <Label>Actions (JSON array)</Label>
                        <Textarea value={actionsStr} onChange={(e) => setActionsStr(e.target.value)} rows={6} className="font-mono text-xs" />
                    </div>

                    <div>
                        <Label>Ship Ability (JSON, optional)</Label>
                        <Textarea value={abilityStr} onChange={(e) => setAbilityStr(e.target.value)} rows={4} className="font-mono text-xs" />
                    </div>

                    <Button onClick={handleSave} disabled={saving}>
                        {saving ? 'Creating...' : 'Create Ship'}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
