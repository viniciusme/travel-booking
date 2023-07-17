import { NextAuthProvider } from '@/providers/auth';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { Header } from './components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Travel Booking',
  description: 'Plataforma de reserva de viagens!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
