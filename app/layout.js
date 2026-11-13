import Link from "next/link";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: { default: `${SITE.name}. ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.intro,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <header className="top">
          <Link href="/" className="brand">
  {SITE.logo && (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={SITE.logo} alt="" />
  )}
  {SITE.name}
</Link>
          <nav aria-label="Menu utama">
            <Link href="/">Produk</Link>
            <Link href="/ulasan">Ulasan</Link>
            <Link href="/tentang">Tentang</Link>
          </nav>
        </header>
        {children}
        <footer className="foot">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <a href={SITE.shopeeStore} target="_blank" rel="noopener noreferrer">Kunjungi toko di Shopee</a>
        </footer>
      </body>
    </html>
  );
}
