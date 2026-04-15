import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Home, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Removal Riverview, FL | Fast Estimates & Backyard Grading",
  description: "Licensed pool removal in Riverview, FL. We specialize in rapid suburban demolition, Alafia river water table management, and engineered backfill. Get a quote today.",
  alternates: {
    canonical: "/tampa-service-areas/riverview",
  },
};

export default function RiverviewPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Home size={20} />
              <span>Riverview Suburban Specialist</span>
            </div>
            <h1>Pool Removal & Demolition in Riverview, FL</h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-main)", marginBottom: "2rem" }}>
              Creating space for what matters in your Riverview backyard. Whether you're making room for a new outdoor kitchen or removing an older pool in Summerfield or Panther Trace, we handle the full demolition and compaction process.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.1)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--primary)" }}>
              <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 500 }}>
                <strong>Backyard Grading:</strong> We don't just fill holes; we grade your Riverview property to ensure water flows efficiently away from your home's foundation.
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
                <Droplets size={32} />
              </div>
              <h2>Local Water Control & Alafia River Proximity</h2>
              <p>
                Riverview properties, especially those near the Alafia River or local lakes, often contend with significant seasonal groundwater changes. Removing a pool requires a contractor who understands how to manage these <strong>active water tables</strong>.
              </p>
              <p>
                Our team provides specialized dewatering services and high-density soil stabilization to ensure your new land is ready for landscaping, sod, or future construction projects.
              </p>
              
              <div style={{ marginTop: "2rem" }}>
                <h4 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                   <ShieldCheck size={20} color="var(--primary)" />
                   Hillsborough County Permit Support
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                   We take the administrative burden off your plate. From utility capping to the final county inspection, our team handles all <strong>Riverview pool removal permits</strong> to ensure your project is 100% compliant and legal.
                </p>
              </div>
            </div>
            
            <div style={{ order: 1, background: "white", padding: "3rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Riverview Service Areas</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                 Serving all major communities and developments in the Riverview region:
              </p>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {[
                  "Summerfield",
                  "Panther Trace",
                  "Boyette",
                  "Triple Creek",
                  "South Bend",
                  "FishHawk Ranch",
                  "Waterset",
                  "Lucaya Lake"
                ].map((area) => (
                  <div key={area} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--secondary)", borderRadius: "50%" }}></div>
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
            <h2>Planning Your Riverview Yard Project?</h2>
            <p>Connect with our local experts for a site-specific safety review.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <Link href="/resources/hillsborough-pool-permits" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>County Permit Guide</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Everything you need to know about demolition codes in Hillsborough County.</p>
            </Link>
            <Link href="/pool-removal-cost-tampa" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Pricing Estimates</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>A breakdown of costs for pool removal in the Riverview and Brandon areas.</p>
            </Link>
            <Link href="/tampa-service-areas/brandon" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Brandon Services</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>We also serve our neighbors in Brandon with the same high-tier demolition standards.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
