import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, FastForward, Info, Target, Activity, Waves, HelpCircle, Microscope, TreePine } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal Wesley Chapel, FL | Pasco County Authority Spoke Guide",
  description: "The definitive engineering guide to professional pool removal in Wesley Chapel, FL. Specializing in Epperson Lagoon-area logistics, Pasco County permitting, and structural backfill.",
  alternates: {
    canonical: "/tampa-service-areas/wesley-chapel",
  },
};

export default function WesleyChapelPage() {
  const faqs = [
    {
      q: "What are Pasco County's setback rules for Wesley Chapel pool removals?",
      a: "Pasco County land development codes require a minimum 5-foot setback from rear and side property lines. For heavy excavation equipment, we map these boundaries precisely to prevent boundary violations or damage to adjacent structures."
    },
    {
      q: "How do you handle high water table dewatering near Cypress Creek?",
      a: "Properties near the Cypress Creek Basin feature a perched water table. We install localized well-point dewatering systems, inserting suction points 6 to 8 feet deep around the pool perimeter to depress the hydraulic head before breaking the concrete shell."
    },
    {
      q: "Can I build an accessory dwelling unit (ADU) where my pool was in Seven Oaks?",
      a: "Yes. However, you must execute a 'Full Concrete Extraction' rather than a partial demo. The backfill must be compacted in 10-inch lifts to 98% Modified Proctor Density, validated by a third-party geotechnical engineer."
    },
    {
      q: "What is the 'Crystal Lagoon' effect on property values and pool removals?",
      a: "In communities like Epperson and Mirada, access to massive community lagoons has reduced the utility of private backyard pools. Homeowners are removing high-maintenance pools to reclaim lawn space for outdoor kitchens and turf, relying on the lagoons for swimming."
    },
    {
      q: "What permits are required by Pasco County for a pool demolition?",
      a: "We secure a residential demolition permit from the Pasco County Building Department. This requires a signed site plan showing equipment access paths, utility disconnect points, and erosion control measures (silt fencing)."
    },
    {
      q: "How do you protect modern utility lines in newer subdivisions like Union Park?",
      a: "Subdivisions built after 2010 have dense underground networks of gas, fiber optic, and electric lines. We submit a priority locate request to Sunshine 811 and hand-dig verification slots near any marked paths before bringing in machinery."
    },
    {
      q: "What happens to the pool's structural steel and concrete debris?",
      a: "Every ton of demolished gunite, shotcrete, and steel rebar is hauled out of Wesley Chapel. The concrete is transported to local crushing yards to be recycled into road base, while the steel is sent to metal recycling centers."
    },
    {
      q: "Can you perform a pool removal on a property with CDD restrictions?",
      a: "Yes. We coordinate directly with Community Development Districts (CDDs) to secure right-of-way use permits, establish approved delivery zones, and ensure heavy trucks do not damage community roads or sidewalks."
    },
    {
      q: "How do you prevent sinkholes (Karst topography hazards) during demolition?",
      a: "Wesley Chapel is situated over limestone formations susceptible to sinkholes. We use low-vibration hydraulic hammers and avoid excessive dynamic pounding. This keeps sub-surface voids stable during concrete fracturing."
    },
    {
      q: "What is the difference between partial abandonment and full extraction?",
      a: "Partial abandonment involves breaking the top 36 inches of the pool, punching drainage holes in the floor, and filling the shell. Full extraction removes 100% of the concrete, steel, and PVC. Full extraction is the only method that guarantees build-ready soil."
    },
    {
      q: "How do you protect septic systems in older Northwood lots?",
      a: "Older lots near Northwood utilize septic tanks and drain fields. We map these systems with ground-penetrating radar (GPR). Our equipment moves exclusively on high-density composite mats laid away from the tank and absorption trenches."
    },
    {
      q: "How many cubic yards of soil are required for a 15x30 pool in Estancia?",
      a: "A typical 15x30 foot pool requires approximately 130 to 170 cubic yards of soil. This translates to roughly 9 to 12 tandem dump truck loads of certified clean A-3 sand."
    },
    {
      q: "What are the noise curfews for heavy machinery in Wesley Chapel?",
      a: "Under Pasco County ordinances, construction noise is permitted between 7:00 AM and 6:00 PM. We schedule our heaviest hammering and excavation phases between 9:00 AM and 3:00 PM to minimize neighborhood disturbance."
    },
    {
      q: "Does removing a pool lower property taxes in Pasco County?",
      a: "Yes. Once the final inspection is closed, we submit the compaction certificate and permit closure documents to the Pasco County Property Appraiser, which typically leads to a downward adjustment in assessed value."
    },
    {
      q: "How do you prevent soil erosion into storm sewers during rainy periods?",
      a: "We install Type IV silt fencing around the entire demolition zone and place sediment barriers in local curb inlets. This keeps run-off soil from entering the municipal storm sewer network."
    },
    {
      q: "Can you remove a pool with overhead power lines in Meadow Pointe?",
      a: "Yes. We maintain a minimum 10-foot clearance from all overhead power lines, in compliance with OSHA standards. We utilize spotters and low-clearance excavators if overhead lines run close to the property boundary."
    },
    {
      q: "What is the soil composition in the Wiregrass Ranch area?",
      a: "Wiregrass Ranch features a top layer of Smyrna fine sand, which drains well, but is underlain by heavy clay lenses at 48 to 72 inches. We import clean, sandy loam that integrates with this stratigraphy to prevent water pooling."
    },
    {
      q: "How do you decommission a saltwater chlorine generator?",
      a: "We disconnect the electrolytic cell, cap off the plumbing lines at the main equipment pad, and safely isolate the 240V power lines back to the sub-panel. All electrical work is verified by a licensed technician."
    },
    {
      q: "What is a 'Proctor Density' test and why does it matter?",
      a: "A Proctor test measures the relationship between soil moisture and density. We achieve 98% Modified Proctor density, which means the soil is compacted to 98% of its maximum laboratory density, preventing future shifting or settling."
    },
    {
      q: "Can a pool shell be left in place if we only want a grass lawn?",
      a: "While partial abandonment is allowed, the remaining concrete shell blocks deep root systems and can trap water, creating a muddy lawn. We highly recommend full extraction for residential yards to ensure healthy grass."
    },
    {
      q: "How do you handle narrow side-yard gates in newer subdivisions?",
      a: "For tight lot lines (under 5 feet), we use compact track loaders and mini-excavators that require only a 36-inch clearance. If necessary, we temporarily remove a fence panel and restore it upon project completion."
    },
    {
      q: "Do you offer structural warranties for the compacted yard space?",
      a: "Yes. All our full-extraction projects come with a 10-year compaction warranty. If any settlement occurs within the backfilled footprint, we return to re-fill and re-grade at no cost."
    },
    {
      q: "What is SWFWMD and how does it impact pool removal?",
      a: "The Southwest Florida Water Management District (SWFWMD) regulates watershed runoff. We design the final grade of your yard to match the historic drainage footprint, ensuring your project does not divert storm run-off onto adjacent lots."
    },
    {
      q: "How do we get started with a site assessment in Wesley Chapel?",
      a: "You can schedule a site assessment online. Our team will visit your property, locate utilities, measure access corridors, test soil moisture, and provide a fixed-price engineering estimate."
    }
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
        { name: "Wesley Chapel", href: "/tampa-service-areas/wesley-chapel" }
      ]} />
      
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <FastForward size={20} />
              <span>Pasco's Growth Authority & Geotechnical Specialists</span>
            </div>
            <h1>Wesley Chapel Pool Removal & Site Engineering</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Wesley Chapel has shifted from a rural citrus landscape into a premier high-density suburban hub. Private backyards are now premium real estate. We deliver the specialized geotechnical demolition, <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>high-density compaction</Link>, and municipal permit clearance required to transform your yard into a safe, build-ready asset.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)" }}>
              <h4 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Pasco County Code Warning</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Wesley Chapel properties situated within the **Cypress Creek Watershed** must adhere to strict environmental storm runoff rules. We ensure your pool removal complies with the Southwest Florida Water Management District (SWFWMD) and <Link href="/resources/pasco-pool-permits" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Pasco County LDC Chapter 500 regulations</Link>.
              </p>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. THE GEOLOGICAL STRATIGRAPHY DEEP DIVE */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Wesley Chapel Geological Stratigraphy & Karst Hazards</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Wesley Chapel is built upon a delicate geological foundation known as **Karst Topography**. This structure consists of soluble carbonate rocks (such as limestone) beneath a thin mantle of sand and clay. Unmanaged demolition vibrations or poor <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>backfill practices</Link> can compromise these subsurface voids, triggering localized land settlement or sinkhole activity.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Microscope size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Karst Void Stabilization</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Our team uses low-vibration, high-frequency hydraulic breakers (like the Okada series) rather than heavy drop-balls. This preserves the delicate Tampa Member limestone formations beneath your property, eliminating the risk of structural collapse.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Clay Lens Management</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  The soils in the Wiregrass Ranch area contain **Smyrna and Pomona fine sands** underlain by dense clay lenses at 4 to 6 feet. To prevent water retention in your new yard, we construct sub-surface drainage pathways using native sand blends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAGOON AREA & ZERO-LOT-LINE LOGISTICS */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Epperson Lagoon Area & Zero-Lot-Line Logistics</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
              Subdivisions like **Epperson**, **Mirada**, and **Union Park** feature high-density homes where space is limited. Moving heavy equipment requires specialized planning.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Surgical Access Matting</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                We lay interlocking high-density polyethylene (HDPE) composite mats across your turf and driveway. This distributes the pressure of our loaders, protecting utility trenches and avoiding soil rutting.
              </p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>HOA & CDD Clearance</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                Epperson and Wiregrass maintain strict standards regarding noise, vehicle parking, and dust control. We act as your liaison, submitting site logistics maps directly to the HOA and CDD boards for seamless approval, coordinating adjacent operations with nearby teams in <Link href="/tampa-service-areas/carrollwood" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Carrollwood</Link> and <Link href="/tampa-service-areas/brandon" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Brandon</Link>.
              </p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Compact Machinery</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                We run compact track loaders and mini-excavators (width under 60 inches). This allows us to pass through narrow side gates without removing major fence structures or disturbing neighboring homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE HYDROLOGY DEEP DIVE */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Cypress Creek & Hillsborough River Basin Hydrology</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Wesley Chapel properties adjacent to the **Cypress Creek Preserve** or the **Hillsborough River** operate in zones with very high groundwater. Demolishing a pool below the water table requires specialized <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>well-point dewatering arrays</Link> to prevent site flooding and structural destabilization.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <li style={{ display: "flex", gap: "1rem" }}>
                  <Droplets size={24} color="var(--secondary)" />
                  <div>
                    <strong>Well-Point Dewatering Arrays:</strong> We drill temporary vacuum wells around the pool rim, pumping the water out to depress the local table by 4 to 6 feet before concrete fracturing.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "1rem" }}>
                  <ShieldCheck size={24} color="var(--secondary)" />
                  <div>
                    <strong>Turbidity Control:</strong> Discharge water is routed through geotextile filtration sediment bags before entering stormwater drains, keeping local Pasco wetlands clean.
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
              <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
              <h3>Wesley Chapel Geotechnical Site Audit</h3>
              <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                We perform an intensive site analysis mapping local water lines, overhead power cables, soil profiles, and fence lines.
              </p>
              <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Book Your Geotechnical Audit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="glass-card" style={{ padding: "4rem", border: "1px solid var(--primary)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, background: "var(--primary)", color: "white", padding: "0.5rem 2rem", transform: "rotate(45deg) translate(25%, -50%)", fontWeight: 700, fontSize: "0.8rem" }}>ENGINEERING RECORD</div>
            <div className="grid grid-cols-2 gap-16 items-start">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1rem" }}>
                  <HardHat size={20} />
                  <span>Geotechnical Case Study: Project ID #WC-88432</span>
                </div>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Suburban Recovery & Compaction in Epperson</h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  **Location:** Epperson North Division (Zip: 33545)  
                  **Structure:** 2019 shotcrete pool, 12,000-gallon capacity, set 5 feet from adjacent residential footings.  
                  **Geological Challenge:** High Smyrna fine sand layer over dense clay lenses with a perched water table at 36 inches. Access corridor was limited to a 54-inch wide easement.
                </p>
                <div style={{ background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "12px", marginBottom: "2rem" }}>
                  <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>The Engineering Protocol:</h4>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "var(--text-main)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <li><strong>Well-Point Dewatering:</strong> Installed an 8-point perimeter dewatering system, successfully lowering the local groundwater by 5 feet prior to shell breaching.</li>
                    <li><strong>Surgical Shell Extraction:</strong> Utilized a compact Bobcat E35 excavator with a hydraulic breaker to demolish and extract 100% of the shotcrete shell and rebar matrix.</li>
                    <li><strong>ASTM D1557 Compaction:</strong> Backfilled with certified A-3 clean sand in 10-inch lifts, using a dynamic vibratory compactor to achieve structural density.</li>
                  </ul>
                </div>
              </div>
              <div style={{ background: "var(--primary-dark)", padding: "3rem", borderRadius: "16px", color: "white" }}>
                <h3 style={{ color: "white", marginBottom: "1.5rem" }}>Epperson Project Metrics</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>48 Tons</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Concrete & Rebar Extracted & Recycled (Zero Sub-Surface Voids)</div>
                  </div>
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>98.4%</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Modified Proctor Density Achieved (Engineered for <Link href="/blog/building-after-pool-removal" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'underline' }}>ADU Foundation</Link>)</div>
                  </div>
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>100% Compliance</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Pasco County Demolition Permit Closed Out & HOA Bond Released</div>
                  </div>
                </div>
                <p style={{ marginTop: "2rem", fontSize: "0.85rem", fontStyle: "italic", opacity: 0.8 }}>
                  "By executing a complete extraction and delivering a certified compaction report, we cleared the way for the homeowner's new outdoor pavilion and outdoor kitchen in a single building cycle." — Lead Project Manager.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERED COMPACTION & THE PROCTOR STANDARD */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.2rem", textAlign: "center", marginBottom: "3rem" }}>4. Engineered Compaction: Reclaiming Build-Ready Land</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem", textAlign: "center" }}>
              A standard swimming pool represents about 150 tons of displaced soil. Simply dumping dirt into the hole will lead to long-term soil settling, resulting in yard depressions or structure damage. We prevent this by executing a <Link href="/full-vs-partial-pool-removal" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>full structural extraction</Link> and compacting soil to the **Modified Proctor Standard (ASTM D1557)**.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "16px", background: "white" }}>
                <h4 style={{ color: "var(--primary)" }}>Sequential 10-Inch Lifts</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  We place backfill soil in layers no deeper than 10 inches. Each lift is compacted with a 6,000-lb vibratory plate. This is the only method to ensure uniform soil density from the base of the excavation to the surface, as detailed in our <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>soil stabilization guide</Link>.
                </p>
              </div>
              <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "16px", background: "white" }}>
                <h4 style={{ color: "var(--primary)" }}>A-3 Certified Sandy Loam</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  We import certified A-3 clean sand. This soil type matches the natural drainage characteristics of Wesley Chapel’s native sand layers, ensuring water drains freely and does not pool in your backyard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERMIT NAVIGATION */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>5. Pasco County Permitting & Regulatory Clearance</h2>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", color: "var(--text-muted)" }}>
              The Pasco County Building Department mandates strict permitting protocols for residential pool demolitions. We handle the paperwork.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
              <h4>Permit Acquisition</h4>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                We draft and submit the demolition permit package, including signed site layouts, boundary plans, and erosion control diagrams.
              </p>
            </div>
            <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
              <h4>Utility Clearances</h4>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                We coordinate with utility providers to disconnect gas lines, water feeds, and sub-panels, obtaining safe-to-demolish certificates.
              </p>
            </div>
            <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
              <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
              <h4>Final Inspection Sign-Off</h4>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                We arrange the final inspection with Pasco County inspectors, presenting compaction logs and obtaining the official closeout certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEIGHBORHOOD SERVICE INDEX */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>6. Serving Every Wesley Chapel Neighborhood</h2>
            <p style={{ color: "var(--text-muted)" }}>Providing professional geotechnical services across Pasco County's premier communities.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "Epperson", d: "High-density master-planned layouts. Reclaiming lot space for ADUs and turf yards." },
              { n: "Wiregrass Ranch", d: "Handling Smyrna fine sands and complex subsurface clay layer management." },
              { n: "Seven Oaks", d: "Surgical access demolition for established luxury residential estate lots." },
              { n: "Meadow Pointe", d: "Navigating mature utility networks and properties bordering wetland zones." },
              { n: "Union Park", d: "Logistics control for compact lot lines and strict CDD requirements." },
              { n: "Estancia", d: "Premium pool removals requiring heavy foundation shoring and root protection." },
              { n: "Winding Ridge", d: "High-end estate demolition with detailed soil compaction for outbuildings." },
              { n: "Northwood", d: "Managing expansive lots, mature landscaping, and septic field preservation." }
            ].map((neigh, i) => (
              <div key={i} style={{ background: "white", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.5rem" }}>{neigh.n}</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>{neigh.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MUNICIPAL REGULATORY APPENDIX & GEOLOGICAL DEEP DIVE */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Pasco County Municipal Regulatory Appendix</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                Pool removals in Wesley Chapel are governed by the **Pasco County Land Development Code (LDC)**, specifically Chapter 500. Read our detailed <Link href="/resources/pasco-pool-permits" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Pasco County permit guide</Link> for step-by-step municipal instructions. For properties within master drainage basins, homeowners must verify that final lot lines match historic runoff slopes.
                <br /><br />
                Our process fulfills all LDC requirements. For full extraction projects, we provide an as-built survey indicating the removal of all structural concrete, reinforcing steel, and mechanical lines. This is paired with an engineering compaction affidavit, ensuring your property title is updated and clean for future buyers.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Wesley Chapel Subsurface Stratigraphy</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                The geological profile in central Pasco County consists of a thin soil veneer of **Smyrna and Pomona fine sands** overlaying the **Tampa Member of the Arcadia Formation**. The limestone here lies relatively close to the surface, typically between 6 to 15 feet. This close proximity makes the area prone to Karst weathering, which creates voids if heavy vibration is applied, requiring active <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>groundwater dewatering management</Link>.
                <br /><br />
                To address this risk, we execute low-impact demolition. We fracture the pool gunite using high-frequency breaker tools that distribute impact energy horizontally rather than vertically. This maintains the structural stability of the underlying limestone, protecting your lot from settling and ensuring a long-term foundation base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={32} color="var(--primary)" />
              The Ultimate Wesley Chapel Pool Removal FAQ
            </h2>
            <p>24 Technical Answers for Pasco County Residents</p>
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

      {/* 11. FINAL CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <TreePine size={64} className="icon-center" style={{ marginBottom: "2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Wesley Chapel Backyard?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the families who have reclaimed their yards from high-maintenance pools, replacing them with functional, build-ready land.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get Your Local Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
