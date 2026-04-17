import Link from 'next/link';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"


export const metadata = {
  title: 'My Personal Site',
  description: 'A simple Next.js personal site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <header>
            <h1>Vedant Ombase</h1>
            <nav>
            <div className="main-nav">
                <Link href="/">About</Link>
              </div>
              <div className="sub-nav">
                <Link href="/writing/Review_of_Made_to_Stick">A Review of Made to Stick & The Computer Science of Human Decisions</Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2025 Vedant Ombase</p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}