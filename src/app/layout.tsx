import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://poolremovaltampa.com"),
  title: "Pool Removal Tampa, FL | Tampa Pool Removal & Demolition",
  description: "Pool removal in Tampa requires proper drainage and soil stabilization. Most projects range $9k–$18k. Get a fast estimate today.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pool Removal Tampa, FL — Cost, Drainage & Permits",
    description: "Pool removal in Tampa requires proper drainage and soil stabilization. Most projects range $9k–$18k. Get a fast estimate today.",
    url: "https://poolremovaltampa.com",
    siteName: "Tampa Pool Removal & Demolition",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tampa Pool Removal & Demolition",
    image: "https://poolremovaltampa.com/logo.png",
    "@id": "https://poolremovaltampa.com",
    url: "https://poolremovaltampa.com",
    telephone: "+18131234567",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tampa",
      addressRegion: "FL",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.9506,
      longitude: -82.4572
    },
    areaServed: ["Tampa", "St. Petersburg", "Clearwater", "Brandon", "Riverview", "Wesley Chapel"],
    description: "Specialized pool removal and demolition serving the Tampa Bay area. Experts in dewatering, sandy soil stabilization, and high water table management."
  };

  const navLinks = [
    { name: "Services", href: "/pool-removal" },
    { name: "Tampa Costs", href: "/pool-removal-cost-tampa" },
    { name: "Full vs Partial", href: "/full-vs-partial-pool-removal" },
    { name: "Our Process", href: "/pool-demolition-process" },
    { name: "Service Areas", href: "/tampa-service-areas" },
    { name: "Blog", href: "/blog" }
  ];

  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Main Header */}
        <header style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '80px', padding: '0.5rem 1.5rem' }}>
            
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
                <path d="M8 12c1.5 0 2.5 1 4 1s2.5-1 4-1" />
                <path d="M8 16c1.5 0 2.5 1 4 1s2.5-1 4-1" />
              </svg>
              <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-dark)' }}>
                Tampa Pool Removal
              </span>
            </Link>

            <MobileNav />

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  {link.name}
                </Link>
              ))}
              
              <Link href="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.95rem' }}>
                Contact Us
              </Link>
            </nav>

          </div>
        </header>

        <main>{children}</main>

        <footer style={{ background: 'var(--primary-dark)', color: 'white', padding: '4rem 0 2rem' }}>
          <div className="container grid grid-cols-3" style={{ gap: '4rem' }}>
            
            {/* Brand Col */}
            <div>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'white' }}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
                  <path d="M8 12c1.5 0 2.5 1 4 1s2.5-1 4-1" />
                  <path d="M8 16c1.5 0 2.5 1 4 1s2.5-1 4-1" />
                </svg>
                <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem', fontWeight: 700 }}>
                  Tampa Demolitions
                </span>
              </Link>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                Specializing in complex pool removals requiring water table management, engineered dewatering, and drainage correction across Tampa Bay.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', color: 'var(--secondary)', fontWeight: 'bold' }}>
                 <PhoneCall size={20} /> (813) 555-0199
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><Link href="/" style={{ color: 'var(--text-light)' }}>Home / Calculator</Link></li>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{ color: 'var(--text-light)' }}>{link.name}</Link>
                  </li>
                ))}
                <li><Link href="/contact" style={{ color: 'var(--text-light)' }}>Free Estimate Form</Link></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Core Service Areas</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><Link href="/tampa-service-areas/south-tampa" style={{ color: 'var(--secondary)', fontWeight: 600 }}>South Tampa & Limits</Link></li>
                <li><Link href="/tampa-service-areas/st-petersburg" style={{ color: 'var(--text-light)' }}>St. Petersburg & Pinellas</Link></li>
                <li><Link href="/tampa-service-areas/clearwater" style={{ color: 'var(--text-light)' }}>Clearwater</Link></li>
                <li><Link href="/tampa-service-areas/brandon" style={{ color: 'var(--text-light)' }}>Brandon</Link></li>
                <li><Link href="/tampa-service-areas/riverview" style={{ color: 'var(--text-light)' }}>Riverview</Link></li>
                <li><Link href="/tampa-service-areas/carrollwood" style={{ color: 'var(--text-light)' }}>Carrollwood</Link></li>
                <li><Link href="/tampa-service-areas/wesley-chapel" style={{ color: 'var(--text-light)' }}>Wesley Chapel</Link></li>
              </ul>
              
              <h4 style={{ color: 'white', margin: '2rem 0 1.5rem' }}>Pool Removal Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><Link href="/resources/hillsborough-pool-permits" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Hillsborough County Permits</Link></li>
                <li><Link href="/resources/pinellas-pool-permits" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Pinellas County Permits</Link></li>
                <li><Link href="/resources/pasco-pool-permits" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Pasco County Permits</Link></li>
                <li><Link href="/pool-removal/fiberglass" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Fiberglass Pool Removal</Link></li>
                <li><Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Soil Stabilization & Backfill</Link></li>
                <li><Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Dewatering Specialist Guide</Link></li>
                <li><Link href="/blog/do-you-need-a-permit-in-tampa" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Mandatory Permit Guide</Link></li>
                <li><Link href="/blog/high-water-table-issues" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Hydrostatic Pressure Guide</Link></li>
                <li><Link href="/blog/building-after-pool-removal" style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Building Over Pools Guide</Link></li>
              </ul>
            </div>

          </div>
          
          <div className="container" style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.85rem' }}>
            <p>© {new Date().getFullYear()} Tampa Pool Removal & Demolition. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem' }}>Licensed & Insured | Hillsborough County Permit Specialists</p>
          </div>
        </footer>

        {/* Sticky CTA */}
        <div className="sticky-cta">
          <Link href="/#calculator" className="btn btn-accent" style={{ display: 'flex', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <PhoneCall size={20} />
            Instant Estimate
          </Link>
        </div>
      </body>
    </html>
  );
}
