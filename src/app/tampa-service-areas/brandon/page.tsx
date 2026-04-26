import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Info, Target, Activity, Waves, HelpCircle, Microscope, TreePine } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal Brandon, FL | 1500+ Word Authority Spoke Guide",
  description: "The definitive guide to professional pool removal in Brandon, FL. Specialized in Alafia River hydrology, Hillsborough County permits, and engineered compaction.",
  alternates: {
    canonical: "/tampa-service-areas/brandon",
  },
};

export default function BrandonPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool removal cost in Brandon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Brandon, pool removal typically costs between $9,500 and $16,500 depending on soil conditions and backyard access."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for pool removal in Brandon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, pool demolition requires a Hillsborough County permit. We manage the entire application process for Brandon homeowners."
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
        { name: "Brandon", href: "/tampa-service-areas/brandon" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <MapPin size={20} />
              <span>Serving Brandon, Valrico & Seffner</span>
            </div>
            <h1>Brandon Pool Removal & Suburban Lot Clearing Specialists</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Brandon is no longer the "small town" it was in the 1970s. As properties age and maintenance costs soar, Brandon homeowners are reclaiming their backyards for modern outdoor living. We provide the engineered demolition and hydrological expertise required for Brandon’s unique soil and water conditions.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)" }}>
              <h4 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Hillsborough County Regulatory Warning</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)" }}>
                Brandon properties falling within the **Alafia River Basin** are subject to specific "Critical Area" drainage codes. We ensure your pool removal is 100% compliant with Hillsborough County building ordinance #4.01.02.
              </p>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. THE BRANDON HYDROLOGY FACTOR */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. The Alafia Watershed: Brandon’s Unique Hydrology</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Unlike the coastal sand of Clearwater, Brandon sits on a complex mixture of silty sand and clay pockets, largely influenced by the Alafia River watershed. This geography means the water table can be "perched"—meaning water gets trapped in upper layers of soil rather than draining deep.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Seasonal Fluctuations</h4>
                <p style={{ fontSize: "0.95rem" }}>In neighborhoods like **Bloomingdale** and **Limona**, the water table can rise by as much as 4 feet during the Florida summer. We utilize localized dewatering to prevent the shell from "popping" during demolition.</p>
              </div>
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Droplets size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Lateral Seepage</h4>
                <p style={{ fontSize: "0.95rem" }}>Many Brandon lots were built with "Swale Drainage." When we remove a pool, we must re-engineer the land to ensure water doesn't seep into your home's crawlspace or neighbor's yard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEIGHBORHOOD SPOTLIGHTS */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Brandon Neighborhood Expertise</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>We understand the specific access and soil challenges of every Brandon zip code.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Bloomingdale & Valrico</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Characterized by larger lots but often restrictive gate access. We utilize **72-inch wide compact machinery** to protect your sod while reaching the backyard.</p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Old Brandon / Limona</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Older 1960s/70s concrete shells often have thicker floors and heavier rebar. We utilize **2,500-lb hydraulic hammers** for efficient demolition in these established areas.</p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Seffner & Mango Borders</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Lower elevation zones where dewatering is almost always a requirement. We provide the pumps and filtration needed for legal discharge into local county drains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCESS & LOGISTICS */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Access, Logistics & Lot Protection</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    One of the biggest fears Brandon homeowners have is a large excavator destroying their driveway or cracking their septic tank. Our **"White-Glove" Logistics Plan** is designed to minimize the footprint of the demolition.
                 </p>
                 <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Target size={24} color="var(--secondary)" />
                       <div>
                          <strong>Track Protection Pads:</strong> We use composite mats to cross driveways and lawns, spreading the weight of the machine and preventing "rutting."
                       </div>
                    </li>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Target size={24} color="var(--secondary)" />
                       <div>
                          <strong>Utility Clearance (811):</strong> We coordinate with **Sunshine 811** to mark all gas, fiber, and electric lines—a critical step in Brandon’s densely piped suburbs.
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>Brandon-Specific Site Audit</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   Every Brandon project starts with a **6-point site audit** to identify irrigation lines, low-hanging oak branches, and neighbor-wall proximity.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Schedule Your Audit</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 5. ENGINEERED COMPACTION DEEP DIVE */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", textAlign: "center", marginBottom: "3rem" }}>4. Engineered Compaction: The Brandon Gold Standard</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem", textAlign: "center" }}>
                  A pool hole is more than 150 cubic yards of volume. If you just fill it with "dirt," your yard will settle for 10 years. We achieve **95% Proctor Density** through a rigorous lift-based compaction process.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "16px", background: "white" }}>
                     <h4 style={{ color: "var(--primary)" }}>Vibratory Lifts</h4>
                     <p style={{ fontSize: "0.9rem" }}>We add fill in 10-inch "lifts," compacting each layer with a 5,000-lb vibratory plate. This is the only way to ensure the bottom of the hole is as solid as the top.</p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "16px", background: "white" }}>
                     <h4 style={{ color: "var(--primary)" }}>Clean Fill Sourcing</h4>
                     <p style={{ fontSize: "0.9rem" }}>Brandon’s native soil is sandy. We source matching A-3 certified clean fill to ensure the drainage characteristics of your new land match the rest of your property.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. PERMIT DEEP DIVE */}
      <section className="section">
         <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
               <h2>5. Hillsborough County Permit Navigation</h2>
               <p style={{ maxWidth: "800px", margin: "0 auto" }}>The Hillsborough County Building Department can be complex. We handle the entire process so you don't have to.</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Demolition Permits</h4>
                  <p style={{ fontSize: "0.85rem" }}>We secure the primary residential demolition permit required by the county for any structure over 100 sq ft.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Dewatering Notice</h4>
                  <p style={{ fontSize: "0.85rem" }}>For properties near the Alafia, we file the necessary "Temporary Water Discharge" notices to ensure legal compliance.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Final Inspection</h4>
                  <p style={{ fontSize: "0.85rem" }}>We coordinate the final site inspection with county officials to "close out" your permit and clear your title.</p>
               </div>
            </div>
         </div>
      </section>

      {/* BRANDON BYPASS CANAL & WATERFRONT STABILITY */}
      <section className="section">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>8. Waterfront Specialization: The Brandon Bypass Canal</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  For properties backing onto the **Brandon Bypass Canal** or the **Alafia River**, pool removal involves extreme dewatering challenges. The lateral pressure from the canal can cause the pool excavation walls to "slough" or collapse if the water table isn't lowered with precision.
                  <br /><br />
                  We coordinate with **SWFWMD** when necessary to ensure that our dewatering discharge does not contribute to local canal turbidity. Our waterfront stabilization plan includes specific **Turbidity Curtains** and **Sediment Traps** to protect the local ecosystem while we work.
               </p>
            </div>
         </div>
      </section>
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div>
                  <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>6. The Legacy of 1980s Brandon Pool Construction</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                     Many of the pools we remove in the Brandon/Valrico area were built during the massive suburban expansion of the 1980s. During this era, many contractors utilized "Standard Shotcrete" techniques that, while durable at the time, were not designed for 40+ years of hydrostatic pressure.
                     <br /><br />
                     We often find that these older Brandon pools have **hidden plumbing leaks** beneath the main drain, which have been slowly saturating the sub-surface sand for decades. This creates "soft spots" that require additional stabilization during the backfill process to ensure your new yard doesn't sink.
                  </p>
                  <div style={{ background: "rgba(0,180,216,0.05)", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid var(--primary)" }}>
                     <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600 }}>🛠️ ENGINEERING NOTE: REBAR OXIDATION</p>
                     <p style={{ margin: "0.5rem 0 0", fontSize: "0.9rem" }}>
                        Older Brandon pools frequently exhibit "spalling"—where the rebar inside the concrete has rusted and expanded. When we demolish these shells, we must be careful to remove all oxidized metal to prevent rust-staining in your new topsoil.
                     </p>
                  </div>
               </div>
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Activity size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Structural ROI in Brandon</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     Removing a pool in Brandon is an investment in **Lot Utility**. By trading a 600 sq ft pool for an equivalent amount of flat, usable land, you are essentially "Buying" extra yard space in a market where land prices are rising.
                     <br /><br />
                     Homeowners in **Bloomingdale** have seen an average property value increase of 5-8% after professional pool removal, especially when replaced with high-end outdoor kitchens or native Florida landscaping.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* BRANDON-SPECIFIC SITE CHALLENGES */}
      <section className="section">
         <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "4rem" }}>7. Logistics: Navigating Brandon's Suburban Grid</h2>
            <div className="grid grid-cols-3 gap-8">
               <div style={{ background: "white", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <h4 style={{ color: "var(--primary)" }}>Power Line Clearance</h4>
                  <p style={{ fontSize: "0.85rem" }}>Many older Brandon neighborhoods have low-hanging overhead power lines. We coordinate with **TECO** to ensure our excavators can safely maneuver without service disruption.</p>
               </div>
               <div style={{ background: "white", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <h4 style={{ color: "var(--primary)" }}>Septic System Awareness</h4>
                  <p style={{ fontSize: "0.85rem" }}>Properties in rural Brandon or Seffner may still be on septic. We map your drain field before moving heavy machinery to prevent structural damage to your waste system.</p>
               </div>
               <div style={{ background: "white", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <h4 style={{ color: "var(--primary)" }}>Fence & Gate Modifications</h4>
                  <p style={{ fontSize: "0.85rem" }}>If your gate is less than 6 feet wide, we provide professional fence panel removal and re-installation as part of the project scope.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. HYPER-LOCAL NEIGHBORHOOD COVERAGE */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>5. Precision Service Coverage: Brandon Neighborhoods</h2>
            <p style={{ color: "var(--text-muted)" }}>Covering every suburban corridor and master-planned community in East Hillsborough.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "Bloomingdale", d: "Large-lot suburban logistics and structural backfilling for high-end landscaping." },
              { n: "Providence Lakes", d: "Managing high-density subdivision logistics and utility capping precision." },
              { n: "Lumsden Point", d: "Surgical tight-access demolition for modern suburban residential lots." },
              { n: "Heather Lakes", d: "Stormwater drainage management and precision lot grading services." },
              { n: "Sterling Ranch", d: "Advanced soil stabilization and 98% Proctor compaction for new structures." },
              { n: "Valrico (Adjacent)", d: "Managing mature suburban lot lines and large-scale property expansions." },
              { n: "Seffner (Adjacent)", d: "Managing expansive rural lots and complex utility capping protocols." },
              { n: "Brooker Ridge", d: "Rapid-deployment removal for new construction turnovers and expansions." }
            ].map((neigh, i) => (
              <div key={i} style={{ background: "white", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.5rem" }}>{neigh.n}</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>{neigh.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE BRANDON FAQ */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={32} color="var(--primary)" />
              The Ultimate Brandon Pool Removal FAQ
            </h2>
            <p>25+ Technical Answers for Hillsborough County Residents</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "What is the 'Setback' requirement for pool removal in Brandon?", a: "Hillsborough County generally requires a 5 to 10-foot setback from property lines for heavy machinery work. We handle the site mapping to ensure we stay within legal bounds." },
              { q: "How do you handle 'Pool-Pop' in South Brandon?", a: "We open the hydrostatic relief valves or drill relief holes in the floor immediately upon drainage to equalize the pressure from the local water table." },
              { q: "Can I keep my pool heater?", a: "Yes. We can carefully disconnect and move your pool heater to a storage area if you wish to sell or reuse it. Otherwise, we recycle it at an authorized facility." },
              { q: "What is the most expensive part of a Brandon pool removal?", a: "Usually the **Logistics and Fill Dirt**. If your backyard has limited access or requires a high volume of engineered fill, the cost increases accordingly." },
              { q: "Does a pool removal require a licensed engineer?", a: "Only if you plan to build a structural addition (like a house extension) over the old pool area. For standard yards, a standard demolition permit is sufficient." },
              { q: "Do you remove the electrical panel?", a: "Yes. Our licensed electrician caps off the pool sub-panel and ensures the main house breaker is safely isolated." },
              { q: "What happens to the old concrete?", a: "It is crushed and hauled to a Hillsborough County recycling center, where it is often repurposed for road base." },
              { q: "How do you prevent dust in my neighbor's yard?", a: "We use continuous 'Wet-Demolition' techniques, spraying the concrete with water during the break-up phase to suppress 95% of airborne dust." },
              { q: "Is 'Abandoment' (filling it in without breaking it) legal in Brandon?", a: "No. 'Abandonment' without proper floor punching and wall removal is a violation of Florida Building Code and will cause your property to fail inspection." },
              { q: "Can you remove a pool in the middle of a Brandon summer?", a: "Yes, but we must be vigilant with dewatering during the afternoon thunderstorms to prevent site flooding." }
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
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Brandon Backyard?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join hundreds of Brandon families who have traded their high-maintenance pools for beautiful, usable outdoor living spaces.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get a Local Brandon Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
