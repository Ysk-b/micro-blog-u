import { Suspense } from 'react';
import Footer from './components/Molecules/Footer';
import Header from './components/Molecules/Header';
import './styles/globals.css';
import type { Metadata } from 'next';
import Loading from './loading';

const siteName = 'Micro-blog App';
const description = 'This is a micro-blog app generated by create next app';
// FIX ME
// 本番ドメインの指定
const url = '';

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@XのID',
    creator: '@ Xアカウント',
  },
  // Google Search Consoleの情報を記載
  verification: {
    google: 123456,
  },
  // canonicalの指定
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className='container mx-auto bg-slate-700 text-slate-50'>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-grow'>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
