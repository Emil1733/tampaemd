import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, Droplets, HardHat, Info, ThermometerSnowflake, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High Water Table & Pool Dewatering Guide | Tampa Speciality",
  description: "Comprehensive guide to managing high water tables and dewatering during pool removal in Tampa, FL. Learn how to prevent pool popping and soil instability.",
  alternates: {
    canonical: "/resources/high-water-table-dewatering",
  },
};

export default function DewateringGuide() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Droplets size={20} />
              <span>Hydrology & Engineering Resource</span>
            </div>
            <h1>The Tampa Guide to High Water Tables & Pool Dewatering</h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                In the Tampa Bay area, groundwater management isn't just an "add-on"—it is the most critical safety factor in pool demolition. Failure to account for the local water table can lead to localized flooding, soil liquefaction, and structural damage to your home's foundation.
            </p>

            <div style={{ background: "var(--surface-alt)", padding: "2rem", borderRadius: "var(--radius-lg)", border: "2px solid rgba(0,180,216,0.2)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <AlertTriangle size={24} color="var(--primary)" /> 
                  The "Floating Pool" Phenomenon
               </h3>
               <p style={{ fontSize: "0.95rem" }}>
                  When a pool is emptied in South Tampa or coastal St. Pete, the pressure from the surrounding groundwater (hydrostatic pressure) can actually push the entire shell out of the ground. This "popping" can destroy plumbing lines and adjacent decking in seconds.
               </p>
            </div>

            <h2>Professional Dewatering Methods</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginTop: "2rem" }}>
               {[
                  { 
                    title: "Hydrostatic Valve Management", 
                    desc: "Before full demolition, we ensure the pressure-relief valves at the bottom of your pool are functional, allowing groundwater to enter the shell and equalize pressure safely." 
                  },
                  { 
                    title: "Well-Point Dewatering", 
                    desc: "For extremely wet properties, we install secondary pumps (well-points) around the pool perimeter to temporarily lower the water table locally while we perform the removal." 
                  },
                  { 
                    title: "Moisture-Controlled Compaction", 
                    desc: "Fill dirt must be added at a specific moisture content to ensure it displaces the remaining water and creates a solid, non-organic base that won't shift." 
                  }
               ].map((method, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.25rem" }}>
                     <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                        {i + 1}
                     </div>
                     <div>
                        <h4 style={{ margin: 0, fontSize: "1.1rem" }}>{method.title}</h4>
                        <p style={{ margin: "0.5rem 0 0", color: "var(--text-muted)", fontSize: "0.95rem" }}>{method.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
            <div className="glass-card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
               <h4 style={{ marginBottom: "1rem" }}>Critical Locations</h4>
               <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Dewatering is most frequently required in these high-water-table zones:
               </p>
               <div className="grid grid-cols-2" style={{ gap: "0.75rem", fontSize: "0.85rem", fontWeight: 600 }}>
                  <Link href="/tampa-service-areas/south-tampa" style={{ color: "var(--primary)" }}>South Tampa</Link>
                  <Link href="/tampa-service-areas/st-petersburg" style={{ color: "var(--primary)" }}>St. Petersburg</Link>
                  <Link href="/tampa-service-areas/riverview" style={{ color: "var(--primary)" }}>Riverview</Link>
                  <Link href="/tampa-service-areas/clearwater" style={{ color: "var(--primary)" }}>Clearwater</Link>
               </div>
            </div>
          </aside>
        </div>
      </section>

      {/* TECHNICAL DATA SECTION */}
      <section className="section" style={{ background: "white" }}>
         <div className="container">
            <div className="grid grid-cols-3 gap-8">
               <div style={{ textAlign: "center", padding: "2rem", background: "var(--surface)", borderRadius: "var(--radius-md)" }}>
                  <ThermometerSnowflake size={32} color="var(--primary)" style={{ margin: "0 auto 1.5rem" }} />
                  <h4>Saturation Monitoring</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>We monitor soil saturation levels throughout the excavation to ensure ideal backfill conditions.</p>
               </div>
               <div style={{ textAlign: "center", padding: "2rem", background: "var(--surface)", borderRadius: "var(--radius-md)" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ margin: "0 auto 1.5rem" }} />
                  <h4>Foundation Safety</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Stabilizing the water table protects your home's foundation from shifting during yard renovation.</p>
               </div>
               <div style={{ textAlign: "center", padding: "2rem", background: "var(--surface)", borderRadius: "var(--radius-md)" }}>
                  <HardHat size={32} color="var(--primary)" style={{ margin: "0 auto 1.5rem" }} />
                  <h4>Certified Crew</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Our operators are specialized in hydraulic dewatering and pump management.</p>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
