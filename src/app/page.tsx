import React from "react";
import Image from "next/image";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, ArrowRight, Activity, Target, Waves, HelpCircle, Info, TrendingUp, Anchor, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool Removal Tampa, FL | Tampa Pool Removal & Demolition (2026)",
  description: "Tampa's #1 authority in engineered pool removal. Specializing in high-water-table management, Proctor compaction, and land reclamation across Hillsborough, Pinellas, and Pasco counties.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool removal cost in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Tampa, pool removal typically costs between $9,000 and $16,000. Factors such as pool size, material (concrete vs fiberglass), and groundwater conditions impact the final price."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for pool removal in Hillsborough County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, pool demolition requires a permit in Hillsborough County. We handle the entire application process, including utility disconnections and final safety inspections."
        }
      },
      {
        "@type": "Question",
        "name": "What is dewatering and why is it needed in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dewatering is the process of lowering the groundwater table around a pool. In Tampa's high water table environment, this is essential to prevent the pool from 'popping' and to ensure stable soil backfill."
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
      {/* 1. HERO & CALCULATOR */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div className="animate-fade-in">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <ShieldCheck size={20} />
              <span>Tampa Bay's #1 Authority in Pool Demolition</span>
            </div>
            <h1 style={{ fontSize: "3.5rem", lineHeight: 1.1, marginBottom: "1.5rem" }}>Engineered Pool Removal & Demolition in Tampa Bay</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Florida pool removal is not a simple digging project. It is a complex hydrological and structural engineering task. We specialize in <Link href="/full-vs-partial-pool-removal" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>engineered extractions</Link> across <Link href="/resources/hillsborough-pool-permits" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>Hillsborough</Link>, <Link href="/resources/pinellas-pool-permits" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>Pinellas</Link>, and <Link href="/resources/pasco-pool-permits" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>Pasco</Link> counties—providing the <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>certified dewatering</Link> and compaction expertise that protecting your property value requires.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: "3rem" }}>
              <a href="#calculator" className="btn btn-primary" style={{ padding: "1rem 2.5rem" }}>
                Get Instant Estimate
              </a>
              <a href="tel:8135550199" className="btn btn-outline" style={{ padding: "1rem 2.5rem" }}>
                Consult a Specialist
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: "rgba(0,180,216,0.1)", padding: "0.5rem", borderRadius: "8px" }}>
                     <Target size={20} color="var(--primary)" />
                  </div>
                  <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>98% Proctor Compaction</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: "rgba(0,180,216,0.1)", padding: "0.5rem", borderRadius: "8px" }}>
                     <Waves size={20} color="var(--primary)" />
                  </div>
                  <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Advanced Dewatering Fleet</span>
               </div>
            </div>
          </div>
          
          <div id="calculator" className="animate-fade-in delay-200 calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar" style={{ background: "var(--primary-dark)", padding: "2rem 0" }}>
        <div className="container trust-bar-items" style={{ justifyContent: "space-around" }}>
          <div className="trust-item" style={{ color: "white" }}><CheckCircle size={18} color="var(--accent)" /> Licensed Demolition Contractor</div>
          <div className="trust-item" style={{ color: "white" }}><CheckCircle size={18} color="var(--accent)" /> $2M Liability Coverage</div>
          <div className="trust-item" style={{ color: "white" }}><CheckCircle size={18} color="var(--accent)" /> Certified Clean A-3 Fill</div>
          <div className="trust-item" style={{ color: "white" }}><CheckCircle size={18} color="var(--accent)" /> 2026 Code Compliance</div>
        </div>
      </div>

      {/* 3. THE GEOLOGICAL CHALLENGE */}
      <section className="section reveal">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div>
              <div className="icon-box">
                <Activity size={32} />
              </div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>1. The Science of the "Sinking Sand": Tampa's Unique Geology</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Most Tampa properties sit atop the **Florida Aquifer**, a massive underground reservoir that sits inches away from your pool shell in neighborhoods like <Link href="/tampa-service-areas/south-tampa" style={{ color: 'var(--primary)', fontWeight: 600 }}>South Tampa</Link>, <Link href="/tampa-service-areas/riverview" style={{ color: 'var(--primary)', fontWeight: 600 }}>Riverview</Link>, and <Link href="/tampa-service-areas/st-petersburg" style={{ color: 'var(--primary)', fontWeight: 600 }}>St. Pete</Link>. Removing a pool in these conditions is a battle against <Link href="/blog/high-water-table-issues" style={{ color: 'var(--secondary)', fontWeight: 700 }}>hydrostatic pressure</Link>.
              </p>
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--secondary)" }}>
                 <h4 style={{ marginBottom: "0.5rem" }}>The "Pop" Risk</h4>
                 <p style={{ fontSize: "0.9rem", margin: 0 }}>
                    An empty pool shell in a high-water-table zone acts like a boat. Without proper dewatering and equalization, the groundwater pressure can physically lift the pool out of the ground, causing catastrophic damage to your home's foundation and your neighbor's property.
                 </p>
              </div>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                   { t: 'Pneumatic Dewatering', d: 'Lowering the local water table to ensure a dry excavation floor.' },
                   { t: 'Structural Perforation', d: 'Puncturing the shell at specific pressure points to allow drainage.' },
                   { t: 'Lift-Based Compaction', d: 'Adding fill in 10-inch layers with industrial vibratory plates.' }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <CheckCircle color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
                    <div>
                       <strong style={{ display: "block", fontSize: "1.1rem" }}>{item.t}</strong>
                       <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ position: 'relative' }}>
              <Image src="/excavator_pool_demolition.png" alt="Heavy machinery performing precision pool demolition and engineered dirt backfill in Tampa, Florida" width={1000} height={667} style={{ borderRadius: 'var(--radius-lg)', position: 'relative', zIndex: 1, boxShadow: 'var(--shadow-lg)', maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SHORE ACRES FLOOD-ZONE DEEP DIVE */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>6. Shore Acres & Coastal Flood-Zone Management</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Properties in **Shore Acres** (St. Petersburg) and along the **Bayshore Boulevard** corridor represent the highest level of hydrological challenge in Florida. These zones feature "Tidal Infiltration," where the groundwater table fluctuates based on the Gulf tides. Removing a pool here is not a standard demolition; it is a precision <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 700 }}>dewatering operation</Link>.
                  <br /><br />
                  We utilize **automated hydrostatic sensors** to monitor the pressure differentials between the pool shell and the surrounding coastal soil. This ensures that the water table is lowered only to the "Safety Threshold," preventing any localized ground collapse or saltwater intrusion into your property's sub-surface layers. Our coastal backfill protocol utilizes a specialized "Shell-Flecked" <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>A-3 sand</Link> that mimics the natural geological density of the Pinellas peninsula, providing a permanent, non-shifting base for your reclaimed yard.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Tidal Stabilization</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We coordinate our excavation schedules with the local tide charts, ensuring that the most critical "Shell Extraction" phase occurs during the lowest possible groundwater pressure window.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Saltwater Mitigation</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        For beachfront properties, we utilize sacrificial anodes during the dewatering phase to protect adjacent metal structures (like seawall anchors) from accelerated galvanic corrosion.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* EPC TURBIDITY STANDARDS TECHNICAL SPECS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>EPC Compliance: Turbidity & Filtration</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     The **Environmental Protection Commission (EPC)** of Hillsborough County maintains strict standards for "Turbidity" (water clarity) during dewatering. Discharging silt-heavy pool water into the storm drain can result in $5,000+ daily fines.
                     <br /><br />
                     Our **EPC-Compliant Filtration System** utilizes multi-stage sediment bags and flocculation logs to ensure that every gallon of water discharged from your site is cleaner than the legal requirement. We maintain a real-time "Turbidity Log" for every coastal project, providing you with documented proof of environmental compliance.
                  </p>
               </div>
               <div>
                  <h2>Hillsborough Watershed Protection</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     Whether your property is on the **Hillsborough River** or near the **Cypress Creek** well-fields, our demolition protocol exceeds the standard environmental protection requirements. We utilize biodegradable hydraulic fluids and electric-start machinery to minimize the environmental footprint of your backyard reclamation.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE TAMPA BAY FAQ */}
      {/* THE EQUITY BOOST SECTION */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                  <img 
                    src="/images/reclaimed-backyard-equity-boost.png" 
                    alt="A luxury Tampa backyard showing a modern outdoor kitchen and fire pit area where a swimming pool was removed."
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
               </div>
               <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
                    <TrendingUp size={20} />
                    <span>The Equity Pivot</span>
                  </div>
                  <h2 style={{ fontSize: "2.5rem" }}>Maximize Your Property’s Highest & Best Use</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    In today's Tampa market, a poorly maintained or unneeded pool is a liability on your title. By reclaiming that square footage, you unlock the ability to add **high-value assets** like accessory dwelling units (ADUs), guest houses, or luxury outdoor living spaces that modern buyers crave.
                  </p>
                  <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                     <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}><CheckCircle size={20} color="var(--primary)" /> <strong>ADU Ready:</strong> Certified compaction for new foundations.</li>
                     <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}><CheckCircle size={20} color="var(--primary)" /> <strong>Liability Removal:</strong> Clean property title for faster resale.</li>
                     <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}><CheckCircle size={20} color="var(--primary)" /> <strong>Maintenance ROI:</strong> Instant $150-$300 monthly utility savings.</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Tampa Bay Pool Removal FAQ
               </h2>
               <p>25+ Technical Answers for Florida Homeowners</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
                {[
                  { q: "Is a pool removal permit expensive in Tampa?", a: <>Permit fees range from $250 to $600. We handle all paperwork and include these fees in our turnkey quotes. Read our <Link href="/blog/do-you-need-a-permit-in-tampa" style={{ color: 'var(--primary)', fontWeight: 600 }}>Mandatory Permit Guide</Link> for more.</> },
                  { q: "What is the ROI of removing a pool in South Tampa?", a: <>Homeowners often see a 2x to 3x ROI through reclaimed land value and the ability to build ADUs or guest houses. See our <Link href="/pool-removal-cost-tampa" style={{ color: 'var(--primary)', fontWeight: 600 }}>Cost Breakdown</Link>.</> },
                  { q: "Do you handle 'Dewatering' for all projects?", a: "We assess every site. Dewatering is mandatory in high-water-table zones like South Tampa and Shore Acres to ensure soil stability." },
                  { q: "How do you protect my Grand Oaks in Carrollwood?", a: "We utilize interlocking composite mats and arborist-approved root-protection zones to ensure zero damage to protected trees." },
                  { q: "What is 'Nuclear Density Testing'?", a: "It is the engineering standard for measuring soil compaction. We use it to prove the ground is solid enough for future construction." },
                  { q: "Can I build an ADU where the pool was?", a: <>Yes, but only with a **Full Engineered Removal** and 98% Proctor compaction. We provide the certified reports for your <Link href="/blog/building-after-pool-removal" style={{ color: 'var(--primary)', fontWeight: 600 }}>new building permit</Link>.</> },
                  { q: "How long does a Pasco permit take?", a: "Typically 10 to 15 business days. We manage the entire administrative process and coordinate all necessary inspections." },
                  { q: "What happens to the old pool heater and equipment?", a: "We remove all mechanical units, capping the lines at the source and recycling the units properly at authorized facilities." },
                  { q: "Can you remove a pool during the wet season?", a: "Yes. We utilize advanced well-point dewatering systems to keep the site stable and dry, even during typical Florida thunderstorms." },
                  { q: "What is the fine for an unpermitted pool removal?", a: "Fines can exceed $500 per day, and you will face significant title issues when trying to sell your home." }
               ].map((faq, i) => (
                  <div key={i} className="faq-item">
                     <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.q}</h4>
                     <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. NEIGHBORHOOD DEEP DIVES */}
      <section className="section bg-surface reveal">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>3. Specialized Solutions for Every Tampa Neighborhood</h2>
            <p>Local knowledge is the difference between a project and a disaster.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
               { n: 'South Tampa', d: 'Surgical tight-access demolition in zips like 33606 and 33629.' },
               { n: 'Brandon', d: 'Large-scale suburban expansions and property-line clearing.' },
               { n: 'Riverview', d: 'High-water-table management near the Alafia River corridor.' },
               { n: 'St. Pete', d: 'Strict Pinellas ISR compliance and Shore Acres dewatering.' },
               { n: 'Clearwater', d: 'Coastal construction and barrier-island regulatory management.' },
               { n: 'Carrollwood', d: 'North Tampa tree protection and karst topography safety.' },
               { n: 'Wesley Chapel', d: 'Rapid-deployment removal for new construction turnovers.' },
               { n: 'Lutz', d: 'Managing expansive rural lots and complex utility capping.' }
            ].map((loc, i) => (
               <div key={i} style={{ background: "white", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>{loc.n}</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>{loc.d}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE ECONOMICS OF RECLAMATION */}
      <section className="section reveal">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <div className="icon-box">
                    <TrendingUp size={32} />
                 </div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>4. The Economics of Yard Reclamation</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    In the 2026 Tampa market, land is the ultimate asset. A pool built in the 1970s or 80s is often a "Marketability Killer." By removing the pool and reclaiming the square footage, you unlock the ability to build modern high-value additions.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <h5 style={{ margin: "0 0 0.5rem" }}>ADU Potential</h5>
                       <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Reclaim 1,200 sq ft for a guest house or home office, adding massive rental or resale value.</p>
                    </div>
                    <div>
                       <h5 style={{ margin: "0 0 0.5rem" }}>Zero-Cost Maintenance</h5>
                       <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Save $3,200+ annually on electricity, chemicals, and insurance surcharges.</p>
                    </div>
                 </div>
              </div>
              <div style={{ background: "var(--surface-alt)", padding: "3.5rem", borderRadius: "24px" }}>
                 <h3>10-Year Financial Forecast</h3>
                 <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                       <span>Initial Demolition Cost</span>
                       <span style={{ fontWeight: 800 }}>($12,000)</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                       <span>10-Year Maintenance Savings</span>
                       <span style={{ fontWeight: 800, color: "var(--primary)" }}>+$32,000</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                       <span>Estimated Home Appraisal Lift</span>
                       <span style={{ fontWeight: 800, color: "var(--primary)" }}>+$45,000</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "1rem" }}>
                       <span style={{ fontSize: "1.2rem", fontWeight: 800 }}>Net Financial Gain</span>
                       <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--secondary)" }}>+$65,000</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. ADVANCED DEMOLITION TECHNIQUES */}
      <section className="section bg-surface-alt reveal">
         <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
               <h2 style={{ fontSize: "2.5rem" }}>5. Engineered Extractions: Beyond the Sledgehammer</h2>
               <p style={{ color: "var(--text-muted)" }}>We utilize industrial-grade technology designed for Tampa's unique soil profile.</p>
            </div>
            <div className="grid grid-cols-3 gap-12">
               <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
                  <Anchor size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Z-Shoring Foundation Protection</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>For pools within 5 feet of a home's foundation, we utilize specialized shoring to ensure zero soil migration during extraction.</p>
               </div>
               <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
                  <Droplets size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Turbo-Vane Dewatering</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Our pumps can move 5,000 gallons per hour with silent operation, maintaining neighbor peace while stabilizing the water table.</p>
               </div>
               <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
                  <HardHat size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Laser-Guided Leveling</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>We utilize top-tier laser grading to ensure your new yard drains 100% effectively toward the city swales.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 8. MASSIVE FAQ SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ marginBottom: "5rem", textAlign: 'center' }}>
            <h2 style={{ fontSize: "3rem", display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
              <HelpCircle size={40} color="var(--primary)" />
              The Definitive Tampa Pool Removal FAQ
            </h2>
            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)" }}>Expert Answers to 30+ Critical Technical & Financial Questions</p>
          </div>
          
          <div className="grid grid-cols-3 gap-x-12 gap-y-16">
            {[
              { q: "How much does pool removal cost in Tampa?", a: "Residential removals in Tampa typically range from $9,000 to $17,000. Factors include backyard access, pool material, and the required dewatering level." },
              { q: "Is a permit required in Hillsborough County?", a: "Yes. All pool demolitions require a permit. We handle the entire application, engineering drawings, and final inspection sign-off for you." },
              { q: "What is the difference between partial and full removal?", a: "Partial abandonment leaves the pool floor (punched) and the bottom walls. Full removal extracts 100% of the concrete and steel, maximizing property value." },
              { q: "Will removing a pool damage my driveway?", a: "No. We utilize heavy-duty composite mats to distribute machinery weight, protecting your driveway, pavers, and existing landscaping." },
              { q: "How long does the entire process take?", a: "A typical Tampa project takes 4 to 6 business days from mobilization to final grade. Permit approval typically takes 10 to 15 business days." },
              { q: "Can I build a guest house where the pool was?", a: "Yes, but only with a **Full Engineered Removal** and 98% Proctor compaction. We provide the certified reports required for your new building permit." },
              { q: "What is dewatering and why do I need it?", a: "Dewatering lowers the local water table to ensure we aren't compacting dirt into mud. It is essential for long-term soil stability in Florida." },
              { q: "Do you remove the pool cage (lanai)?", a: "Yes. We disassemble and recycle the aluminum lanai structure as part of our turnkey service." },
              { q: "Will removing my pool lower my property taxes?", a: "Yes. In many cases, removing a 'Luxury Improvement' lowers the assessed value of the home, leading to direct annual tax savings." },
              { q: "What type of fill dirt do you use?", a: "We exclusively use clean, certified A-3 sand, which matches the natural drainage profile of the Tampa Bay area's native soil." },
              { q: "Can you remove a pool in a tight South Tampa yard?", a: "Yes. We specialize in 'Surgical Demolition' using mini-excavators that can fit through a standard 36-inch gate if necessary." },
              { q: "What happens to the pool equipment and heater?", a: "We remove all mechanical units, capping the gas and electrical lines at the source and recycling the units properly." },
              { q: "Is your company insured for structural demolition?", a: "Yes. We carry $2M in general liability and workers' comp specifically for heavy excavation and demolition work." },
              { q: "How do you protect my neighbors' property?", a: "We utilize temporary shoring and silt fencing to ensure zero soil or water migration occurs during the excavation phase." },
              { q: "What is a 'Lien Waiver'?", a: "It's a legal document we provide proving all our material and labor costs have been paid, ensuring no one can place a claim on your property title." }
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.4 }}>{faq.q}</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <TrendingUp size={64} className="icon-center" style={{ marginBottom: "2.5rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "3.5rem", color: "white", marginBottom: "1.5rem" }}>Ready to Reclaim Your Tampa Equity?</h2>
          <p style={{ fontSize: "1.4rem", maxWidth: "800px", margin: "0 auto 3rem", opacity: 0.9, lineHeight: 1.8 }}>
            Don't settle for a "Dig and Fill." Get the engineered authority your property deserves. Join the 500+ Tampa families who have chosen the region's top-rated demolition team.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem" }}>Request Your Structural Audit</Link>
            <a href="tel:8135550199" className="btn" style={{ border: "2px solid white", color: "white", padding: "1.25rem 3rem", fontSize: "1.2rem" }}>Call (813) 555-0199</a>
          </div>
        </div>
      </section>
    </>
  );
}
