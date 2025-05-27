import { CookiesProvider } from 'next-client-cookies/server';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookiesProvider>
          {children}
        </CookiesProvider>
      </body>
    </html>
  );
}
