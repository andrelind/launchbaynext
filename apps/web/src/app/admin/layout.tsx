'use client';

import { Toaster } from '@web/components/ui/sonner';
import { cn } from '@web/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Ships', href: '/admin/ships' },
    { label: 'Pilots', href: '/admin/pilots' },
    { label: 'Upgrades', href: '/admin/upgrades' },
    { label: 'Conditions', href: '/admin/conditions' },
    { label: 'Sources', href: '/admin/sources' },
    { label: 'Users', href: '/admin/users' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen">
            <aside className="w-64 border-r bg-muted/40 p-6">
                <Link href="/admin" className="mb-8 block text-xl font-bold">
                    LBN Admin
                </Link>
                <nav className="flex flex-col gap-1">
                    {navItems.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                                pathname === item.href
                                    ? 'bg-accent text-accent-foreground'
                                    : 'text-muted-foreground',
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto pt-8">
                    <Link href="/" className="text-xs text-muted-foreground hover:underline">
                        ← Back to app
                    </Link>
                </div>
            </aside>
            <main className="flex-1 p-8">
                {children}
            </main>
            <Toaster />
        </div>
    );
}
