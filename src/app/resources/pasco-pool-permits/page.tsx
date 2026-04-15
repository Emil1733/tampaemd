import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { HardHat, FileText, CheckCircle, ShieldCheck, Info, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pasco County Pool Removal Permits | Wesley Chapel & Land O' Lakes",
  description: "Official guide to pool removal permits in Pasco County, FL. Learn about the permit application, inspections, and safety requirements.",
  alternates: {
    canonical: "/resources/pasco-pool-permits",
  },
};

export default function PascoPermits() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <ShieldCheck size={20} />
              <span>Pasco County Regulatory Guide</span>
            </div>
            <h1>Pasco County Pool Removal Permits & Requirements</h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                For homeowners in Wesley Chapel, Land O' Lakes, and New Port Richey, the <strong>Pasco County Building Construction Services</strong> department governs pool removals. They require specific proof of safe utility termination and structural abandonment.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--secondary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Info size={20} color="var(--secondary)" /> 
                  Key Pasco Codes
               </h3>
               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>Structural Puncture:</strong> Mandatory bottom-drilling (typically 3-foot holes) to prevent water retention in the old pool shell.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>Abandonment vs Demolition:</strong> Pasco has distinct definitions for "filling in" versus "hauling away." We handle both paths.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>Final Elevation:</strong> The city must verify that the final grade does not create standing water or neighbor runoff.</span>
                  </li>
               </ul>
            </div>

            <h2>How We Manage Your Pasco Permit</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.5rem" }}>
               {[
                  { title: "Application & Engineering", text: "We submit the demolition application with Pasco County, including a site plan showing the pool's location and utility capped points." },
                  { title: "In-Progress Inspection", text: "An inspector verifies the shell has been perforated and utility service (electrical/gas) is safely capped off." },
                  { title: "Final Compliance Sign-Off", text: "Verified backfill to grade. We ensure your permit is 'Completed' so there are no issues during future title searches." }
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
               <h4 style={{ marginBottom: "1rem" }}>Communities Covered</h4>
               <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  This authority covers the following Pasco County municipalities:
               </p>
               <div className="grid grid-cols-2" style={{ gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                  <Link href="/tampa-service-areas/wesley-chapel" style={{ color: "var(--primary)" }}>Wesley Chapel</Link>
                  <span>Land O' Lakes</span>
                  <span>Lutz (Pasco Side)</span>
                  <span>New Port Richey</span>
                  <span>Zephyrhills</span>
                  <span>Odessa</span>
               </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
