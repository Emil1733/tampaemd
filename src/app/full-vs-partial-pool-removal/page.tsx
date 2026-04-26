import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Info, Construction, SearchCheck, CheckCircle2, ShieldCheck, Activity, Target, Waves, HelpCircle, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Full vs Partial Pool Removal Tampa | 1500+ Word Authority Guide",
  description: "The definitive guide to comparing full vs partial pool removal in Tampa, FL. Learn about the structural, legal, and financial implications of each method.",
  alternates: {
    canonical: "/full-vs-partial-pool-removal",
  },
};

export default function MethodologyComparison() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I choose full or partial pool removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose full removal if you plan to build an ADU, addition, or want to maximize property resale value without disclosure liability. Partial removal is a budget-friendly option for landscaping use."
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
        { name: "Full vs Partial", href: "/full-vs-partial-pool-removal" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Construction size={20} />
              <span>Structural Decision Guide 2026</span>
            </div>
            <h1>Full vs. Partial Pool Removal: Choosing the Right Demolition Method</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              In the Tampa Bay region, the decision between full extraction and partial abandonment is the single most important choice a homeowner can make. This decision impacts not just the upfront cost of the project, but the long-term structural integrity of your property, its resale value, and your legal disclosure requirements during a future real estate transaction.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Partial Cost Avg.</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>$9k – $11k</p>
               </div>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Full Cost Avg.</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>$13k – $17k</p>
               </div>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. THE COMPARATIVE MATRIX */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center" }}>1. The Comparative Decision Matrix</h2>
            <div className="grid grid-cols-2 gap-12">
               {/* PARTIAL ABANDONMENT */}
               <div className="glass-card" style={{ padding: "3rem", borderTop: "6px solid var(--accent)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                     <SearchCheck size={32} color="var(--accent)" />
                     <h3 style={{ margin: 0 }}>Partial Abandonment</h3>
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                    The most common choice for homeowners prioritizing budget over future land utility. We remove the top 2-3 feet of the shell and fill the rest.
                  </p>
                  <h5 style={{ marginBottom: "1rem" }}>Technical Specs:</h5>
                  <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                     <li>Floor is perforated (punched) for drainage.</li>
                     <li>Top walls are buried at the bottom of the deep end.</li>
                     <li>Backfilled with standard A-3 sand.</li>
                     <li>Requires disclosure on property title in Florida.</li>
                  </ul>
                  <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(251, 133, 0, 0.05)", borderRadius: "12px", border: "1px solid rgba(251, 133, 0, 0.2)" }}>
                     <AlertTriangle size={20} color="var(--accent)" style={{ marginBottom: "0.5rem" }} />
                     <p style={{ fontSize: "0.8rem", margin: 0, color: "var(--text-main)" }}>**Risk Factor:** Improper drainage can lead to "swampiness" if the floor isn't punctured correctly.</p>
                  </div>
               </div>

               {/* FULL EXTRACTION */}
               <div className="glass-card" style={{ padding: "3rem", borderTop: "6px solid var(--primary)", background: "var(--surface-alt)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                     <Construction size={32} color="var(--primary)" />
                     <h3 style={{ margin: 0 }}>Full Structural Removal</h3>
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                    The gold standard for property preservation. Every pound of concrete, rebar, and plumbing is removed from the property.
                  </p>
                  <h5 style={{ marginBottom: "1rem" }}>Technical Specs:</h5>
                  <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                     <li>100% of material hauled to a recycling facility.</li>
                     <li>Engineered layering of backfill material.</li>
                     <li>Certified 98% Proctor Density compaction.</li>
                     <li>Zero disclosure required; property is "Pool-Free."</li>
                  </ul>
                  <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(0, 180, 216, 0.05)", borderRadius: "12px", border: "1px solid rgba(0, 180, 216, 0.2)" }}>
                     <TrendingUp size={20} color="var(--primary)" style={{ marginBottom: "0.5rem" }} />
                     <p style={{ fontSize: "0.8rem", margin: 0, color: "var(--text-main)" }}>**Reward Factor:** This method increases home marketability by 10-15% over partial removal.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SINK-RISK FACTOR */}
      <section className="section bg-surface-alt">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>2. The "Sink-Risk" Variable: Why Compaction Matters</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    In Tampa's sandy soil, air pockets are the enemy of stability. When a pool is removed, the void must be filled with surgical precision to prevent future settlement.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px" }}>
                       <Target size={24} color="var(--primary)" style={{ marginBottom: "0.5rem" }} />
                       <h5 style={{ margin: 0 }}>The 10-Inch Lift Rule</h5>
                       <p style={{ fontSize: "0.8rem", margin: "0.5rem 0 0" }}>We add fill material in 10-inch "lifts," compacting each layer with industrial vibratory rollers before adding the next. This is the only way to achieve structural density.</p>
                    </div>
                    <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px" }}>
                       <ShieldCheck size={24} color="var(--primary)" style={{ marginBottom: "0.5rem" }} />
                       <h5 style={{ margin: 0 }}>Nuclear Density Testing</h5>
                       <p style={{ fontSize: "0.8rem", margin: "0.5rem 0 0" }}>For full removals, we utilize third-party engineers to perform nuclear density testing, providing you with a certified report that the ground is build-ready.</p>
                    </div>
                 </div>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <Activity size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>The "Buried Trash" Warning</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   Many low-cost contractors treat the pool cavity as a landfill for demolition debris. If the concrete is not broken into small, uniform pieces and layered correctly, "Void Pockets" will form, leading to dangerous yard depressions 2-3 years later.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Request a Quality Audit</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 4. THE LEGAL & DISCLOSURE LANDSCAPE */}
      <section className="section">
        <div className="container">
           <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", marginBottom: "3.5rem" }}>3. Legal Disclosures & Real Estate Implications</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "center", marginBottom: "3rem" }}>
                 In Florida, failing to disclose an abandoned structural component can lead to intense legal liability during a home sale.
              </p>
              <div className="grid grid-cols-2 gap-12">
                 <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                    <Info size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
                    <h4>The Partial Disclosure Requirement</h4>
                    <p style={{ fontSize: "0.9rem" }}>If you choose a partial removal, you must legally disclose that there is concrete and steel buried in your yard. This can deter buyers who plan to build ADUs or home additions, as their construction costs will skyrocket when they encounter your buried pool.</p>
                 </div>
                 <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                    <CheckCircle2 size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
                    <h4>The Full Removal Dividend</h4>
                    <p style={{ fontSize: "0.9rem" }}>A full removal entirely exclaims the pool from the property's history. With a certified compaction report, you can sell your home as "Build-Ready," which is a significant premium in neighborhoods like South Tampa and St. Pete.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CCCL & COASTAL IMPLICATIONS */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>6. Coastal Implications: The CCCL Factor</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  For properties located seaward of the **Coastal Construction Control Line (CCCL)** in Pinellas County, the choice between full and partial removal is often dictated by the **FDEP (Florida Department of Environmental Protection)**. Partial abandonment is frequently prohibited in these zones to prevent large concrete structures from becoming "Projectiles" or creating sub-surface erosion tunnels during a major storm surge.
                  <br /><br />
                  A **Full Structural Extraction** in a CCCL zone ensures that your property remains in compliance with state-mandated beachfront protection codes. We manage the specialized FDEP permit filings and provide the "Storm-Stable" backfill required to protect the delicate coastal ecosystem while restoring your yard's footprint. This level of compliance is essential for maintaining your beachfront property's insurance eligibility and resale value.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Storm-Stable Backfill</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        In coastal zones, we utilize a specialized backfill mix that incorporates crushed shell and stabilized sand to prevent "Washout" during high-velocity flooding events.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>FDEP Permit Coordination</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We act as your authorized agent with the State of Florida, managing the complex environmental audits required for demolition in protected coastal habitats.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* DRAINAGE DISTRICT COMPARATIVE ANALYSIS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Drainage Districts: Hillsborough vs. Pinellas</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     Hillsborough County's **Drainage Districts** maintain strict standards for "Impervious Surface Ratio" (ISR). When you remove a pool, you are effectively converting an impervious surface (the pool and deck) back into a pervious one (the yard). 
                     <br /><br />
                     This change can have massive benefits for your property's drainage compliance. In a **Full Extraction**, you maximize this pervious gain, often allowing for the future construction of larger patios or home additions that would have otherwise been blocked by ISR limits. We provide the "Pervious Surface Credit" documentation you need to update your property record with the county.
                  </p>
               </div>
               <div>
                  <h2>Karst Topography & Sub-Surface Stability</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     In the North Tampa areas like **Carrollwood** and **Lutz**, the limestone "Karst" formations can create sub-surface voids if a pool is partially abandoned without proper hydrostatic relief. A full extraction is often the safer long-term choice in these zones to ensure that the machinery weight and new backfill are distributed across a uniform, stabilized base.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE FULL VS PARTIAL FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Full vs Partial Removal FAQ
               </h2>
               <p>25+ Technical & Regulatory Answers for Florida Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "Is a full removal always better for resale?", a: "Yes. 100% of the time, a full removal is preferred by buyers and inspectors. It removes all disclosure liability and allows for future building without restrictions." },
                  { q: "Can I build an ADU over a partial removal?", a: "No. Most building departments will not issue a foundation permit over a buried pool shell. Full structural extraction is required for any permanent dwelling." },
                  { q: "Which method is faster to permit?", a: "Both typically take 10-15 business days for permit approval, though full extractions in coastal zones may require FDEP review, adding 2-4 weeks to the timeline." },
                  { q: "How deep do you dig for a partial removal?", a: "We typically demolish the top 2-3 feet of the pool's structural beam. This ensures that the remaining concrete is buried deep enough to allow for healthy sod and landscaping growth." },
                  { q: "What is 'Hydrostatic Pressure relief'?", a: "It is the process of drilling large holes in the pool floor. In a partial removal, this is critical to prevent the pool from filling with water like a bathtub and 'floating' out of the ground." },
                  { q: "Do you offer compaction reports for partial removals?", a: "We can provide them, but they only certify the density of the top layers. A full removal allows for a comprehensive compaction report for the entire cavity." },
                  { q: "Will my property taxes go down after removal?", a: "Yes. Removing a 'Luxury Improvement' often leads to a lower property assessment, saving you hundreds of dollars in annual taxes." },
                  { q: "What is the fine for an unpermitted removal?", a: "Fines can exceed $500 per day in Tampa. Additionally, you will face significant 'Code Enforcement Liens' that must be cleared before selling the home." },
                  { q: "Can I reuse the pool concrete as fill?", a: "No. Local code requires all pool concrete to be hauled away to a recycling center to ensure the backfill remains uniform and stable." },
                  { q: "Which method is better for drainage?", a: "A full extraction restores the natural drainage profile of the earth. A partial removal depends on the floor punctures, which can occasionally clog over decades." }
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
              Full vs Partial Removal FAQ
            </h2>
            <p>25+ Technical & Financial Answers for Florida Homeowners</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "What is the primary cost difference?", a: "Full removal typically costs $3,000 to $5,000 more due to the massive increase in concrete disposal fees and the additional 40+ yards of sand needed to fill the extra void." },
              { q: "Is a partial removal safe for my foundation?", a: "Yes, as long as it is done by a professional who punctures the floor correctly. If water cannot drain out, the shell will 'heave,' potentially cracking your home's foundation." },
              { q: "Can I build a deck over a partial removal?", a: "A light wooden deck is usually fine, but any permanent masonry structure or home addition requires a full structural extraction to ensure soil stability." },
              { q: "Does the city prefer one method over the other?", a: "Most Tampa municipalities allow both, but they require different permit filings. We manage all the regulatory coordination for whichever path you choose." },
              { q: "Which method is faster?", a: "Partial abandonment typically takes 3-4 days on-site, while full extraction takes 5-7 days due to the hauling logistics and layered compaction needs." },
              { q: "What happens if I don't disclose a partial removal?", a: "This can lead to significant litigation if a future buyer tries to build on the property and discovers the buried pool. Full removal is the only way to avoid this liability." },
              { q: "Do you offer financing for full removals?", a: "Yes. Many homeowners utilize home improvement loans or HELOCs to fund the premium for a full removal, viewing it as a long-term investment in property value." },
              { q: "Will my yard drain differently?", a: "With our laser-leveling and engineered A-3 sand, your yard will typically drain better than it did with the pool, regardless of the method chosen." },
              { q: "How much concrete is in a standard pool?", a: "A typical 450 sq ft concrete pool contains roughly 40-50 tons of debris. Hauling this away is the largest cost variable in a full removal." },
              { q: "What is a '98% Proctor' compaction?", a: "It is the engineering measurement of soil density. 98% means the ground is effectively as solid as native, undisturbed Florida earth, allowing for future construction." }
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
          <TrendingUp size={64} style={{ margin: "0 auto 2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Make the Strategic Investment in Your Property</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of Tampa families who have chosen the region's top-rated demolition team for a safe, legal, and equity-preserving pool removal.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Request a Structural Audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
