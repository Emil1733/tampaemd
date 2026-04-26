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
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool removal cost in South Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In South Tampa, pool removal typically costs between $9,000 and $18,000. The slightly higher cost is due to tight-access logistics and mandatory dewatering requirements."
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
            {[
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
              { q: "How do you protect my neighbors' property?", a: "We utilize temporary shoring and precision mini-machinery. Every project includes a pre-construction survey to document existing conditions." }
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
