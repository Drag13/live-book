import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppText } from './shared/typography/app-text';
import { AppNav } from './nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Чарівна казка',
  description: 'Чарівна казка під Святого Миколая',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua-UK">
      <body className={inter.className}>
        <AppNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
