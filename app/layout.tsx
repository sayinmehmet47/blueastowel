import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavbarFirst } from '@/components/ui-kit/navbar-first';
import { Footer } from '@/components/ui-kit/footer';
import { cn } from '@/lib/utils';
import WhatsAppButton from '@/components/ui-kit/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BlueasTowel',
  description: 'A towel website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'to-stone-300 flex flex-col min-h-screen max-w-5xl mx-auto'
        )}
      >
        {/* <NavbarFirst /> */}
        <div className="flex-grow">{children}</div>
        <Footer />
        <WhatsAppButton /> {/* add the WhatsAppButton component */}
      </body>
    </html>
  );
}
