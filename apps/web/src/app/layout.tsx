import { cn } from "@web/lib/utils";
import { CookiesProvider } from 'next-client-cookies/server';
import { Geist, Inter } from 'next/font/google';
import { GameDataProvider } from './game-data-provider';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable)}>
      <body className={inter.className}>
        <CookiesProvider>
          <GameDataProvider>
            {children}
          </GameDataProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
