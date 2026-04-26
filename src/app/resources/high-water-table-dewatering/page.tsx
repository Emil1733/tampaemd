import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, Droplets, HardHat, Info, ThermometerSnowflake, AlertTriangle, Waves, Activity, Target, HelpCircle, Microscope } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "High Water Table & Pool Dewatering Tampa | 1500+ Word Authority Guide",
  description: "The definitive guide to managing high water tables and professional dewatering in Tampa, FL. Learn how to prevent pool popping, soil liquefaction, and structural damage.",
  alternates: {
    canonical: "/resources/high-water-table-dewatering",
  },
};

export default function DewateringResource() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is dewatering mandatory for pool removal in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dewatering prevents the pool shell from 'popping' due to hydrostatic pressure and ensures that the backfill soil is compacted in a dry environment for maximum stability."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the dewatering process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, well-points are installed and run for 24-72 hours before excavation begins to safely lower the local water table."
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
        { name: "Dewatering", href: "/resources/high-water-table-dewatering" }
      ]} />
      {/* HERO SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Waves size={20} />
              <span>Hydrological Engineering Pillar</span>
            </div>
            <h1>Pool Dewatering & High Water Table Management in Tampa</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--text-muted)" }}>
                In the Florida peninsula, pool removal is as much about managing the sea as it is about moving concrete. Tampa’s unique limestone shelf and seasonally fluctuating water table create a high-stakes environment where "simple" demolition can quickly turn into a structural crisis.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2.5rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.3rem", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <AlertTriangle size={24} color="var(--primary)" /> 
                  The "Hydrostatic Pop" Threat
               </h3>
               <p style={{ fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  A swimming pool is essentially a concrete boat. When the shell is emptied, the weight of the water inside (often over 150,000 lbs) is gone, but the pressure from the surrounding groundwater (hydrostatic pressure) remains. In high-water areas like **Davis Islands** or **St. Pete Beach**, this pressure can literally "pop" the pool out of the ground, destroying plumbing, foundations, and seawalls in a matter of seconds.
               </p>
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
          </aside>
        </div>
      </section>

      {/* THE PHYSICS OF DEWATERING */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ marginBottom: "4rem", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <img 
                src="/images/tampa-pool-dewatering-system.png" 
                alt="Professional hydrostatic dewatering system for Florida pool removal, showing well-point pumps protecting the site from groundwater pressure."
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ padding: "1.5rem", background: "white", borderTop: "1px solid var(--border)", fontSize: "0.9rem", fontStyle: "italic", color: "var(--text-muted)" }}>
                Figure 1.1: A multi-point hydrostatic dewatering array installed at a high-water-table site in Tampa. This system equalizes sub-surface pressure to prevent "shell pop" during extraction.
              </div>
            </div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center" }}>1. The Physics of Groundwater Management</h2>
            <div className="grid grid-cols-2 gap-12">
               <div>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.9 }}>
                    Tampa’s geology is defined by the **Floridan Aquifer System**. In many low-lying areas, the water table can be as shallow as 2 feet below the surface. This creates a "Buoyancy Factor" that must be calculated before the first excavator enters the site.
                    <br /><br />
                    Professional dewatering isn't just about pumping water out of a hole; it's about **Pressure Equalization**. We utilize a strategy that balances the lateral force of the soil with the vertical force of the water to maintain "Property Equilibrium."
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Technical Specs: Hydrostatic Lift</h4>
                  <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem" }}>
                     <li style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}><strong>Water Weight:</strong> ~62.4 lbs per cubic foot.</li>
                     <li style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}><strong>Pressure Gradient:</strong> Increases by 0.433 psi for every foot of depth.</li>
                     <li style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}><strong>Critical Point:</strong> A 5-foot deep pool in a 3-foot water table faces over 500 lbs of upward force per square foot of floor.</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS & STRATEGIES */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Advanced Dewatering Systems</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>One size does not fit all. We choose the dewatering system based on the soil's hydraulic conductivity.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <Target size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Well-Point Systems</h4>
              <p style={{ fontSize: "0.9rem" }}>Used for "High-Risk" deep removals. We install a series of 2-inch diameter pipes (points) around the pool connected to a common header pipe and a vacuum pump. This lowers the water table in a 20-foot radius, allowing for a dry excavation.</p>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <Waves size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Sum-Pumping (The Trench Method)</h4>
              <p style={{ fontSize: "0.9rem" }}>Appropriate for "Moderate-Risk" sites. We dig a deeper trench adjacent to the pool shell, allowing groundwater to migrate to a central "sump" where it is pumped to a legal discharge point.</p>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <Activity size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Hydrostatic Relief Valves</h4>
              <p style={{ fontSize: "0.9rem" }}>The "Safety Net." We punch or open the check-valves in the pool floor to allow water into the shell. While this makes for a "wet" demo, it ensures the shell never becomes a boat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOIL LIQUEFACTION DANGER */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. The Danger of Soil Liquefaction</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                In Tampa’s sandy soils, vibration + high water = **Liquefaction**. This is when the sand loses all its load-bearing capacity and acts like a liquid. 
                <br /><br />
                If an inexperienced contractor brings a heavy excavator to a wet site and starts hammering, the very ground they are standing on can turn into "quicksand," leading to machine roll-overs or foundation shifting in the neighbor's house.
              </p>
              <div style={{ background: "rgba(255,0,0,0.05)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,0,0,0.1)" }}>
                 <p style={{ fontWeight: 700, margin: 0, color: "#d90429" }}>🛡️ THE EXPERT MITIGATION PLAN</p>
                 <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>We use **Low-Ground-Pressure (LGP)** tracks and strictly monitor "Pore Water Pressure" during the excavation phase to ensure the sand remains a solid matrix.</p>
              </div>
            </div>
            <div style={{ position: "relative" }}>
               <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                  <Microscope size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                  <h3>Geotechnical Monitoring</h3>
                  <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                    We aren't just pool guys; we are amateur geologists. We monitor the "Angle of Internal Friction" of your soil to ensure that our dewatering plan matches the physical reality of your backyard.
                  </p>
                  <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Consult an Expert</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY SECTION: SWFWMD */}
      <section className="section bg-surface-alt">
        <div className="container">
           <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", marginBottom: "3.5rem" }}>4. SWFWMD & Legal Water Discharge</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                 Where do you put 20,000 gallons of groundwater? In Tampa, you can't just pump it into the street. The **Southwest Florida Water Management District (SWFWMD)** and local municipal codes have strict rules regarding "Siltation" and "Runoff."
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                 <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
                    <h4 style={{ color: "var(--primary)" }}>Sediment Filtration</h4>
                    <p style={{ fontSize: "0.9rem" }}>We use "Dirt Bags" and silt fences to filter every gallon of water before it leaves your property, ensuring no sand enters the Tampa Bay storm drain system.</p>
                 </div>
                 <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
                    <h4 style={{ color: "var(--primary)" }}>Discharge Permitting</h4>
                    <p style={{ fontSize: "0.9rem" }}>Some areas of St. Pete require specific "Temporary Discharge Permits." We handle all the paperwork to ensure your project stays 100% legal.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* COMPARATIVE TABLE: WATER TABLE ZONES */}
      <section className="section">
         <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Tampa Water Table Risk Matrix</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid var(--border)" }}>
               <thead>
                  <tr style={{ background: "var(--surface-alt)" }}>
                     <th style={{ padding: "1.5rem", textAlign: "left" }}>Neighborhood</th>
                     <th style={{ padding: "1.5rem", textAlign: "center" }}>Risk Level</th>
                     <th style={{ padding: "1.5rem", textAlign: "left" }}>Required Strategy</th>
                  </tr>
               </thead>
               <tbody>
                  <tr><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>South Tampa (Interbay)</td><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)", textAlign: "center" }}>🔴 EXTREME</td><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Full Well-Point System + 24/7 Monitoring</td></tr>
                  <tr><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Brandon (Alafia River Area)</td><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)", textAlign: "center" }}>🟠 HIGH</td><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Sump-Trench + Relief Valve Management</td></tr>
                  <tr><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Carrollwood / Lutz</td><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)", textAlign: "center" }}>🟢 LOW/MOD</td><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Relief Valves + Standard Saturation Monitoring</td></tr>
                  <tr><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Downtown St. Pete</td><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)", textAlign: "center" }}>🔴 EXTREME</td><td style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>Vacuum Pumping + Seawall Stability Review</td></tr>
               </tbody>
            </table>
         </div>
      </section>

      {/* HYDRAULIC CONDUCTIVITY & SOIL PHYSICS */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>5. Understanding Hydraulic Conductivity in Tampa Sand</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Hydraulic conductivity (K) is the ease with which a fluid (water) can move through pore spaces or fractures. In the Tampa Bay area, the native sand has a high K-value, meaning water moves quickly. This is both a blessing and a curse for pool removal.
                  <br /><br />
                  While it allows for fast dewatering via well-points, it also means that the water table can "recharge" almost instantly if the pumps fail. We calculate the **Seepage Velocity** for every site to determine the redundancy required in our pumping array.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>The Darcy Equation in Practice</h4>
                     <p style={{ fontSize: "0.85rem", fontStyle: "italic" }}>Q = K * A * (dh/dl)</p>
                     <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
                        We use a simplified version of Darcy's Law to predict the "Drawdown Curve" of the water table. This ensures that we aren't pulling water from too far away, which could inadvertently settle a neighbor's swimming pool or septic tank.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Pore Water Pressure Monitoring</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        As we remove the weight of the pool, the pressure in the water trapped between sand grains (pore pressure) increases. If this pressure isn't managed, it can trigger **"Quick" conditions**, where the soil loses all strength. We monitor this in real-time on high-risk waterfront sites.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* LONG-TERM SETTLEMENT & RECHARGE */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Activity size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Long-Term Ground Stabilization</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     Once the pool is removed and the well-points are turned off, the water table will naturally "recharge." If the backfill was not compacted at the **Optimum Moisture Content**, the returning water can cause "Collapse Settlement."
                     <br /><br />
                     Our engineered approach ensures that the new soil matrix is dense enough that the returning water acts as a stabilizing force rather than a disruptive one.
                  </p>
               </div>
               <div>
                  <h2>Post-Dewatering Landscape Health</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     A common concern in Tampa is whether dewatering will kill existing oak trees or palms. Because we use localized well-points rather than open-pit pumping, the "Cone of Depression" is tightly controlled. 
                     <br /><br />
                     We monitor the hydration levels of surrounding vegetation and, if necessary, provide supplemental irrigation during the 72-hour dewatering window to ensure your heritage oaks remain healthy.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* MASSIVE FAQ SECTION (The Authority Booster) */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  Comprehensive Hydrology FAQ
               </h2>
               <p>Deep Technical Insights for Florida Landowners</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "What is 'Drawdown' in dewatering?", a: "Drawdown is the vertical distance the water table is lowered at a specific point. We aim for a drawdown of at least 2 feet below the bottom of the excavation." },
                  { q: "Does the City of Tampa require a dewatering permit?", a: "Yes, for any project that discharges more than a certain gallonage into the storm sewer. We handle the permit acquisition for all industrial and residential projects." },
                  { q: "What is a 'Confined Aquifer' vs 'Unconfined'?", a: "In Tampa, we deal mostly with the unconfined Surficial Aquifer. However, in some areas, we must be careful not to breach the confining layer of the Floridan Aquifer below." },
                  { q: "Can dewatering cause sinkholes?", a: "In very specific geological conditions, rapid dewatering can trigger a collapse if there is a pre-existing Karst void. This is why we perform a site survey before starting pumps." },
                  { q: "What is 'Vibratory Installation' for well-points?", a: "We use high-frequency vibration to 'jet' the well-points into the sand, which is much faster and cleaner than traditional drilling methods." },
                  { q: "How do you handle 'Silting' during discharge?", a: "We use tiered filtration: a primary settling tank, a secondary 50-micron filter bag, and a final silt fence barrier." },
                  { q: "Is the water you pump out 'Clean'?", a: "It is natural groundwater. While it may contain tannins or sulfur (typical for Florida), it is free of chemicals. Our filtration ensures it is free of physical sediment." },
                  { q: "What happens if the power goes out?", a: "We use diesel-powered backup generators for all well-point arrays. The water table doesn't wait for the electric company." },
                  { q: "Can I use the pumped water to fill my new pool?", a: "We don't recommend it. Groundwater in Tampa often has high mineral content that can stain new pool finishes. It's better to use municipal water." },
                  { q: "What is the 'Sphere of Influence'?", a: "This is the total horizontal area affected by our pumping. We map this to ensure your neighbor's well or foundation is outside the zone of significant drawdown." }
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
          <ShieldCheck size={64} style={{ margin: "0 auto 2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Hire a Contractor Who Understands Tampa Hydrology</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Don't risk your property with a 'Quick-Lube' contractor. Get a hydrological assessment from Tampa's pool removal specialists.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get a Hydrological Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
