import './globals.scss';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import I18nProvider from '@/components/I18nProvider';

const quicksand = Quicksand({ 
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | Fullstack Developer',
    template: '%s | Portfolio',
  },
  description: 'Portfolio chuyên nghiệp của Fullstack Developer - Chuyên về React, Next.js, Node.js và các công nghệ web hiện đại',
  keywords: ['fullstack developer', 'react', 'nextjs', 'nodejs', 'portfolio', 'web developer', 'vietnam developer'],
  authors: [{ name: 'Fullstack Developer' }],
  creator: 'Fullstack Developer',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://yourportfolio.com',
    title: 'Portfolio | Fullstack Developer',
    description: 'Portfolio chuyên nghiệp của Fullstack Developer',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Fullstack Developer',
    description: 'Portfolio chuyên nghiệp của Fullstack Developer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={quicksand.variable} suppressHydrationWarning>
      <body className={quicksand.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}