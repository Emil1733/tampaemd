import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, TreePine, Info, Target, Activity, Waves, HelpCircle, Microscope } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal Carrollwood, FL | North Tampa Authority Spoke Guide",
  description: "The definitive engineering guide to professional pool removal in Carrollwood, FL. Specializing in Lake Carroll-area hydrology, protected tree compliance, and structural backfill.",
  alternates: {
    canonical: "/tampa-service-areas/carrollwood",
  },
};

export default function CarrollwoodPage() {
  const faqs = [
    {
      q: "What is the setback requirement for heavy machinery in Original Carrollwood?",
      a: "Hillsborough County land development codes require a minimum 5-foot setback from property lines. In older sections of Original Carrollwood, we perform pre-demolition site layout audits to protect close property lines and adjacent brick structures."
    },
    {
      q: "How do you handle the high water table near Lake Carroll during demolition?",
      a: "Properties near Lake Carroll and Lake Magdalene sit on a highly permeable aquifer. We install a multi-point vacuum dewatering system around the pool rim, lowering the groundwater table by 4 to 6 feet before concrete fracturing to prevent pit wall collapse."
    },
    {
      q: "Can I build an accessory structure (ADU) where my pool was in Carrollwood Village?",
      a: "Yes. However, you must perform a 'Full Concrete Extraction' (removing all concrete, rebar, and lines). The soil must be backfilled in 10-inch lifts and compacted to 95% Modified Proctor Density, verified by a licensed engineer."
    },
    {
      q: "What are the rules regarding Grand Oaks and pool removal in Carrollwood?",
      a: "Hillsborough County enforces strict protections for trees over 34 inches in diameter. We deploy interlocking composite pressure mats over critical root zones (the canopy drip line) to prevent heavy machinery from compacting root soil."
    },
    {
      q: "What permits are required by Hillsborough County for a pool removal?",
      a: "We secure a residential demolition permit from the Hillsborough County Building Department. This requires submitting a detailed plot plan indicating equipment access, utility cap-off points, and erosion control barrier locations."
    },
    {
      q: "How do you protect sub-surface utilities in established Carrollwood neighborhoods?",
      a: "Older parts of Carrollwood have undocumented utility lines. We submit a priority utility locate request to Sunshine 811. We also use ground-penetrating radar (GPR) to scan for electrical conduits, gas pipelines, and irrigation systems before excavation."
    },
    {
      q: "What is the difference between partial pool abandonment and full extraction?",
      a: "Partial abandonment involves breaking the top 36 inches, punching holes in the floor, and filling the shell. Full extraction removes 100% of the concrete, steel, and PVC. Only full extraction guarantees build-ready soil for future structures."
    },
    {
      q: "How do you control concrete dust during demolition in Carrollwood?",
      a: "We use continuous wet-demolition protocols, spraying water at the breaker point during fracturing. This captures 95% of silica dust before it becomes airborne, protecting your neighbors' houses and mature trees."
    },
    {
      q: "How do you protect older septic systems in the Lake Magdalene area?",
      a: "We map the exact location of septic tanks and drain fields using GPR. Our heavy machinery moves exclusively on composite pressure-mats placed away from these structures to prevent crushing the septic infrastructure."
    },
    {
      q: "How many cubic yards of soil are required for a standard Carrollwood pool?",
      a: "A typical 15x30 pool requires roughly 120 to 160 cubic yards of fill. This requires approximately 8 to 11 tandem axle dump trucks of certified clean A-3 sand."
    },
    {
      q: "What are the noise curfews for construction in Carrollwood?",
      a: "Per Hillsborough County ordinance, heavy machinery is permitted to operate between 7:00 AM and 6:00 PM. We schedule our loudest hammering work between 9:00 AM and 3:30 PM to minimize neighborhood disturbance."
    },
    {
      q: "Does pool removal lower my property taxes in Hillsborough County?",
      a: "Yes. Once the permit is finalized and closed out, we submit the compaction logs to the Hillsborough Property Appraiser to adjust your property's value, lowering your taxable assessment."
    },
    {
      q: "How do you prevent dirt and sand runoff into Lake Carroll?",
      a: "We place Type IV geotextile silt fencing around the entire demolition footprint. For lakefront lots, we install secondary turbidity barriers along the shoreline to prevent soil runoff into the lake."
    },
    {
      q: "Can you remove a pool if there are overhead power lines nearby?",
      a: "Yes. We maintain a minimum 10-foot safety clearance from all overhead power lines, in compliance with OSHA standards. We utilize spotters and low-clearance excavators if overhead lines run close to the property boundary."
    },
    {
      q: "What is the soil stratigraphy like in Carrollwood?",
      a: "Carrollwood's soil consists of **Candler Fine Sand** in high zones and **Zolfo Fine Sand** in wet zones, underlain by shallow limestone. We match our imported backfill sand to this profile to maintain proper drainage."
    },
    {
      q: "How do you safely decommission pool gas heaters?",
      a: "We use a licensed gas technician to cap and isolate the gas supply line at the primary meter. The heater unit is disconnected, and the piping is purged with nitrogen to ensure zero gas accumulation risk."
    },
    {
      q: "What is a 'Proctor Density' test and why does it matter?",
      a: "A Proctor test measures the relationship between soil moisture and density. We achieve 95% Modified Proctor density, which means the soil is compacted to 95% of its maximum laboratory density, preventing future shifting or settling."
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
      q: "How do we get started with a site assessment in Carrollwood?",
      a: "You can schedule a site assessment online. Our team will visit your property, locate utilities, measure access corridors, test soil moisture, and provide a fixed-price engineering estimate."
    },
    {
      q: "How do you handle older, thick gunite pool shells from the 1970s?",
      a: "Older pools often feature gunite layers up to 12 inches thick with heavy rebar grids. We use 2,500-foot-pound hydraulic hammers mounted on track excavators to systematically crack and break these dense shells."
    },
    {
      q: "Can you remove a pool cage (lanai) without damaging my roof?",
      a: "Yes. We anchor safety cables to the cage frame, systematically cut the structural joints away from the house fascia, and lower the aluminum sections using a mini-crane or loader boom."
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
        { name: "Carrollwood", href: "/tampa-service-areas/carrollwood" }
      ]} />
      
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <TreePine size={20} />
              <span>North Tampa's Canopy & Geotechnical Specialists</span>
            </div>
            <h1>Carrollwood Pool Removal & Site Engineering</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Carrollwood's mature landscaping, historic oak canopies, and lakefront geography require an engineering-first approach to pool demolition. We specialize in surgical concrete extraction, root zone protection, and water-table management, in compliance with <Link href="/resources/hillsborough-pool-permits" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Hillsborough County permit rules</Link> to ensure your property is restored to a safe, build-ready asset.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)" }}>
              <h4 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Grand Oak Compliance Warning</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Carrollwood properties are governed by the Hillsborough County Grand Oak Ordinance. Moving heavy machinery near mature root systems without certified protection can result in severe root compaction and heavy regulatory fines. Read our <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>soil stabilization guide</Link> for mechanical details.
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Carrollwood Geological Stratigraphy & Karst Hazards</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Carrollwood sits over a complex karst system. The upper soil layers consist of porous **Candler and Zolfo fine sands** that easily permit water flow. Beneath these sands lies the **Tampa Member limestone layer**, which is highly susceptible to chemical and mechanical weathering. High-vibration demolition can trigger sinkholes in these underground voids. We use a low-impact <Link href="/full-vs-partial-pool-removal" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>full structural extraction</Link> protocol to preserve subsurface stability.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Microscope size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Seismic Mitigation</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Our crews use high-frequency, low-impact hydraulic hammers. This fractures the pool shell concrete without generating the deep seismic vibrations that can collapse underlying limestone pockets.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Silt and Sand Drainage</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Our structural backfill uses certified A-3 sand. This matching sand ensures that water drains smoothly from the surface, preventing the formation of wet spots or perched water zones in your lawn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROTECTED TREE COMPLIANCE */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Protected Tree Compliance & Root Protection Zones</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
              Original Carrollwood and Carrollwood Village are famous for their mature tree canopies. We prioritize protecting these grand oaks.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>HDPE Composite Matting</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                We lay thick, interlocking HDPE composite mats over critical root zones. This distributes vehicle weight, avoiding the soil compaction that cuts off water and oxygen to tree roots.
              </p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Arborist Site Surveys</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                Before any machinery is moved, we map every tree within 25 feet of the project footprint. This map is used to design access corridors that avoid critical root zones, coordinating with adjacent location spoke operations in <Link href="/tampa-service-areas/wesley-chapel" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Wesley Chapel</Link> and <Link href="/tampa-service-areas/south-tampa" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>South Tampa</Link>.
              </p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Air-Spade Excavation</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                If excavation is required near tree trunks, we use air-spades to safely uncover roots. This allows us to work around them without cutting or damaging the root structures.
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
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Lake Carroll & Lake Magdalene Hydrological Management</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Properties bordering **Lake Carroll** or **Lake Magdalene** sit in areas with very shallow water tables. Excavating a pool shell in these areas requires specialized <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>well-point dewatering systems</Link> to manage groundwater and avoid lake siltation.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <li style={{ display: "flex", gap: "1rem" }}>
                  <Droplets size={24} color="var(--secondary)" />
                  <div>
                    <strong>Well-Point Dewatering Arrays:</strong> We drill temporary vacuum wells around the pool rim, pumping groundwater away to depress the water table by 4 to 6 feet before concrete fracturing.
                  </div>
                </li>
                <li style={{ display: "flex", gap: "1rem" }}>
                  <ShieldCheck size={24} color="var(--secondary)" />
                  <div>
                    <strong>Lake Turbidity Barriers:</strong> We install silt fences and floating turbidity barriers along the shoreline, keeping runoff sediment out of Carrollwood's freshwater lakes.
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
              <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
              <h3>Carrollwood Geotechnical Site Audit</h3>
              <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                We perform an intensive site analysis mapping local water lines, overhead power cables, tree driplines, and access routes.
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
                  <span>Geotechnical Case Study: Project ID #CW-55214</span>
                </div>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Surgical Extraction & Canopy Protection in Original Carrollwood</h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  **Location:** Original Carrollwood Subdivision (Zip: 33618)  
                  **Structure:** 1974 hand-sprayed gunite pool, 25,000-gallon capacity, located under a 42-inch diameter Grand Live Oak.  
                  **Geological Challenge:** Access was restricted to a 60-inch wide pathway. The water table was encountered at 40 inches due to nearby Lake Carroll.
                </p>
                <div style={{ background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "12px", marginBottom: "2rem" }}>
                  <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>The Engineering Protocol:</h4>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "var(--text-main)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <li><strong>Arborist Protection Zone:</strong> Laid 3-inch thick wood chips and HDPE composite pressure-mats over the oak's critical root zone to distribute vehicle weight.</li>
                    <li><strong>Perimeter Dewatering:</strong> Installed a 10-point vacuum well-point system to depress groundwater levels by 5 feet prior to shell fracturing.</li>
                    <li><strong>Complete Extraction:</strong> Utilized a compact excavator with a hydraulic breaker to demolish and extract 100% of the thick gunite shell and steel reinforcement.</li>
                  </ul>
                </div>
              </div>
              <div style={{ background: "var(--primary-dark)", padding: "3rem", borderRadius: "16px", color: "white" }}>
                <h3 style={{ color: "white", marginBottom: "1.5rem" }}>Carrollwood Project Metrics</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>62 Tons</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Concrete & Rebar Extracted & Recycled (Zero Sub-Surface Voids)</div>
                  </div>
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>96.8%</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Modified Proctor Density Achieved (Engineered for <Link href="/blog/building-after-pool-removal" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'underline' }}>ADU Foundation</Link>)</div>
                  </div>
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>Zero Tree Damage</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Independent Certified Arborist Inspection Confirmed No Root Compaction</div>
                  </div>
                </div>
                <p style={{ marginTop: "2rem", fontSize: "0.85rem", fontStyle: "italic", opacity: 0.8 }}>
                  "We successfully removed the aging pool shell without compacting the roots of the homeowner's 100-year-old oak, clearing the path for an unencumbered yard layout." — Lead Field Engineer.
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
              A pool excavation represents about 150 cubic yards of volume. Simply dumping dirt into the hole will lead to long-term soil settling, resulting in yard depressions or structure damage. We prevent this by executing a <Link href="/full-vs-partial-pool-removal" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>full structural extraction</Link> and compacting soil to the **Modified Proctor Standard (ASTM D1557)**.
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
                  We import certified A-3 clean sand. This soil type matches the natural drainage characteristics of Carrollwood’s native sand layers, ensuring water drains freely and does not pool in your backyard.
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
            <h2>5. Hillsborough County Permitting & Regulatory Clearance</h2>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", color: "var(--text-muted)" }}>
              The Hillsborough County Building Department mandates strict permitting protocols for residential pool demolitions. We handle the paperwork.
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
                We arrange the final inspection with county inspectors, presenting compaction logs and obtaining the official closeout certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEIGHBORHOOD SERVICE INDEX */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>6. Serving Every Carrollwood Neighborhood</h2>
            <p style={{ color: "var(--text-muted)" }}>Providing professional geotechnical services across North Tampa's premier communities.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "Original Carrollwood", d: "Navigating mature oak trees, historical property lines, and Lake Carroll access." },
              { n: "Carrollwood Village", d: "HOA compliance, noise curfews, and equipment routes for master-planned estates." },
              { n: "Northdale", d: "Soil stabilization and compaction for residential outbuildings and additions." },
              { n: "Lake Magdalene", d: "High water table dewatering and shoreline erosion controls for lakefront lots." },
              { n: "Plantation", d: "Logistics control for compact subdivisions and utility mapping protocols." },
              { n: "Carrollwood Cove", d: "Surgical access removals utilizing compact loader machinery." },
              { n: "Town 'N Country", d: "Advanced soil engineering and dewatering for low-elevation properties." },
              { n: "Greater Northdale", d: "Managing expansive lots, mature landscaping, and septic field preservation." }
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
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Hillsborough County Municipal Regulatory Appendix</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                Pool removals in Carrollwood are subject to the **Hillsborough County Land Development Code (LDC)**, Section 4.01.00. Read our detailed <Link href="/resources/hillsborough-pool-permits" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Hillsborough County permit guide</Link> for step-by-step municipal instructions. This ordinance mandates strict arborist-certified protection protocols for any grand oak root system near construction. Furthermore, Environmental Protection Commission (EPC) regulations govern the discharge of water during dewatering, preventing untreated silt from entering public stormwater drains or lake systems.
                <br /><br />
                Our process complies with all local guidelines. We secure the required residential demolition permit and coordinate root protection zones. For full extraction projects, we provide an as-built survey indicating the complete removal of all gunite shell, steel reinforcing, and PVC piping, along with a certified compaction report to keep your property title clean.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Carrollwood Subsurface Stratigraphy</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                The geological profile in the North Tampa corridor consists of **Candler Fine Sand** on higher ground and **Zolfo Fine Sand** in low-lying zones, underlain by the **Tampa Member of the Arcadia Formation**. The limestone in this region is close to the surface, typically ranging from 5 to 15 feet deep. This geology is prone to Karst weathering, which creates voids if heavy vibration is applied, requiring active <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>groundwater dewatering management</Link>.
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
              The Ultimate Carrollwood Pool Removal FAQ
            </h2>
            <p>24 Technical Answers for North Tampa Residents</p>
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
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Carrollwood Backyard?</h2>
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
