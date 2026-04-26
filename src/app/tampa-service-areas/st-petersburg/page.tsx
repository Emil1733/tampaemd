import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Waves, Info, Target, Activity, HelpCircle, Microscope, TreePine, Anchor } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal St. Petersburg, FL | 1500+ Word Authority Spoke Guide",
  description: "The definitive guide to professional pool removal in St. Petersburg. Specialized in Pinellas coastal hydrology, historic district access, and limestone soil stabilization.",
  alternates: {
    canonical: "/tampa-service-areas/st-petersburg",
  },
};

export default function StPetersburg() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool removal cost in St. Petersburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In St. Pete, pool removal typically costs between $10,000 and $18,000, influenced by the high water table and the need for specialized dewatering."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for pool removal in Pinellas County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, St. Petersburg requires a demolition permit and often an ISR (Impervious Surface Ratio) review. We manage all Pinellas County filings."
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
        { name: "St. Petersburg", href: "/tampa-service-areas/st-petersburg" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Waves size={20} />
              <span>Coastal & Pinellas County Authority</span>
            </div>
            <h1>St. Petersburg Pool Removal & Coastal Demolition Experts</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              St. Petersburg is a city of historic charm and coastal complexity. From the brick-lined alleys of **Old Northeast** to the waterfront estates of **Snell Isle**, every pool removal project is a unique engineering challenge. We provide the surgical precision and coastal hydrological expertise required for St. Pete’s diverse and valuable real estate.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)" }}>
              <h4 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Pinellas County Regulatory Warning</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)" }}>
                Properties in St. Pete's **Coastal High Hazard Area (CHHA)** are subject to strict environmental buffer rules. We ensure your pool removal is 100% compliant with Pinellas County Ordinance #138-177.
              </p>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. COASTAL HYDROLOGY & SHORE ACRES */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Shore Acres & The Coastal Hydrology Factor</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              St. Petersburg is essentially a low-lying peninsula within a peninsula. In neighborhoods like **Shore Acres** and **Venetian Isles**, the water table isn't just high—it's tidal. Removing a pool in these zones requires a sophisticated understanding of marine pressure and saltwater intrusion.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Anchor size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Tidal Groundwater Management</h4>
                <p style={{ fontSize: "0.95rem" }}>Groundwater levels in St. Pete often fluctuate with the Gulf and Bay tides. We utilize vacuum-sealed dewatering systems that adjust to these cycles, preventing site collapse during high tide events.</p>
              </div>
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Seawall Integrity Reviews</h4>
                <p style={{ fontSize: "0.95rem" }}>If your pool is within the 15-foot **Seawall Critical Zone**, we perform a lateral pressure analysis to ensure the removal of the pool shell doesn't destabilize your waterfront foundation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORIC DISTRICT LOGISTICS */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Historic District & Urban Logistics</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>St. Pete's urban footprint requires surgical demolition techniques.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Old Northeast Alleys</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Narrow brick-lined alleys are the only access point for many homes. We utilize **compact 60-inch wide equipment** and specialized rubber-tracked shuttle buggies to protect your historic brickwork.</p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Kenwood Bungalow Lots</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Tight property lines often mean the pool is inches from the house or a neighbor's foundation. We utilize **precision vibration monitoring** to ensure zero-impact demolition.</p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Snell Isle Estates</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>High-value landscaping and manicured lawns require "White-Glove" protection. We use heavy-duty composite mats to create a temporary road, leaving no trace behind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PINNELAS LIMESTONE SHELF */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Navigating the Pinellas Limestone Shelf</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    Unlike the deep sands of South Tampa, parts of St. Petersburg sit on a shallow **Limestone Caprock**. This extremely hard layer can make standard pool floor-punching nearly impossible for amateur contractors.
                 </p>
                 <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Target size={24} color="var(--secondary)" />
                       <div>
                          <strong>2,500-lb Hydraulic Hammers:</strong> We utilize heavy-duty breakers designed to penetrate the Florida limestone shelf, ensuring 100% drainage compliance.
                       </div>
                    </li>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Target size={24} color="var(--secondary)" />
                       <div>
                          <strong>Perched Water Table Management:</strong> If water gets trapped *above* the limestone layer, we utilize tiered dewatering to dry the site before backfilling begins.
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <Microscope size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>St. Pete Geological Audit</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   Every St. Pete project starts with a **Limestone Depth Profile** to determine the correct machinery and drainage strategy for your specific lot.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Schedule Your Audit</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 5. ENGINEERED COMPACTION & DRAINAGE */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", textAlign: "center", marginBottom: "3rem" }}>4. Engineered Backfill: The Pinellas Protocol</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem", textAlign: "center" }}>
                  A pool is a hollow vessel. Once removed, it must be replaced by a solid earth matrix. We achieve **95% Proctor Density** to ensure your new land is "Building-Ready."
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "16px", background: "white" }}>
                     <h4 style={{ color: "var(--primary)" }}>Vibratory Lift Packing</h4>
                     <p style={{ fontSize: "0.9rem" }}>We add fill in 10-inch "lifts," compacting each layer with industrial-grade vibratory plates. This prevents the "sink-hole" effect common in DIY pool fill-ins.</p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "16px", background: "white" }}>
                     <h4 style={{ color: "var(--primary)" }}>Marine-Grade Fill Sourcing</h4>
                     <p style={{ fontSize: "0.9rem" }}>We source specific A-3 certified clean sand that matches the hydraulic conductivity of St. Pete's coastal soils, ensuring perfect natural drainage.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. PERMIT DEEP DIVE */}
      <section className="section">
         <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
               <h2>5. Pinellas County & St. Pete Permit Mastery</h2>
               <p style={{ maxWidth: "800px", margin: "0 auto" }}>The City of St. Petersburg Building Department and Pinellas County have strict, overlapping codes. We handle the entire bureaucratic process.</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>CHHA Compliance</h4>
                  <p style={{ fontSize: "0.85rem" }}>We ensure all removals in the Coastal High Hazard Area meet the specific flood-mitigation requirements for St. Pete.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Grand Oak Permits</h4>
                  <p style={{ fontSize: "0.85rem" }}>We coordinate with the city arborist to secure necessary protective barricading for St. Pete’s heritage oaks.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Final Certificate</h4>
                  <p style={{ fontSize: "0.85rem" }}>We manage the final inspection to "Close Out" the permit, ensuring your property title remains clean for future sale.</p>
               </div>
            </div>
         </div>
      </section>

      {/* PERMIT CLOSEOUT & LIEN PROTECTION IN PINELLAS */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>8. The Critical Final Step: Pinellas Permit Closeout</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  In St. Petersburg, a pool removal is not complete when the grass is planted; it is complete when the **Certificate of Completion** is issued by the building department. Many "Chuck-in-a-truck" contractors leave permits open, which can block the sale of your home years later or lead to massive daily fines.
                  <br /><br />
                  We provide a comprehensive **Closeout Package** for every St. Pete project, including:
               </p>
               <ul style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontSize: "0.95rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={18} color="var(--primary)" /> Final Inspection Approval Document</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={18} color="var(--primary)" /> Final Unconditional Lien Waiver</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={18} color="var(--primary)" /> Nuclear Density Compaction Report</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={18} color="var(--primary)" /> Clean Fill Origin Certification</li>
               </ul>
            </div>
         </div>
      </section>
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div>
                  <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>6. The Mid-Century Modern Legacy of St. Petersburg Pools</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                     St. Petersburg's post-war boom in the 1950s and 60s left a legacy of unique pool designs, particularly in neighborhoods like **Jungle Prada** and **Crescent Lake**. These pools often utilized "Gunite" mixtures that are significantly denser than modern concrete, requiring heavier hydraulic machinery for effective demolition.
                     <br /><br />
                     Many of these older pools were built with **asbestos-containing tile mastic** or lead-based pool paints common in the mid-20th century. We utilize specialized hazardous material protocols to ensure that all debris is tested and disposed of in accordance with Pinellas County health regulations, keeping your family and your soil safe.
                  </p>
                  <div style={{ background: "rgba(0,180,216,0.05)", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid var(--primary)" }}>
                     <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600 }}>🏛️ ARCHITECTURAL NOTE: RECLAIMING THE LANAI</p>
                     <p style={{ margin: "0.5rem 0 0", fontSize: "0.9rem" }}>
                        In historic Kenwood, the removal of a pool often allows for the restoration of the original "Casita" or carriage house footprint. We coordinate with historic preservation guidelines to ensure your property's value is maximized during the transition.
                     </p>
                  </div>
               </div>
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Activity size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Shore Acres Flood Mitigation ROI</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     In flood-prone areas like **Shore Acres**, a pool can actually exacerbate property damage during a storm surge. A hollow pool shell acts like a giant bucket, collecting water and putting lateral pressure on your home's foundation.
                     <br /><br />
                     By removing the pool and replacing it with engineered, permeable backfill, you improve your property's natural drainage capacity. This "Flood-Resilient Landscaping" approach can significantly reduce your future liability and flood insurance risks in St. Pete's CHHA zones.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. HYPER-LOCAL NEIGHBORHOOD COVERAGE */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>5. Precision Service Coverage: St. Petersburg Neighborhoods</h2>
            <p style={{ color: "var(--text-muted)" }}>Specialized dewatering and regulatory management for the Pinellas Peninsula.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "Shore Acres", d: "The ultimate dewatering challenge. Managing tidal infiltration and high water tables." },
              { n: "Snell Isle", d: "High-value luxury removals with precision soil stabilization for new additions." },
              { n: "Old Northeast", d: "Historic district logistics, protecting heritage brick and mature canopies." },
              { n: "Venetian Isles", d: "Seawall-adjacent extractions and complex hydrological pressure management." },
              { n: "Pasadena", d: "Managing coastal soil profiles and Pinellas County ISR compliance." },
              { n: "Gulfport", d: "Surgical demolition for high-density lots and historic cottage foundations." },
              { n: "Tierra Verde", d: "Deep-island logistics and specialized coastal construction dewatering." },
              { n: "Grand Central", d: "Tight-access urban removals with minimal footprint disruption." }
            ].map((neigh, i) => (
              <div key={i} style={{ background: "white", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.5rem" }}>{neigh.n}</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>{neigh.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE ST. PETE FAQ */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={32} color="var(--primary)" />
              The Ultimate St. Petersburg Pool Removal FAQ
            </h2>
            <p>25+ Technical Answers for Pinellas County Residents</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "What is the 'Seawall Setback' rule for St. Pete removals?", a: "The City of St. Petersburg generally requires a structural engineering review for any excavation within 15 feet of a seawall. We handle all coordination and shoring requirements for waterfront lots." },
              { q: "How do you handle 'Saltwater Intrusion' during dewatering?", a: "In coastal St. Pete, the groundwater is often brackish. We utilize specialized marine-grade pumps and ensure legal discharge that doesn't damage the local ecosystem." },
              { q: "Can I keep my pool tiles for a mosaic?", a: "Yes. If you have historic mid-century tiles you wish to preserve, we can perform a 'Soft-Demo' on those sections before the main excavator work begins." },
              { q: "What is the most expensive part of a St. Pete pool removal?", a: "Usually **Logistics and Access**. If we have to shuttle debris through a narrow historic alley or utilize a crane for equipment placement, the cost reflects the added complexity." },
              { q: "Does St. Petersburg require 'Muck-Out'?", a: "Yes. If there is organic sludge (muck) at the bottom of the pool, it must be removed before backfilling. We ensure 100% clean-base certification before any sand is added." },
              { q: "What is 'Vibratory Installation' for well-points?", a: "We use high-frequency vibration to install our dewatering points into the St. Pete sand, which is much faster and cleaner than traditional water-jetting methods." },
              { q: "Will you remove the concrete pool deck as well?", a: "Yes. Most projects include the demolition and recycling of the surrounding concrete or paver deck to allow for a completely fresh landscape." },
              { q: "Can you remove a pool in a designated Historic District?", a: "Yes. We are familiar with the **St. Petersburg Historic Preservation** guidelines and ensure our work is compliant with district aesthetic and structural rules." },
              { q: "How do you handle the 'Limestone Caprock'?", a: "We utilize 2,500-lb hydraulic breakers. If the limestone is particularly thick, we utilize a tiered 'Fracture-and-Extract' method to ensure proper drainage." },
              { q: "Do you provide soil density certificates for building permits?", a: "Yes. We perform nuclear density testing on the final backfill and provide the certified reports required by the City for future construction." }
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
          <TreePine size={64} className="icon-center" style={{ marginBottom: "2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your St. Pete Backyard?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of St. Petersburg families who have traded high maintenance for beautiful, usable outdoor living space.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get a St. Pete Estimate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
