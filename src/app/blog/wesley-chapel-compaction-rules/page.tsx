import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { HardHat, FileText, CheckCircle, ShieldCheck, Info, Activity, Target, Waves, HelpCircle, Microscope, TreePine, Gavel, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Wesley Chapel Pool Removal Compaction Rules | Pasco Geotechnical Guide",
  description: "The definitive engineering guide to pool demolition compaction standards, geotechnical certifications, and Pasco County building codes in Wesley Chapel, FL.",
  alternates: {
    canonical: "/blog/wesley-chapel-compaction-rules",
  },
};

export default function WesleyChapelCompactionBlog() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the compaction testing requirements for pool removal in Wesley Chapel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pasco County requires a certified compaction report showing at least 95% to 98% Modified Proctor density (ASTM D1557) for each 10-inch soil lift, stamped by a licensed Florida Professional Engineer (P.E.)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use native backyard soil as backfill for pool demolition in Pasco County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, no. Native soil in Wesley Chapel often contains organic silts or clay lenses that shrink, swell, or retain water. Clean A-3 silica sand or A-1 select fill is required to ensure stability."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a Standard and Modified Proctor compaction test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard Proctor (ASTM D698) uses less compaction energy. Pasco County structural rules mandate the Modified Proctor (ASTM D1557) test, which uses higher impact energy to simulate structural loading capacity."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[
        { name: "Blog", href: "/blog" },
        { name: "Wesley Chapel Compaction Rules", href: "/blog/wesley-chapel-compaction-rules" }
      ]} />

      {/* HERO SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <HardHat size={20} />
              <span>Pasco County Geotechnical Standard</span>
            </div>
            <h1>Wesley Chapel Pool Removal Compaction & Geotechnical Rules</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--text-main)" }}>
              As Wesley Chapel has expanded from rural flatwoods into a booming suburban corridor, local land management practices have grown highly technical. In Pasco County, pool removal is governed by strict structural compaction mandates designed to protect municipal infrastructure, prevent sinkholes, and preserve property values.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2.5rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.3rem", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <ClipboardCheck size={24} color="var(--primary)" /> 
                  Pasco County Compliance Mandates
               </h3>
               <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  To successfully pass inspection and close out a residential pool demolition permit in Wesley Chapel, the contractor must supply:
               </p>
               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Permit #010 Residential Demolition:</strong> Must specify whether the removal is a full extraction or a partial abandonment.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Modified Proctor Compaction Report (ASTM D1557):</strong> Certified by a licensed Florida Professional Engineer (P.E.).</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Water Management Plan:</strong> Standard Southwest Florida Water Management District (SWFWMD) siltation limits must be followed during dewatering.</span>
                  </li>
               </ul>
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
          </aside>
        </div>
      </section>

      {/* GEOLOGICAL PROFILE */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center" }}>1. The Geotechnical Context of Wesley Chapel</h2>
            <div className="grid grid-cols-2 gap-12">
               <div>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.9 }}>
                     Wesley Chapel’s soil profile is very different from coastal Pinellas County or South Tampa silts. The region features **Tavares fine sands**, **Basinger soils**, and **Myakka sands** underlaid by clayey lenses and limestone strata at varying depths. 
                     <br /><br />
                     This creates a complex drainage matrix. Clay lenses act as water-retention boundaries, trapping rainfall and creating shallow, perched water tables. If a pool cavity is backfilled with unengineered soil, water will pool in the loose fill, triggering **differential settlement** or subsurface soil migration (often called piping), which eventually leads to sinkage in the yard.
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Wesley Chapel Soil Specifications</h4>
                  <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem" }}>
                     <li style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}><strong>Surficial Sand Layer:</strong> High hydraulic conductivity, drains quickly.</li>
                     <li style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}><strong>Hawthorn Group Clay Lenses:</strong> Low permeability, creates perched water table risk.</li>
                     <li style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}><strong>Karst Risk:</strong> Moderately high sinkhole vulnerability in north Pasco County due to shallow limestone structures.</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACTION REGULATIONS */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>2. Modified Proctor (ASTM D1557) vs. Standard Proctor</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
               Many residential contractors run a "Standard Proctor" test (ASTM D698) because it requires less compaction energy. However, for structural stabilization in Pasco County, the **Modified Proctor test (ASTM D1557)** is the required engineering benchmark.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Standard Proctor (ASTM D698)</h4>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                     Applies approximately 12,400 ft-lbf/ft³ of compactive effort. Useful for general agricultural fields or light turf backfills, but insufficient for supporting structural footprints, concrete pool pads, or residential ADUs.
                  </p>
               </div>
               <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Modified Proctor (ASTM D1557)</h4>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                     Applies 56,250 ft-lbf/ft³ of compactive effort—roughly 4.5 times more energy. This test simulates the extreme pressures generated by structural loads, ensuring the compacted sand will support future building projects.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACKFILL MATERIAL SPEC */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Soil Material Rules: The Clean A-3 Sand Specification</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                You cannot fill a pool cavity with just any dirt. Native Pasco soil often contains high organic matter, pine roots, and silts which rot and compress over time. 
                <br /><br />
                Wesley Chapel building inspectors require **Clean A-3 Silica Sand** or **A-1 select material**. This soil type features a uniform grain configuration, which allows excess moisture to drain freely and enables optimal soil grain interlocking under mechanical compaction.
              </p>
              <div style={{ background: "rgba(255, 183, 3, 0.1)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255, 183, 3, 0.2)" }}>
                 <p style={{ fontWeight: 700, margin: 0, color: "var(--primary-dark)" }}>⚠️ THE TRASH DIRT HAZARD</p>
                 <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", margin: 0 }}>
                    Using uncertified "fill dirt" (often sourced from nearby road construction sites) containing concrete chunks, plastic, or organic clay will result in compaction failure. The county inspector will deny the permit close-out, forcing an expensive excavation and re-fill.
                 </p>
              </div>
            </div>
            <div style={{ position: "relative" }}>
               <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                  <Microscope size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                  <h3>Geotechnical Lab Testing</h3>
                  <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                     Our soil is sent to a certified lab to establish the moisture-density curve. Compacting soil at its **Optimum Moisture Content (OMC)** is the only way to achieve 98% Proctor stability.
                  </p>
                  <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Contact a Geotechnical Expert</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP BY STEP LIFT COMPACTION */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>4. The 10-Inch Lift Compaction Protocol</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
               To achieve structural stability, soil must be built up in sequential, compressed layers (lifts).
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card" style={{ padding: "2.5rem", background: "white" }}>
              <div style={{ background: "rgba(2, 62, 138, 0.05)", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <span style={{ fontWeight: 800, color: "var(--primary)" }}>01</span>
              </div>
              <h4>Subgrade Stabilization</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                 After punching the bottom of the pool shell, the base must be compacted to ensure the subgrade is firm before any fill sand is placed.
              </p>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem", background: "white" }}>
              <div style={{ background: "rgba(2, 62, 138, 0.05)", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <span style={{ fontWeight: 800, color: "var(--primary)" }}>02</span>
              </div>
              <h4>10-Inch Sand Placement</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                 Sand is placed in lifts of 10 to 12 inches. Attempting to compact a layer thicker than 12 inches results in a soft middle zone that will shift under load.
              </p>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem", background: "white" }}>
              <div style={{ background: "rgba(2, 62, 138, 0.05)", width: "50px", height: "50px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <span style={{ fontWeight: 800, color: "var(--primary)" }}>03</span>
              </div>
              <h4>Vibratory Compaction</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                 We use dual-drum vibratory rollers and high-frequency plate compactors to align the sand grains, forcing air and excess water out of the soil matrix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACTION TESTING */}
      <section className="section">
         <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Compaction Verification Methods</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid var(--border)" }}>
               <thead>
                  <tr style={{ background: "var(--surface-alt)" }}>
                     <th style={{ padding: "1.5rem", textAlign: "left" }}>Method</th>
                     <th style={{ padding: "1.5rem", textAlign: "center" }}>ASTM Standard</th>
                     <th style={{ padding: "1.5rem", textAlign: "left" }}>Why It's Used</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}><strong>Nuclear Density Gauge</strong></td>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)", textAlign: "center" }}>ASTM D6938</td>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Provides instantaneous dry density and moisture content measurements on-site. The standard method for municipal inspections.</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}><strong>Dynamic Cone Penetrometer (DCP)</strong></td>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)", textAlign: "center" }}>ASTM D6951</td>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Measures shear strength of the soil profile. Used in restricted-access yards where heavy nuclear gauges cannot safely transit.</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}><strong>Sand Cone Method</strong></td>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)", textAlign: "center" }}>ASTM D1556</td>
                     <td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>The physical baseline test. Very accurate but slow; used to calibrate nuclear testing instruments.</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* BLOG FAQ SECTION */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  Wesley Chapel Permitting & Compaction FAQ
               </h2>
               <p>Answers to Technical Questions About Pasco County Demolition</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "Is a compaction test required if I don't plan to build?", a: "Yes, Pasco County requires a compaction report for all pool demolitions to ensure the ground is stable enough to prevent sinkholes or adjacent fence collapses." },
                  { q: "How long does compaction testing take?", a: "The field test takes about 1-2 hours. The lab report and engineering stamp are typically delivered within 48 to 72 hours." },
                  { q: "What happens if a compaction test fails?", a: "The failed lift must be excavated, re-wetted or dried to hit its optimum moisture content, and re-compacted before the next layer can be placed." },
                  { q: "Does the City of Wesley Chapel issue separate permits?", a: "Wesley Chapel is an unincorporated census-designated place, meaning all permits are processed directly through the Pasco County Building Department." },
                  { q: "What is a dynamic cone penetrometer?", a: "It is a hand-held probe that drives a steel cone into the ground using a sliding hammer, measuring soil resistance to verify deep compaction layers." },
                  { q: "Can a pool removal damage my septic system?", a: "Many Wesley Chapel properties use septic tanks. We map out utility corridors to ensure heavy excavation equipment remains outside the septic drain field." }
               ].map((faq, i) => (
                  <div key={i} className="faq-item">
                     <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.q}</h4>
                     <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <ShieldCheck size={64} style={{ margin: "0 auto 2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Secure Your Wesley Chapel Geotechnical Certification</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Our team handles the entire process: municipal permits, utility disconnections, A-3 sand backfilling, P.E. compaction testing, and final permit close-out.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get Compaction Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
