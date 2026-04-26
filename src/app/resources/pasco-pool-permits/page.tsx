import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { HardHat, FileText, CheckCircle, ShieldCheck, Info, MapPin, Gavel, ClipboardCheck, Waves, Target, HelpCircle, Activity, Microscope } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pasco County Pool Removal Permits | 1500+ Word Authority Guide",
  description: "The definitive guide to pool removal permits and regulatory compliance in Pasco County, FL. Learn about shell abandonment standards, inspections, and dewatering.",
  alternates: {
    canonical: "/resources/pasco-pool-permits",
  },
};

export default function PascoPermits() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a Pasco County pool removal permit take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, Pasco County permits for pool demolition are approved within 10 to 15 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Does Pasco County require soil compaction testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for engineered extractions where future building is planned, Pasco requires a certified compaction report from a geotechnical engineer."
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
        { name: "Pasco Permits", href: "/resources/pasco-pool-permits" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Gavel size={20} />
              <span>Verified Regulatory Resource</span>
            </div>
            <h1>Pasco County Pool Removal Permits: The Master Guide</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--text-main)" }}>
                In Pasco County, a swimming pool is legally classified as a "Permanent Structural Improvement." Removing one is not a simple landscaping project; it is a regulated demolition process overseen by **Pasco County Building Construction Services**. For homeowners in **Wesley Chapel**, **Land O' Lakes**, and **New Port Richey**, compliance is the only way to protect your property title.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2.5rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.3rem", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <ClipboardCheck size={24} color="var(--primary)" /> 
                  Pasco Mandatory Checklist
               </h3>
               <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  The following items are required for a successful permit application in Pasco County (Residential/Commercial):
               </p>
               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Building Demolition Permit:</strong> Must be filed by a state-licensed contractor with a valid Pasco County business tax receipt.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Shell Perforation Plan:</strong> Technical proof that the pool floor will be punched to allow groundwater migration.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Erosion Control Plan:</strong> Silt fencing and sediment management for properties near the Pithlachascotee or Anclote Rivers.</span>
                  </li>
               </ul>
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
          </aside>
        </div>
      </section>

      {/* 2. ABANDONMENT STANDARDS */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. Pasco County Shell Abandonment Standards</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Pasco County has some of the strictest "Abandonment" codes in West Central Florida. This is due to the region’s unique karst topography (sinkhole-prone limestone). A pool that is simply "filled in" without proper perforation acts like a massive underground bucket, trapping water and causing sub-surface erosion.
            </p>
            <div className="grid grid-cols-2 gap-12">
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>The 3-Foot Perforation Rule</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                    Pasco code requires a minimum of three 12-inch diameter holes punched through the deep end of the pool floor. We exceed this standard by using a hydraulic hammer to "shatter" the deep-end floor, ensuring 100% natural drainage.
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>"Beam Removal" Protocol</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                    The "Beam" (the top concrete wall of the pool) must be removed to a depth of at least 24 inches below final grade. This prevents the "concrete ring" effect that can kill grass or cause future patio cracks.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERMIT TYPES: DEMOLITION VS ABANDONMENT */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Choosing the Right Permit Type</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>Depending on your future plans for the backyard, we apply for one of two distinct permit paths.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="glass-card" style={{ padding: "3rem" }}>
              <Target size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Structural Demolition (Full)</h4>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                Recommended for homeowners in **Wesley Chapel** planning to build a guest house or home addition. We remove 100% of the concrete, plumbing, and steel. This path requires a final "Compaction Certification" but leaves the lot 100% clear for any future structural use.
              </p>
            </div>
            <div className="glass-card" style={{ padding: "3rem" }}>
              <Waves size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Pool Abandonment (Partial)</h4>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                Ideal for creating a garden or grass lawn. We punch the floor and remove the top 2-3 feet of wall. While cost-effective, this path must be disclosed during property sales and may limit future heavy construction in that specific area of the lot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PASCO INSPECTION CYCLE */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. The Pasco County Inspection Cycle</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    The building department requires two critical "On-Site" verifications to close your permit. We manage the scheduling and the technical representation for both.
                 </p>
                 <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Activity size={24} color="var(--secondary)" />
                       <div>
                          <strong>The Pre-Fill Inspection:</strong> The inspector verifies the floor punctures and that all electrical/plumbing lines are capped. This must happen BEFORE any dirt is added.
                       </div>
                    </li>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <Activity size={24} color="var(--secondary)" />
                       <div>
                          <strong>The Final Grade Inspection:</strong> Verification that the site has been compacted to code and that the final elevation matches the neighborhood drainage profile.
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>Pasco Compliance Assurance</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   We are in constant contact with Pasco's building officials in **Land O' Lakes** and **New Port Richey**, ensuring your project never hits a bureaucratic delay.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Consult a Compliance Expert</Link>
              </div>
           </div>
        </div>
      </section>

      {/* PASCO NEW CONSTRUCTION TURNOVER GUIDE */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>6. The Pasco New-Construction Turnover Guide</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  In high-growth areas like **Wesley Chapel** and **Land O' Lakes**, many homeowners purchase older properties specifically for the lot, only to find an aging pool in the way of their new-construction plans. Pasco County has a specific "Sequential Permitting" process for these scenarios.
                  <br /><br />
                  You cannot legally apply for a new home or ADU permit until the pool demolition permit has been "Finaled" and a **Compaction Certification** has been filed with the county. We provide the structural engineering reports that your architect and the county building department require to verify that the former pool site is now stable enough for a permanent foundation.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Structural Slab Readiness</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We utilize **Modified Proctor Density** testing to ensure the ground achieves 98% compaction, exceeding the standard residential code and providing a rock-solid base for your new luxury casita or home extension.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Foundation Proximity Shoring</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        If your new project is within 5 feet of the old pool excavation, we provide the necessary "Z-Shoring" plans to ensure no sub-surface soil migration occurs during the transition between demolition and new construction.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* PITHLACHASCOTEE RIVER PROTECTION SPECS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>River-Front Compliance: The 'Cotee' Standard</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     Properties along the **Pithlachascotee River** or near the **Anclote River** are subject to the **Pasco County Environmental Management** division. 
                     <br /><br />
                     Our **River-Front Demolition Protocol** includes double-layered silt fencing and specialized "Turbidity Monitoring" if dewatering is required. We ensure that zero sediment or chlorinated pool water enters our local Florida waterways, protecting both the environment and your property from heavy EPC fines.
                  </p>
               </div>
               <div>
                  <h2>Pasco Topographical Drainage Verification</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     Pasco County inspectors are increasingly focused on "Post-Demolition Drainage." We utilize **laser-guided grading** to ensure your reclaimed yard matches the county's master drainage plan. This prevents the "Ponding" effect that can lead to mosquito breeding and foundation issues on your or your neighbor's property.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE PASCO PERMIT FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Pasco County Permit FAQ
               </h2>
               <p>25+ Technical Answers for South Pasco Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "Do I need a permit for a fiberglass pool in Pasco?", a: "Yes. Even though the shell is one piece, Pasco County requires a permit to verify that the hole is filled and compacted correctly to prevent sinkholes." },
                  { q: "What is the 'Top-Beam' removal depth?", a: "Pasco code requires the top 24-36 inches of the concrete pool wall to be removed. This ensures no concrete remains near the surface to interfere with future landscaping or turf." },
                  { q: "What happens if I remove a pool without a permit?", a: "Pasco County can issue a 'Stop Work Order' and fine the homeowner up to $500 per day. You will also face significant title issues when trying to sell your home." },
                  { q: "Does Pasco require a new survey?", a: "In most cases, we can use your existing property survey as the base for our demolition site plan, saving you the cost of a new surveyor visit." },
                  { q: "What is 'Nuclear Density Testing'?", a: "It is the engineering standard for measuring soil compaction. We use it on all structural projects in Pasco to prove the ground is solid enough for future construction." },
                  { q: "How do you protect my neighbor's fence in Land O' Lakes?", a: "We utilize temporary shoring and precision mini-machinery. Every project includes a pre-construction survey to document the condition of all adjacent structures." },
                  { q: "What is a 'Lien Waiver'?", a: "It's a legal document we provide proving that all of our suppliers (like the sand yard) have been paid, so they cannot legally sue you for payment." },
                  { q: "Can I remove a pool during a drought in Pasco?", a: "Yes, but we must use water for compaction. We utilize our own water tankers if there are local watering restrictions in place." },
                  { q: "How long is a Pasco permit valid for?", a: "Typically 180 days. We manage the entire timeline to ensure all inspections are completed and the permit is 'Finaled' before it expires." },
                  { q: "What is the ROI of removing a pool in 33544?", a: "Homeowners often see a significant ROI by trading high maintenance for an ADU or high-value outdoor living space, which are top-demand features in South Pasco." }
               ].map((faq, i) => (
                  <div key={i} className="faq-item">
                     <h4 style={{ color: "var(--primary)", fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.q}</h4>
                     <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. CONTRACTOR LICENSING */}
      <section className="section">
         <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>5. Why Licensing is Critical in Pasco County</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
               Pasco County strictly enforces the **Florida Building Code** for all demolition. Using an unlicensed handyman for a pool removal is illegal and voids your home insurance policy in the event of a sub-surface soil collapse.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>$2M Liability Guarantee</h4>
                  <p style={{ fontSize: "0.85rem" }}>We carry heavy-duty liability specifically for structural demolition, protecting your home foundation and all adjacent structures.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Workers' Comp Mastery</h4>
                  <p style={{ fontSize: "0.85rem" }}>Because of the risks involved in deep excavation, we maintain full workers' comp for all crew members, removing all legal risk from the homeowner.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Certified Compaction</h4>
                  <p style={{ fontSize: "0.85rem" }}>We provide the **Nuclear Density** reports required to prove the ground is structurally stable and 'Ready-to-Build'.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. MASSIVE FAQ SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={32} color="var(--primary)" />
              Pasco Permit FAQ
            </h2>
            <p>25+ Technical Answers for South Pasco Residents</p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-12">
            {[
              { q: "How much is a pool removal permit in Pasco County?", a: "The permit fee is typically based on the project value, usually ranging from $250 to $500. We include all permit fees in our turnkey quotes." },
              { q: "What is the 'Utility Capping' requirement?", a: "Pasco requires verification that the electrical circuit for the pool pump has been decommissioned at the main breaker and the conduit capped." },
              { q: "Do you handle the 'New Port Richey' city permits?", a: "Yes. While much of Pasco is unincorporated, we handle city-specific permits for NPR, Zephyrhills, and Dade City as well." },
              { q: "How long does Pasco take to approve a permit?", a: "Approval typically takes 10 to 15 business days. We handle the entire bureaucratic process to ensure zero delays." },
              { q: "Can I pull the permit myself as an owner-builder?", a: "Technically yes, but you become 100% legally liable for any future soil failure or sinkhole activity. Most Pasco homeowners prefer the protection of a licensed contractor." },
              { q: "What is a 'Lien Release' in Pasco?", a: "This is a legal document we provide proving all our material and labor costs have been paid, ensuring no one can place a claim on your property title." },
              { q: "Will the county inspect my neighbor's yard?", a: "They only inspect the affected lot, but they verify that your final grade doesn't push water onto neighboring properties." },
              { q: "What is 'Nuclear Density Testing'?", a: "It is the county-standard test used to verify that the fill dirt has been compacted correctly. We provide the certified reports for your file." },
              { q: "What happens to the old pool heater?", a: "The county requires it to be disposed of at an authorized facility. We handle the hauling and recycling of all pumps, filters, and heaters." },
              { q: "Does the county require photos?", a: "Yes. We maintain a 'Photo Evidence Log' of the punched shell and the utility caps to submit to the inspector as part of the closeout process." },
              { q: "Can I remove a pool during a drought?", a: "Yes, but we must use water for compaction. We utilize our own tankers if there are local water restrictions in Pasco." },
              { q: "What is a 'Certificate of Completion'?", a: "This is the final document issued by Pasco County once the project is finished and all inspections have passed. It is critical for the future sale of your home." }
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
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Get Your Pasco Project Started Right</h2>
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
