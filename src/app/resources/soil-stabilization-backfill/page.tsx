import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, HardHat, Info, Mountain, Layers, Activity } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Backfill & Soil Stabilization Tampa | Engineered Compaction",
  description: "Professional soil stabilization and engineered backfill for pool removal in Tampa, FL. Learn how we prevent soil settling and prepare your land for building.",
  alternates: {
    canonical: "/resources/soil-stabilization-backfill",
  },
};

export default function SoilStabilization() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Layers size={20} />
              <span>Engineered Land Restoration</span>
            </div>
            <h1>Engineered Backfill & Soil Stabilization in Tampa</h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                What goes into the hole is just as important as what came out. In Tampa's sandy terrain, improper backfilling leads to yard collapse, "sink-pockets," and unbuildable land. We provide engineered compaction that restores your property's structural integrity.
            </p>

            <div style={{ background: "white", padding: "2rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", marginBottom: "3rem", boxShadow: "var(--shadow-sm)" }}>
               <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Activity size={20} color="var(--primary)" /> 
                  The 95% Standard
               </h3>
               <p style={{ fontSize: "0.95rem", margin: 0 }}>
                  For a lot to be considered "buildable" after pool removal, the soil must achieve a **95% Proctor density**. We use nuclear density testing and vibration-controlled lifts to meet this gold standard for every project.
               </p>
            </div>

            <h2>Our 3-Layer Compaction Strategy</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginTop: "2rem" }}>
               {[
                  { 
                    title: "Certified Clean Fill Sourcing", 
                    desc: "We exclusively use virgin Florida sand and clean fill, screened to ensure no organic material (which causes rot/settling) enters your yard." 
                  },
                  { 
                    title: "12-Inch Lift Vibration", 
                    desc: "We never fill a pool in one go. We add soil in 12-inch 'lifts,' using heavy-duty vibratory plates to remove air pockets and pack the particles tight." 
                  },
                  { 
                    title: "Final Grade & Natural Drainage", 
                    desc: "The final layer is graded to match your property's existing topography, ensuring the new land sheds water rather than pooling it." 
                  }
               ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.25rem" }}>
                     <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "8px", background: "var(--surface-alt)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "var(--primary)" }}>
                        {i + 1}
                     </div>
                     <div>
                        <h4 style={{ margin: 0, fontSize: "1.1rem" }}>{step.title}</h4>
                        <p style={{ margin: "0.5rem 0 0", color: "var(--text-muted)", fontSize: "0.95rem" }}>{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
            <div className="glass-card" style={{ marginTop: "2rem", padding: "2rem" }}>
               <h4 style={{ marginBottom: "1rem" }}>Why 'Dirt' Isn't Enough</h4>
               <ul style={{ listStyle: "none", padding: 0.5, fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", gap: "0.75rem" }}><ShieldCheck size={18} color="var(--secondary)" /> <span>Prevents "Zombie" sinkholes from forming weeks later.</span></li>
                  <li style={{ display: "flex", gap: "0.75rem" }}><ShieldCheck size={18} color="var(--secondary)" /> <span>Ensures yard is safe for heavy patio pavers or ADUs.</span></li>
                  <li style={{ display: "flex", gap: "0.75rem" }}><ShieldCheck size={18} color="var(--secondary)" /> <span>Maintains property resale value through certification.</span></li>
               </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section bg-surface text-center">
         <div className="container">
            <Mountain size={48} color="var(--primary)" style={{ margin: "0 auto 2rem" }} />
            <h2>Build with Confidence on Your New Land</h2>
            <p style={{ maxWidth: "700px", margin: "0 auto 2rem" }}>
               Whether you're planning a new garden or a structural expansion, our engineered soil stabilization ensures your yard is as solid as the day your home was built.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
               <Link href="/contact" className="btn btn-primary">Request a Density Quote</Link>
               <Link href="/pool-removal-cost-tampa" className="btn btn-outline">View Removal Costs</Link>
            </div>
         </div>
      </section>
    </>
  );
}
