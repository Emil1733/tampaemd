import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, TreePine, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Removal Carrollwood, FL | Soil Stabilization & Tree Protection",
  description: "Specialized pool removal in Carrollwood, FL. Experts in sinkhole-prone soil stabilization, Hillsborough County permit handling, and mature tree protection. Get a quote.",
  alternates: {
    canonical: "/tampa-service-areas/carrollwood",
  },
};

export default function CarrollwoodPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <TreePine size={20} />
              <span>North Tampa / Carrollwood Specialists</span>
            </div>
            <h1>Pool Removal & Demolition in Carrollwood, FL</h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-main)", marginBottom: "2rem" }}>
              Professional pool demolition for Carrollwood's established neighborhoods. We specialize in navigating mature landscapes and providing the engineered soil stabilization required for North Tampa's unique geology.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.1)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--primary)" }}>
              <ShieldCheck size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 500 }}>
                <strong>Tree Inventory:</strong> We coordinate with Hillsborough County to ensure your mature oaks and landscaping are protected during the demolition process.
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
              <h2>Soil Stabilization & Sinkhole Prevention</h2>
              <p>
                The Carrollwood area, including neighborhoods around Lake Carroll and Lake Magdalene, has a specific geological profile. Improperly backfilling a pool in North Tampa can lead to secondary soil settling or "sink-pockets" if air is trapped in the fill.
              </p>
              <p>
                Our process uses <strong>certified clean fill</strong> and vibratory plate compaction at every 12-inch layer. This ensures the resulting land is stable enough for future structures, such as a detached garage or a guest house.
              </p>
              
              <div style={{ marginTop: "2rem" }}>
                <h4 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                   <MapPin size={20} color="var(--primary)" />
                   Serving Greater Carrollwood
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                   We provide full-service pool removal across Carrollwood, Carrollwood Village, and the surrounding North Tampa corridor, handling all <strong>Hillsborough County permits</strong> and safety inspections.
                </p>
              </div>
            </div>
            
            <div style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Carrollwood Service Districts</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                 Our specialized crews understand the access and landscape nuances of these local communities:
              </p>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {[
                  "Carrollwood Village",
                  "Original Carrollwood",
                  "Lake Magdalene",
                  "Forester Hills",
                  "Woodbriar Village",
                  "Orange Grove",
                  "Northdale",
                  "Steins Garden"
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
            <h2>Protect Your North Tampa Property</h2>
            <p>Trust the experts who understand Carrollwood's unique environmental requirements.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <Link href="/resources/hillsborough-pool-permits" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>County Permit Guide</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Detailed steps for pulling demolition permits in Hillsborough County.</p>
            </Link>
            <Link href="/pool-demolition-process" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Demolition Process</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Explore our 4-step system for safe, legal pool removal and yard restoration.</p>
            </Link>
            <Link href="/contact" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)" }}>Free Quote</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "1rem" }}>Request a site visit to discuss your specific Carrollwood yard conditions.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
