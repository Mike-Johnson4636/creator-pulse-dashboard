// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Creator Pulse Dashboard',
  description: 'Cross-platform creator monitoring for social teams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
