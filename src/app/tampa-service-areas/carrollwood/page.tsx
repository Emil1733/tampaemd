import React from "react";
import type { Metadata } from "next";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, TreePine, Info, Target, Activity, Waves, HelpCircle, Microscope, Anchor, Home } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal Carrollwood, FL | North Tampa Authority",
  description: "Carrollwood's leader in engineered pool removal. Specializing in Lake Carroll-area hydrology, protected tree compliance, and structural backfill.",
  alternates: {
    canonical: "/tampa-service-areas/carrollwood",
  },
};

export default function Carrollwood() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool removal cost in Carrollwood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Carrollwood, pool removal typically costs between $8,500 and $17,000. Factors include the material (concrete vs fiberglass) and the complexity of accessing land-locked suburban backyards."
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
        { name: "Carrollwood", href: "/tampa-service-areas/carrollwood" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div className="animate-fade-in">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <TreePine size={20} />
              <span>North Tampa Authority</span>
            </div>
            <h1>Carrollwood Pool Removal: Protected Tree & Lot Engineering</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
               Carrollwood's established landscapes and mature tree canopies require a surgical approach to pool demolition. We provide the geological expertise and technical precision required to remove aging pools while protecting your property's natural assets—from Original Carrollwood to the Village.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
               <Link href="/contact" className="btn btn-primary">Get Your Carrollwood Audit</Link>
               <a href="tel:8135550199" className="btn btn-outline">Call (813) 555-0199</a>
            </div>
          </div>
          <div className="glass-card" style={{ padding: "3rem", background: "var(--primary-dark)", color: "white" }}>
            <h3 style={{ color: "white" }}>The Carrollwood Quality Standard</h3>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> Arborist-Certified Root Protection</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> Lake Carroll Hydrological Management</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> 95% Proctor Density Compaction</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> HOA-Compliant Logistics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. GEOLOGY SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
               <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Karst Topography & Lake-Front Hydrology</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Carrollwood sits in a region characterized by **Karst Topography**, where underground limestone formations and a high water table near **Lake Carroll** create unique engineering challenges.
               </p>
               <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--secondary)" }}>
                  <h4 style={{ marginBottom: "0.5rem" }}>Hydrostatic Pressure Control</h4>
                  <p style={{ fontSize: "0.9rem", margin: 0 }}>
                     Removing a pool shell in Carrollwood's porous soil requires precise dewatering. Without it, the groundwater can exert enough pressure to collapse the surrounding earth or shift your home's foundation. We utilize automated well-point systems to maintain total site stability.
                  </p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="glass-card" style={{ padding: "2rem" }}>
                  <Microscope size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h5>Geological Site Audits</h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>We analyze the sub-surface layers to prevent future settlement or sinkhole triggers.</p>
               </div>
               <div className="glass-card" style={{ padding: "2rem" }}>
                  <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h5>Lake-Edge Stabilization</h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Specialized erosion control for properties adjacent to Carrollwood's many lakes.</p>
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
               <h2 style={{ fontSize: "2.5rem" }}>2. Navigating Mature Suburban Lot Lines</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                  In established areas like **Original Carrollwood**, side-yard access is often obstructed by mature oaks and historic landscaping. We specialize in \"Precision Mobilization,\" utilizing compact, high-torque excavators that can fit through narrow gateways without compromising your property.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div style={{ display: "flex", gap: "1rem" }}>
                     <Target color="var(--primary)" />
                     <div>
                        <strong>Tree Protection</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>We utilize interlocking mats to protect critical root zones from heavy machinery.</p>
                     </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                     <ShieldCheck color="var(--primary)" />
                     <div>
                        <strong>Utility Capping</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Safe decommissioning of older gas and electrical pool lines by licensed masters.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="glass-card" style={{ padding: "3rem", background: "white", order: 1 }}>
               <h3 style={{ marginBottom: "1.5rem" }}>The Carrollwood Authority Protocol</h3>
               <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Step 1: Arbo-Survey</strong>
                     <p style={{ fontSize: "0.85rem" }}>Mapping of protected trees and root-zone protection planning.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Step 2: Hydro-Analysis</strong>
                     <p style={{ fontSize: "0.85rem" }}>Testing of local water table levels near lakefront properties.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Step 3: Surgical Demo</strong>
                     <p style={{ fontSize: "0.85rem" }}>Low-vibration extraction to protect mature landscaping and structures.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Step 4: Certified Backfill</strong>
                     <p style={{ fontSize: "0.85rem" }}>95% Proctor compaction in layered lifts for build-ready stability.</p>
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
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Hillsborough County & Carrollwood Permit Mastery</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
                    The Hillsborough County Building Department maintains strict standards for pool \"Abandonment\" vs. \"Full Extraction.\" We manage the entire administrative cycle, ensuring your project meets all modern code requirements.
                 </p>
                 <div className="grid grid-cols-2 gap-12 text-left">
                    <div className="glass-card" style={{ padding: "2.5rem" }}>
                       <h4 style={{ color: "var(--primary)" }}>Carrollwood Village HOA Compliance</h4>
                       <p style={{ fontSize: "0.9rem" }}>
                          We coordinate directly with community boards to manage work-hour restrictions, machinery routes, and site cleanliness, ensuring zero friction with your neighborhood association.
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

      {/* CARROLLWOOD TREE PROTECTION SPECS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <TreePine size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Protected Tree Canopy Protocols</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     Hillsborough County's **Grand Oak** and **Significant Tree** ordinances are some of the strictest in Florida. Violations can lead to $10,000+ fines per tree. 
                     <br /><br />
                     Our **Carrollwood Canopy Protocol** involves the installation of protective fencing at the drip line and the use of air-spade technology if excavation is required near critical root zones. We ensure that your pool is removed without sacrificing the mature trees that define your property's value.
                  </p>
               </div>
               <div>
                  <h2>Karst Topography Management</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     In the North Tampa corridor, sub-surface limestone pockets require a specialized approach. Our team utilizes **low-vibration hydraulic hammers** to break up the pool shell, minimizing the seismic impact on the delicate Karst structures beneath your yard. We prioritize site safety and the long-term geological stability of your entire lot.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. HYPER-LOCAL NEIGHBORHOOD COVERAGE */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>5. Precision Service Coverage: Carrollwood Neighborhoods</h2>
            <p style={{ color: "var(--text-muted)" }}>Surgical logistics for North Tampa's premier residential corridors.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "Original Carrollwood", d: "Managing mature landscapes and historic tight-access lot lines." },
              { n: "Carrollwood Village", d: "HOA-compliant logistics for premier master-planned estates." },
              { n: "Northdale", d: "Advanced soil stabilization and 95% Proctor compaction for home expansions." },
              { n: "Lake Magdalene", d: "High-water-table management and specialized lake-front dewatering." },
              { n: "Carrollwood Cove", d: "Surgical tight-access demolition for established residential lots." },
              { n: "Plantation", d: "Managing mature suburban lot lines and large-scale property expansions." },
              { n: "Town 'N Country", d: "Advanced soil engineering and 98% Proctor compaction for coastal lots." },
              { n: "Greater Northdale", d: "Managing expansive lot logistics and complex utility decommissioning." }
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
              Carrollwood Pool Removal FAQ
            </h2>
            <p>Expert Answers for North Tampa Homeowners</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "How much does pool removal cost in Carrollwood?", a: "Residential removals in Carrollwood typically range from $8,500 to $17,000. Factors include the material (concrete vs fiberglass) and the complexity of accessing land-locked backyards." },
              { q: "Do I need a permit in Original Carrollwood?", a: "Yes. All pool removals in Hillsborough County require a building permit. We handle the entire application and inspection cycle for you." },
              { q: "Can you remove a pool near Lake Carroll?", a: "Yes. We specialize in high-water-table removals near lakefronts, utilizing advanced dewatering systems to protect your property foundation." },
              { q: "Will the machinery damage my oak trees?", a: "No. We utilize arborist-certified root protection zones and interlocking mats to ensure the heavy machinery never compromises your protected trees." },
              { q: "How long does the process take?", a: "A typical Carrollwood project takes 4 to 6 business days, including the time required for county inspections." },
              { q: "Can I build an ADU where the pool was?", a: "Yes, but only with a **Full Engineered Removal** and 95% Proctor density compaction to support the new foundation." },
              { q: "What is the 'Water Table' risk in North Tampa?", a: "Significant in areas near Lake Carroll and Lake Magdalene. We utilize specialized dewatering pumps to ensure a safe and stable demolition." },
              { q: "Do you remove the pool cage (lanai)?", a: "Yes. We disassemble and recycle the aluminum structure as part of our turnkey project management." },
              { q: "What type of fill dirt do you use?", a: "We use clean A-3 certified sand, which matches the natural drainage profile of North Tampa's native soils." },
              { q: "Is your company insured for Carrollwood projects?", a: "Yes. We carry $2M in general liability and workers' comp specifically for heavy excavation and demolition work." },
              { q: "Can you remove a fiberglass pool in Carrollwood Village?", a: "Yes. Fiberglass requires specific extraction techniques to prevent collapsing the surrounding soil, which we specialize in." },
              { q: "What happens to the old pool equipment?", a: "We remove the pump, filter, and heater, capping all lines at the source and disposing of the units properly." }
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
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Carrollwood Backyard?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of North Tampa families who have traded high maintenance for beautiful, usable outdoor living space.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get a Local Carrollwood Estimate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
