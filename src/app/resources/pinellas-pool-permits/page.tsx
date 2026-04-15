import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { HardHat, FileText, CheckCircle, ShieldCheck, Info, MapPoint } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pinellas County Pool Removal Permits | St. Pete & Clearwater Rules",
  description: "Official guide to pool removal permits in Pinellas County. Learn about the permit application, inspections, and the Certificate of Completion.",
  alternates: {
    canonical: "/resources/pinellas-pool-permits",
  },
};

export default function PinellasPermits() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <ShieldCheck size={20} />
              <span>Pinellas County Regulatory Guide</span>
            </div>
            <h1>Pinellas County Pool Removal Permits & Requirements</h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Property owners in St. Petersburg, Clearwater, and unincorporated Pinellas must adhere to strict environmental and safety codes when removing an in-ground pool. In Pinellas, the focus is heavily on <strong>impervious surface ratios</strong> and <strong>certified inspection sign-offs</strong>.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--secondary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Info size={20} color="var(--secondary)" /> 
                  Must-Know Rules
               </h3>
               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>Certificate of Completion:</strong> Mandatory for closing the permit and ensuring the property can be sold without title issues.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>Tree Protection:</strong> Pinellas is strict about protective fencing for root zones before any machinery enters the yard.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                     <CheckCircle size={18} color="var(--primary)" style={{ marginTop: "0.1rem" }} />
                     <span><strong>Waterfront Laws:</strong> Proximity to Boca Ciega Bay or the Intracoastal requires additional seawall stability reviews.</span>
                  </li>
               </ul>
            </div>

            <h2>Pinellas Permitting Phases</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.5rem" }}>
               {[
                  { title: "Application & Site Survey", text: "We submit a survey highlighting the pool to be removed and the proposed restoration area, ensuring drainage compliance." },
                  { title: "Pre-Fill Inspection", text: "A Pinellas County inspector must verify that the pool shell has been properly punctured and all electrical lines are disconnected." },
                  { title: "Final Compaction Review", text: "After backfilling, we provide proof of proper soil compaction to secure your final government sign-off." }
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
               <h4 style={{ marginBottom: "1rem" }}>Municipalities Served</h4>
               <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  This permitting authority covers the following Pinellas districts:
               </p>
               <div className="grid grid-cols-2" style={{ gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                  <Link href="/tampa-service-areas/st-petersburg" style={{ color: "var(--primary)" }}>St. Petersburg</Link>
                  <span>Clearwater</span>
                  <span>Largo</span>
                  <span>Pinellas Park</span>
                  <span>Palm Harbor</span>
                  <span>Dunedin</span>
               </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-surface">
         <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
               <h2>Why Licensed Pinellas Demolition Matters</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="glass-card" style={{ padding: "2rem" }}>
                  <h4 style={{ color: "var(--primary)" }}>Property Resale Value</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                     Unclosed pool permits are one of the most common reasons home sales fail in St. Pete. We guarantee a clean "Certificate of Completion" to protect your home's equity.
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "2rem" }}>
                  <h4 style={{ color: "var(--primary)" }}>Liability Protection</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                     Improperly filled pools can become "sinkholes." Pinellas County laws ensure the fill is porous enough to prevent water buildup while being strong enough to support construction.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
