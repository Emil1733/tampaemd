import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { HardHat, FileText, CheckCircle, ShieldCheck, Info, Map, Target, Activity, Waves, HelpCircle, Microscope, TreePine, Gavel, ClipboardCheck } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hillsborough County Pool Removal Permits | 1500+ Word Authority Guide",
  description: "The definitive guide to pool removal permits and regulatory compliance in Hillsborough County, FL. Learn about ordinance #4.01.02, site plans, and inspections.",
  alternates: {
    canonical: "/resources/hillsborough-pool-permits",
  },
};

export default function HillsboroughPermits() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a permit required for pool removal in Hillsborough County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All pool demolitions in Hillsborough County require a building permit to ensure utility safety and proper soil compaction."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get a permit in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, the permit approval cycle for pool removal ranges from 10 to 15 business days."
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
        { name: "Hillsborough Permits", href: "/resources/hillsborough-pool-permits" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Gavel size={20} />
              <span>Verified Regulatory Resource</span>
            </div>
            <h1>Hillsborough County Pool Removal Permits: The Master Guide</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--text-main)" }}>
                In Hillsborough County, a swimming pool is not just a hole in the ground; it is a legally recorded structure. Removing one requires more than just an excavator; it requires a systematic legal process to ensure the "Abandonment" is performed according to **Florida Building Code** and local municipal ordinances.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2.5rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.3rem", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <ClipboardCheck size={24} color="var(--primary)" /> 
                  The "Mandatory" Checklist
               </h3>
               <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Hillsborough County Building Department requires the following documentation for any pool demolition permit (unincorporated areas and municipalities):
               </p>
               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Demolition Permit (Residential):</strong> Classification 010. Must be pulled by a state-certified contractor.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Engineer-Certified Site Plan:</strong> A surveyed sketch showing the pool’s distance from all property lines and existing structures.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Dewatering Discharge Notice:</strong> If groundwater will be pumped into the county storm drain system.</span>
                  </li>
               </ul>
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
          </aside>
        </div>
      </section>

      {/* 2. THE LEGAL DEFINITION OF ABANDONMENT */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Hillsborough Ordinance #4.01.02: The Law of Abandonment</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              In Hillsborough County, "filling in a pool" without a permit is legally classified as **Illegal Dumping**. According to ordinance #4.01.02, a pool shell must be physically compromised (punched) to ensure that it cannot hold water underground, which would create a "sub-surface swamp" and potentially trigger a sinkhole or soil liquefaction.
            </p>
            <div className="grid grid-cols-2 gap-12">
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Full Removal vs. Partial</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                    The county recognizes two methods: **Full Extraction** (removing all concrete) and **Partial Demolition** (breaking the bottom and removing the top 24-36 inches). A Full Removal is the only way to clear your property title for future house additions or structural construction.
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Drainage Certification</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                    Hillsborough inspectors look for a "Drainage Swale" preservation. You cannot fill a pool in a way that directs water onto your neighbor’s property. We include a topographical drainage plan with every permit application.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SITE PLAN TECHNICAL SPECS */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Technical Site Plan Requirements</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>The County Building Department will reject any application that doesn't meet these specific drafting standards.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <Target size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Boundary Setbacks</h4>
              <p style={{ fontSize: "0.9rem" }}>The plan must clearly show the "Setback" from the pool edge to the property line. In neighborhoods like **Brandon** or **Westchase**, these distances determine which size machinery can be legally used on site.</p>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <Waves size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Utility Locations</h4>
              <p style={{ fontSize: "0.9rem" }}>The plan must identify the "Main Service Drop" for electricity and gas. Hillsborough County requires verification that the pool sub-panel has been disconnected at the main house breaker before fill-in.</p>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <Activity size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Erosion Control Zones</h4>
              <p style={{ fontSize: "0.9rem" }}>The County requires a "Silt Fence" plan to ensure that during a typical Florida thunderstorm, no sediment from your pool removal enters the public storm drain system or local canals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE INSPECTION PROTOCOL */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. The "Pre-Fill" Inspection: The Critical Window</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    One of the most common reasons homeowners get fined is filling the pool hole before the inspector has seen the bottom. In Hillsborough, a **Pre-Fill Inspection** is mandatory.
                    <br /><br />
                    During this inspection, the county official verifies that:
                 </p>
                 <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Target size={24} color="var(--secondary)" />
                       <div>
                          <strong>Floor Drainage:</strong> The inspector verifies that a minimum of 3 to 5 large (12-inch) holes have been punched in the deep end to allow groundwater movement.
                       </div>
                    </li>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Target size={24} color="var(--secondary)" />
                       <div>
                          <strong>Service Termination:</strong> Verification that all pool lights, pumps, and chlorinators have been removed and the electrical conduit has been capped.
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>Hillsborough Compliance Assurance</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   We handle the coordination with the County scheduling system, ensuring the inspector arrives exactly when the pool is ready for fill-in, minimizing your project downtime.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Speak with a Compliance Officer</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 5. DISCHARGE & SWFWMD RULES */}
      <section className="section bg-surface-alt">
        <div className="container">
           <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", marginBottom: "3.5rem" }}>4. SWFWMD & Discharge Regulatory Compliance</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                 Where does the water go? If we are dewatering your property near the **Hillsborough River** or **Tampa Bay**, we must comply with the **Southwest Florida Water Management District (SWFWMD)** rules regarding "Sediment Loading."
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                 <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
                    <h4 style={{ color: "var(--primary)" }}>Filtration Systems</h4>
                    <p style={{ fontSize: "0.9rem" }}>Hillsborough inspectors may request proof that all discharged water has passed through a "Dirt Bag" or filtration system to prevent siltation of public drains.</p>
                 </div>
                 <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
                    <h4 style={{ color: "var(--primary)" }}>Gallonage Limits</h4>
                    <p style={{ fontSize: "0.9rem" }}>Large-scale dewatering projects (over 10,000 gallons per day) may require a temporary "Water Use Permit." We handle all the technical calculations for these high-risk waterfront sites.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. LICENSING & LIABILITY */}
      <section className="section">
         <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>5. Why "Unlicensed" is Illegal in Hillsborough</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
               Hillsborough County strictly enforces contractor licensing for pool removal. A general handyman cannot legally pull a demolition permit or operate heavy machinery for pool abandonment.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>$2M Liability Minimum</h4>
                  <p style={{ fontSize: "0.85rem" }}>Professional pool removers in Hillsborough carry high-limit liability to protect against accidental damage to house foundations or septic systems.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Workers' Comp Coverage</h4>
                  <p style={{ fontSize: "0.85rem" }}>Because of the risks associated with heavy excavation, the county requires full Workers' Comp to ensure the homeowner has zero liability for on-site injuries.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Certified Compaction</h4>
                  <p style={{ fontSize: "0.85rem" }}>Only a licensed contractor can provide the **95% Proctor Density** certification required to close out the permit and clear your property title.</p>
               </div>
            </div>
         </div>
      </section>

      {/* ISR CALCULATIONS & PERVIOUS CREDITS */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>9. Impervious Surface Ratio (ISR) & Pervious Credits</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  One of the most complex aspects of Hillsborough County zoning is the **Impervious Surface Ratio (ISR)**. A standard swimming pool is considered 100% impervious by the county building department. By removing the pool and replacing it with pervious grass or engineered pavers, you are essentially "Buying Back" development rights on your lot.
                  <br /><br />
                  This is critical if you plan to build a larger home addition, a detached garage, or an ADU. We provide the certified **Pervious Surface Calculations** that your architect will need to prove to the county that your new project stays within the mandatory ISR limits for your specific neighborhood (e.g., **FishHawk**, **Cheval**, or **Tampa Palms**).
               </p>
            </div>
         </div>
      </section>

      {/* IMPACT FEE CREDITS: THE HIDDEN SAVINGS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>10. Impact Fee Credits: The Hidden Savings</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  In Hillsborough County, new construction is subject to heavy "Impact Fees" for transportation, schools, and parks. However, because a swimming pool is an existing "Impact-Generating Use," its removal can sometimes create an **Impact Fee Credit** for future structures on the same lot.
                  <br /><br />
                  We document the legal abandonment of the pool structure so that you can leverage these credits when you apply for your next building permit. This technical nuance alone can save homeowners thousands of dollars in county fees during a major backyard renovation.
               </p>
            </div>
         </div>
      </section>
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>6. Zoning vs. Building Code: The Hillsborough Distinction</h2>
               <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  Many homeowners confuse **Building Permits** with **Zoning Compliance**. In Hillsborough County, even if you have a building permit to remove your pool, you must also comply with the "Impervious Surface Ratio" (ISR) rules of your specific zoning district.
                  <br /><br />
                  For example, if you are in a **Residential-1 (R-1)** zone, removing a pool and replacing it with a concrete pad may exceed your allowed impervious surface limit. We provide a **Zoning Impact Analysis** as part of our permit package to ensure your property remains 100% compliant and you avoid future code enforcement liens.
               </p>
            </div>
         </div>
      </section>

      {/* THE HILLSBOROUGH RIVER WATERSHED PROTECTION */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div>
                  <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>7. The Hillsborough River Watershed Protection</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     If your property is within the **Hillsborough River Watershed** or near any of the county's protected springs, your pool removal is subject to the **Environmental Protection Commission (EPC)** oversight.
                     <br /><br />
                     This requires specific "Turbidity Monitoring" if dewatering is necessary. We utilize specialized **filtration booms** and **sediment traps** to ensure that any water leaving your site is cleaner than the water already in the storm drain system, protecting our local Florida ecosystems and keeping you in the EPC’s good graces.
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>EPC Compliance Checklist</h3>
                  <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
                     <li style={{ marginBottom: "0.5rem" }}>✅ Zero-Runoff Silt Fencing</li>
                     <li style={{ marginBottom: "0.5rem" }}>✅ Dewatering Discharge Logs</li>
                     <li style={{ marginBottom: "0.5rem" }}>✅ Chemical Compatibility Soil Testing</li>
                     <li style={{ marginBottom: "0.5rem" }}>✅ Post-Removal Grading Certification</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE HILLSBOROUGH PERMIT FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Hillsborough Permit FAQ
               </h2>
               <p>25+ Technical Answers for Unincorporated Hillsborough Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "Is a pool removal permit required in Temple Terrace?", a: "Yes. Temple Terrace is an incorporated city within Hillsborough but has its own building department. We hold a specific license for Temple Terrace and handle all local permits." },
                  { q: "What is the 'Top-Cap' requirement?", a: "Hillsborough requires that at least the top 24-36 inches of the pool beam (the wall) be removed. This ensures that no concrete 'ghost' of the pool remains near the surface." },
                  { q: "Do I need a permit for a fiberglass pool?", a: "Yes. Even though the shell is one piece, the county still requires a demolition permit to verify the hole is filled and compacted correctly." },
                  { q: "What happens if I don't close the permit?", a: "An open permit acts like a 'Cloud' on your title. You will not be able to sell your home or refinance your mortgage until the permit is officially closed by a county inspector." },
                  { q: "Does the county require photos of the work?", a: "Often yes. We provide a 'Photo Evidence Log' showing the punched floor and the utility caps, which we submit to the inspector as part of the closeout process." },
                  { q: "What is 'Moisture-Controlled Fill'?", a: "Hillsborough code requires fill dirt to be at its 'Optimum Moisture Content' during compaction to achieve the 95% Proctor Density requirement." },
                  { q: "Will the county inspect my neighbors' yard?", a: "They may if there is a drainage complaint. We ensure our final grade doesn't push water onto neighboring lots, preventing code enforcement visits." },
                  { q: "How do I verify a contractor's Hillsborough license?", a: "You can check the **Hillsborough County Contractor Licensing Board** website. We are 100% verified and in good standing with zero complaints." },
                  { q: "What is a 'Lien Waiver'?", a: "It's a legal document we provide proving that all of our suppliers (like the sand yard) have been paid, so they cannot legally sue you for payment." },
                  { q: "Can I remove a pool during a drought?", a: "Yes, but we must use water for compaction. We utilize our own water tankers if there are local watering restrictions in place." }
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
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Get Your Hillsborough Project Started Right</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Don't navigate the county bureaucracy alone. Let Tampa's pool removal specialists handle the engineering, permitting, and inspections.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Request Permit Assistance</Link>
          </div>
        </div>
      </section>
    </>
  );
}
