import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Clock, ShieldAlert, Tractor, TreePine, Activity, Target, Waves, HelpCircle, Info, HardHat, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Tampa Pool Demolition Process | 1500+ Word Engineering Guide",
  description: "The definitive guide to the pool removal process in Tampa, FL. From municipal permitting to certified soil compaction and final grading.",
  alternates: {
    canonical: "/pool-demolition-process",
  },
};

export default function DemolitionProcess() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does the pool demolition process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical residential pool demolition takes between 4 and 6 business days from mobilization to final grading."
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
        { name: "Our Process", href: "/pool-demolition-process" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Activity size={20} />
              <span>Engineered Lifecycle 2026</span>
            </div>
            <h1>The 5-Stage Tampa Pool Demolition & Backfill Process</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Pool removal in Florida is not merely a "Dig and Fill" operation. It is a complex sequence of hydrological stabilization, structural dismantling, and soil engineering. This guide breaks down our proprietary 6-Phase process, designed specifically for the unique sandy soil and high water table conditions of the Tampa Bay area.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Est. Timeline</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>4–6 Days</p>
               </div>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Permit Phase</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--secondary)" }}>10–15 Days</p>
               </div>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. PHASE-BY-PHASE DEEP DIVE */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", textAlign: "center" }}>The 6-Phase Engineering Protocol</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
               
               {/* PHASE 1: PRE-CONSTRUCTION */}
               <div className="grid grid-cols-2 gap-12 items-center">
                  <div>
                     <div style={{ display: "inline-flex", padding: "1rem", background: "rgba(0,180,216,0.1)", color: "var(--primary)", borderRadius: "50%", marginBottom: "1.5rem" }}>
                        <ShieldAlert size={32} />
                     </div>
                     <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Phase 1: Pre-Construction & Utility Termination</h3>
                     <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                        Before a single machine enters your property, we clear the legal and safety hurdles. This phase is critical for protecting your property's title and your home's structural integrity.
                     </p>
                     <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li><strong>Sunshine 811 Clearance:</strong> Coordination with all local utility providers (TECO, Tampa Water, Frontier) to mark all underground assets.</li>
                        <li><strong>Municipal Permit Filing:</strong> We handle the entire application with Hillsborough, Pinellas, or Pasco building departments.</li>
                        <li><strong>Master-Trade Termination:</strong> Licensed electricians and plumbers cap the pool lines at the source, ensuring zero leaks or electrical hazards.</li>
                     </ul>
                  </div>
                  <div className="glass-card" style={{ padding: "3rem", background: "var(--surface-alt)" }}>
                     <h4 style={{ color: "var(--primary)" }}>Phase 1 Timeline:</h4>
                     <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0.5rem 0" }}>10–15 Days</p>
                     <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Includes county review times and utility marking schedules.</p>
                  </div>
               </div>

               {/* PHASE 2: HYDROLOGICAL STABILIZATION */}
               <div className="grid grid-cols-2 gap-12 items-center">
                  <div className="glass-card" style={{ padding: "3rem", background: "var(--surface-alt)", order: 2 }}>
                     <h4 style={{ color: "var(--primary)" }}>Phase 2 Timeline:</h4>
                     <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0.5rem 0" }}>24–48 Hours</p>
                     <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Pumps run continuously to reach the required drawdown depth.</p>
                  </div>
                  <div style={{ order: 1 }}>
                     <div style={{ display: "inline-flex", padding: "1rem", background: "rgba(0,180,216,0.1)", color: "var(--primary)", borderRadius: "50%", marginBottom: "1.5rem" }}>
                        <Waves size={32} />
                     </div>
                     <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Phase 2: Hydrological Stabilization (Dewatering)</h3>
                     <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                        In Tampa, the water table isn't just high—it's active. We utilize specialized **well-point dewatering systems** to lower the local water table around the pool shell before any structural dismantling begins.
                     </p>
                     <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li><strong>Pneumatic Well Points:</strong> We install 12-15 points to ensure a dry excavation environment.</li>
                        <li><strong>EPC-Compliant Discharge:</strong> All pumped water is filtered to meet turbidity standards before entering storm drains.</li>
                        <li><strong>Hydrostatic Equalization:</strong> Preventing the pool from "popping" out of the ground during the extraction phase.</li>
                     </ul>
                  </div>
               </div>

               {/* PHASE 3: STRUCTURAL FRACTURE */}
               <div className="grid grid-cols-2 gap-12 items-center">
                  <div>
                     <div style={{ display: "inline-flex", padding: "1rem", background: "rgba(0,180,216,0.1)", color: "var(--primary)", borderRadius: "50%", marginBottom: "1.5rem" }}>
                        <Tractor size={32} />
                     </div>
                     <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Phase 3: Structural Fracture & Extraction</h3>
                     <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                        This is the "Heavy Iron" phase. Our operators utilize 20,000-lb excavators with hydraulic hammering attachments to surgically dismantle the pool structure.
                     </p>
                     <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li><strong>Shell Fragmentation:</strong> Concrete is broken into small, uniform pieces for optimal compaction or hauling.</li>
                        <li><strong>Surgical Demolition:</strong> We protect existing decks, foundations, and trees using precision maneuvering.</li>
                        <li><strong>Steel Extraction:</strong> Rebar is separated and hauled to local recycling centers to minimize environmental footprint.</li>
                     </ul>
                  </div>
                  <div className="glass-card" style={{ padding: "3rem", background: "var(--surface-alt)" }}>
                     <h4 style={{ color: "var(--primary)" }}>Phase 3 Timeline:</h4>
                     <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0.5rem 0" }}>1–2 Days</p>
                     <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Depending on material (Concrete vs. Fiberglass).</p>
                  </div>
               </div>

               {/* PHASE 4: ENGINEERED BACKFILL */}
               <div className="grid grid-cols-2 gap-12 items-center">
                  <div className="glass-card" style={{ padding: "3rem", background: "var(--surface-alt)", order: 2 }}>
                     <h4 style={{ color: "var(--primary)" }}>Phase 4 Timeline:</h4>
                     <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0.5rem 0" }}>2–3 Days</p>
                     <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Includes multiple "lifts" and mechanical compaction cycles.</p>
                  </div>
                  <div style={{ order: 1 }}>
                     <div style={{ display: "inline-flex", padding: "1rem", background: "rgba(0,180,216,0.1)", color: "var(--primary)", borderRadius: "50%", marginBottom: "1.5rem" }}>
                        <Target size={32} />
                     </div>
                     <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Phase 4: Engineered Backfill & Compaction</h3>
                     <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                        The most critical phase for long-term property stability. We haul in clean, certified A-3 sand and compact it in layered "lifts."
                     </p>
                     <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li><strong>10-Inch Lifts:</strong> We add material in thin layers, compacting each one with industrial vibratory plates.</li>
                        <li><strong>Certified Fill:</strong> Sourced from local Hillsborough quarries to match native drainage profiles.</li>
                        <li><strong>Nuclear Density Testing:</strong> Third-party verification of 98% Proctor Density for structural builds.</li>
                     </ul>
                  </div>
               </div>

               {/* PHASE 5: LASER-GUIDED GRADING */}
               <div className="grid grid-cols-2 gap-12 items-center">
                  <div>
                     <div style={{ display: "inline-flex", padding: "1rem", background: "rgba(0,180,216,0.1)", color: "var(--primary)", borderRadius: "50%", marginBottom: "1.5rem" }}>
                        <TreePine size={32} />
                     </div>
                     <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Phase 5: Laser-Guided Grading & Hydro-Seeding</h3>
                     <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                        We restore the aesthetics and drainage of your yard. This ensures that rainwater flows away from your home's foundation and into the city swales.
                     </p>
                     <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li><strong>Precision Sloping:</strong> Establishing a 2% minimum grade toward the required discharge points.</li>
                        <li><strong>Site Restoration:</strong> Hauling away all remaining debris and performing a "Final Sweep" of the property.</li>
                        <li><strong>Sod or Seed:</strong> Installation of St. Augustine sod or premium hydro-seed for rapid lawn recovery.</li>
                     </ul>
                  </div>
                  <div className="glass-card" style={{ padding: "3rem", background: "var(--surface-alt)" }}>
                     <h4 style={{ color: "var(--primary)" }}>Phase 5 Timeline:</h4>
                     <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0.5rem 0" }}>1 Day</p>
                     <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Final aesthetic closeout and cleanup.</p>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. LOGISTICAL MASTERY */}
      <section className="section bg-surface-alt">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Phase 6: Final Closeout & Archival</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    Once the physical work is done, our office completes the administrative loop. This is what protects your home equity during a future sale.
                 </p>
                 <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem", background: "white", padding: "1.5rem", borderRadius: "12px" }}>
                       <CheckCircle2 size={24} color="var(--primary)" />
                       <div>
                          <strong>Certificate of Completion:</strong> We coordinate the final inspection with the county and secure the legal document proving the pool has been lawfully removed.
                       </div>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", background: "white", padding: "1.5rem", borderRadius: "12px" }}>
                       <TrendingUp size={24} color="var(--primary)" />
                       <div>
                          <strong>Tax Assessment Update:</strong> We provide you with the documentation needed to request a property tax reassessment, typically lowering your annual liability.
                       </div>
                    </div>
                 </div>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>The "Turnkey" Promise</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   We don't just dig a hole; we manage a complete property transformation. From the first permit filing to the final piece of sod, our project managers are on-site ensuring every engineering standard is met.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Request a Project Timeline</Link>
              </div>
           </div>
        </div>
      </section>

      {/* SOIL RE-NUTRIENT PROTOCOL */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>7. Phase 7: Precision Landscaping & Soil Re-Nutrient</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  The final phase of a truly engineered pool removal is the restoration of the "Soil Biome." Standard A-3 sand is an excellent compaction material, but it is biologically inert. If you simply lay sod over raw sand, the grass will struggle to establish a deep root system, leading to "Brown Patches" during the intense Tampa summer.
                  <br /><br />
                  We provide an optional **Soil Re-Nutrient Injection**, where we mix a 2-inch layer of organic compost and micronutrients into the top 6 inches of the compacted fill. This creates a "Transition Zone" that allows for rapid root penetration and ensures your new lawn becomes a permanent, lush asset to your property. By treating the final grade as a biological project rather than just a dirt project, we ensure that your property value lift is immediate and visible.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Mycorrhizal Inoculation</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We utilize beneficial fungi in our top-soil mix to enhance water retention and nutrient uptake, reducing your new lawn's water requirements by up to 30% during the first year.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Hydro-Seed Custom Blending</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        For large rural lots in **Lutz** or **Valrico**, we provide custom hydro-seed blends designed specifically for the local sun-exposure and drainage profiles, ensuring 95% coverage within 45 days.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FLOODPLAIN COMPLIANCE DEEP DIVE */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <ShieldAlert size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Floodplain Compliance: The 'No-Rise' Rule</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     Properties within the **FEMA 100-Year Floodplain** in Tampa are subject to the "No-Rise" rule. This means your pool removal project cannot increase the base flood elevation of the surrounding properties.
                     <br /><br />
                     In a **Full Extraction**, we perform a volumetric analysis to ensure that the amount of backfill material perfectly matches the volume of the pool shell and water removed. This keeps your property in strict compliance with federal flood insurance requirements and prevents any drainage-related litigation with neighbors. We provide a certified **Volumetric Audit** as part of our final project closeout packet for all floodplain properties.
                  </p>
               </div>
               <div>
                  <h2>Hillsborough Watershed Environmental Monitoring</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     Whether you are in the **Cypress Creek** watershed or near the **Alafia River**, our demolition protocol includes real-time environmental monitoring. We utilize biodegradable hydraulic oils in our excavators to ensure that even in the unlikely event of a line failure, zero toxic chemicals enter the Florida soil. This level of stewardship is why we are the preferred contractor for environmentally sensitive properties across the Bay.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE PROCESS FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Demolition Process FAQ
               </h2>
               <p>25+ Technical & Logistical Answers for Tampa Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "What is the very first step of the process?", a: "The site survey and utility marking. We must identify every underground line (gas, water, electric, fiber) before any heavy machinery arrives." },
                  { q: "How do you protect my existing septic system?", a: "We map out the drain field and tank location. Our operators utilize specialized routes and weight-distributing mats to ensure zero pressure is applied to your septic assets." },
                  { q: "What is 'Hydrostatic Pressure' and how do you manage it?", a: "It is the pressure groundwater exerts on the pool shell. We manage it through well-point dewatering, lowering the water table to a safe level before structural dismantling." },
                  { q: "Do you remove the pool lights and electrical panels?", a: "Yes. All electrical components are decommissioned by a licensed electrician, and the wiring is capped at the source to prevent future hazards." },
                  { q: "How much noise should I expect?", a: "Demolition is loud, particularly during the hydraulic hammering phase. We limit this work to the hours of 9:00 AM to 4:00 PM to respect your neighbors." },
                  { q: "What happens to the old pool water?", a: "It is pumped through a filtration system (to remove silt and chemicals) and discharged into the municipal storm drain according to EPC standards." },
                  { q: "Can I use the reclaimed yard for a driveway?", a: "Yes, but you must opt for an engineered full removal with certified compaction to ensure the ground can support the weight of vehicles." },
                  { q: "Will you need access to my house?", a: "No. All work is performed externally. We only require access to your electrical panel if we need to disconnect the pool pump sub-panel." },
                  { q: "What is a 'Certificate of Completion'?", a: "It is the official document issued by the building department proving the project was permitted, inspected, and closed out correctly." },
                  { q: "How do I request a tax reassessment?", a: "Once we provide the Certificate of Completion, you submit it to the Hillsborough or Pinellas Property Appraiser to update your record and lower your taxes." }
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
          <Clock size={64} className="icon-center" style={{ marginBottom: "2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready for a Precision Demolition?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of Tampa families who have reclaimed their yards with the region's top-rated demolition team. Transparent timelines, engineered results.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Request a Project Timeline</Link>
          </div>
        </div>
      </section>
    </>
  );
}
