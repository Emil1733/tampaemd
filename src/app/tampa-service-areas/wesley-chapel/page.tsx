import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, FastForward, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Removal Wesley Chapel, FL | Fast Backyard Expansions",
  description: "Licensed pool removal in Wesley Chapel, FL. Specializing in new construction turnover, Pasco County permits, and rapid property grading. Get an instant quote.",
  alternates: {
    canonical: "/tampa-service-areas/wesley-chapel",
  },
};

export default function WesleyChapelPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <FastForward size={20} />
              <span>Wesley Chapel Growth Specialists</span>
            </div>
            <h1>Pool Removal & Demolition in Wesley Chapel, FL</h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-main)", marginBottom: "2rem" }}>
              Accelerating your home improvement projects in Wesley Chapel. Whether you're removing an unused pool to make room for a new casita or clearing a lot for redevelopment, we provide rapid, permit-compliant demolition services.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.1)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--primary)" }}>
              <ShieldCheck size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 500 }}>
                <strong>Pasco Compliance:</strong> Most of Wesley Chapel falls under Pasco County jurisdiction, which has specific requirements for pool "abandonment" and soil density testing.
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
            <div style={{ order: 2 }}>
              <div className="icon-box">
                <HardHat size={32} />
              </div>
              <h2>High-Speed Suburban Demolition</h2>
              <p>
                As one of the fastest-growing areas in Florida, Wesley Chapel properties are constantly evolving. We specialize in **rapid-deployment pool removal** that respects your neighborhood's HOA rules and minimizes disruption to your neighbors.
              </p>
              <p>
                Our process includes full utility coordination and <strong>engineered backfilling</strong> to ensure your property remains eligible for future building permits (sheds, extensions, or guest houses).
              </p>
              
              <div style={{ marginTop: "2rem" }}>
                <h4 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                   <Droplets size={20} color="var(--primary)" />
                   Pasco Water Management
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                   We ensure every Wesley Chapel project accounts for local drainage patterns. Our final grading process ensures that after the pool is gone, your yard remains well-drained and stable during Florida's heavy rain season.
                </p>
              </div>
            </div>
            
            <div style={{ order: 1, background: "white", padding: "3rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Wesley Chapel Communities</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                 We serve all major master-planned developments in the Wesley Chapel / Pasco area:
              </p>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {[
                  "Meadow Pointe",
                  "Seven Oaks",
                  "Epperson (Lagoon Area)",
                  "Wiregrass Ranch",
                  "Union Park",
                  "Country Walk",
                  "Northwood",
                  "Saddlebrook"
                ].map((area) => (
                  <div key={area} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                    <MapPin size={14} color="var(--secondary)" />
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
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>Official Resources for Wesley Chapel Residents</h2>
            <p>Know the rules before you break ground in Pasco County.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <Link href="/resources/pasco-pool-permits" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Pasco Permit Guide</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Specific documentation and inspection requirements for Wesley Chapel homes.</p>
            </Link>
            <Link href="/resources/hillsborough-pool-permits" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Hillsborough Permits</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>For properties on the southern edge of Wesley Chapel in Hillsborough County.</p>
            </Link>
            <Link href="/pool-removal-cost-tampa" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Cost & Pricing</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>What to expect for investment and turnaround time in the 2026 market.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
