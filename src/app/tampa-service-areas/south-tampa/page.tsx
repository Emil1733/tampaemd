import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Anchor, Info } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal South Tampa, FL | Hydrology & Removal Experts",
  description: "Specialized pool removal in South Tampa. Experts in high water table dewatering, tight-access demolition, and Hillsborough County permits. Get an instant quote.",
  alternates: {
    canonical: "/tampa-service-areas/south-tampa",
  },
};

export default function SouthTampaPage() {
  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "South Tampa Pool Removal",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "South Tampa",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.9157,
      "longitude": -82.4934
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <Breadcrumbs items={[
        { name: "Service Areas", href: "/tampa-service-areas" },
        { name: "South Tampa", href: "/tampa-service-areas/south-tampa" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Anchor size={20} />
              <span>Interbay & South Tampa Authority</span>
            </div>
            <h1>Premium Pool Removal in South Tampa, FL</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "2rem", fontWeight: 500 }}>
              Engineered demolition for Tampa's most demanding zip codes. We specialize in the complex hydrology and tight property lines of the South Tampa peninsula.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.1)", padding: "1.25rem", borderRadius: "var(--radius-md)", border: "1px solid var(--primary)" }}>
              <Droplets size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600 }}>
                South Tampa Alert: Most properties here sit on a high water table. Improper removal without dewatering can cause yard flooding and foundation shifting.
              </p>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. VALUE-RICH TECHNICAL CONTENT */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="icon-box">
                <HardHat size={32} />
              </div>
              <h2>South Tampa's High Water Table & Dewatering Specialists</h2>
              <p>
                In South Tampa, "digging a hole" is only 20% of the job. Because much of the area (Hyde Park, Palma Ceia, Ballast Point) was historically reclaimed land or is exceptionally low-lying, groundwater management is mandatory.
              </p>
              <p>
                We use **Engineered Dewatering Systems** to lower the local water table before we break the pool floor. This prevents the "float" phenomenon and ensures the backfill is placed on a dry, stable base—not mud.
              </p>
              
              <div style={{ marginTop: "2rem", padding: "1.5rem", borderLeft: "4px solid var(--secondary)", background: "white" }}>
                <h4 style={{ marginBottom: "0.5rem" }}>Stair-Step Compaction</h4>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                   Our South Tampa process uses moisture-controlled fill dirt, compacted every 12 inches. This level of precision is required if you plan to build a garage, ADU, or outdoor kitchen where your pool once was.
                </p>
              </div>
            </div>
            
            <div style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>South Tampa Neighborhood Expertise</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                 We navigate the unique access constraints and municipal codes of the Interbay region:
              </p>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {[
                  "Hyde Park",
                  "Palma Ceia",
                  "Ballast Point",
                  "Beach Park",
                  "Davis Islands",
                  "Sunset Park",
                  "Maryland Manor",
                  "Port Tampa"
                ].map((area) => (
                  <div key={area} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 500 }}>
                    <CheckCircle size={16} color="var(--secondary)" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERNAL LINKING & AUTHORITY */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2 style={{ marginBottom: "3rem" }}>Prepare Your Property for What's Next</h2>
          <div className="grid grid-cols-3 gap-8">
            <Link href="/resources/hillsborough-pool-permits" className="glass-card" style={{ padding: "2.5rem", textDecoration: "none", color: "inherit", textAlign: "left" }}>
              <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
              <h4>Permit Compliance</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Hillsborough County requirements for residential pool abandonment and demolition.</p>
            </Link>
            <Link href="/resources/high-water-table-dewatering" className="glass-card" style={{ padding: "2.5rem", textDecoration: "none", color: "inherit", textAlign: "left" }}>
              <Droplets size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
              <h4>Technical Dewatering</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Why we prioritize water management to prevent your yard from turning into a swamp.</p>
            </Link>
            <Link href="/pool-removal-cost-tampa" className="glass-card" style={{ padding: "2.5rem", textDecoration: "none", color: "inherit", textAlign: "left" }}>
              <MapPin size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
              <h4>South Tampa Estimating</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>How tight access and dewatering affect your final project investment.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
