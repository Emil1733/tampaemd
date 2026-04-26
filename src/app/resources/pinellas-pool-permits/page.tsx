import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { HardHat, FileText, CheckCircle, ShieldCheck, Info, MapPin, Gavel, ClipboardCheck, Waves, Target, HelpCircle, Activity, Microscope, TreePine } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pinellas County Pool Removal Permits | 1500+ Word Authority Guide",
  description: "The definitive guide to pool removal permits and regulatory compliance in Pinellas County, FL. Learn about ISR limits, CCCL coastal rules, and St. Pete inspections.",
  alternates: {
    canonical: "/resources/pinellas-pool-permits",
  },
};

export default function PinellasPermits() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much is a pool removal permit in Pinellas County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Permit fees in Pinellas vary by city but generally range between $200 and $500, including environmental and building inspections."
        }
      },
      {
        "@type": "Question",
        "name": "What is ISR and why does it matter in St. Pete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ISR stands for Impervious Surface Ratio. Removing a pool often helps homeowners meet Pinellas County's strict storm-water runoff regulations."
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
        { name: "Pinellas Permits", href: "/resources/pinellas-pool-permits" }
      ]} />
      {/* 1. HERO SECTION */}
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Gavel size={20} />
              <span>Verified Regulatory Resource</span>
            </div>
            <h1>Pinellas County Pool Removal Permits: The Master Guide</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--text-main)" }}>
                Pinellas County is Florida's most densely populated county, making every square foot of land a valuable asset. However, this density comes with some of the state's most complex building and environmental codes. For homeowners in **St. Petersburg**, **Clearwater**, and **Largo**, removing a pool is a multi-jurisdictional legal process that requires expert navigation.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2.5rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)", marginBottom: "3rem" }}>
               <h3 style={{ fontSize: "1.3rem", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <ClipboardCheck size={24} color="var(--primary)" /> 
                  Pinellas Mandatory Checklist
               </h3>
               <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  The Pinellas County Building Department (and local municipalities) require the following documentation for any pool demolition:
               </p>
               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Residential Demolition Permit:</strong> Must be filed by a state-certified contractor (CPC or CBC license).</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Impervious Surface Ratio (ISR) Form:</strong> Proof that the new grade complies with county drainage density rules.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                     <CheckCircle size={20} color="var(--primary)" style={{ marginTop: "0.15rem" }} />
                     <span><strong>Utility Termination Certification:</strong> Verified disconnects for electrical, gas, and water service.</span>
                  </li>
               </ul>
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
          </aside>
        </div>
      </section>

      {/* 2. ISR LIMITS: THE PINELLAS CHALLENGE */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>1. ISR Limits: The Pinellas "Density" Challenge</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "2rem" }}>
              Unlike larger counties, Pinellas is physically limited by its peninsula geography. This has led to strict **Impervious Surface Ratio (ISR)** laws. A swimming pool is considered 100% impervious. By removing a pool and replacing it with pervious grass or engineered pavers, you are actually "Reclaiming" development rights on your property.
            </p>
            <div className="grid grid-cols-2 gap-12">
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Pervious Credits</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                    Removing a 500 sq ft pool can allow you to add a 500 sq ft home addition or a detached garage that would have previously been denied due to ISR limits. We provide the certified drainage calculations for your architect.
                  </p>
               </div>
               <div className="glass-card" style={{ padding: "2.5rem", background: "var(--surface-alt)" }}>
                  <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Stormwater Surcharges</h4>
                  <p style={{ fontSize: "0.95rem" }}>
                    Many Pinellas municipalities (like St. Pete) charge a monthly "Stormwater Fee" based on impervious area. Removing your pool can lead to a direct reduction in your monthly utility bill.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COASTAL CONSTRUCTION & CCCL */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>2. Coastal Construction & The CCCL</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>Properties west of the **Coastal Construction Control Line** (CCCL) face additional state-level oversight.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <Waves size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>FDEP Coordination</h4>
              <p style={{ fontSize: "0.9rem" }}>If your pool is on a barrier island like **Treasure Island** or **Madeira Beach**, we coordinate with the Florida Department of Environmental Protection (FDEP) to ensure zero beach-front erosion.</p>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <Target size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h4>Seawall Protection</h4>
              <p style={{ fontSize: "0.9rem" }}>Removing a pool near a seawall requires specialized "Hydraulic Shoring." We ensure the pressure of the surrounding ground doesn't collapse your seawall during the excavation phase.</p>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem" }}>
               <Activity size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
               <h4>Sea Turtle Compliance</h4>
               <p style={{ fontSize: "0.85rem" }}>For beachfront removals, we adhere to seasonal lighting and machinery restrictions to protect local sea turtle nesting sites—a mandatory Pinellas environmental standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREE PROTECTION LAWS */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>3. Grand Oak & Canopy Protection</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    Pinellas County is fiercely protective of its urban canopy. In cities like **Oldsmar** and **Dunedin**, you cannot legally drive an excavator across a "Grand Oak" root zone without a specific protection plan.
                 </p>
                 <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <TreePine size={24} color="var(--secondary)" />
                       <div>
                          <strong>Root-Zone Shielding:</strong> We utilize interlocking composite mats to create a "Floating Roadway," distributing machinery weight and preventing root-crushing soil compaction.
                       </div>
                    </li>
                    <li style={{ display: "flex", gap: "1rem" }}>
                       <TreePine size={24} color="var(--secondary)" />
                       <div>
                          <strong>Pneumatic Excavation:</strong> For pools inches from a protected tree, we use Air-Spades to expose roots safely, ensuring the tree remains healthy after the pool is gone.
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary)", color: "white" }}>
                 <HardHat size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>Pinellas Site Strategy</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   Every Pinellas project includes a **Canopy & Root Audit** to ensure your project stays in full compliance with local arborist ordinances.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Request a Compliance Audit</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 5. THE INSPECTION PROTOCOL */}
      <section className="section bg-surface-alt">
        <div className="container">
           <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 style={{ textAlign: "center", marginBottom: "3.5rem" }}>4. The St. Pete & Clearwater Inspection Cycle</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                 The building department requires two critical "On-Site" verifications to close your permit. We manage the entire schedule.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                 <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
                    <h4 style={{ color: "var(--primary)" }}>The Pre-Fill Verification</h4>
                    <p style={{ fontSize: "0.9rem" }}>An inspector must see the "Punched" pool floor to verify drainage. In Pinellas, this usually requires three 12-inch holes. We manage the timing to ensure zero project downtime.</p>
                 </div>
                 <div style={{ background: "white", padding: "2rem", borderRadius: "16px" }}>
                    <h4 style={{ color: "var(--primary)" }}>The Final Grade Inspection</h4>
                    <p style={{ fontSize: "0.9rem" }}>Verification that the site has been compacted and graded to prevent runoff onto neighboring properties—a common source of litigation in Pinellas Park and Largo.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. LICENSING & LIABILITY */}
      <section className="section">
         <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>5. Why Licensing is Critical in Pinellas County</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
               Pinellas County strictly enforces the **Florida Building Code** for all demolition. Using an unlicensed handyman for a pool removal is illegal and voids your home insurance policy in the event of a sub-surface soil failure.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>$2M Liability Guarantee</h4>
                  <p style={{ fontSize: "0.85rem" }}>We carry heavy-duty liability specifically for structural demolition, protecting your home foundation and all adjacent structures.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h4>Workers' Comp Coverage</h4>
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

      {/* POST-PERMIT ARCHIVAL & DEED UPDATES */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>7. Post-Permit Archival: Updating Your Property Deed</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  Once the final inspection is passed and the **Certificate of Completion** is issued by Pinellas County, there is one final critical step: updating your property record with the **Pinellas County Property Appraiser**. 
                  <br /><br />
                  While the building department and the appraiser's office share data, there can often be a 6-12 month lag. We provide you with a certified "Project Closeout Packet" that you can proactively submit to the appraiser to ensure your property tax assessment is adjusted immediately to reflect the removal of the luxury pool improvement. This final bureaucratic loop ensures you aren't paying taxes on a pool that no longer exists.
               </p>
            </div>
         </div>
      </section>
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>6. St. Petersburg City vs. Pinellas County Permits</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  A common point of confusion for homeowners is whether their property falls under **unincorporated Pinellas County** or the **City of St. Petersburg**. This distinction is critical because the City of St. Petersburg has its own internal building department with unique "Sequential Inspection" requirements.
                  <br /><br />
                  For example, St. Pete city inspectors often require a **"Plumbing Termination Verification"** from a master plumber before the demolition permit can be issued. We handle these inter-agency communications, ensuring that whether you are in the **Old Northeast** or **Shore Acres**, your permit is filed with the correct jurisdiction and meets all local municipal sub-codes.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Old Northeast Compliance</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        In historic districts like Old Northeast, we coordinate with the **Historic Preservation Office** to ensure machinery access doesn't impact historic brick streets or protected neighborhood curbing.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Shore Acres Drainage Logs</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        In flood-prone areas like Shore Acres, we provide a **"Pre-Fill Elevation Survey"** to ensure the final grade helps mitigate local ponding and aligns with the city's master flood-control plan.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* PINELLAS PARK LAND-USE SPECS */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Activity size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Pinellas Park: Grading & Land-Use</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     **Pinellas Park** features a mix of residential and light-industrial zoning. Removing a pool here requires a strict adherence to the **City of Pinellas Park Land Development Code**. 
                     <br /><br />
                     Our **Pinellas Park Protocol** ensures that the final restoration of your yard doesn't interfere with the city's complex "Secondary Drainage Swale" network. We provide the certified grading manifests that the city requires to close out your demolition permit and ensure your property remains 100% build-ready.
                  </p>
               </div>
               <div>
                  <h2>Largo & Seminole Arid-Compaction Standards</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     In the higher elevations of **Largo** and **Seminole**, the soil can be significantly drier. We utilize **Moisture-Controlled Compaction** to ensure that our fill dirt achieves its "Optimum Moisture Content" before we perform the final vibratory packing. This prevents future "Dust-Voiding" and ensures your yard stays level for decades to come.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE PINELLAS PERMIT FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Pinellas County Permit FAQ
               </h2>
               <p>25+ Technical Answers for St. Pete, Clearwater, and Largo Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "Is a pool removal permit required in Pinellas Park?", a: "Yes. All pool removals in Pinellas Park require a demolition permit. We handle the entire application and inspection process for you." },
                  { q: "What is the 'ISR' rule in Clearwater?", a: "Clearwater limits the amount of your lot that can be covered by impervious materials. Removing a pool is the fastest way to lower your ISR and gain 'Development Credits' for future projects." },
                  { q: "Do you handle the 'Largo' city permits?", a: "Yes. We are licensed and bonded in the City of Largo and handle all local permit filings and inspector coordination." },
                  { q: "How long does a Pinellas permit take to approve?", a: "Typically 10 to 15 business days. We manage the entire administrative timeline to ensure zero project delays." },
                  { q: "Can I build an ADU where the pool was?", a: "Yes, but only if you opt for a **Full Engineered Removal**. This involves removing all concrete and steel to ensure a stable foundation for the new structure." },
                  { q: "What is 'Nuclear Density Testing'?", a: "It is the engineering standard for measuring soil compaction. We use it on all structural projects in Pinellas to prove the ground is solid enough for construction." },
                  { q: "How do you protect my neighbor's house in Dunedin?", a: "We utilize temporary shoring and precision mini-machinery. Every project includes a pre-construction survey to document the condition of all adjacent structures." },
                  { q: "What happens to the old pool equipment?", a: "The county requires it to be disposed of at an authorized facility. We handle the hauling and recycling of all pumps, filters, and heaters." },
                  { q: "Can I remove a pool during a drought in Pinellas?", a: "Yes, but we must use water for compaction. We utilize our own water tankers if there are local watering restrictions in place." },
                  { q: "What is the fine for an unpermitted pool removal?", a: "Pinellas County can fine homeowners up to $500 per day for unpermitted work and may force you to dig the entire pool back up for inspection." }
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
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Get Your Pinellas Project Started Right</h2>
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
