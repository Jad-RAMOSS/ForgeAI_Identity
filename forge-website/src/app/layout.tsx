import type { Metadata } from 'next';
import './globals.css';
import GlassFilter from '@/components/GlassFilter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Forge AI — Intelligent Automation',
  description: 'Custom Agentic AI for brands that refuse to look average.',
  icons: { icon: '/uploads/Dark-logo-no-bckgrnd.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('forge-theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://use.typekit.net/tyd4ulw.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlassFilter />
        <div className="toast" id="forge-toast">
          <div className="toast-ic">✓</div>
          Message sent — we&apos;ll be in touch.
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
