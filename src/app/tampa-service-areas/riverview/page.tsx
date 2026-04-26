import React from "react";
import type { Metadata } from "next";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Home, Info, Target, Activity, Waves, HelpCircle, Microscope, TreePine, Anchor } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal Riverview, FL | Engineered Demolition Authority",
  description: "Riverview's specialist in engineered pool removal. Specializing in high-water-table dewatering, Alafia River-area logistics, and 95% Proctor compaction.",
  alternates: {
    canonical: "/tampa-service-areas/riverview",
  },
};

export default function Riverview() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool removal cost in Riverview?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Riverview, pool removal typically costs between $8,000 and $16,000. Factors include pool size, material (concrete vs fiberglass), and backyard access constraints."
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
        { name: "Riverview", href: "/tampa-service-areas/riverview" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div className="animate-fade-in">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Home size={20} />
              <span>South Hillsborough Authority</span>
            </div>
            <h1>Riverview Pool Removal: Managing High-Water-Table Demolition</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Riverview's rapid growth has turned backyards into prime real estate. We specialize in the complex hydrological and structural engineering required to remove aging pools and reclaim your land for modern outdoor living—from FishHawk Ranch to Waterset.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
               <Link href="/contact" className="btn btn-primary">Request Your Riverview Audit</Link>
               <a href="tel:8135550199" className="btn btn-outline">Call (813) 555-0199</a>
            </div>
          </div>
          <div className="glass-card" style={{ padding: "3rem", background: "var(--primary-dark)", color: "white" }}>
            <h3 style={{ color: "white" }}>The Riverview Reliability Standard</h3>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> 95-98% Proctor Compaction</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> Alafia River Dewatering Experts</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> HOA & CDD Compliance Management</li>
              <li style={{ marginBottom: "1rem", display: "flex", gap: "0.75rem" }}><CheckCircle size={20} color="var(--accent)" /> Fixed-Price Local Quotes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. GEOLOGY SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
               <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. The Alafia River & Local Hydrology</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Properties in Riverview, especially those near the **Alafia River** or in lower-lying phases of **Panther Trace**, face a high water table. Removing a pool here is a battle against hydrostatic pressure.
               </p>
               <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--secondary)" }}>
                  <h4 style={{ marginBottom: "0.5rem" }}>Hydrostatic Stabilization</h4>
                  <p style={{ fontSize: "0.9rem", margin: 0 }}>
                     We utilize specialized dewatering arrays to lower the local water table before extraction. This ensures the site remains stable and prevents the pool shell from \"popping\"—a common disaster for uncertified contractors in Riverview.
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
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Ensuring all work complies with Hillsborough County's strict flood-plain management codes.</p>
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
               <h2 style={{ fontSize: "2.5rem" }}>2. Navigating Riverview HOAs & CDDs</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                  Most Riverview residents live in master-planned communities with strict oversight. We handle the logistical heavy lifting, from **FishHawk Ranch** architectural reviews to **Waterset** CDD access permits.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div style={{ display: "flex", gap: "1rem" }}>
                     <Target color="var(--primary)" />
                     <div>
                        <strong>CDD Liaison</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>We coordinate with district managers to protect community assets and roads.</p>
                     </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                     <ShieldCheck color="var(--primary)" />
                     <div>
                        <strong>Lot Protection</strong>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Utilizing composite mats to ensure zero damage to community sidewalks and curbs.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="glass-card" style={{ padding: "3rem", background: "white", order: 1 }}>
               <h3 style={{ marginBottom: "1.5rem" }}>The Riverview Authority Workflow</h3>
               <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Step 1: Hydro-Survey</strong>
                     <p style={{ fontSize: "0.85rem" }}>Depth analysis of the local water table and soil composition.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Step 2: Permit Filing</strong>
                     <p style={{ fontSize: "0.85rem" }}>Hillsborough County administrative management and bonding.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Step 3: Engineered Removal</strong>
                     <p style={{ fontSize: "0.85rem" }}>Controlled demolition and Alafia-grade dewatering.</p>
                  </div>
                  <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                     <strong>Step 4: Certified Backfill</strong>
                     <p style={{ fontSize: "0.85rem" }}>Layered compaction to 95% Proctor for structural stability.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPACTION SECTION */}
      <section className="section">
         <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Engineered Backfill: The 95% Proctor Standard</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
                    In Riverview's sandy-loam soils, proper compaction is the difference between a permanent lawn and a sinking pit. We utilize industrial vibratory plates to achieve certified structural density.
                 </p>
                 <div className="grid grid-cols-2 gap-12 text-left">
                    <div className="glass-card" style={{ padding: "2.5rem" }}>
                       <h4 style={{ color: "var(--primary)" }}>The Waterset Challenge</h4>
                       <p style={{ fontSize: "0.9rem" }}>
                          Waterset properties often feature high-density layouts. We utilize specialized **surgical excavators** to navigate these narrow corridors, ensuring that 100% of the pool debris is removed without impacting your neighbor's property line.
                       </p>
                    </div>
                    <div className="glass-card" style={{ padding: "2.5rem" }}>
                       <h4 style={{ color: "var(--primary)" }}>Structural ADU Readiness</h4>
                       <p style={{ fontSize: "0.9rem" }}>
                          For homeowners in **FishHawk** looking to add a guest house or luxury pavilion, we provide a **certified compaction report**. This document is essential for your next building permit and guarantees the soil can support a permanent foundation.
                       </p>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* WATERSER ZERO-LOT-LINE SPECS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <HardHat size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Waterset: Zero-Lot-Line Demolition Specialists</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     The **Waterset** community (zip code 33572) is famous for its high-density, high-value architecture. Side-yard access here can be as narrow as 4 to 6 feet. 
                     <br /><br />
                     Our **Waterset Access Protocol** involves the use of ultra-compact, high-torque machinery and interlocking composite mats. We protect your community's master-planned drainage swales and ensures that your property's underground utilities—from fiber optics to modern gas lines—remain undisturbed throughout the demolition phase.
                  </p>
               </div>
               <div>
                  <h2>Preserving the Boyette Canopy</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     Whether your property is on **Boyette Road** or in the heart of **Panther Trace**, we respect the local canopy. Our arborist-certified root protection protocols ensure that the massive oaks and palms that define Riverview's landscape are never compromised during the pool extraction process.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. HYPER-LOCAL NEIGHBORHOOD COVERAGE */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>5. Precision Service Coverage: Riverview Neighborhoods</h2>
            <p style={{ color: "var(--text-muted)" }}>Rapid-deployment logistics for South Hillsborough's premier communities.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "FishHawk Ranch", d: "Managing strict HOA restoration rules and surgical tight-access logistics." },
              { n: "Waterset", d: "Zero-lot-line demolition specialists with CDD-compliant heavy machinery." },
              { n: "Panther Trace", d: "Navigating high-water-table challenges and mature suburban lot lines." },
              { n: "South Fork", d: "Advanced soil stabilization and 98% Proctor compaction for home additions." },
              { n: "Alafia Ridge", d: "River-front hydrological management and specialized dewatering arrays." },
              { n: "Boyette Farms", d: "Managing expansive rural lots and complex utility decommissioning." },
              { n: "Triple Creek", d: "Rapid-deployment removal for new construction turnovers and expansions." },
              { n: "Lucaya Lake", d: "High-stakes estate removals with specialized foundation shoring." }
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
              Riverview Pool Removal FAQ
            </h2>
            <p>Expert Answers for South Hillsborough Homeowners</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "How much does pool removal cost in Riverview?", a: "Residential removals in Riverview typically range from $8,000 to $16,000. Factors include pool size, material (concrete vs fiberglass), and backyard access." },
              { q: "Do I need a permit in Hillsborough County?", a: "Yes. All pool removals in Riverview require a county demolition permit. We handle the entire application and inspection process for you." },
              { q: "Can you remove a pool in FishHawk Ranch?", a: "Yes. We are familiar with the FishHawk HOA requirements and coordinate all machinery access and erosion control to stay compliant." },
              { q: "What is the 'Water Table' risk near the Alafia River?", a: "High. Groundwater levels can fluctuate rapidly. We utilize specialized dewatering pumps to ensure a safe and stable demolition." },
              { q: "How long does the process take?", a: "A typical Riverview project takes 4 to 6 business days, including the time required for county inspections." },
              { q: "Can I build an ADU where the pool was?", a: "Yes, provided we perform a **Full Engineered Removal** and achieve 95% Proctor density compaction for the new foundation." },
              { q: "Will the machinery damage my driveway?", a: "We use heavy-duty composite mats to distribute the weight of our machines, ensuring zero damage to your concrete or paver driveway." },
              { q: "Do you remove the pool cage (lanai)?", a: "Yes. We disassemble and recycle the aluminum structure as part of our total project management." },
              { q: "What type of fill dirt do you use?", a: "We use clean A-3 certified sand, which matches the natural drainage profile of Riverview's native soils." },
              { q: "Is your company insured for Riverview projects?", a: "Yes. We carry $2M in general liability and workers' comp specifically for heavy excavation and demolition work." },
              { q: "Can you remove a fiberglass pool in Waterset?", a: "Yes. Fiberglass requires specific extraction techniques to prevent collapsing the surrounding sandy soil, which we specialize in." },
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
          <Home size={64} className="icon-center" style={{ marginBottom: "2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Riverview Backyard?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of Riverview families who have traded high maintenance for beautiful, usable outdoor living space.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get a Local Riverview Estimate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
