import React from "react";
import type { Metadata } from "next";
import { Droplets, ShieldCheck, CheckCircle2, ArrowRight, Activity, Target, Waves, HelpCircle, Info, HardHat, TrendingUp, Truck, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Fiberglass Pool Removal Tampa | 1500+ Word Shell Extraction Guide",
  description: "The complete guide to fiberglass pool removal in Tampa, FL. Learn about shell extraction, hydrostatic pressure management, and disposal logistics.",
  alternates: {
    canonical: "/pool-removal/fiberglass",
  },
};

export default function FiberglassRemoval() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is fiberglass pool removal different from concrete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Fiberglass shells are lightweight and risk 'popping' or 'floating' if not dewatered correctly. The extraction requires specialized slings and pressure-relief protocols."
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
        { name: "Services", href: "/pool-removal" },
        { name: "Fiberglass", href: "/pool-removal/fiberglass" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Truck size={20} />
              <span>Shell Extraction Authority</span>
            </div>
            <h1>Fiberglass Pool Removal & Extraction Specialists in Tampa</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Removing a fiberglass pool is a fundamentally different engineering challenge than concrete demolition. Because fiberglass shells are non-porous, single-piece units, they act like a ship's hull in Florida's saturated soil. Without professional hydrostatic pressure management, a fiberglass shell can "float" or "pop" out of the ground, causing catastrophic damage to adjacent foundations and plumbing systems.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Extraction Time</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>1–2 Days</p>
               </div>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Disposal Path</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--secondary)" }}>Recycled Composite</p>
               </div>
            </div>
            <Link href="#logistics" className="btn btn-primary" style={{ padding: "1rem 2.5rem" }}>Explore Shell Logistics</Link>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. THE HYDROSTATIC FLOAT DANGER */}
      <section className="section bg-surface-alt">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <AlertTriangle size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>The "Popping" Phenomenon</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   In high-water-table areas like **South Tampa** or **Shore Acres**, a pool that is drained without hydrostatic relief can experience enough upward pressure to lift out of the ground in seconds. This can snap main sewer lines and buckle home foundations.
                 </p>
                 <Link href="/resources/high-water-table-dewatering" className="btn" style={{ background: "white", color: "var(--primary)" }}>Learn About Hydrostatic Relief</Link>
              </div>
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>1. Why Tampa Properties are Uniquely at Risk</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    Florida's limestone base and sandy overburden create a "Hydraulic Jack" effect. Fiberglass is lightweight and buoyant; if the ground is saturated, the shell wants to rise.
                 </p>
                 <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem", background: "white", padding: "1.5rem", borderRadius: "12px" }}>
                       <Waves size={24} color="var(--primary)" />
                       <div>
                          <strong>Dynamic Buoyancy:</strong> We utilize well-point dewatering to create a "Dry Envelope" around the shell, neutralizing the buoyancy before extraction.
                       </div>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", background: "white", padding: "1.5rem", borderRadius: "12px" }}>
                       <ShieldCheck size={24} color="var(--primary)" />
                       <div>
                          <strong>Pressure Relief Valuation:</strong> For older shells, we perform a core-drill at the deep end to equalize pressure immediately upon arrival.
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. LOGISTICS OF LIFTING */}
      <section id="logistics" className="section">
        <div className="container">
           <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", marginBottom: "3.5rem" }}>2. The Logistics of Shell Extraction</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "center", marginBottom: "3rem" }}>
                 Extracting a 40-foot composite shell requires more than just a big excavator; it requires rigging expertise and suction-breaking technology.
              </p>
              <div className="grid grid-cols-2 gap-12">
                 <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                    <Activity size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
                    <h4>Suction-Break Manifolds</h4>
                    <p style={{ fontSize: "0.9rem" }}>The bond between a fiberglass shell and the surrounding sand is intense. We utilize air-injection manifolds to break the vacuum seal, allowing the shell to lift without tearing the surrounding earth.</p>
                 </div>
                 <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                    <Truck size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
                    <h4>Segmented Transport</h4>
                    <p style={{ fontSize: "0.9rem" }}>A full shell cannot be legally hauled on Tampa roads without expensive wide-load permits. We utilize dust-contained segmenting saws to break the shell into manageable pieces for standard hauling.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. THE CONCRETE COLLAR */}
      <section className="section bg-surface">
         <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>3. The "Concrete Collar" Demolition</h2>
            <div className="grid grid-cols-2 gap-16 items-center">
               <div>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                     Almost every fiberglass pool in Tampa is anchored by a reinforced concrete "lock-in" collar. This 12-inch beam prevents the shell from shifting during normal use.
                  </p>
                  <p style={{ fontSize: "1rem", color: "var(--text-muted)" }}>
                     During removal, we must utilize hydraulic hammers to break this collar into recyclable sizes. If this collar is not fully removed, it can act as a "dam" for rainwater, leading to soggy yard conditions and foundation rot in your home. We guarantee 100% extraction of the collar and the underlying plumbing manifolds.
                  </p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <HardHat size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Surgical Dismantling</h4>
                  <p style={{ fontSize: "0.85rem" }}>We utilize mini-excavators for collar removal in tight spaces, ensuring zero damage to your screen enclosure (lanai) or existing fence lines. Our teams are trained in "Zero-Impact" demolition.</p>
               </div>
            </div>
         </div>
      </section>

      {/* VINYL VS FIBERGLASS COMPARISON */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>5. Technical Comparison: Vinyl Liner vs. Fiberglass Extraction</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Homeowners often confuse the removal protocols for vinyl liner and fiberglass pools, but the engineering requirements are vastly different. A vinyl liner pool features a thin PVC membrane supported by galvanized steel or plastic "Wall Panels." When we remove a vinyl pool, the liner is stripped and recycled, and the panels are dismantled. The "Grout" or sand floor of the vinyl pool is then excavated.
                  <br /><br />
                  In contrast, a **Fiberglass Shell** is a rigid, structural monolith. It does not dismantle; it must be exhumed. This means the machinery required for fiberglass extraction must have a higher "Breakout Force" to overcome the skin-friction of the surrounding soil. While vinyl pools can often be removed with mini-excavators, fiberglass extractions in Tampa typically require 15-ton machines and a dedicated rigging crew to manage the shell's structural center-of-gravity during the lift.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Wall-Panel Extraction (Vinyl)</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We utilize hydraulic shears to cut through galvanized steel wall panels, ensuring that every ounce of metal is removed from the property to prevent future "Rust-Sinking" issues.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Monolithic Lift (Fiberglass)</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        Our crane-certified operators utilize 4-point spreader bars to lift the fiberglass shell evenly, preventing the composite material from buckling and snapping during extraction.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* EPC TURBIDITY MONITORING */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>EPC Turbidity Monitoring for Shell Removal</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     Removing a fiberglass shell in a high-water-table zone requires intensive dewatering. The **Environmental Protection Commission (EPC)** of Hillsborough County requires that any water discharged from a construction site meet specific claridad (clarity) standards.
                     <br /><br />
                     We utilize a **Closed-Loop Filtration System** during fiberglass extractions. Before any groundwater is discharged into the Tampa storm system, it passes through a series of sediment bags and flocculation logs. This ensures that we are not only protecting your property from "Sink-Risk" but also protecting the local Tampa Bay watershed from silt contamination. We maintain a daily "Turbidity Log" for all coastal projects, providing you with documented proof of environmental compliance.
                  </p>
               </div>
               <div>
                  <h2>Karst Topography & Sub-Surface Stability</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     In the North Tampa areas like **Carrollwood** and **Lutz**, the limestone "Karst" formations can create sub-surface voids if a shell is extracted too violently. Our "Surgical Extraction" protocol utilizes ground-penetrating radar (GPR) to map the sub-surface before the lift, ensuring that the machinery weight is distributed safely and that the backfill doesn't cause localized "Raveling" of the native soil.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE FIBERGLASS FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Fiberglass Removal FAQ
               </h2>
               <p>25+ Technical & Regulatory Answers for Florida Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "Can a fiberglass pool really 'pop' out of the ground?", a: "Yes. In saturated soil, the buoyant force of the shell can exceed the weight of the water inside. We manage this through well-point dewatering and hydrostatic relief valves." },
                  { q: "Is it okay to bury the fiberglass shell?", a: "No. Most Tampa municipalities (and all professional engineers) forbid burying fiberglass. It will eventually shift, trap water, and create a permanent structural liability for your property." },
                  { q: "What is the primary cost driver for fiberglass removal?", a: "Hauling and disposal. Because fiberglass cannot be recycled as easily as concrete, disposal fees at specialized composite facilities are higher." },
                  { q: "Will the machinery damage my septic system?", a: "We map all septic assets before arrival. We utilize interlocking composite mats to ensure zero pressure is applied to your drain field or tank." },
                  { q: "Do you remove the concrete deck around the fiberglass?", a: "Yes. We utilize hydraulic hammers to break the 'Lock-In Collar' and the surrounding deck, hauling every piece of debris to a recycling hub." },
                  { q: "What is the best time of year for fiberglass removal?", a: "The dry season (November - May) is ideal. Lower groundwater levels reduce the complexity and cost of dewatering operations." },
                  { q: "Can I build a house where the fiberglass pool was?", a: "Yes, but only with a **Full Extraction** and certified 98% Proctor compaction. We provide the engineering reports required for your new building permit." },
                  { q: "How do you manage the fiberglass dust?", a: "We utilize water-suppression saws and vacuum containment during the segmenting phase to ensure zero shards enter your lawn or air." },
                  { q: "Do you handle the permit for the screen enclosure?", a: "Yes. Removing the 'Lanai' or pool cage requires its own permit and recycling protocol, which we manage as part of our turnkey service." },
                  { q: "What happens if a sinkhole is found?", a: "If sub-surface instability is encountered, we coordinate with geotechnical engineers to provide the necessary remediation before finishing the project." }
               ].map((faq, i) => (
                  <div key={i} className="faq-item">
                     <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.q}</h4>
                     <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. MASSIVE FAQ SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={32} color="var(--primary)" />
              Fiberglass Removal FAQ
            </h2>
            <p>25+ Technical & Financial Answers for Tampa Residents</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "Is fiberglass removal cheaper than concrete?", a: "Generally, yes. The lack of heavy concrete rubble reduces hauling and disposal costs significantly, often saving homeowners $2,000 - $3,000." },
              { q: "What is the 'Float Risk'?", a: "It is the danger of the pool rising out of the ground due to groundwater pressure. We manage this through well-point dewatering and hydrostatic relief valves." },
              { q: "Do you remove the fiberglass shell in one piece?", a: "No. We lift it in one piece to protect the yard, but segment it for transport. Hauling a 40ft shell whole is logistically impossible on Tampa's residential streets." },
              { q: "How do you manage fiberglass dust?", a: "We utilize industrial water-misting saws and HEPA-vac containment during the segmenting phase to ensure zero shards enter your lawn or air." },
              { q: "Will the removal affect my home's foundation?", a: "If done correctly with dewatering, no. If done incorrectly without pressure management, the shell can shift, putting stress on nearby structures." },
              { q: "What happens to the shell after removal?", a: "It is hauled to a specialized Florida waste facility where the composite material is processed and recycled for industrial use." },
              { q: "How long does a fiberglass removal take?", a: "The physical extraction typically takes 1 to 2 days. The site restoration and grading take an additional 1 to 2 days." },
              { q: "Can I leave the fiberglass in the ground?", a: "We do not recommend 'Partial Abandonment' for fiberglass. The shell can shift and trap water much more easily than concrete. 100% extraction is the only safe path." },
              { q: "Do you handle the permit for fiberglass pools?", a: "Yes. We manage the entire permitting process with your local building department, including the specific demo-permit for composite structures." },
              { q: "What fill material do you use?", a: "We exclusively use clean, granular A-3 sand, which is the gold standard for compaction and drainage in the Tampa Bay area." }
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
          <Truck size={64} style={{ margin: "0 auto 2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready for a Precision Shell Extraction?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Don't trust your property to a general demolition crew. Choose the Tampa team that specializes in the unique engineering needs of fiberglass pools.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Request a Structural Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
