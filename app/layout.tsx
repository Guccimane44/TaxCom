// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import CookieBanner from '@/components/CookieBanner';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'TaxCom',
  description: 'Global income tax comparison (MVP)',
  // Add other metadata as needed (icons, viewport, openGraph, etc.)
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '';

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Analytics (loaded after hydration to avoid head mismatches) */}
        {plausibleDomain ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={plausibleDomain}
            strategy="afterInteractive"
          />
        ) : null}

        <Header />

        <CookieBanner />
        <main>{children}</main>

        <footer className="border-t">
          <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
            <p>Disclaimer: This MVP provides approximate calculations and is not tax advice.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
