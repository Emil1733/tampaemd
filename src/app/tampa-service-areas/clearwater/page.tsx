import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Sun, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Removal Clearwater, FL | Coastal Excavation Experts",
  description: "Licensed pool removal in Clearwater, FL. Specialized in coastal sand stabilization, Pinellas County permits, and dewatering. Instant cost estimates available.",
  alternates: {
    canonical: "/tampa-service-areas/clearwater",
  },
};

export default function ClearwaterPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Sun size={20} />
              <span>North Pinellas Coastal Authority</span>
            </div>
            <h1>Pool Removal & Demolition in Clearwater, FL</h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-main)", marginBottom: "2rem" }}>
              Clearing the way for new outdoor living spaces in Clearwater. From Countryside estates to Island Estates waterfront rentals, we handle the complex engineering and permitting required for coastal pool abandonment.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.1)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--primary)" }}>
              <Droplets size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 500 }}>
                <strong>Coastal Engineering:</strong> Clearwater's sugar-sand soil requires specific layered compaction to prevent "settling" after the pool is removed.
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
              <h2>Clearwater's Unique Soil & Drainage Conditions</h2>
              <p>
                Removing a pool in Clearwater isn't just about digging—it's about managing <strong>coastal hydrology</strong>. The high sand content in North Pinellas soil means that water moves through the ground quickly, but it also means the ground can shift if the backfill isn't moisture-controlled and vibrated into place.
              </p>
              
              <div style={{ marginTop: "2rem" }}>
                <h4 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                   <ShieldCheck size={20} color="var(--primary)" />
                   City of Clearwater Compliance
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                   Whether you are in the city limits or unincorporated Clearwater, we manage the full **Pinellas County permit cycle**. This includes utility disconnections, pre-fill inspections, and the final "Certificate of Completion" required for future property sales.
                </p>
              </div>
            </div>
            
            <div style={{ order: 1, background: "white", padding: "3rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Clearwater Priority Areas</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                 Our specialized crews are available for pool removals across the greater Clearwater area:
              </p>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {[
                  "Clearwater Beach",
                  "Island Estates",
                  "Countryside",
                  "Sand Key",
                  "Belleair",
                  "Safety Harbor",
                  "Highpoint",
                  "Coachman Ridge"
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
            <h2>Expert Resources for Clearwater Property Owners</h2>
            <p>Don't risk your property's foundation with an unlicensed removal.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <Link href="/resources/pinellas-pool-permits" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Pinellas Permit Help</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>A deep dive into the Hillsborough vs. Pinellas permitting differences for Clearwater residents.</p>
            </Link>
            <Link href="/pool-removal-cost-tampa" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Estimated Costs</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>How pool type and coastal access impact your final demolition estimate in 2026.</p>
            </Link>
            <Link href="/pool-demolition-process" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Our 4-Step Process</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Learn how we ensure 100% soil stabilization and drainage control on every job.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
