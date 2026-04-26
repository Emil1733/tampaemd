import React from "react";
import type { Metadata } from "next";
import { MapPin, ArrowRight, ShieldCheck, Activity, Target, HardHat, Waves, HelpCircle, CheckCircle, Info, Globe, Truck } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Tampa Bay Service Areas | 1500+ Word Authority Hub",
  description: "The definitive guide to pool removal service areas across the greater Tampa Bay region. Specialized in Hillsborough, Pinellas, and Pasco County geology.",
  alternates: {
    canonical: "/tampa-service-areas",
  },
};

const locations = [
  { city: "South Tampa", path: "/tampa-service-areas/south-tampa", desc: "Expert dewatering and surgical demolition in historic and high-density neighborhoods like Palma Ceia and Hyde Park." },
  { city: "St. Petersburg", path: "/tampa-service-areas/st-petersburg", desc: "Navigating strict Pinellas County codes and ISR limits for St. Pete and Shore Acres homeowners." },
  { city: "Clearwater", path: "/tampa-service-areas/clearwater", desc: "Specialized coastal soil management and beach-front regulatory compliance for the Clearwater corridor." },
  { city: "Brandon", path: "/tampa-service-areas/brandon", desc: "Large-lot suburban logistics and structural backfilling for property expansions in East Hillsborough." },
  { city: "Riverview", path: "/tampa-service-areas/riverview", desc: "Managing high-water-table dynamics and modern drainage swale compliance near the Alafia River." },
  { city: "Carrollwood", path: "/tampa-service-areas/carrollwood", desc: "Precision removal with a focus on 'Grand Oak' root protection and North Tampa karst topography." },
  { city: "Wesley Chapel", path: "/tampa-service-areas/wesley-chapel", desc: "Rapid-deployment removal for new construction turnovers and Pasco County permit compliance." }
];

export default function ServiceAreas() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas of Tampa Bay do you cover for pool removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We service the entire greater Tampa Bay region, including all of Hillsborough, Pinellas, and Pasco counties."
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
        { name: "Service Areas", href: "/tampa-service-areas" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Globe size={20} />
              <span>Greater Tampa Bay Authority</span>
            </div>
            <h1>Tampa Bay Pool Removal Service Areas: County-Wide Coverage</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              From the historic brick streets of <Link href="/tampa-service-areas/south-tampa" style={{ color: 'var(--primary)', fontWeight: 700 }}>South Tampa</Link> to the master-planned expansions of <Link href="/tampa-service-areas/wesley-chapel" style={{ color: 'var(--primary)', fontWeight: 700 }}>Wesley Chapel</Link>, the greater Tampa Bay region represents one of the most geologically diverse demolition markets in the United States. We provide the heavy machinery, licensed engineering, and hydrological expertise required to reclaim land across three distinct counties.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)" }}>
              <h4 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Multi-County Permit Mastery</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)" }}>
                We are licensed, bonded, and registered in <Link href="/resources/hillsborough-pool-permits" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>Hillsborough</Link>, <Link href="/resources/pinellas-pool-permits" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>Pinellas</Link>, and <Link href="/resources/pasco-pool-permits" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>Pasco</Link> counties, ensuring your project meets local municipal building codes without bureaucratic delays.
              </p>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. THE MACRO-GEOLOGY OF THE BAY */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center" }}>1. The Macro-Geology of Tampa Bay</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "3rem", textAlign: "center" }}>
              Pool removal in Florida is not a "Dig and Fill" process. It is a <Link href="/blog/high-water-table-issues" style={{ color: 'var(--secondary)', fontWeight: 700 }}>hydrological engineering project</Link>. The region's unique geography dictates every phase of our work.
            </p>
            <div className="grid grid-cols-2 gap-12">
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>The Florida Aquifer Influence</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                    In areas like **Riverview** and **St. Petersburg**, the water table can sit as high as 3-4 feet below the surface. We utilize specialized <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 600 }}>well-point dewatering systems</Link> to ensure that our backfill is compacted on a dry, stable base, preventing future "Sink-Settlement."
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <Activity size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Karst Topography (North Tampa)</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                    Neighborhoods in **Carrollwood** and **Lutz** are characterized by limestone "Karst" formations. Removing a pool here requires careful load-distribution to ensure that sub-surface "Raveling" doesn't occur during heavy machinery operation.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE AREA GRID */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Regional Service Nodes</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>Click a service area to view local geological data, permit requirements, and case studies.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', background: 'white', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ borderBottom: '2px solid var(--secondary)', paddingBottom: '0.75rem', display: 'inline-block', color: 'var(--primary-dark)' }}>{loc.city}</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem', flexGrow: 1, fontSize: "0.95rem", lineHeight: 1.7 }}>{loc.desc}</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Link 
                    href={loc.path} 
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}
                  >
                    Explore {loc.city} Authority <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOGISTICAL DEPLOYMENT */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Logistical Mastery Across the Bridges</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    Moving heavy demolition equipment across the **Howard Frankland** and **Gandy Bridges** requires precise timing and logistics. We operate a dedicated fleet of low-boy trailers and dump trucks to ensure your project stays on schedule.
                 </p>
                 <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Truck size={24} color="var(--secondary)" />
                       <div>
                          <strong>Rapid Deployment Fleet:</strong> We maintain local equipment yards on both sides of the Bay, reducing hauling costs and ensuring we can be on-site within 48 hours of permit approval.
                       </div>
                    </li>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <HardHat size={24} color="var(--secondary)" />
                       <div>
                          <strong>Turnkey Project Management:</strong> From utility capping to final hydro-seeding, we manage every phase of the project, including inter-county permit coordination.
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <MapPin size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>The 40-Mile Coverage Zone</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   We service the entire Tampa Bay metropolitan area. If your zip code is within a 40-mile radius of downtown Tampa, you are in our primary service zone.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Request Service Map</Link>
              </div>
           </div>
        </div>
      </section>

      {/* BRIDGE DEPLOYMENT LOGISTICS DEEP DIVE */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>6. Bridge Deployment: The Logistics of the Bay</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  The **Howard Frankland**, **Gandy**, and **Courtney Campbell** bridges are the lifelines of the Tampa Bay area, but they are also significant logistical hurdles for heavy demolition equipment. Moving a 20,000-lb excavator or a 150-cubic-yard load of <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>A-3 sand</Link> across these bridges requires precision timing to avoid peak traffic windows and comply with FDOT load-bearing restrictions.
                  <br /><br />
                  We maintain a decentralized logistical network with equipment yards strategically placed in **Largo** and **East Tampa**. This ensures that we can deploy to a project in **Shore Acres** or **Clearwater Beach** as efficiently as we do in **Brandon**. By minimizing transit time across the Bay, we reduce fuel surcharges and ensure our crews arrive on-site early, maximizing daylight hours for critical phases like dewatering and structural backfilling.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Inter-County Hauling Mastery</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        Our hauling fleet is permitted for heavy-duty operation across all three major counties. This allows us to source the highest-quality A-3 sand from whichever quarry is closest to your site, ensuring the material remains clean and moisture-stable.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Real-Time Fleet Monitoring</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We utilize GPS-enabled fleet management to track the deployment of our machinery across the Bay, ensuring that your project schedule is never impacted by regional traffic or bridge maintenance delays.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* COMPARATIVE REGULATORY ANALYSIS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <ShieldCheck size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Comparative Regulation: A 3-County Guide</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     While all three counties adhere to the **Florida Building Code**, their local ordinances vary significantly. 
                     <br /><br />
                     **Pinellas County** is primarily focused on **ISR (Impervious Surface Ratio)** limits due to its density. **Hillsborough County** emphasizes **Stormwater Management** and erosion control. **Pasco County** has unique standards for **Structural Abandonment** and soil density. We provide the expert representation required to navigate these differences, ensuring your project is closed out legally regardless of your zip code.
                  </p>
               </div>
               <div>
                  <h2>Regional Site Assessment Standards</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     Every project starts with a **Regional Environmental Audit**. We analyze the specific geological data for your neighborhood—whether it's the muck-pockets of Town 'n Country or the karst-topography of North Tampa—to design a demolition and backfill plan that guarantees long-term stability and drainage compliance.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE SERVICE AREA FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Tampa Bay Service FAQ
               </h2>
               <p>25+ Technical Answers for Greater Tampa Area Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
                {[
                  { q: "What is your primary service radius?", a: "We service a 40-mile radius from downtown Tampa, covering all of Hillsborough, Pinellas, and South Pasco counties." },
                  { q: "Do you handle city-specific permits for Dunedin?", a: "Yes. We manage city-specific filings for Dunedin, Safety Harbor, and all other Pinellas municipalities." },
                  { q: "How do you manage dewatering on coastal properties?", a: "We utilize advanced well-point systems and sediment filtration to manage high water tables in coastal zones like Apollo Beach and Clearwater." },
                  { q: "Can you remove a pool in a gated community?", a: "Yes. We coordinate with HOA security and property management to ensure all equipment routes and work hours are strictly followed." },
                  { q: "What is 'Nuclear Density Testing'?", a: "It is the engineering standard for measuring soil compaction. We use it on all projects across the Bay to prove the ground is solid enough for construction." },
                  { q: "How do you protect my Grand Oaks in Carrollwood?", a: "We utilize interlocking composite mats and arborist-approved root-protection zones to ensure zero damage to protected trees during demolition." },
                  { q: "What happens to the old pool equipment?", a: "We remove all pumps, filters, and heaters, capping the lines at the source and recycling the units properly at authorized facilities." },
                  { q: "How long does a permit typically take in Pasco?", a: "Pasco County permits typically take 10 to 15 business days for approval. We manage the entire administrative process for you." },
                  { q: "Is 'Full Extraction' available in all areas?", a: <>Yes. While partial abandonment is an option, we always recommend a <Link href="/full-vs-partial-pool-removal" style={{ color: 'var(--primary)', fontWeight: 600 }}>full engineered extraction</Link> to maximize your property's resale value and future utility.</> },
                  { q: "What is the ROI of removing a pool in 33606?", a: <>Homeowners in South Tampa zips like 33606 often see a 2x to 3x <Link href="/pool-removal-cost-tampa" style={{ color: 'var(--primary)', fontWeight: 600 }}>ROI</Link> through reclaimed land value and increased marketability.</> }
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
              Tampa Bay Service Area FAQ
            </h2>
            <p>25+ Technical Answers for Florida Homeowners</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "Do you service Valrico and Seffner?", a: "Yes. Our East Hillsborough deployment covers Valrico, Seffner, and Plant City with the same heavy machinery available in Brandon." },
              { q: "Can you remove a pool in Treasure Island?", a: "Yes. Beachfront properties require FDEP (Coastal Construction Control Line) coordination, which we specialize in for Pinellas barrier islands." },
              { q: "What about Land O' Lakes properties?", a: "We provide full Pasco County service, including all necessary soil compaction testing and permit closeouts for Land O' Lakes and Lutz." },
              { q: "Is dewatering required in all service areas?", a: "Not necessarily. Higher-elevation areas in Carrollwood may not require it, but South Tampa and Riverview almost always do due to the high water table." },
              { q: "Do you handle city-specific permits for Oldsmar?", a: "Yes. We manage city-specific permits for all Pinellas municipalities, including Oldsmar, Safety Harbor, and Dunedin." },
              { q: "How long does it take to move machinery to St. Pete?", a: "We maintain an equipment yard near the Gandy Bridge, allowing us to deploy to St. Petersburg or Clearwater within 24-48 hours of permit issuance." },
              { q: "Can I use my own sand for the backfill?", a: "No. All three counties require certified clean fill from an authorized quarry to ensure drainage and stability. We source and haul all materials for you." },
              { q: "Do you service Apollo Beach?", a: "Yes. Apollo Beach projects often involve complex dewatering near the canals, which our crews are expert at managing." },
              { q: "What is the typical permit turnaround time in Hillsborough?", a: "Typically 10 to 15 business days. We handle all administrative follow-up to ensure your project starts as fast as possible." },
              { q: "Do you provide sinkhole remediation if needed?", a: "If a sub-surface void is found during demolition, we coordinate with geotechnical engineers to provide the necessary remediation before finishing the backfill." }
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
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready for Local Tampa Bay Expertise?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of families across Hillsborough, Pinellas, and Pasco who have reclaimed their yards with the region's top-rated pool removal specialists.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Request a Local Estimate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
