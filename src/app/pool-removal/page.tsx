import React from "react";
import type { Metadata } from "next";
import { Droplets, ShieldCheck, CheckCircle2, ArrowRight, Activity, Target, Waves, HelpCircle, Info, HardHat, TrendingUp, Truck } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Pool Removal Tampa | 1500+ Word Comprehensive Extraction Guide",
  description: "The definitive guide to professional pool removal in Tampa, FL. Learn about engineered extractions, dewatering, and property value reclamation.",
  alternates: {
    canonical: "/pool-removal",
  },
};

export default function PoolRemoval() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to remove a pool in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Tampa pool removals cost between $9,000 and $18,000, depending on the extraction method and groundwater conditions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the pool removal process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard residential project takes 4 to 6 business days from the start of mobilization to final grading."
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
        { name: "Services", href: "/pool-removal" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <HardHat size={20} />
              <span>Tampa's Engineered Demolition Authority</span>
            </div>
            <h1>Tampa Pool Removal & Full Property Reclamation Services</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Removing a swimming pool in Florida is a high-stakes engineering project. With rising groundwater tables, complex municipal codes, and the critical need for soil stability, choosing the right extraction methodology is essential for protecting your property's long-term equity. We provide specialized, turnkey solutions for homeowners across the Tampa Bay region.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Project Duration</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>4–6 Days</p>
               </div>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Compaction Standard</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--secondary)" }}>98% Proctor</p>
               </div>
            </div>
            <Link href="#methodologies" className="btn btn-primary" style={{ padding: "1rem 2.5rem" }}>Explore Removal Methods</Link>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. THREE METHODOLOGIES */}
      <section id="methodologies" className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center" }}>1. Extraction Methodologies: Choosing Your Outcome</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "3rem", textAlign: "center" }}>
              In the Tampa market, the methodology you choose dictates the future utility of your land. We specialize in three distinct levels of removal, each designed for specific homeowner goals.
            </p>
            <div className="grid grid-cols-3 gap-8">
               <div className="glass-card" style={{ padding: "2.5rem", borderTop: "4px solid var(--primary)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}><Link href="/full-vs-partial-pool-removal" style={{ color: 'inherit' }}>Partial Abandonment</Link></h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                    Commonly known as a "Fill-In," this involves removing the top 24-36 inches of the pool shell, puncturing the floor for drainage, and backfilling with clean sand. 
                  </p>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                     <li>Cost-Effective ($9k–$11k)</li>
                     <li>Ideal for lawn/garden use</li>
                     <li>Must be disclosed at sale</li>
                  </ul>
               </div>
               <div className="glass-card" style={{ padding: "2.5rem", borderTop: "4px solid var(--secondary)" }}>
                  <h4 style={{ color: "var(--secondary)", marginBottom: "1rem" }}><Link href="/full-vs-partial-pool-removal" style={{ color: 'inherit' }}>Full Structural Removal</Link></h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                    100% of the pool shell, plumbing, and steel is extracted and hauled to a recycling facility. The cavity is filled with engineered material.
                  </p>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                     <li>Removes all disclosure liability</li>
                     <li>Restores property to original state</li>
                     <li>Investment ($12k–$16k)</li>
                  </ul>
               </div>
               <div className="glass-card" style={{ padding: "2.5rem", borderTop: "4px solid var(--accent)" }}>
                  <h4 style={{ color: "var(--accent)", marginBottom: "1rem" }}>Engineered Extractions</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                    Full extraction followed by layered compaction monitored by a geotechnical engineer. Mandatory for <Link href="/blog/building-after-pool-removal" style={{ color: 'var(--accent)', fontWeight: 600 }}>building additions or ADUs</Link>.
                  </p>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                     <li>Certified 98% Proctor Density</li>
                     <li>Permit-ready foundation base</li>
                     <li>Maximizes property equity</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVERSION MID-ROLL */}
      <section style={{ background: "var(--primary-dark)", padding: "3rem 0" }}>
         <div className="container responsive-flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "white" }}>
               <h3 style={{ color: "white", marginBottom: "0.5rem" }}>Need a Technical Site Audit?</h3>
               <p style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>Speak with an engineer about your South Tampa or Pinellas property today.</p>
            </div>
            <Link href="/contact" className="btn btn-accent">Request Free Site Audit</Link>
         </div>
      </section>

      {/* 3. MATERIAL-SPECIFIC ENGINEERING */}
      <section className="section bg-surface-alt">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>2. Material-Specific Engineering: Concrete vs. Fiberglass</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    The physical composition of your pool dictates the machinery and dewatering protocol required for safe extraction.
                 </p>
                 <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem", background: "white", padding: "1.5rem", borderRadius: "12px" }}>
                       <Activity size={24} color="var(--primary)" />
                       <div>
                          <strong>Concrete / Gunite Extraction:</strong> Requires 20,000-lb hydraulic hammers to break the reinforced shell. Disposal fees for concrete debris (typically 40+ tons) are a major factor in the quote.
                       </div>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", background: "white", padding: "1.5rem", borderRadius: "12px" }}>
                       <Waves size={24} color="var(--primary)" />
                       <div>
                          <strong>Fiberglass Shell Extraction:</strong> High risk of "Tidal Popping" during extraction. We utilize specialized sling-cranes and pressure-relief dewatering to remove the shell without destabilizing the surrounding earth.
                       </div>
                    </div>
                 </div>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <Target size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>Precision Extraction Protocol</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   Our crews specialize in "Surgical Demolition" in tight-access neighborhoods. We utilize interlocking composite mats to protect your driveway and existing landscaping from heavy equipment.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Request a Technical Audit</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 4. THE HYDROLOGICAL CORE */}
      <section className="section">
        <div className="container">
           <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", marginBottom: "3.5rem" }}>3. Why Dewatering is the Core of Our Service</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "center", marginBottom: "3rem" }}>
                 In Tampa, the water table isn't just high—it's dynamic. If you remove a pool shell without dewatering, the surrounding sand will "liquefy" and flow into the void, causing foundational shifts in your home.
              </p>
              <div className="grid grid-cols-2 gap-12">
                 <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                    <Droplets size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
                    <h4>Pneumatic Well-Point Systems</h4>
                    <p style={{ fontSize: "0.9rem" }}>We install 12-15 well points around the perimeter of the pool before demolition starts. These pumps run for 72+ hours to ensure the soil is dry and stable for compaction.</p>
                 </div>
                 <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                    <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
                    <h4>Geotechnical Verification</h4>
                    <p style={{ fontSize: "0.9rem" }}>Once the shell is out, we verify the base soil density before adding a single pound of backfill. This prevents the "Muck-Sinking" issues common in older Tampa developments.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* COMMERCIAL POOL DEMOLITION AUTHORITY */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>6. Commercial Pool Demolition: High-Capacity Extraction</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Removing a commercial pool for an apartment complex, hotel, or community center in Tampa requires a level of logistical planning that exceeds residential projects. These pools often feature massive "Bond Beams" and high-pressure filtration systems that must be professionally decommissioned to prevent municipal water contamination.
                  <br /><br />
                  Our commercial division manages the specific **FDEP (Florida Department of Environmental Protection)** filings required for large-scale removals. We utilize 40,000-lb excavators and a dedicated hauling fleet to move 200+ tons of debris in a matter of days, minimizing the disruption to your tenants or guests. Every commercial project is backed by a multi-point engineering inspection to ensure the land is stabilized for future amenity reconstruction or parking expansion.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Industrial Utility Capping</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        Commercial pools often feature 3-phase electrical systems and high-pressure gas lines for large-scale heaters. We coordinate with **TECO** and local master plumbers to ensure every utility is terminated safely and according to code.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>ADA Compliance Restructuring</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        When a commercial pool is removed, the surrounding deck and accessibility ramps must be re-graded to maintain ADA compliance. We provide the laser-leveling required to ensure a seamless, safe transition for the entire property.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* RIPARIAN ZONE PROTECTION TECHNICAL SPECS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Riparian Zone Protection: Hillsborough River</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     Properties within the **Riparian Zone** of the Hillsborough River are subject to intense environmental scrutiny. Demolishing a pool here requires a "Double-Silt" barrier system to prevent any concrete dust or chlorinated water from entering the local watershed.
                     <br /><br />
                     We utilize **closed-loop dewatering**, where water is pumped through a series of sediment tanks before being recharged into the ground at an EPC-approved distance from the river bank. This prevents "Turbidity Surcharges" and ensures that your project is environmentally invisible to the local ecosystem.
                  </p>
               </div>
               <div>
                  <h2>Karst Topography & Sub-Surface Stability</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     In the North Tampa and Lutz areas, the limestone "Karst" formations can create sub-surface voids during heavy excavation. We utilize ground-penetrating radar (GPR) for all projects in these zones to ensure that the machinery weight is distributed safely and that the backfill doesn't cause localized "Raveling" of the native soil.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE TAMPA REMOVAL FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Tampa Pool Removal FAQ
               </h2>
               <p>25+ Technical & Regulatory Answers for Florida Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
                {[
                  { q: "What is the primary cost driver for pool removal in Tampa?", a: <>Dewatering and soil stabilization. In high-water-table zones, the labor and equipment required to keep the site stable can account for 20-30% of the total budget. See our <Link href="/pool-removal-cost-tampa" style={{ color: 'var(--primary)', fontWeight: 600 }}>Cost Guide</Link>.</> },
                  { q: "Do you handle commercial pool removals?", a: "Yes. We are one of the few contractors in Tampa with the heavy equipment and FDEP licensing required for large-scale commercial extractions." },
                  { q: "Can I remove a pool that is close to my house?", a: "Yes. We utilize specialized 'Z-Shoring' and mini-excavators to remove pools within 5 feet of a foundation without risking structural damage to the home." },
                  { q: "What is 'Proctor Compaction Testing'?", a: <>It is the engineering standard for measuring how well the soil has been packed. We provide <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--primary)', fontWeight: 600 }}>certified reports</Link> for all engineered extractions.</> },
                  { q: "Will the city require an inspection after the pool is gone?", a: <>Yes. All three counties require a final inspection to verify the fill material and ensure all utility lines have been safely capped. Read our <Link href="/blog/do-you-need-a-permit-in-tampa" style={{ color: 'var(--primary)', fontWeight: 600 }}>Permit Blog</Link>.</> },
                  { q: "How do you manage dust during demolition?", a: "We utilize industrial water-misting systems to suppress 95% of concrete dust, protecting your home and your neighbors' property." },
                  { q: "Can I use the old pool concrete as fill dirt?", a: "No. Local code requires that the concrete be hauled to a recycling center. Using debris as fill can cause uneven settlement and drainage issues." },
                  { q: "What is the typical permit turnaround in Pinellas?", a: <>Typically 10 to 15 business days. We handle all administrative follow-up with the <Link href="/resources/pinellas-pool-permits" style={{ color: 'var(--primary)', fontWeight: 600 }}>building department</Link> to keep your project on track.</> },
                  { q: "Do you offer 'Winter Rates' for removals?", a: "Yes. Scheduling during the dry season (November - February) can often reduce dewatering costs and lead to a more efficient project timeline." },
                  { q: "What happens if a sinkhole is found during excavation?", a: "If sub-surface instability is found, we coordinate with geotechnical engineers to provide the necessary remediation before finishing the project." }
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
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={32} color="var(--primary)" />
              Tampa Pool Removal FAQ
            </h2>
            <p>25+ Technical & Regulatory Answers for Florida Homeowners</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "What is the average cost in Tampa?", a: "Residential projects typically range from $9,000 to $17,000. Factors like access, dewatering needs, and material disposal are the primary cost drivers." },
              { q: "Do I need a permit?", a: "Yes. All three major counties (Hillsborough, Pinellas, Pasco) require demolition and environmental permits. We handle the entire application process for you." },
              { q: "What is 'Partial Abandonment'?", a: "This involves removing the top 2-3 feet of the pool shell and filling the rest with sand. It's cost-effective but limits future construction on the footprint." },
              { q: "Will you damage my driveway?", a: "No. We utilize heavy-duty composite mats to distribute the weight of our machinery, protecting your driveway and pavers from cracking." },
              { q: "Can I build an ADU where the pool was?", a: "Yes, but you must opt for a 'Full Engineered Removal' with certified compaction testing to ensure the foundation can support a structure." },
              { q: "What type of fill dirt do you use?", a: "We exclusively use certified clean A-3 sand, which matches the natural drainage and compaction profile of the Tampa Bay area." },
              { q: "How long does the process take?", a: "Typically 4 to 6 business days from mobilization to final grade. Permit approval usually takes an additional 10 to 15 business days." },
              { q: "Is dewatering mandatory?", a: "In high-water-table areas like South Tampa and Shore Acres, dewatering is essential to prevent ground collapse and ensure proper compaction." },
              { q: "Do you remove the pool cage?", a: "Yes. Disassembling and recycling the aluminum pool enclosure (lanai) is part of our comprehensive removal service." },
              { q: "Will removing the pool lower my taxes?", a: "Yes. Removing a luxury improvement often leads to a lower property tax assessment in Hillsborough and Pinellas counties." }
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
          <CheckCircle2 size={64} style={{ margin: "0 auto 2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Property?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of Tampa families who have chosen the region's top-rated demolition team for a safe, legal, and engineered pool removal.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Request a Structural Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
