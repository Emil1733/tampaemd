import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { HardHat, FileText, CheckCircle, ShieldCheck, Info, Map } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hillsborough County Pool Removal Permits | Professional Guide",
  description: "Learn about pool removal and demolition permits in Hillsborough County, FL. Comprehensive guide on site plans, inspections, and dewatering rules.",
  alternates: {
    canonical: "/resources/hillsborough-pool-permits",
  },
};

export default function HillsboroughPermits() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <ShieldCheck size={20} />
              <span>Verified Regulatory Resource</span>
            </div>
            <h1>Hillsborough County Pool Removal Permits & Rules</h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                In Hillsborough County, removing a pool is legally classified as a <strong>Major Demolition</strong>. This requires a specific permit to ensure that the underground utilities are capped, the soil is compacted to engineering standards, and the drainage does not adversely affect your neighbors.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--secondary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Info size={20} color="var(--secondary)" /> 
                  Mandatory Requirements
               </h3>
               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>Demolition Permit:</strong> Must be pulled by a state-licensed contractor.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>Site Plan:</strong> A sketch showing the pool location and proximity to property lines.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>811 Utility Call:</strong> Mandatory verification of gas, electric, and cable lines.</span>
                  </li>
               </ul>
            </div>

            <h2>The Permitting Process</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.5rem" }}>
               {[
                  { title: "Application Submission", text: "We file the demolition permit application with the Hillsborough County Building Department, including the required engineering documentation for backfill compaction." },
                  { title: "Utility Capping Inspection", text: "Before fill dirt is added, an inspector may verify that all electrical and plumbing service to the pool has been properly terminated." },
                  { title: "Final Inspection & Closeout", text: "Once the pool is removed and the area graded, a final inspection is done to ensure the property meets county drainage codes." }
               ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                     <div style={{ fontWeight: 800, color: "var(--secondary)", fontSize: "1.25rem" }}>0{i+1}</div>
                     <div>
                        <h4 style={{ margin: 0 }}>{step.title}</h4>
                        <p style={{ margin: "0.5rem 0 0", color: "var(--text-muted)" }}>{step.text}</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
            <div className="glass-card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
               <h4 style={{ marginBottom: "1rem" }}>Local Areas Covered</h4>
               <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  This permitting guide applies to the following unincorporated areas and municipalities within Hillsborough County:
               </p>
               <div className="grid grid-cols-2" style={{ gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                  <Link href="/tampa-service-areas/brandon" style={{ color: "var(--primary)" }}>Brandon</Link>
                  <span>Riverview</span>
                  <span>Town 'n' Country</span>
                  <span>Temple Terrace</span>
                  <span>Lutz</span>
                  <span>Valrico</span>
               </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ADDITIONAL CONTENT PILLAR */}
      <section className="section section-alt">
         <div className="container">
            <div className="grid grid-cols-3 gap-8">
               <div className="text-center">
                  <FileText size={32} color="var(--primary)" style={{ margin: "0 auto 1rem" }} />
                  <h4>Documentation</h4>
                  <p style={{ fontSize: "0.9rem" }}>We handle all architectural sketches and county paperwork on your behalf.</p>
               </div>
               <div className="text-center">
                  <HardHat size={32} color="var(--primary)" style={{ margin: "0 auto 1rem" }} />
                  <h4>Safety Standards</h4>
                  <p style={{ fontSize: "0.9rem" }}>OSHA-compliant excavation and OSHA-certified heavy machinery operators.</p>
               </div>
               <div className="text-center">
                  <Map size={32} color="var(--primary)" style={{ margin: "0 auto 1rem" }} />
                  <h4>Zoning Clarity</h4>
                  <p style={{ fontSize: "0.9rem" }}>Ensuring your pool removal complies with Florida's setback and drainage laws.</p>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
