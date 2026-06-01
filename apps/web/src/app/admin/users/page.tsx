'use client';

import { Button } from '@web/components/ui/button';
import { Input } from '@web/components/ui/input';
import { Switch } from '@web/components/ui/switch';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@web/components/ui/table';
import { useState } from 'react';
import { toast } from 'sonner';
import { useAdminTrpc } from '../_trpc';

export default function UsersPage() {
    const trpc = useAdminTrpc();
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    const loadUsers = async () => {
        if (search.length < 2) {
            setUsers([]);
            return;
        }
        setLoading(true);
        try {
            const result = await trpc.admin.users.list.query({ search });
            setUsers(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const toggleAdmin = async (userId: string, isAdmin: boolean) => {
        try {
            await trpc.admin.users.setAdmin.mutate({ userId, isAdmin });
            setUsers(prev => prev.map(u => u.id === userId ? { ...u, isAdmin } : u));
            toast.success(`Admin ${isAdmin ? 'granted' : 'revoked'}`);
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Users</h1>
                <p className="text-muted-foreground">Manage admin access for platform users.</p>
            </div>

            <div className="mb-4 flex gap-2">
                <Input
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[300px]"
                    onKeyDown={(e) => e.key === 'Enter' && loadUsers()}
                />
                <Button variant="outline" onClick={loadUsers}>Search</Button>
            </div>

            {search.length < 2 && users.length === 0 ? (
                <div className="text-muted-foreground">Type at least 2 characters to search</div>
            ) : loading ? (
                <div className="text-muted-foreground">Loading...</div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Admin</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user: any) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.name || '—'}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={user.isAdmin}
                                        onCheckedChange={(checked) => toggleAdmin(user.id, checked)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                        {users.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center text-muted-foreground">
                                    No users found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
