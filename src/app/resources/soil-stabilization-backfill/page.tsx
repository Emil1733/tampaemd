import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, HardHat, Info, Mountain, Layers, Activity, Droplets, Target, Hammer, Microscope, HelpCircle } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Backfill & Soil Stabilization Tampa | 1500+ Word Authority Guide",
  description: "The definitive guide to engineered pool backfill in Tampa, FL. Learn about 95% Proctor density, dewatering requirements, and soil stabilization for building.",
  alternates: {
    canonical: "/resources/soil-stabilization-backfill",
  },
};

export default function SoilStabilization() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is A-3 sand and why is it used in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A-3 sand is a specific grade of clean, fine-grained soil that matches the natural geological profile of the Tampa Bay area, providing superior drainage and compaction stability."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Proctor Compaction test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Proctor test measures the maximum dry density of the soil. We aim for 98% compaction to ensure the ground can support future structures."
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
        { name: "Resources", href: "/tampa-service-areas" },
        { name: "Soil & Backfill", href: "/resources/soil-stabilization-backfill" }
      ]} />
      {/* HERO SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Layers size={20} />
              <span>Institutional Authority Guide</span>
            </div>
            <h1>Engineered Pool Backfill & Soil Stabilization Standards</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--text-muted)" }}>
                In the Tampa Bay region, a pool removal project is only as successful as the soil that replaces it. With Florida's unique hydrological profile and sandy soil compositions, failing to stabilize the land can lead to catastrophic yard collapse, sink-pockets, and "zombie" drainage issues.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2.5rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.3rem", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Microscope size={24} color="var(--primary)" /> 
                  The "95% Proctor" Standard
               </h3>
               <p style={{ fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  For a lot to be classified as "Build-Ready" after pool demolition, the backfill must reach a **95% Proctor Density**. This is a measure of the soil's dry unit weight compared to its maximum possible density. In Tampa, achieving this requires nuclear density testing and specific moisture-to-compaction ratios that most general contractors simply ignore.
               </p>
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
          </aside>
        </div>
      </section>

      {/* TECHNICAL DEEP DIVE: HYDROLOGY */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "4rem", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <img 
                src="/images/engineered-pool-backfill-compaction.png" 
                alt="Professional nuclear density gauge testing 98% Proctor compaction on a Tampa pool removal site."
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ padding: "1.5rem", background: "white", borderTop: "1px solid var(--border)", fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                Figure 2.2: Nuclear density testing in progress. Achieving 95-98% Proctor density ensures the reclaimed lot is structural and ready for permanent foundations or ADUs.
              </div>
            </div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. The Tampa Hydrological Trap</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Unlike the clay soils of Atlanta or the hard rock of Scottsdale, Tampa’s sub-surface is dominated by fine-grained sand and a seasonally fluctuating water table. When you remove a pool shell, you aren't just leaving a hole; you are creating a temporary "void" in the local hydraulic pressure system.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="glass-card" style={{ padding: "2rem" }}>
                <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Hydraulic Heave</h4>
                <p style={{ fontSize: "0.95rem" }}>If backfill isn't porous enough, groundwater can get trapped beneath the new soil, creating a "sponge effect" that causes your lawn to feel soft even weeks after it has rained.</p>
              </div>
              <div className="glass-card" style={{ padding: "2rem" }}>
                <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Lateral Migration</h4>
                <p style={{ fontSize: "0.95rem" }}>Tampa's sandy soil moves laterally. Without stabilization, the pressure from your neighbor's pool or foundation can push into your filled area, causing "stair-step" cracks in new patios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL SELECTION PILLAR */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Material Selection & Sourcing</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
              We don't just "buy dirt." We source specific geological materials required for structural load-bearing performance in Florida.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <Mountain size={40} color="var(--primary)" style={{ margin: "0 auto 1.5rem" }} />
              <h4>Clean Virgin Fill</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>We use only virgin, screened fill. Recycled concrete or organic-heavy soil leads to "rot voids" as the organic material decomposes over 5-10 years.</p>
            </div>
            <div className="text-center">
              <Droplets size={40} color="var(--primary)" style={{ margin: "0 auto 1.5rem" }} />
              <h4>Capillary Break Layers</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>In high-water areas, we install a layer of #57 stone at the base to act as a capillary break, preventing moisture from wicking up into the surface layers.</p>
            </div>
            <div className="text-center">
              <Layers size={40} color="var(--primary)" style={{ margin: "0 auto 1.5rem" }} />
              <h4>Bio-Organic Topsoil</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Only the final 6-12 inches consist of nutrient-rich topsoil to support sod or landscaping, ensuring the deep structure remains purely structural.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACTION PROCESS EXPANSION */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. The "Lift-by-Lift" Compaction Cycle</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                True stabilization is impossible in a single pour. Our crews follow a rigorous **"6-to-12 Inch Lift"** protocol. This is the difference between a yard that sinks and a yard that supports a 20-ton ADU or outdoor kitchen.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { title: "Vibratory Compaction", desc: "Using 5,000-lb centrifugal force plates to pack sand particles into a dense matrix." },
                  { title: "Moisture Optimization", desc: "Adding water during compaction to reach the 'Optimum Moisture Content,' allowing particles to slide into their tightest formation." },
                  { title: "Nuclear Density Verification", desc: "For high-stakes projects, we utilize independent engineers to verify the 95% Proctor density through a nuclear gauge." }
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem" }}>
                    <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <div>
                      <span style={{ fontWeight: 700, display: "block" }}>{item.title}</span>
                      <span style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
              <Target size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
              <h3>The 10-Year Yard Guarantee</h3>
              <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                Because we use engineered fill and precision compaction, we are the only Tampa contractor to offer a structural guarantee against significant settling or sinkage.
              </p>
              <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Get Professional Stabilization</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE LAND USE SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
             <h2>4. Future Land Use & Load Bearing</h2>
             <p style={{ maxWidth: "800px", margin: "0 auto" }}>How you intend to use the land determines the engineering spec of the backfill.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
             <div style={{ background: "white", padding: "2rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
                <h4>For Patios & Pavers</h4>
                <p style={{ fontSize: "0.9rem" }}>Requires 90% compaction. We focus on horizontal stability to ensure your pavers never shift or "wave" after a Florida thunderstorm.</p>
             </div>
             <div style={{ background: "white", padding: "2rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
                <h4>For ADUs & Structures</h4>
                <p style={{ fontSize: "0.9rem" }}>Requires 95%+ compaction and engineering sign-off. We provide the "Certificate of Compaction" your builder will need for permit approval.</p>
             </div>
             <div style={{ background: "white", padding: "2rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
                <h4>For Lawns & Gardens</h4>
                <p style={{ fontSize: "0.9rem" }}>Focus on drainage over extreme density. We ensure the bottom layers are stable while the top layers allow for root penetration and water flow.</p>
             </div>
          </div>
        </div>
      </section>

      {/* MASSIVE FAQ SECTION (The Authority Booster) */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <HelpCircle size={32} color="var(--primary)" />
              Soil Stabilization & Compaction FAQ
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {[
              { q: "What is 'Nuclear Density Testing' for pool fill?", a: "It is a process where an engineer uses a gauge to measure the density and moisture of the soil in real-time. It's the only way to prove to a building inspector that the ground is solid enough to support a new structure." },
              { q: "Can I use 'Free Dirt' from a construction site?", a: "NEVER. Free dirt often contains clay, debris, or organic matter. In Tampa, clay holds too much water and causes 'swelling,' while organics rot and create underground voids (sinkholes)." },
              { q: "How long does it take for the soil to settle naturally?", a: "If properly compacted in lifts, settling is negligible (less than 1 inch). If just 'dumped in,' it can settle for 5-10 years, causing anything built on top to crack." },
              { q: "What is a 'Lift' in compaction terms?", a: "A lift is a layer of soil. We fill the pool 10 inches at a time, compact it, and then add the next 10 inches. This ensures the bottom is just as dense as the top." },
              { q: "Do I need an engineer to sign off on the backfill?", a: "If you plan to build a permanent structure (like a house addition) over the old pool, yes. We coordinate with local Tampa engineers to provide this documentation." },
              { q: "How does Tampa's water table affect the soil density?", a: "High water tables can 'liquefy' sand if it isn't compacted correctly. We use specific dewatering techniques to ensure the soil is dry enough to reach maximum density during the process." }
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h4 style={{ color: "var(--primary)", fontSize: "1.05rem", marginBottom: "0.5rem" }}>Q: {faq.q}</h4>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINERY & EQUIPMENT SPECS (The Heavy Lifting) */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-start">
             <div className="glass-card" style={{ padding: "3rem" }}>
                <Hammer size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h3>The Machinery of Stabilization</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Soil stabilization isn't just about the dirt; it's about the energy applied to it. We utilize a fleet specifically chosen for the high-sand, high-moisture environments of the Tampa Bay area.
                </p>
                <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                   <li><strong>Compact Excavators (3-5 Ton):</strong> Essential for tight South Tampa lot lines where larger machines would crack neighboring driveways.</li>
                   <li><strong>Vibratory Trench Rollers:</strong> Remote-controlled rollers that apply high-frequency vibration to deep lifts, ensuring the bottom 4 feet are as dense as the top 1 foot.</li>
                   <li><strong>Low-Ground-Pressure (LGP) Bobcats:</strong> Specially tracked machines that prevent "churning" the sub-surface sand, which can destroy existing drainage corridors.</li>
                </ul>
             </div>
             <div>
                <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Stabilization for Waterfront Properties</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  If your property is in Snell Isle, Davis Islands, or near the Hillsborough River, your soil stabilization needs are 3x more complex. The proximity to salt water means the water table is likely 2-3 feet from the surface.
                </p>
                <div style={{ background: "rgba(255,165,0,0.1)", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid orange" }}>
                   <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600 }}>⚠️ WARNING: The Hydro-Static Pop</p>
                   <p style={{ margin: "0.5rem 0 0", fontSize: "0.9rem" }}>
                     In waterfront areas, removing a pool can cause the surrounding soil to "liquefy" due to pressure imbalances. We use a proprietary dewatering and lateral bracing strategy to ensure your seawall or foundation doesn't shift during the backfill process.
                   </p>
                </div>
                <p style={{ marginTop: "1.5rem", fontSize: "1rem", color: "var(--text-muted)" }}>
                  We coordinate with **Florida structural engineers** to ensure that our backfill plan respects the load-bearing requirements of the local coastline, preventing long-term erosion or lateral migration toward the water.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* THE PROCTOR DENSITY DEEP DIVE */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Understanding Proctor Density & Compaction Testing</h2>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                  Most "pool guys" will tell you they "packed it down with the bobcat." In the world of soil engineering, this is called **Static Weight Compaction**, and it only affects the top 2-4 inches of soil. 
                  <br /><br />
                  To reach the **95% Modified Proctor Density** required for building, you need **Dynamic Force**. This involves high-frequency vibration that causes the sand grains to rearrange into their most efficient geometric configuration, essentially "locking" them together.
                </p>
              </div>
              <div>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", border: "1px solid var(--border)" }}>
                  <thead>
                    <tr style={{ background: "var(--surface-alt)" }}>
                      <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid var(--border)" }}>Land Use</th>
                      <th style={{ padding: "1rem", textAlign: "center", borderBottom: "2px solid var(--border)" }}>Required Density</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={{ padding: "1rem", borderBottom: "1px solid var(--border)" }}>Non-Structural Garden/Lawn</td><td style={{ padding: "1rem", textAlign: "center", borderBottom: "1px solid var(--border)" }}>85% - 88%</td></tr>
                    <tr><td style={{ padding: "1rem", borderBottom: "1px solid var(--border)" }}>Paver Patios / Walkways</td><td style={{ padding: "1rem", textAlign: "center", borderBottom: "1px solid var(--border)" }}>90% - 92%</td></tr>
                    <tr><td style={{ padding: "1rem", borderBottom: "1px solid var(--border)" }}>Foundation Support (ADUs/Kitchens)</td><td style={{ padding: "1rem", textAlign: "center", borderBottom: "1px solid var(--border)" }}>95% - 98%</td></tr>
                    <tr><td style={{ padding: "1rem", borderBottom: "1px solid var(--border)" }}>Commercial Load Bearing</td><td style={{ padding: "1rem", textAlign: "center", borderBottom: "1px solid var(--border)" }}>100%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTENDED FAQ SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <h2 style={{ marginBottom: "3rem", textAlign: "center" }}>Advanced Soil Stabilization FAQ</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { q: "What is 'Lifting' in soil engineering?", a: "Lifting refers to adding fill in layers (usually 6-12 inches). Each lift is compacted individually. If you dump 6 feet of dirt into a hole at once, only the top layer is compacted, leaving a soft, settling core underneath." },
              { q: "Why is Florida sand harder to compact than clay?", a: "Sand is 'non-cohesive,' meaning the particles don't stick together. Clay is cohesive and 'packs' easily but holds too much water. Sand requires the perfect moisture balance to lock into place." },
              { q: "How do you prevent air pockets around the broken concrete?", a: "In a partial removal, we use high-vibration machines to 'shake' the sand into every crevice of the broken pool floor, ensuring no voids remain to collapse later." },
              { q: "What happens if it rains during the backfill?", a: "Heavy rain can actually help with 'hydro-compaction' if managed correctly, but it can also wash out the fines. We monitor moisture content and wait for the 'Optimum Moisture Range' before final compaction." },
              { q: "What is 'Nuclear Density' vs 'Sand Cone' testing?", a: "Nuclear testing is instant and allows us to keep working. Sand cone testing is more traditional but takes 24 hours for lab results. We prefer Nuclear for its speed and accuracy on the job site." },
              { q: "Do you use lime or cement for stabilization?", a: "Rarely in residential pool removals. Lime is used for clay soils. For Tampa sand, we rely on mechanical vibration and moisture control, which is cleaner and more cost-effective." },
              { q: "Can I plant a tree over the old pool area?", a: "Yes, but we must leave the top 3-4 feet 'un-compacted' or use structural soil that allows for root growth. We can customize the compaction levels based on your landscaping plan." },
              { q: "Does the type of fill matter for drainage?", a: "Yes. Using 'Dirty Fill' with too much silt will block drainage. We use 'A-3' sand or clean fill that matches the native Florida soil profile for perfect drainage." },
              { q: "How do I prove the yard is stable when I sell my home?", a: "We provide a signed 'Compaction Report.' This document becomes part of your home's permanent record and is vital during home inspections and title transfers." }
            ].map((faq, i) => (
              <div key={i} style={{ background: "white", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                 <p style={{ fontWeight: 800, marginBottom: "0.75rem", color: "var(--primary)" }}>{faq.q}</p>
                 <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
