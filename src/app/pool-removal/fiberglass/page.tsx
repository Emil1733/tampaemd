import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, Truck, HardHat, Droplets, AlertCircle, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fiberglass Pool Removal Tampa | Lifting & Disposal Specialists",
  description: "Expert fiberglass pool removal in Tampa, FL. We handle the unique lifting, transport, and disposal requirements for fiberglass shells. Get an instant quote.",
  alternates: {
    canonical: "/pool-removal/fiberglass",
  },
};

export default function FiberglassRemoval() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Truck size={20} />
              <span>Specialized Shell Removal</span>
            </div>
            <h1>Fiberglass Pool Removal & Disposal in Tampa</h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Removing a fiberglass pool is a precision operation. Unlike concrete pools that are broken down into rubble, fiberglass shells require careful lifting, cutting, and specialized disposal to ensure no contamination or yard damage occurs.
            </p>

            <div style={{ background: "rgba(255,183,3,0.1)", padding: "1.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--secondary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <AlertCircle size={20} color="var(--secondary)" /> 
                  The "Popping" Risk
               </h3>
               <p style={{ fontSize: "0.95rem", margin: 0 }}>
                  In Tampa's high water table, a fiberglass pool can literally "float" out of the ground if drained improperly. We use pressure-relief stabilization before extraction to protect your property.
               </p>
            </div>

            <h2>Our Fiberglass Extraction Process</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2rem" }}>
               {[
                  { 
                    title: "Suction-Break & Lifting", 
                    desc: "We use specialized rigging to break the suction between the shell and the sandy backfill, carefully lifting the fiberglass out to minimize ground disturbance." 
                  },
                  { 
                    title: "Segmented Cutting", 
                    desc: "To ensure safe transport and disposal, the shell is professionally segmented using fiber-containment tools, preventing fiberglass dust from spreading in your yard." 
                  },
                  { 
                    title: "Hazardous-Free Disposal", 
                    desc: "We transport all fiberglass materials to certified Florida waste facilities equipped to handle composite materials, following all environmental protocols." 
                  }
               ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                     <div style={{ fontWeight: 800, color: "var(--primary)", fontSize: "1.25rem" }}>0{i+1}</div>
                     <div>
                        <h4 style={{ margin: 0 }}>{step.title}</h4>
                        <p style={{ margin: "0.5rem 0 0", color: "var(--text-muted)", fontSize: "0.9rem" }}>{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
            <div className="glass-card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
               <h4 style={{ marginBottom: "1rem" }}>Technical Considerations</h4>
               <ul style={{ listStyle: "none", padding: 0.5, fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--secondary)" /> Rapid 2-day extraction</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--secondary)" /> Concrete collar demolition</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--secondary)" /> Advanced dewatering support</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--secondary)" /> Full yard grading included</li>
               </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* COMPARISON PILLAR */}
      <section className="section bg-surface">
         <div className="container">
            <div className="grid grid-cols-2 gap-12 items-center">
               <div style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
                  <h3 style={{ marginBottom: "1.5rem" }}>Fiberglass vs. Concrete Removal</h3>
                  <p style={{ fontSize: "0.95rem" }}>Many homeowners aren't sure which method they need. While fiberglass is faster to remove, it requires more precision in transport.</p>
                  <table style={{ width: "100%", marginTop: "2rem", borderCollapse: "collapse" }}>
                     <thead>
                        <tr style={{ borderBottom: "1px solid var(--border)" }}>
                           <th style={{ textAlign: "left", padding: "1rem 0" }}>Feature</th>
                           <th style={{ textAlign: "left", padding: "1rem 0" }}>Fiberglass</th>
                           <th style={{ textAlign: "left", padding: "1rem 0" }}>Concrete</th>
                        </tr>
                     </thead>
                     <tbody style={{ fontSize: "0.9rem" }}>
                        <tr style={{ borderBottom: "1px solid var(--border)" }}>
                           <td style={{ padding: "0.75rem 0" }}>Timeframe</td>
                           <td style={{ padding: "0.75rem 0" }}>1–2 Days</td>
                           <td style={{ padding: "0.75rem 0" }}>3–5 Days</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid var(--border)" }}>
                           <td style={{ padding: "0.75rem 0" }}>Disposal</td>
                           <td style={{ padding: "0.75rem 0" }}>Composite Hub</td>
                           <td style={{ padding: "0.75rem 0" }}>Clean Fill Lab</td>
                        </tr>
                        <tr>
                           <td style={{ padding: "0.75rem 0" }}>Price</td>
                           <td style={{ padding: "0.75rem 0" }}>Typically Lower</td>
                           <td style={{ padding: "0.75rem 0" }}>Standard</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div>
                  <h2>Ready to reclaim your backyard?</h2>
                  <p>Our fiberglass-specific teams are equipped with the specialized saws, cranes, and transport trucks needed to handle Tampa shell removals with zero mess.</p>
                  <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                     <Link href="/contact" className="btn btn-primary">Request a Site Visit</Link>
                     <Link href="/resources/high-water-table-dewatering" className="btn btn-outline">Learn About Dewatering</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
