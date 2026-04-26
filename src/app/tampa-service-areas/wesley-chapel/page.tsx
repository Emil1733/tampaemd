import React from "react";
import type { Metadata } from "next";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, FastForward, Info, Target, Activity, Waves, HelpCircle, Microscope, TreePine, Anchor, Home } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal Wesley Chapel, FL | Pasco County Authority",
  description: "The #1 engineered pool removal service in Wesley Chapel. Specializing in Epperson Lagoon-area logistics, Pasco County permitting, and structural backfill.",
  alternates: {
    canonical: "/tampa-service-areas/wesley-chapel",
  },
};

export default function WesleyChapel() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool removal cost in Wesley Chapel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Wesley Chapel, pool removal typically costs between $8,000 and $16,000, depending on the material (concrete vs fiberglass) and backyard access constraints."
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
        { name: "Service Areas", href: "/tampa-service-areas" },
        { name: "Wesley Chapel", href: "/tampa-service-areas/wesley-chapel" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div className="animate-fade-in">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <FastForward size={20} />
              <span>Pasco's Growth Authority</span>
            </div>
            <h1>Wesley Chapel Pool Removal & Residential Lot Preparation</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              As Wesley Chapel evolves into a premier residential hub, the value of outdoor living space has surpassed that of aging, high-maintenance pools. We provide the structural engineering and Pasco County permit mastery required to reclaim your yard for modern utility—from Epperson Lagoon lots to the estates of Seven Oaks.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
               <Link href="/contact" className="btn btn-primary">Get Your Wesley Chapel Audit</Link>
               <a href="tel:8135550199" className="btn btn-outline">Call (813) 555-0199</a>
            </div>
          </div>
          <div className="glass-card" style={{ padding: "3rem", background: "var(--primary-dark)", color: "white" }}>
            <h3 style={{ color: "white" }}>The Pasco Precision Guarantee</h3>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> 98% Proctor Density Compaction</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> Pasco County Permit Management</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> HOA & CDD Compliance (Epperson/Wiregrass)</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> 5-Day Completion Timeline</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. GEOLOGY SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
               <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. The \"Crystal Lagoon\" Effect & Yard Utility</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  In neighborhoods like **Epperson** and **Mirada**, the proximity to world-class community lagoons has changed the homeowner math. Private, high-maintenance pools are being replaced with high-value "Yard Assets" like ADUs, outdoor kitchens, and turf-based entertainment zones.
               </p>
               <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--secondary)" }}>
                  <h4 style={{ marginBottom: "0.5rem" }}>The Pasco Soil Profile</h4>
                  <p style={{ fontSize: "0.9rem", margin: 0 }}>
                     Wesley Chapel features a mix of Cypress-swamp edges and high-compaction clays. We utilize site-specific backfill mixtures to ensure your reclaimed yard drains perfectly and supports the heavy load of future home additions.
                  </p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="glass-card" style={{ padding: "2rem" }}>
                  <Microscope size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h5>Karst Topography Analysis</h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>We evaluate the sub-surface stability to prevent sinkhole formation during high-vibration demolition.</p>
               </div>
               <div className="glass-card" style={{ padding: "2rem" }}>
                  <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h5>Swale Drainage Logic</h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Ensuring your new yard integrates seamlessly with Pasco's master drainage swales.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOGISTICS SECTION */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div style={{ order: 2 }}>
               <h2 style={{ fontSize: "2.5rem" }}>2. Surgical Logistics for New Construction Turnovers</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                  Many Wesley Chapel homes are in high-density, master-planned phases. Our crews are experts at "Zero-Infiltration Logistics"—moving heavy equipment through 5-foot side yards without disturbing neighbors or damaging utilities.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div style={{ display: "flex", gap: "1rem" }}>
                     <Target color="var(--primary)" />
                     <div>
                        <strong>HOA Liaison</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>We coordinate directly with community boards to manage noise and access.</p>
                     </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                     <HardHat color="var(--primary)" />
                     <div>
                        <strong>Utility Capping</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Safe termination of modern gas, electrical, and automation lines.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="glass-card" style={{ padding: "3rem", background: "white", order: 1 }}>
               <h3 style={{ marginBottom: "1.5rem" }}>The 5-Day Wesley Chapel Sprint</h3>
               <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Day 1: Mobilization</strong>
                     <p style={{ fontSize: "0.85rem" }}>Site protection (mats) and utility decommissioning.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Day 2-3: Demolition</strong>
                     <p style={{ fontSize: "0.85rem" }}>Structural extraction and material hauling.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Day 4: Backfill</strong>
                     <p style={{ fontSize: "0.85rem" }}>98% Proctor compaction in 10-inch lifts.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Day 5: Final Grade</strong>
                     <p style={{ fontSize: "0.85rem" }}>Laser-leveling and county inspection sign-off.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERMITTING SECTION */}
      <section className="section">
         <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Navigating Pasco County Permitting</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
                    Pasco County's building department (especially in the West Pasco/New Port Richey and Central Wesley Chapel hubs) has strict requirements for pool "Abandonment" vs. "Full Extraction." We manage the entire administrative lifecycle.
                 </p>
                 <div className="grid grid-cols-2 gap-12 text-left">
                    <div className="glass-card" style={{ padding: "2.5rem" }}>
                       <h4 style={{ color: "var(--primary)" }}>Lagoon Area Access Protocols</h4>
                       <p style={{ fontSize: "0.9rem" }}>
                          In the high-density phases of Epperson, side-yard access can be as narrow as 48 inches. We utilize specialized **ultra-compact loaders** that can move 150 cubic yards of fill dirt through these \"needle-eye\" openings without damaging your home or your neighbor's property.
                       </p>
                    </div>
                    <div className="glass-card" style={{ padding: "2.5rem" }}>
                       <h4 style={{ color: "var(--primary)" }}>Structural Load-Bearing Certification</h4>
                       <p style={{ fontSize: "0.9rem" }}>
                          For Epperson clients building guest houses where the pool once sat, we provide a certified **98% Modified Proctor Density** report. This is a higher standard than the county minimum and ensures zero settlement under your new structural slab.
                       </p>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* WIREGRASS RANCH STRUCTURAL SPECS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Activity size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Wiregrass Ranch: Soil Engineering Standards</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     The **Wiregrass Ranch** corridor (zip code 33543) features a mix of well-drained sands and deep-seated clay pockets. A \"one-size-fits-all\" backfill approach here is dangerous. 
                     <br /><br />
                     Our **Wiregrass Soil Protocol** involves a custom-blended fill mixture that matches the native soil's drainage profile. This prevents \"Hydraulic Imbalance,\" where your reclaimed yard holds more or less water than the surrounding lot, ensuring your lawn stays green and your foundation stays dry.
                  </p>
               </div>
               <div>
                  <h2>Pasco County Topographical Compliance</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     Wesley Chapel’s modern drainage plans rely on precise \"Lot-to-Street\" swale systems. We utilize **laser-level grading** to ensure that after your pool is removed, the final grade of your yard perfectly aligns with the community's master drainage plan, protecting you from Pasco County code enforcement violations.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. HYPER-LOCAL NEIGHBORHOOD COVERAGE */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>5. Precision Service Coverage: Wesley Chapel Neighborhoods</h2>
            <p style={{ color: "var(--text-muted)" }}>Rapid-deployment logistics for Pasco County's premier master-planned communities.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "Epperson", d: "The 'Lagoon' lifestyle pivot. Reclaiming backyards for ADUs and luxury pavilions." },
              { n: "Wiregrass Ranch", d: "Managing large-scale suburban logistics and specialized soil stabilization." },
              { n: "Seven Oaks", d: "Surgical tight-access demolition for established luxury residential lots." },
              { n: "Meadow Pointe", d: "Managing mature suburban lot lines and large-scale property expansions." },
              { n: "Union Park", d: "Advanced soil stabilization and 98% Proctor compaction for new structures." },
              { n: "Estancia", d: "High-stakes estate removals with specialized foundation shoring and logistics." },
              { n: "Winding Ridge", d: "Rapid-deployment removal for new construction turnovers and expansions." },
              { n: "Northwood", d: "Managing expansive lot logistics and complex utility decommissioning." }
            ].map((neigh, i) => (
              <div key={i} style={{ background: "white", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.5rem" }}>{neigh.n}</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>{neigh.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MASSIVE FAQ SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={32} color="var(--primary)" />
              Wesley Chapel Pool Removal FAQ
            </h2>
            <p>Expert Answers for Pasco County Homeowners</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "How much does pool removal cost in Wesley Chapel?", a: "Residential removals in Wesley Chapel typically range from $8,000 to $16,000. Factors include backyard access and whether you choose a partial or full extraction." },
              { q: "Do I need a permit in Pasco County?", a: "Yes. All pool removals in Wesley Chapel require a Pasco County building permit. We handle the entire application and inspection cycle for you." },
              { q: "Can you remove a pool in Epperson?", a: "Yes. We coordinate with the Epperson HOA and ensure all work respects the community's high-density logistics and noise ordinances." },
              { q: "Will the machinery damage my driveway?", a: "No. We utilize heavy-duty composite mats to distribute the weight of our machines, ensuring zero damage to your concrete or pavers." },
              { q: "How long does the process take?", a: "A typical Wesley Chapel project takes 4 to 6 business days, including the time required for county inspections." },
              { q: "Can I build an ADU where the pool was?", a: "Yes, but only with a **Full Engineered Removal** and 95% Proctor density compaction to support the new foundation." },
              { q: "What is the 'Water Table' risk in Wesley Chapel?", a: "Significant in some areas near the Hillsborough River headwaters. We utilize specialized dewatering pumps to ensure a safe and stable demolition." },
              { q: "Do you remove the pool cage (lanai)?", a: "Yes. We disassemble and recycle the aluminum structure as part of our turnkey project management." },
              { q: "What type of fill dirt do you use?", a: "We use clean A-3 certified sand, which matches the natural drainage profile of Pasco County's native soils." },
              { q: "Is your company insured for Pasco projects?", a: "Yes. We carry $2M in general liability and workers' comp specifically for heavy excavation and demolition work." },
              { q: "Can you remove a fiberglass pool in Wiregrass?", a: "Yes. Fiberglass requires specific extraction techniques to prevent collapsing the surrounding sandy soil, which we specialize in." },
              { q: "What happens to the pool pump and heater?", a: "We remove all mechanical equipment, capping the lines at the source and disposing of the units properly." }
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
          <FastForward size={64} className="icon-center" style={{ marginBottom: "2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Wesley Chapel Backyard?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of Pasco families who have traded high maintenance for beautiful, usable outdoor living space.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get a Local Wesley Chapel Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
