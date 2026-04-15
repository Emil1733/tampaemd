import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Waves, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Removal St. Petersburg, FL | Pinellas County Specialists",
  description: "Specialized pool removal in St. Pete. We manage Pinellas County permits, tight-access coastal demolition, and limestone soil stabilization. Get an instant quote.",
  alternates: {
    canonical: "/tampa-service-areas/st-petersburg",
  },
};

export default function StPetePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Waves size={20} />
              <span>Coastal & Pinellas County Experts</span>
            </div>
            <h1>Pool Removal & Demolition in St. Petersburg, FL</h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-main)", marginBottom: "2rem" }}>
              From historic Old Northeast bungalows to waterfront Snell Isle estates—St. Pete pool removal requires precision. We navigate tight property lines and Pinellas County's strict environmental regulations.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.1)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--primary)" }}>
              <ShieldCheck size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 500 }}>
                <strong>Strict Compliance:</strong> St. Pete requires specific tree protection zones for "Grand Oaks" and strict seawall setback reviews for waterfront removals.
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
              <h2>Solving the "Tight Access" Problem in St. Pete</h2>
              <p>
                Unlike the expansive yards in Brandon, St. Petersburg properties often have <strong>limited access</strong> due to historic alleyways, narrow driveways, and close-proximity neighbors. 
              </p>
              <p>
                We utilize "Mini-Excavator" strategies specifically designed for St. Pete's urban footprint, ensuring we can remove the concrete without damaging your home's foundation or your neighbor's fence.
              </p>
              
              <div style={{ marginTop: "2rem" }}>
                <h4 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                   <Droplets size={20} color="var(--primary)" />
                   Pinellas Coastal Geology
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                   St. Petersburg sits on a mix of <strong>limestone and marine sand</strong>. Improper backfilling can lead to "sink-pockets" during the rainy season. We use vibratory compaction and moisture-tested fill dirt to ensure your yard remains level and walkable year-round.
                </p>
              </div>
            </div>
            
            <div style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Serving All St. Pete Neighborhoods</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                 We understand the unique permitting and access nuances of each local district:
              </p>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {[
                  "Old Northeast",
                  "Snell Isle",
                  "Tierra Verde",
                  "Gulfport",
                  "Jungle Prada",
                  "Kenwood",
                  "Shore Acres",
                  "Crescent Lake"
                ].map((area) => (
                  <div key={area} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                    <CheckCircle size={14} color="var(--secondary)" />
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
            <h2>St. Petersburg Removal Resources</h2>
            <p>Essential reading for homeowners planning a yard renovation in Pinellas County.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <Link href="/resources/pinellas-pool-permits" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4>Pinellas Permit Guide</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Step-by-step requirements for residential pool abandonment in Pinellas County.</p>
            </Link>
            <Link href="/full-vs-partial-pool-removal" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4>Full vs. Partial Removal</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Which method is right for your St. Pete property type and future construction plans?</p>
            </Link>
            <Link href="/pool-removal-cost-tampa" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4>Cost Breakdown</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Detailed pricing guide for removals in the Tampa Bay region (2026 update).</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
