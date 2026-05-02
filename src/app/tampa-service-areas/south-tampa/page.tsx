import React from "react";
import type { Metadata } from "next";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Anchor, Info, Target, Activity, Waves, HelpCircle, Microscope, TreePine } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal South Tampa, FL | #1 Engineered Authority",
  description: "South Tampa's specialist in tight-access pool removal. Specializing in high-water-table management, City of Tampa permitting, and structural backfill.",
  alternates: {
    canonical: "/tampa-service-areas/south-tampa",
  },
};

export default function SouthTampa() {
  const faqs = [
    { q: "How much does pool removal cost in South Tampa?", a: "South Tampa removals typically range from $9,000 to $18,000. The slightly higher cost compared to Brandon is due to tighter access and mandatory dewatering requirements." },
    { q: "Do you need a permit in the City of Tampa?", a: "Yes. The City of Tampa requires a building permit for any pool removal. We handle all paperwork and inspections as part of our turnkey service." },
    { q: "Will your machines fit through my narrow side yard?", a: "Most likely. We have specialized equipment that can fit through a 36-inch gate, though a 6-foot opening is preferred for maximum efficiency." },
    { q: "What is the 'Water Table' risk near the Bay?", a: "Significant. Groundwater is often found within 3 feet of the surface. We utilize continuous well-point dewatering to ensure a safe and stable demolition." },
    { q: "How long does the process take?", a: "A typical South Tampa project takes 5 to 7 business days, including the time required for city inspections." },
    { q: "Can I build an ADU where the pool was?", a: "Yes, but only with a **Full Engineered Removal** and 98% Proctor density compaction to support the new foundation." },
    { q: "Do you remove the pool cage (lanai)?", a: "Yes. We disassemble and recycle the aluminum structure as part of our total project management." },
    { q: "What type of fill dirt do you use?", a: "We use clean A-3 certified sand, which matches the natural drainage profile of South Tampa's native soils." },
    { q: "Is your company insured for South Tampa projects?", a: "Yes. We carry $2M in general liability and workers' comp specifically for heavy excavation and demolition work." },
    { q: "Can you remove a fiberglass pool in Culbreath Isles?", a: "Yes. Fiberglass requires specific extraction techniques to prevent collapsing the surrounding soil, which we specialize in." },
    { q: "What happens to the old pool equipment?", a: "We remove the pump, filter, and heater, capping all lines at the source and disposing of the units properly." },
    { q: "How do you protect my neighbors' property?", a: "We utilize temporary shoring and precision mini-machinery. Every project includes a pre-construction survey to document existing conditions." },
    { q: "What is 'Lateral Pressure' in waterfront properties?", a: "It is the side-force exerted by saturated soil against structures like seawalls. Removing a pool shell removes a 'counter-weight,' so we utilize specialized shoring to maintain this balance." },
    { q: "Do you handle historic district arborist reviews?", a: "Yes. For properties in Hyde Park or Virginia Park, we coordinate directly with the City of Tampa arborist to protect historic Grand Oaks." },
    { q: "What is the difference between A-3 and A-2-4 fill sand?", a: "A-3 is a fine, clean sand ideal for South Tampa's drainage. A-2-4 contains more silts/clays and is avoided to prevent 'Muck' pockets and poor drainage." },
    { q: "How do you prevent 'Soil Liquefaction' in 33611?", a: "In the sandy soils of 33611, vibrations from heavy machinery can cause soil to behave like a liquid. We utilize low-impact, high-frequency hammers to minimize this risk." },
    { q: "Is GPR (Ground Penetrating Radar) necessary?", a: "For properties near Bayshore or those with suspected unknown utilities, we utilize GPR to map the sub-surface before excavation begins." },
    { q: "How do you handle 'Muck' pockets under old shells?", a: "If organic 'muck' is found during excavation, it must be removed and replaced with engineered sand to prevent future settlement of the lot." },
    { q: "Does pool removal increase property taxes?", a: "Usually the opposite. Removing a pool often lowers your property's assessed value for tax purposes, saving you $400-$800 annually in Hillsborough County." },
    { q: "What are the specific City of Tampa noise ordinances?", a: "Construction is typically limited to 7:00 AM - 6:00 PM. We schedule our high-impact demolition phases to occur mid-day to minimize neighbor disruption." },
    { q: "Do you provide a 'Clean Title' guarantee?", a: "Yes. We provide a final 'Certificate of Completion' and a lien release, ensuring your property title is clean for future real estate transactions." },
    { q: "How do you protect Bayshore seawalls?", a: "We maintain a technical 'Setback Zone' and utilize pressure-relief well-points to ensure the seawall's structural integrity isn't compromised by soil movement." },
    { q: "Can I build a pool house where the pool was?", a: "Yes. Our engineered backfill process provides the load-bearing capacity (98% Proctor) required for permanent secondary structures." },
    { q: "What is the ROI of removing a pool in Palma Ceia?", a: "Homeowners often see a 2x ROI through reclaimed yard space and the removal of maintenance/liability costs from the property title." }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[
        { name: "Service Areas", href: "/tampa-service-areas" },
        { name: "South Tampa", href: "/tampa-service-areas/south-tampa" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div className="animate-fade-in">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Anchor size={20} />
              <span>South Tampa's Precision Authority</span>
            </div>
            <h1>South Tampa Pool Removal & Tight-Access Demolition</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              South Tampa's high property values and tight-access lots require a surgical approach to pool demolition. We specialize in the complex hydrological and structural engineering required to reclaim your yard for modern luxury living—from Hyde Park to Ballast Point.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
               <Link href="/contact" className="btn btn-primary">Request Your South Tampa Audit</Link>
               <a href="tel:8135550199" className="btn btn-outline">Call (813) 555-0199</a>
            </div>
          </div>
          <div className="glass-card" style={{ padding: "3rem", background: "var(--primary-dark)", color: "white" }}>
            <h3 style={{ color: "white" }}>The South Tampa Quality Standard</h3>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> Surgical Tight-Access Machinery</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> City of Tampa Permit Management</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> 98% Modified Proctor Density</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> Advanced Well-Point Dewatering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. GEOLOGY SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
               <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Hyde Park to Ballast Point: A Geological Analysis</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  South Tampa sits on a high water table, with groundwater often found just 3-4 feet below the surface. This creates a \"Floating Risk\" for empty pool shells.
               </p>
               <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--secondary)" }}>
                  <h4 style={{ marginBottom: "0.5rem" }}>Hydrostatic Stabilization</h4>
                  <p style={{ fontSize: "0.9rem", margin: 0 }}>
                     We utilize continuous well-point dewatering throughout the demolition phase. This prevents the sub-surface soil from liquefying and ensures that your home's foundation remains undisturbed during the excavation.
                  </p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="glass-card" style={{ padding: "2rem" }}>
                  <Microscope size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h5>Soil Stratigraphy</h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Analyzing the mix of clay and sand to determine the perfect engineered fill ratio.</p>
               </div>
               <div className="glass-card" style={{ padding: "2rem" }}>
                  <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h5>Flood Zone Logic</h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Ensuring all work complies with the City of Tampa's strict flood-plain management codes.</p>
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
               <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>2. Surgical Logistics: The Tight-Access Specialist</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                  In neighborhoods like **Virginia Park** and **Palma Ceia**, lot lines are tight. We utilize specialized, high-torque mini-excavators that can fit through a standard 36-inch gate, protecting your landscaping and structures.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div style={{ display: "flex", gap: "1rem" }}>
                     <Target color="var(--primary)" />
                     <div>
                        <strong>Lot Protection</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>We utilize interlocking composite mats to protect your driveway and pavers.</p>
                     </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                     <HardHat color="var(--primary)" />
                     <div>
                        <strong>Utility Capping</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Safe decommissioning of older gas and electrical pool lines by licensed masters.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div style={{ order: 1 }}>
               <div style={{ marginBottom: "2rem", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                  <img 
                    src="/images/surgical-pool-removal-tampa.png" 
                    alt="Precision mini-excavator navigating a narrow South Tampa side-yard with protective composite ground mats."
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <div style={{ padding: "1rem", background: "white", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                     Zero-infiltration logistics: Our compact machinery fits through 36-inch gateways while protective matting ensures zero impact on your landscaping.
                  </div>
               </div>
               <div className="glass-card" style={{ padding: "3rem", background: "white" }}>
                  <h3 style={{ marginBottom: "1.5rem" }}>The South Tampa Authority Protocol</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                     <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <strong>Step 1: Site Survey</strong>
                        <p style={{ fontSize: "0.85rem" }}>Detailed mapping of property lines, utilities, and tree canopies.</p>
                     </div>
                     <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <strong>Step 2: Hydro-Management</strong>
                        <p style={{ fontSize: "0.85rem" }}>Installation of high-capacity <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 600 }}>well-point dewatering arrays</Link>.</p>
                     </div>
                     <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <strong>Step 3: Surgical Demo</strong>
                        <p style={{ fontSize: "0.85rem" }}>Low-impact extraction using specialized tight-access machinery.</p>
                     </div>
                     <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <strong>Step 4: Certified Backfill</strong>
                        <p style={{ fontSize: "0.85rem" }}>Layered <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--primary)', fontWeight: 600 }}>engineered compaction</Link> to 98% Proctor for build-ready stability.</p>
                     </div>
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
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. City of Tampa Permit Mastery</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
                    The City of Tampa Building Department maintains strict standards for pool \"Abandonment\" vs. \"Full Extraction.\" We manage the entire administrative cycle, ensuring your project meets all modern code requirements.
                 </p>
                 <div className="grid grid-cols-2 gap-12 text-left">
                    <div className="glass-card" style={{ padding: "2.5rem" }}>
                       <h4 style={{ color: "var(--primary)" }}>City of Tampa Grand Oak Compliance</h4>
                       <p style={{ fontSize: "0.9rem" }}>
                          South Tampa's heritage trees are protected by strict municipal codes. We coordinate with city arborists and utilize root-safe excavation methods to ensure your landscaping remains a protected asset.
                       </p>
                    </div>
                    <div className="glass-card" style={{ padding: "2.5rem" }}>
                       <h4 style={{ color: "var(--primary)" }}>Final Closeout Certification</h4>
                       <p style={{ fontSize: "0.9rem" }}>
                          We manage the final \"Certificate of Completion\" to ensure your property title remains clean and build-ready for future sale or home additions.
                       </p>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* WATERFRONT ENGINEERING SPECS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Waterfront Engineering: Protecting Your Seawall</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     For properties on the **Bayshore** or along the canals of **Culbreath Isles**, pool removal requires extreme caution. Removing a pool shell near a seawall can trigger a \"Seawall Failure\" if hydrostatic pressure isn't perfectly balanced. 
                     <br /><br />
                     Our **Coastal Engineering Protocol** involves the use of specialized shoring and pressure-equalization systems. We ensure that the lateral pressure against your seawall remains constant throughout the demolition, protecting your most valuable property asset.
                  </p>
               </div>
               <div>
                  <h2>City of Tampa Grand Oak Compliance</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     In neighborhoods like **Beach Park**, mature oaks define the landscape. Our arborist-certified root protection protocols ensure that these protected assets are never compromised. We utilize air-spade technology and interlocking mats to ensure zero soil compaction within the critical root zone of your property's heritage trees.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. TECHNICAL CASE STUDY: 33606 HYDE PARK */}
      <section className="section bg-white">
         <div className="container">
            <div className="glass-card" style={{ padding: "4rem", border: "1px solid var(--primary)", position: "relative", overflow: "hidden" }}>
               <div style={{ position: "absolute", top: 0, right: 0, background: "var(--primary)", color: "white", padding: "0.5rem 2rem", transform: "rotate(45deg) translate(25%, -50%)", fontWeight: 700, fontSize: "0.8rem" }}>ENGINEERING LOG</div>
               <div className="grid grid-cols-2 gap-16 items-start">
                  <div>
                     <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1rem" }}>
                        <Microscope size={20} />
                        <span>Technical Case Study: Project ID #ST-33606</span>
                     </div>
                     <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Hydrostatic Stabilization & Tight-Access Extraction in Hyde Park</h2>
                     <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                        **Project Location:** Historic Hyde Park (Zip: 33606)  
                        **Structure Type:** 1970s reinforced concrete gunite pool with adjacent brick paver patio.  
                        **Environmental Constraints:** 42-inch side-yard access limit, 36-inch depth to groundwater (Hillsborough Bay proximity), and a protected 48-inch DBH Grand Oak within the 15-foot drip line.
                     </p>
                     <div style={{ background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "12px", marginBottom: "2rem" }}>
                        <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>The 'F1' Solution Matrix:</h4>
                        <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "var(--text-main)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                           <li><strong>Active Hydro-Management:</strong> Deployed a 12-point well-point dewatering system, operating 24/7 for 48 hours prior to breaking the shell to equalize sub-surface pressure.</li>
                           <li><strong>Surgical Extraction:</strong> Utilized a 12,000-lb high-torque mini-excavator with zero-tail-swing and rubber tracks to prevent pavers from cracking.</li>
                           <li><strong>Arborist Protocol:</strong> Utilized air-spade technology to map the root system of the Grand Oak, ensuring all demolition activities occurred outside the critical structural root zone.</li>
                        </ul>
                     </div>
                  </div>
                  <div style={{ background: "var(--primary-dark)", padding: "3rem", borderRadius: "16px", color: "white" }}>
                     <h3 style={{ color: "white", marginBottom: "1.5rem" }}>Project Outcomes</h3>
                     <div className="grid grid-cols-1 gap-6">
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                           <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>100%</div>
                           <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Shell Extraction & Material Haul-Off (Zero Concrete Buried)</div>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                           <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>98%</div>
                           <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Modified Proctor Density (Certified Build-Ready for new ADU)</div>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                           <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>0.0 mm</div>
                           <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Impact on Protected Tree Canopy or Adjacent Foundations</div>
                        </div>
                     </div>
                     <p style={{ marginTop: "2rem", fontSize: "0.85rem", fontStyle: "italic", opacity: 0.8 }}>
                        "By coordinating the dewatering and the arborist review into a single permit cycle, we saved the homeowner 3 weeks in the municipal approval pipeline." — Lead Engineer, Pool Removal Tampa.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. HYPER-LOCAL NEIGHBORHOOD COVERAGE */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>5. Precision Service Coverage: South Tampa Neighborhoods</h2>
            <p style={{ color: "var(--text-muted)" }}>Surgical logistics for South Tampa's premier residential corridors.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "Hyde Park", d: "Managing historic tight-access demolition and arborist-certified tree protection." },
              { n: "Palma Ceia", d: "Surgical removal in established luxury lots with specialized mini-machinery." },
              { n: "Culbreath Isles", d: "High-stakes waterfront engineering and complex seawall-safe dewatering." },
              { n: "Ballast Point", d: "Navigating high-water-table challenges and mature suburban lot lines." },
              { n: "Virginia Park", d: "Advanced soil stabilization and 98% Proctor compaction for home additions." },
              { n: "Beach Park", d: "Managing mature grand oak canopies and large-scale property expansions." },
              { n: "Sunset Park", d: "Coastal construction and barrier-island regulatory management." },
              { n: "Interbay", d: "Rapid-deployment removal for new construction turnovers and expansions." }
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
              South Tampa Pool Removal FAQ
            </h2>
            <p>25+ Technical Answers for 33606, 33629, and 33611 Homeowners</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.q}</h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REGULATORY & GEOLOGICAL APPENDIX */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16">
               <div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>City of Tampa Regulatory Compliance Appendix</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                     In the City of Tampa, pool demolition is governed by **Chapter 5, Article VII of the Municipal Code**. Unlike neighboring jurisdictions, Tampa distinguishes strictly between 'Partial Abandonment' (filling in a shell) and 'Full Engineered Removal.' 
                     <br /><br />
                     For residential properties in South Tampa, specifically within the **33606, 33629, and 33611** zip codes, we recommend the 'Full Extraction' method. This involves the removal of the entire gunite shell, plumbing, and electrical bond beam. This is the only method that allows for the legal construction of permanent structures (ADUs, additions, or luxury patios) over the old pool footprint. Our documentation package includes the mandatory 'Soil Compaction Certificate' and the final City of Tampa building inspector sign-off, ensuring your property's value is legally protected for future appraisal.
                  </p>
               </div>
               <div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>South Tampa Geological Stratigraphy</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                     The soil profile in South Tampa is primarily composed of **Myakka Fine Sand** and **Bayshore Silts**. While excellent for drainage, these soils become highly unstable when saturated by the high water tables typical of the Interbay Peninsula. 
                     <br /><br />
                     Our engineering team utilizes a **Pressure-Relief Protocol** during the excavation phase. By drilling relief holes into the base of the pool shell before total extraction, we prevent the 'Hydrostatic Piston Effect,' where trapped groundwater pressure can actually propel a pool shell upward, causing catastrophic damage to adjacent structures. This technical precision is what separates an engineered demolition from a standard 'dig and fill' project.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <Anchor size={64} className="icon-center" style={{ marginBottom: "2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your South Tampa Yard?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of South Tampa families who have traded high maintenance for beautiful, usable outdoor living space.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get a Local South Tampa Estimate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
