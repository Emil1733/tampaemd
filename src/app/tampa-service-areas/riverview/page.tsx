import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Home, Info, Target, Activity, Waves, HelpCircle, Microscope } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal Riverview, FL | South Hillsborough Authority Spoke Guide",
  description: "The definitive engineering guide to professional pool removal in Riverview, FL. Specializing in high-water-table dewatering, Alafia River-area logistics, and 95-98% Proctor compaction.",
  alternates: {
    canonical: "/tampa-service-areas/riverview",
  },
};

export default function RiverviewPage() {
  const faqs = [
    {
      q: "What is the setback requirement for heavy machinery in Riverview?",
      a: "Hillsborough County land development codes require a minimum 5-foot setback from property lines. In high-density communities like Waterset, we map these setbacks precisely to protect boundary lines and neighboring structures."
    },
    {
      q: "How do you handle the high water table near the Alafia River during excavation?",
      a: "Properties near the Alafia River feature a high water table. We install a multi-point vacuum dewatering system, placing suction points 6 to 8 feet deep around the pool perimeter to depress the water table before concrete fracturing."
    },
    {
      q: "Can I build an accessory structure (ADU) where my pool was in FishHawk Ranch?",
      a: "Yes. However, you must perform a 'Full Concrete Extraction' (removing all concrete, rebar, and plumbing). The backfill must be compacted in 10-inch lifts and compacted to 95% Modified Proctor Density, verified by a third-party engineer."
    },
    {
      q: "What are the rules regarding CDD approvals for pool removal in Waterset?",
      a: "Waterset is governed by a Community Development District (CDD). We coordinate with the CDD to secure right-of-way use permits, establish approved delivery zones, and ensure heavy trucks do not damage community sidewalks or curbs."
    },
    {
      q: "What permits are required by Hillsborough County for a pool demolition?",
      a: "We secure a residential demolition permit from the Hillsborough County Building Department. This requires a signed site layout showing equipment access paths, utility disconnect points, and erosion control measures (silt fencing)."
    },
    {
      q: "How do you protect modern utility lines in newer subdivisions like Panther Trace?",
      a: "Subdivisions built after 2000 have dense underground networks of gas, fiber optic, and electric lines. We submit a priority locate request to Sunshine 811 and hand-dig verification slots near any marked paths before bringing in machinery."
    },
    {
      q: "What happens to the pool's structural steel and concrete debris?",
      a: "Every ton of demolished concrete, gunite, and steel rebar is hauled out of Riverview. The concrete is transported to local crushing yards to be recycled into road base, while the steel is sent to metal recycling centers."
    },
    {
      q: "Can you perform a pool removal on a property with CDD restrictions?",
      a: "Yes. We coordinate directly with Community Development Districts (CDDs) to secure right-of-way use permits, establish approved delivery zones, and ensure heavy trucks do not damage community roads or sidewalks."
    },
    {
      q: "How do you prevent sinkholes (Karst topography hazards) during demolition?",
      a: "Riverview is situated over limestone formations susceptible to sinkholes. We use low-vibration hydraulic hammers and avoid excessive dynamic pounding. This keeps sub-surface voids stable during concrete fracturing."
    },
    {
      q: "What is the difference between partial abandonment and full extraction?",
      a: "Partial abandonment involves breaking the top 36 inches of the pool, punching drainage holes in the floor, and filling the shell. Full extraction removes 100% of the concrete, steel, and PVC. Full extraction is the only method that guarantees build-ready soil."
    },
    {
      q: "How do you protect septic systems in older Riverview lots?",
      a: "Older lots near Boyette Farms utilize septic tanks and drain fields. We map these systems with ground-penetrating radar (GPR). Our equipment moves exclusively on high-density composite mats laid away from the tank and absorption trenches."
    },
    {
      q: "How many cubic yards of soil are required for a 15x30 pool in Waterset?",
      a: "A typical 15x30 foot pool requires approximately 130 to 170 cubic yards of soil. This translates to roughly 9 to 12 tandem dump truck loads of certified clean A-3 sand."
    },
    {
      q: "What are the noise curfews for heavy machinery in Riverview?",
      a: "Under Hillsborough County ordinances, construction noise is permitted between 7:00 AM and 6:00 PM. We schedule our heaviest hammering and excavation phases between 9:00 AM and 3:00 PM to minimize neighborhood disturbance."
    },
    {
      q: "Does removing a pool lower property taxes in Hillsborough County?",
      a: "Yes. Once the final inspection is closed, we submit the compaction certificate and permit closure documents to the Hillsborough County Property Appraiser, which typically leads to a downward adjustment in assessed value."
    },
    {
      q: "How do you prevent soil erosion into storm sewers during rainy periods?",
      a: "We install Type IV silt fencing around the entire demolition zone and place sediment barriers in local curb inlets. This keeps run-off soil from entering the municipal storm sewer network."
    },
    {
      q: "Can you remove a pool with overhead power lines in Panther Trace?",
      a: "Yes. We maintain a minimum 10-foot clearance from all overhead power lines, in compliance with OSHA standards. We utilize spotters and low-clearance excavators if overhead lines run close to the property boundary."
    },
    {
      q: "What is the soil composition in the FishHawk Ranch area?",
      a: "FishHawk Ranch features a top layer of Smyrna fine sand, which drains well, but is underlain by heavy clay lenses at 48 to 72 inches. We import clean, sandy loam that integrates with this stratigraphy to prevent water pooling."
    },
    {
      q: "How do you decommission a saltwater chlorine generator?",
      a: "We disconnect the electrolytic cell, cap off the plumbing lines at the main equipment pad, and safely isolate the 240V power lines back to the sub-panel. All electrical work is verified by a licensed technician."
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
      q: "How do we get started with a site assessment in Riverview?",
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
        { name: "Riverview", href: "/tampa-service-areas/riverview" }
      ]} />
      
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Home size={20} />
              <span>South Hillsborough's Hydrological & Compaction Specialists</span>
            </div>
            <h1>Riverview Pool Removal & Site Engineering</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              As Riverview expands into a prime master-planned residential corridor, backyard space is at a premium. We provide the technical demolition, specialized high-water-table dewatering, and <Link href="/resources/soil-stabilization-backfill" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>certified compaction</Link> required to reclaim your lot for modern, high-value outdoor living.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)" }}>
              <h4 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Alafia River Basin Regulatory Warning</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Properties within the **Alafia River Basin** are subject to strict environmental regulations regarding groundwater discharge. We coordinate dewatering permits and runoff management in compliance with <Link href="/resources/hillsborough-pool-permits" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Hillsborough County permit codes</Link> and SWFWMD guidelines.
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
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Riverview Geological Stratigraphy & Water Table Hazards</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Riverview features a unique soil profile dominated by **Alafia and Smyrna sands** underlain by variable clay layers and deep limestone. The proximity to the Alafia River and coastal tributaries means the water table is often within 3 to 5 feet of the surface, creating severe hydrostatic pressure risks that require a custom <Link href="/full-vs-partial-pool-removal" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>full structural extraction</Link> plan to prevent soil settlement.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Microscope size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Hydrostatic Control</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  If a pool shell is drained without managing groundwater pressure, the shell can float or shift, compromising adjacent structures. We utilize automated perimeter dewatering wells to maintain a dry, stable excavation area.
                </p>
              </div>
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Soil Infiltration Prevention</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Our backfilling utilizes certified A-3 clean sand compacted in sequential lifts. This matches native sand permeability, allowing water to drain naturally without creating swampy lawn areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ZERO-LOT-LINE LOGISTICS */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Zero-Lot-Line Logistics for High-Density Subdivisions</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
              Subdivisions like **Waterset**, **FishHawk Ranch**, and **Panther Trace** feature compact lots with narrow side access. Excavating a pool requires specialized equipment.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Turf & Sidewalk Protection</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                We deploy heavy HDPE composite mats over driveways, paths, and lawns. This spreads machine load, protecting residential irrigation systems, buried gas feeds, and community sidewalks from cracking.
              </p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>CDD & HOA Liaison</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                We manage the required permit approvals and security deposits with community CDD offices, ensuring compliance with local vehicle rules and working curfews, coordinating similar deployments with neighboring sites in <Link href="/tampa-service-areas/brandon" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Brandon</Link> and <Link href="/tampa-service-areas/south-tampa" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>South Tampa</Link>.
              </p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Narrow Access Loaders</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                We use compact excavators and stand-on track loaders that can fit through 48-inch openings, minimizing the need to remove mature fences or landscaping.
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
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Alafia River Basin Dewatering Protocols</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Properties within the **Alafia River Basin** or lower **FishHawk** must manage groundwater. Excavating a pool shell in these areas requires specialized <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>well-point dewatering systems</Link> to manage water table changes and avoid silt runoff.
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
                    <strong>Silt Mitigation Barriers:</strong> We install Type IV geotextile silt fences along storm lines, preventing loose sand from reaching local waterways.
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
              <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
              <h3>Riverview Geotechnical Site Audit</h3>
              <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                We perform an intensive site analysis mapping local water lines, overhead power cables, property lines, and access corridors.
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
                  <span>Geotechnical Case Study: Project ID #RV-44122</span>
                </div>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Zero-Lot-Line Demolition & Compaction in Waterset</h2>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  **Location:** Waterset Subdivision (Zip: 33572)  
                  **Structure:** 2014 shotcrete pool, 15,000-gallon capacity, positioned 6 feet from the primary foundation footing.  
                  **Geological Challenge:** Tight-access corridor of only 52 inches. The water table was encountered at 38 inches due to coastal canal proximity.
                </p>
                <div style={{ background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "12px", marginBottom: "2rem" }}>
                  <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>The Engineering Protocol:</h4>
                  <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "var(--text-main)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <li><strong>Narrow Passage Logistics:</strong> Deployed mini track-equipment and interlocking composite path mats to protect community pavers and turf.</li>
                    <li><strong>Perimeter Dewatering:</strong> Installed a 12-point vacuum well-point system to depress groundwater levels by 5 feet prior to shell fracturing.</li>
                    <li><strong>Complete Extraction:</strong> Utilized a compact excavator with a hydraulic breaker to demolish and extract 100% of the shotcrete shell and steel reinforcement.</li>
                  </ul>
                </div>
              </div>
              <div style={{ background: "var(--primary-dark)", padding: "3rem", borderRadius: "16px", color: "white" }}>
                <h3 style={{ color: "white", marginBottom: "1.5rem" }}>Waterset Project Metrics</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>54 Tons</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Concrete & Rebar Extracted & Recycled (Zero Sub-Surface Voids)</div>
                  </div>
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>98.2%</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Modified Proctor Density Achieved (Engineered for <Link href="/blog/building-after-pool-removal" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'underline' }}>ADU Foundation</Link>)</div>
                  </div>
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>CDD Bond Released</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Hillsborough County Demolition Permit Closed Out & CDD Right-of-Way Inspections Cleared</div>
                  </div>
                </div>
                <p style={{ marginTop: "2rem", fontSize: "0.85rem", fontStyle: "italic", opacity: 0.8 }}>
                  "We successfully completed the pool extraction in a tight side-yard layout, providing a compaction log that cleared the way for the homeowner's new patio." — Field Supervisor, Riverview Division.
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
                  We import certified A-3 clean sand. This soil type matches the natural drainage characteristics of Riverview’s native sand layers, ensuring water drains freely and does not pool in your backyard.
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
            <h2 style={{ fontSize: "2.5rem" }}>6. Serving Every Riverview Neighborhood</h2>
            <p style={{ color: "var(--text-muted)" }}>Providing professional geotechnical services across South Hillsborough's premier communities.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "FishHawk Ranch", d: "HOA compliance, noise curfews, and equipment routes for master-planned estates." },
              { n: "Waterset", d: "Zero-lot-line demolition, CDD right-of-way compliance, and compact machinery access." },
              { n: "Panther Trace", d: "Navigating mature utility networks and properties bordering wetland zones." },
              { n: "South Fork", d: "Advanced soil stabilization and 98% Proctor compaction for home additions." },
              { n: "Alafia Ridge", d: "Shoreline dewatering and erosion control protocols near riverfront zones." },
              { n: "Boyette Farms", d: "Managing expansive lots, mature landscaping, and septic field preservation." },
              { n: "Triple Creek", d: "High-end estate demolition with detailed soil compaction for outbuildings." },
              { n: "Lucaya Lake", d: "Premium pool removals requiring heavy foundation shoring and root protection." }
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
                Pool removals in Riverview are subject to the **Hillsborough County Land Development Code (LDC)**. Read our detailed <Link href="/resources/hillsborough-pool-permits" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Hillsborough County permit guide</Link> for step-by-step municipal instructions. This ordinance mandates strict protection protocols for any grand oak root system near construction. Furthermore, Environmental Protection Commission (EPC) regulations govern the discharge of water during dewatering, preventing untreated silt from entering public stormwater drains or river systems.
                <br /><br />
                Our process complies with all local guidelines. We secure the required residential demolition permit and coordinate root protection zones. For full extraction projects, we provide an as-built survey indicating the complete removal of all gunite shell, steel reinforcing, and PVC piping, along with a certified compaction report to keep your property title clean.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Riverview Subsurface Stratigraphy</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                The geological profile in the South Hillsborough corridor consists of **Alafia Fine Sand** on higher ground and **Smyrna Fine Sand** in low-lying zones, underlain by the **Tampa Member of the Arcadia Formation**. The limestone in this region is close to the surface, typically ranging from 6 to 15 feet deep. This geology is prone to Karst weathering, which creates voids if heavy vibration is applied, requiring active <Link href="/resources/high-water-table-dewatering" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>groundwater dewatering management</Link>.
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
              The Ultimate Riverview Pool Removal FAQ
            </h2>
            <p>24 Technical Answers for South Hillsborough Residents</p>
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
          <Home size={64} className="icon-center" style={{ marginBottom: "2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Riverview Backyard?</h2>
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
