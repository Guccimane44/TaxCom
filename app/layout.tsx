import './globals.css';
import type { ReactNode } from 'react';
import Script from 'next/script';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: 'TaxCom',
  description: 'Global income tax comparison (MVP)',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || '';
  return (
    <html lang="en">
      <head>
        {/* Analytics (stub) */}
        {/* TODO: configure correct domain before production */}
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold">TaxCom</a>
            <nav className="space-x-4 text-sm">
              <a href="/compare">Compare</a>
              <a href="/about">About</a>
              <a href="/feedback">Feedback</a>
            </nav>
          </div>
        </header>
        <CookieBanner />
        <main>{children}</main>
        <footer className="border-t">
          <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
            <p>
              Disclaimer: This MVP provides approximate calculations and is not tax advice.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

