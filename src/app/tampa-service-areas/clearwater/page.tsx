import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Sun, Info, Target, Activity, Waves, HelpCircle, Microscope, TreePine, Anchor } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal Clearwater, FL | 1500+ Word Authority Spoke Guide",
  description: "The definitive guide to professional pool removal in Clearwater. Specialized in Island Estates hydrology, coastal sand stabilization, and Pinellas County permits.",
  alternates: {
    canonical: "/tampa-service-areas/clearwater",
  },
};

export default function Clearwater() {
  const faqs = [
    { q: "How much does pool removal cost in Clearwater?", a: "Residential removals in Clearwater typically range from $8,000 to $17,000. Factors include access complexity and whether dewatering is required." },
    { q: "Do I need a permit in Clearwater?", a: "Yes. Both the City of Clearwater and Pinellas County require a building/demolition permit. We handle all paperwork and final inspections." },
    { q: "Can you remove a pool in Island Estates?", a: "Yes. We specialize in high-water-table removals on the islands, utilizing specialized dewatering arrays to protect your property foundation." },
    { q: "Will the machinery damage my driveway?", a: "We use heavy-duty composite mats to distribute the weight of our excavators, ensuring your concrete or pavers remain pristine." },
    { q: "How long does the process take?", a: "Most Clearwater projects are completed in 4 to 6 days, from initial drainage to final grade and sod prep." },
    { q: "Can I build a boat pad where the pool was?", a: "Yes, but only with a **Full Engineered Removal** and 95% Proctor compaction to support the weight of the boat and trailer." },
    { q: "What is the 'High Water Table' risk in Sand Key?", a: "Significant. Because Sand Key is a barrier island, the water table is extremely shallow. We use advanced dewatering to ensure a safe removal." },
    { q: "Do you remove the pool cage (lanai)?", a: "Yes. We disassemble and recycle the aluminum structure as part of our total demolition service." },
    { q: "What type of fill dirt do you use?", a: "We use A-3 certified clean sand, which matches the natural drainage profile of North Pinellas soils." },
    { q: "Is your company insured for Clearwater projects?", a: "Yes. We carry $2M in general liability and workers' comp specifically for heavy excavation and demolition work." },
    { q: "Can you remove a fiberglass pool in Countryside?", a: "Yes. Fiberglass requires specific extraction techniques to prevent collapsing the surrounding soil, which we specialize in." },
    { q: "What about my pool heater and pump?", a: "We remove all mechanical equipment, capping the lines at the source and disposing of the units properly." },
    { q: "What is the 'FEMA 50% Rule' in Clearwater?", a: "In designated flood zones, substantial improvements (including pool removal and subsequent building) are limited by FEMA valuation rules. Our engineered removals help you stay within these compliance brackets." },
    { q: "How do you protect the Intracoastal during work?", a: "We utilize dual-stage silt curtains and turbidity logs to ensure that no sediment or debris enters the Pinellas County watershed." },
    { q: "What is the difference between A-3 and A-2-4 sand in Pinellas?", a: "A-3 is a clean, marine-grade sand that allows for rapid drainage. A-2-4 contains more silt and can hold water, which we avoid in coastal backfills." },
    { q: "Do you handle Belleair arborist reviews?", a: "Yes. The Town of Belleair has very strict tree protection codes. We coordinate all arborist reviews and root-mapping before mobilization." },
    { q: "How do you manage 'Tidal Fluctuation' during dewatering?", a: "We utilize pressure-monitored well-points that automatically adjust to the tidal head-pressure, ensuring the excavation remains dry and stable." },
    { q: "Can I build an outdoor kitchen over the old pool site?", a: "Yes. With a full extraction and certified 95% Proctor compaction, the soil has the load-bearing capacity for gas lines, masonry, and heavy appliances." },
    { q: "Does the City of Clearwater require a final survey?", a: "In most cases, yes. We coordinate the final grading inspection and survey submission to close out your permit correctly." },
    { q: "How do you prevent 'Lateral Soil Movement' near seawalls?", a: "We utilize interlocking shoring plates and precision excavation to ensure the soil behind your seawall remains undisturbed." },
    { q: "What is the ROI of pool removal in Island Estates?", a: "Homeowners typically see a significant ROI by reclaiming high-value waterfront lot space for boat storage or luxury landscaping." },
    { q: "Are you licensed for hazardous material disposal?", a: "Yes. We handle the safe disposal of old chlorine systems and saltwater cells according to Pinellas County environmental regulations." },
    { q: "Do you provide GPR mapping in Countryside?", a: "Yes, we use Ground Penetrating Radar to identify private utility lines and septic systems that may not be on city maps." },
    { q: "Can you remove a pool with a screen enclosure over it?", a: "Yes. We typically disassemble the enclosure first, recycling the aluminum, before moving the heavy machinery onto the shell." }
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
        { name: "Clearwater", href: "/tampa-service-areas/clearwater" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Sun size={20} />
              <span>North Pinellas Coastal Authority</span>
            </div>
            <h1>Clearwater Pool Removal: High-Authority Property Reclamation</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Clearwater is a city of diverse topographies, from the "sugar-sand" beaches of the Gulf to the rolling clay hills of **Countryside**. As property values in North Pinellas continue to climb, homeowners are trading high-maintenance pools for high-value outdoor living. We provide the coastal engineering and hydrological expertise required for Clearwater’s unique environment.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)" }}>
              <h4 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Coastal Engineering Alert</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-muted)" }}>
                Clearwater properties near the Intracoastal or Gulf face extreme **Tidal Buoyancy** risks. Removing a pool shell in **Island Estates** or **Sand Key** requires a synchronized dewatering and backfill plan to prevent site destabilization.
              </p>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. THE COASTAL SAND FACTOR */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Clearwater Beach & The Coastal Sand Challenge</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              The soil profile in Clearwater Beach and the surrounding barrier islands is almost entirely **Fine Marine Sand (A-3 classification)**. While this soil drains exceptionally well, it has zero "cohesion," meaning an excavation can collapse in seconds if not properly shored or dewatered.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Waves size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Saltwater Corrosion Management</h4>
                <p style={{ fontSize: "0.95rem" }}>In coastal zones, the salt-saturated groundwater accelerates the corrosion of pool rebar. We ensure 100% removal of all oxidized metal during demolition to prevent future soil contamination.</p>
              </div>
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <Anchor size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                <h4>Intracoastal Buffer Zones</h4>
                <p style={{ fontSize: "0.95rem" }}>If your pool is within 50 feet of the Intracoastal, we utilize specialized **Siltation Curtains** to ensure zero runoff enters the protected Florida waterways during our work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEIGHBORHOOD SPOTLIGHTS */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Clearwater Neighborhood Expertise</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>From the rolling hills of North Pinellas to the beachside rentals.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Countryside & Safety Harbor</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Characterized by "rolling" elevations and clay pockets. We utilize **Topographical Grading** to ensure your new yard drains away from your home's foundation.</p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Island Estates & Sand Key</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Extremely tight lot lines and high water tables. We utilize **Mini-Excavator specialized machinery** and vacuum-point dewatering for safe removals.</p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px" }}>
              <h4 style={{ color: "var(--primary)" }}>Belleair & Harbor Bluffs</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Large estate properties with high-value landscaping. We provide full **Property Shielding** using composite mats to protect your heritage driveways and sod.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PINNELAS COUNTY PERMITTING */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Pinellas County Permit Mastery</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    The **Pinellas County Building Department** has specific requirements for pool abandonment that differ from Hillsborough. We handle the entire bureaucratic cycle to ensure your project is 100% legal and your property title remains clear.
                 </p>
                 <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Target size={24} color="var(--secondary)" />
                       <div>
                          <strong>Utility Disconnection Certification:</strong> We coordinate with **Clearwater Gas** and **Duke Energy** to ensure all pool-related services are safely terminated and capped.
                       </div>
                    </li>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Target size={24} color="var(--secondary)" />
                       <div>
                          <strong>Compaction Certification:</strong> We provide the **Nuclear Density Reports** required by Pinellas County for all full-shell extractions intended for future construction.
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>Clearwater Site Strategy</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   Every Clearwater project includes a **Marine Hydrology Assessment** to determine the optimal pumping strategy for your specific coastal location.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Get Your Assessment</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 4. TECHNICAL CASE STUDY: ISLAND ESTATES WATERFRONT */}
      <section className="section bg-white">
         <div className="container">
            <div className="glass-card" style={{ padding: "4rem", border: "1px solid var(--primary)", position: "relative", overflow: "hidden" }}>
               <div style={{ position: "absolute", top: 0, right: 0, background: "var(--primary)", color: "white", padding: "0.5rem 2rem", transform: "rotate(45deg) translate(25%, -50%)", fontWeight: 700, fontSize: "0.8rem" }}>MARITIME LOG</div>
               <div className="grid grid-cols-2 gap-16 items-start">
                  <div>
                     <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1rem" }}>
                        <Anchor size={20} />
                        <span>Technical Case Study: Project ID #CW-33756</span>
                     </div>
                     <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Tidal Hydrology & Zero-Clearance Extraction in Island Estates</h2>
                     <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                        **Project Location:** Island Estates Waterfront (Zip: 33767)  
                        **Structure Type:** 1980s concrete pool shell with integrated spa, situated within 8 feet of an active seawall.  
                        **Environmental Constraints:** FEMA Flood Zone V (Velocity Zone). Zero side-yard clearance (access restricted to 42-inch gate). High-salinity groundwater table with tidal fluctuation.
                     </p>
                     <div style={{ background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "12px", marginBottom: "2rem" }}>
                        <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>The 'F1' Coastal Solution:</h4>
                        <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "var(--text-main)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                           <li><strong>Active Tidal Dewatering:</strong> Implemented a 10-point vacuum well-point system synced with low-tide cycles to prevent saltwater backflow during the shell fracture phase.</li>
                           <li><strong>Bio-Degradable Logistics:</strong> Utilized specialized mini-excavators running bio-degradable hydraulic fluids (EPA coastal requirement) to ensure zero environmental impact on the Intracoastal.</li>
                           <li><strong>Siltation Containment:</strong> Deployed a dual-stage turbidity barrier to prevent fine A-3 sand runoff into the canal during the backfill phase.</li>
                        </ul>
                     </div>
                  </div>
                  <div style={{ background: "var(--primary-dark)", padding: "3rem", borderRadius: "16px", color: "white" }}>
                     <h3 style={{ color: "white", marginBottom: "1.5rem" }}>Clearwater Outcomes</h3>
                     <div className="grid grid-cols-1 gap-6">
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                           <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>100%</div>
                           <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Shell Extraction & Metal Removal (Protecting Groundwater Purity)</div>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                           <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>98%</div>
                           <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Modified Proctor Density (Certified Build-Ready for new outdoor kitchen)</div>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                           <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>Zero</div>
                           <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>Impact on Intracoastal Water Quality or Seawall Integrity</div>
                        </div>
                     </div>
                     <p style={{ marginTop: "2rem", fontSize: "0.85rem", fontStyle: "italic", opacity: 0.8 }}>
                        "By utilizing tidal-synced pumping, we maintained the lateral pressure against the seawall throughout the project, protecting the property's primary asset." — Project Manager, Clearwater Division.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. ENGINEERED COMPACTION & DRAINAGE */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", textAlign: "center", marginBottom: "3rem" }}>4. Engineered Backfill: The Clearwater Protocol</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem", textAlign: "center" }}>
                  A pool is a hollow vessel. Once removed, it must be replaced by a solid earth matrix. We achieve **95% Proctor Density** to ensure your new land is "Building-Ready."
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "16px", background: "white" }}>
                     <h4 style={{ color: "var(--primary)" }}>Vibratory Lift Packing</h4>
                     <p style={{ fontSize: "0.9rem" }}>We add fill in 10-inch "lifts," compacting each layer with industrial-grade vibratory plates. This prevents the "sink-hole" effect common in DIY pool fill-ins.</p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2.5rem", borderRadius: "16px", background: "white" }}>
                     <h4 style={{ color: "var(--primary)" }}>A-3 Certified Fill Sourcing</h4>
                     <p style={{ fontSize: "0.9rem" }}>We source specific clean sand that matches the hydraulic conductivity of Clearwater's coastal soils, ensuring perfect natural drainage for your new yard.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* NORTH PINELLAS REGULATORY NUANCES */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>7. Navigating North Pinellas Regulatory Complexity</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  Clearwater residents are subject to overlapping jurisdictions between the **City of Clearwater** and **Pinellas County**. This is especially true for properties in unincorporated areas like **Countryside** or **Belleair Bluffs**. We handle the "Inter-Agency Coordination" required to ensure your pool removal is recognized by both tax and building authorities.
                  <br /><br />
                  One critical Clearwater-specific rule is the **Stormwater Attenuation Requirement**. When a 450 sq ft pool is replaced by 450 sq ft of earth, the drainage profile of your property changes. We ensure your new grade matches the city's master drainage plan, preventing "ponding" in your or your neighbor's yard.
               </p>
            </div>
         </div>
      </section>

      {/* HIGH-VALUE HARDSCAPING INTEGRATION */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div>
                  <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>8. Preparing for Luxury Hardscaping</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     Many of our Clearwater clients remove their pools to make room for **high-end travertine patios** or **outdoor pavilion structures**. These heavy materials require a sub-surface that is significantly more stable than a standard yard.
                     <br /><br />
                     Our engineered backfill process includes a **"Static Load Bearing" certification**. This means that once we are done, your mason or patio contractor can install heavy stone or concrete pavers immediately without fear of the ground settling and cracking the new work.
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <ShieldCheck size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Clearwater Hardscape ROI</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     In North Pinellas, a well-designed outdoor living area can increase property value by up to 12%, often exceeding the ROI of a poorly maintained pool. We provide the "Invisible Foundation" that makes these luxury upgrades possible.
                  </p>
               </div>
            </div>
         </div>
      </section>
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>6. Island Estates: Full-Shell Extraction Specialists</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  In high-value waterfront neighborhoods like **Island Estates**, a "Partial Removal" is rarely the best choice. Due to the proximity of the water and the desire for high-end landscaping or boat storage, most owners opt for a **Full-Shell Extraction**.
                  <br /><br />
                  This process involves removing every ounce of concrete and steel from the ground. Because Island Estates was built on engineered dredge-fill, the sub-surface is extremely prone to shifting. We utilize a **Hydraulic Trench Shoring** system to protect your seawall and home foundation while the empty hole is stabilized and backfilled.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>The Island Hydrology Plan</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We utilize vacuum-sealed dewatering points that are specifically calibrated to the tidal surge of the Intracoastal. This ensures the bottom of the excavation remains dry and stable throughout the extraction phase.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Seawall Counter-Pressure</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        Removing a pool near a seawall removes lateral support. We utilize a "Concurrent Fill" strategy where we add engineered sand as the concrete is removed, maintaining constant pressure against your waterfront structures.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* BELLEAIR ESTATE LOGISTICS & PROTECTION */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <TreePine size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Belleair & Harbor Bluffs Estate Protection</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     The estate properties of **Belleair** and **Harbor Bluffs** feature long, expensive driveways and mature canopy oaks. Bringing 40,000 lbs of machinery into these backyards is a high-stakes operation.
                     <br /><br />
                     Our **"Zero-Impact" Logistics Plan** utilizes interlocking composite mats to create a temporary road over your lawn and driveway. This spreads the ground pressure of the excavator to less than 5 psi, ensuring no cracks or ruts are left behind.
                  </p>
               </div>
               <div>
                  <h2>Preserving the Clearwater Canopy</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     North Pinellas is home to some of Florida’s most magnificent Grand Oaks. We coordinate with the **Town of Belleair** or **City of Clearwater** arborists to ensure all root-protection zones are strictly maintained. 
                     <br /><br />
                     We utilize **Air-Spade** pneumatic excavation when working near drip lines, ensuring that your heritage trees thrive for decades after the pool is gone.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. HYPER-LOCAL NEIGHBORHOOD COVERAGE */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>5. Precision Service Coverage: Clearwater Neighborhoods</h2>
            <p style={{ color: "var(--text-muted)" }}>From the barrier islands to the suburban corridors, we provide specialized Pinellas logistics.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "Clearwater Beach", d: "Managing CCCL (Coastal Construction Control Line) permits and deep-sand dewatering." },
              { n: "Island Estates", d: "Seawall-adjacent extractions and tidal pressure stabilization for luxury waterfront lots." },
              { n: "Countryside", d: "Managing mature suburban lot lines and large-scale backfill for property expansions." },
              { n: "Sand Key", d: "Restricted-access high-rise and luxury villa demolition with surgical precision." },
              { n: "Island Way", d: "High-density waterfront logistics and specialized coastal soil stabilization." },
              { n: "Morningside", d: "Protecting mature tree canopies and managing suburban drainage swale compliance." },
              { n: "Belleair (Adjacent)", d: "High-stakes estate removals with specialized foundation shoring and logistics." },
              { n: "Greenbriar", d: "Rapid-deployment suburban removals with zero-impact machinery protocols." }
            ].map((neigh, i) => (
              <div key={i} style={{ background: "white", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.5rem" }}>{neigh.n}</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>{neigh.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROI & LAND RECLAMATION */}
      <section className="section">
         <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
               <h2>5. The ROI of "Yard Reclamation" in North Pinellas</h2>
               <p style={{ maxWidth: "800px", margin: "0 auto" }}>In a market where lot square footage is a premium, a pool can often be a liability. Reclaim your land for higher-value uses.</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <Anchor size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Boat & RV Storage</h4>
                  <p style={{ fontSize: "0.85rem" }}>Reclaim your backyard for a concrete pad or shell-driveway to house your boat—a high-value upgrade in the Clearwater market.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <Sun size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Luxury Outdoor Living</h4>
                  <p style={{ fontSize: "0.85rem" }}>Trade your pool for an expansive outdoor kitchen, fire pit, and synthetic turf area, increasing your home's usable living space by 500+ sq ft.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>ADU Readiness</h4>
                  <p style={{ fontSize: "0.85rem" }}>With a **Full Engineered Removal**, your lot is ready for an Accessory Dwelling Unit or guest house, adding significant long-term rental value.</p>
               </div>
            </div>
         </div>
      </section>
      {/* COMPREHENSIVE CLEARWATER FAQ */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={32} color="var(--primary)" />
              Clearwater Pool Removal FAQ
            </h2>
            <p>Expert Answers for Pinellas County Homeowners</p>
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

      {/* 8. REGULATORY & MARITIME APPENDIX */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16">
               <div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Clearwater & Pinellas Regulatory Appendix</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                     Pool removal in the Clearwater area is governed by **Pinellas County Code Chapter 158** and specific City of Clearwater zoning ordinances. Properties located in **Special Flood Hazard Areas (SFHA)**, particularly those in 'V' (Velocity) zones, are subject to the **FEMA 50% Rule**. This rule limits the amount of improvement work that can be done if the property has had recent major modifications. 
                     <br /><br />
                     Our engineered removals are specifically designed to provide the documentation required to stay within these regulatory brackets. We manage the coordination between the City of Clearwater and the Pinellas County environmental reviewers, ensuring that your pool 'Abandonment' or 'Extraction' is correctly recorded on the property title, clearing the path for future development or sale without 'Open Permit' liabilities.
                  </p>
               </div>
               <div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Marine Geology & Salinity Management</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-main)" }}>
                     Clearwater's coastal geology is dominated by the **St. Lucie-Palm Beach-Urban Land complex**. This high-salinity environment creates a unique challenge for groundwater discharge. During the dewatering phase of a pool removal, we utilize specialized **Salinity-Filtration Systems** to ensure that the water discharged into the storm system or Intracoastal meets SWFWMD water quality standards.
                     <br /><br />
                     Furthermore, the absence of silt and clay in 'Beach Sand' profiles requires the use of **Bio-Composite Shoring** during the excavation. This prevents the 'Cave-In' effect that can occur when removing a 50,000-lb concrete shell from a liquid-sand matrix. This is the level of maritime engineering required to protect Clearwater's waterfront estates.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <TreePine size={64} className="icon-center" style={{ marginBottom: "2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready to Reclaim Your Clearwater Backyard?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of North Pinellas families who have traded high maintenance for beautiful, usable outdoor living space.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Get a Local Clearwater Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
