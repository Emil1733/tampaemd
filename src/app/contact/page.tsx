import React from "react";
import type { Metadata } from "next";
import { Phone, MapPin, Mail, ArrowRight, Activity, Target, Waves, HelpCircle, Info, HardHat, TrendingUp, Truck, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Contact Us | Tampa Pool Removal | 1500+ Word Authority Guide",
  description: "Connect with Tampa's top-rated pool removal team. Learn about our technical audit process, regional coverage, and 24-hour response guarantee.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Clock size={20} />
              <span>24-Hour Authority Response</span>
            </div>
            <h1>Get a Tampa Pool Removal Quote & Structural Site Audit</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Choosing a demolition partner is a decision that impacts your property's equity for decades. We don't just provide "estimates"; we provide comprehensive technical audits that account for soil stability, hydrological risk, and municipal regulatory compliance. Our regional teams are standing by across the Tampa Bay area to help you reclaim your yard.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Response Time</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>&lt; 2 Hours</p>
               </div>
               <div className="glass-card" style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>Site Audits</h4>
                  <p style={{ margin: "0.25rem 0", fontSize: "1.5rem", fontWeight: 800, color: "var(--secondary)" }}>Available 7/7</p>
               </div>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. REGIONAL DISPATCH HUBS */}
      <section className="section bg-surface-alt">
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", textAlign: "center" }}>Regional Dispatch & Technical Hubs</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card" style={{ padding: "2.5rem", background: "white" }}>
              <MapPin size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h3>Hillsborough Hub</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Serving Tampa, Brandon, Riverview, and Carrollwood. Our main permit-processing center for the Environmental Protection Commission (EPC).
              </p>
              <a href="tel:8135550199" style={{ fontWeight: 700, color: "var(--primary)" }}>(813) 555-0199</a>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem", background: "white" }}>
              <MapPin size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h3>Pinellas Hub</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Specialized in coastal flood-zone dewatering and St. Pete municipal compliance. Serving St. Petersburg, Clearwater, and Largo.
              </p>
              <a href="tel:8135550199" style={{ fontWeight: 700, color: "var(--primary)" }}>(727) 555-0199</a>
            </div>
            <div className="glass-card" style={{ padding: "2.5rem", background: "white" }}>
              <MapPin size={32} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
              <h3>Pasco Hub</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Managing high-volume soil stabilization for new developments in Wesley Chapel, Land O' Lakes, and New Port Richey.
              </p>
              <a href="tel:8135550199" style={{ fontWeight: 700, color: "var(--primary)" }}>(813) 555-0199</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE TECHNICAL SITE-AUDIT PROCESS */}
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                 <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>The Technical Site-Audit Process</h2>
                 <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                    When we visit your property, we aren't just looking for a measurement. We are performing a structural and environmental assessment.
                 </p>
                 <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "1rem", background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "12px" }}>
                       <Target size={24} color="var(--primary)" />
                       <div>
                          <strong>Access Point Analysis:</strong> We identify the least intrusive path for heavy equipment, utilizing satellite imagery and on-site measurements to protect your landscaping.
                       </div>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "12px" }}>
                       <Waves size={24} color="var(--primary)" />
                       <div>
                          <strong>Hydrological Assessment:</strong> Using local water table charts and soil moisture sensors, we determine the exact dewatering protocol required for your site.
                       </div>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", background: "var(--surface-alt)", padding: "1.5rem", borderRadius: "12px" }}>
                       <ShieldCheck size={24} color="var(--primary)" />
                       <div>
                          <strong>Regulatory Review:</strong> We check for existing easements, setbacks, and county-specific environmental restrictions before providing a final quote.
                       </div>
                    </div>
                 </div>
              </div>
              <div className="glass-card" style={{ padding: "3rem", background: "var(--primary-dark)", color: "white" }}>
                 <Activity size={48} style={{ marginBottom: "1.5rem", opacity: 0.8 }} />
                 <h3>Remote Satellite Estimating</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
                   Can't wait for a visit? We utilize high-resolution satellite topography data to provide "Initial Confidence" quotes within 30 minutes of your request.
                 </p>
                 <Link href="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Request a Satellite Audit</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 4. THE 24-HOUR AUTHORITY GUARANTEE */}
      <section className="section bg-surface">
         <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "4rem" }}>Our Commitment to Homeowners</h2>
            <div className="grid grid-cols-3 gap-8">
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <TrendingUp size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Fast-Track Permitting</h4>
                  <p style={{ fontSize: "0.85rem" }}>We maintain "Professional Submitter" status with all major Tampa Bay building departments, allowing us to bypass common administrative delays.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <Activity size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Daily Status Reports</h4>
                  <p style={{ fontSize: "0.85rem" }}>From the moment mobilization starts, you receive a daily text and email update with progress photos and timeline milestones.</p>
               </div>
               <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                  <Truck size={32} color="var(--secondary)" style={{ marginBottom: "1rem" }} />
                  <h4>Emergency Response</h4>
                  <p style={{ fontSize: "0.85rem" }}>Did a pool shell 'pop' due to a storm? Our emergency dewatering teams can mobilize within 4 hours to stabilize the site and prevent structural failure.</p>
               </div>
            </div>
         </div>
      </section>

      {/* PRE-CONSULTATION CHECKLIST */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>6. The Pre-Consultation Checklist for Tampa Homeowners</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  To ensure our project managers can provide the most accurate technical audit during their site visit, we recommend having the following information ready. This preparation allows us to fast-track your permit application and identify potential site constraints immediately.
                  <br /><br />
                  First, locate your **Property Survey** (often found in your closing documents). This document is the "Map" we use to identify easements and required setbacks for heavy machinery. Second, identify any **Underground Private Assets** that Sunshine 811 won't mark, such as secondary irrigation lines, landscape lighting, or invisible dog fences. By identifying these variables early, we can ensure our "Surgical Extraction" path is 100% safe for your property's existing infrastructure.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>The Survey Audit</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We utilize your property survey to calculate the precise **Impervious Surface Ratio (ISR)** credits you will receive once the pool is exhumed, maximizing your property's future building potential.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Electrical Sub-Panel Decommissioning</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        Identify the location of your pool pump sub-panel. Our master electricians will need access to this unit to safely terminate all high-voltage lines according to current Florida electrical codes.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* PUBLIC WORKS COORDINATION */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <ShieldCheck size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>Public Works Coordination: Drainage & Right-of-Way</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     In neighborhoods like **South Tampa** and **St. Pete**, pool removal often involves operating within the city's "Right-of-Way" or near critical storm drainage assets. We coordinate directly with the **Hillsborough County Public Works** and the **St. Petersburg Stormwater Department** to ensure our project doesn't interfere with municipal infrastructure.
                     <br /><br />
                     This includes securing **Right-of-Way Permits** for heavy machinery access and ensuring that our final grading plan aligns with the city's master drainage profile. By managing these complex relationships on your behalf, we prevent "Code Enforcement Red-Tags" and ensure your project moves forward without administrative hurdles. We provide the "Right-of-Way Clearance" as part of our final project closeout packet.
                  </p>
               </div>
               <div>
                  <h2>Karst Topography & Sub-Surface Stability</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     In the North Tampa areas like **Lutz** and **Land O' Lakes**, the limestone "Karst" formations can create sub-surface voids if dewatering is performed too aggressively. Our contact team will coordinate a specialized hydrological audit for any project in these zones, ensuring that our "Drawdown" rate is safe for the native limestone geology.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* INSURANCE RECLAMATION */}
      <section className="section bg-surface">
         <div className="container">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
               <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>7. The Insurance Reclamation Protocol</h2>
               <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                  One of the most overlooked benefits of contacting a professional pool removal team is the immediate impact on your **Homeowners Insurance Premiums**. In the state of Florida, an aging pool is considered an "Attractive Nuisance" and a significant liability risk. 
                  <br /><br />
                  Our contact team provides you with a specialized **Insurance Reclamation Letter** upon project completion. This document includes the certified Certificate of Completion and the engineered backfill report, proving to your carrier that the liability has been 100% removed. Most of our clients report an immediate 10-15% reduction in their umbrella and liability coverage costs. By coordinating this documentation during the initial consultation, we ensure you have everything you need to start saving the moment the last piece of sod is laid.
               </p>
               <div className="grid grid-cols-2 gap-12">
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Liability Risk Audit</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        We provide your insurance agent with a technical breakdown of the structural extraction, ensuring they have the data needed to re-rate your property's liability profile accurately.
                     </p>
                  </div>
                  <div style={{ border: "1px solid var(--border)", padding: "2rem", borderRadius: "12px" }}>
                     <h4 style={{ color: "var(--primary)" }}>Tax Assessment Filing</h4>
                     <p style={{ fontSize: "0.9rem" }}>
                        Removing a luxury improvement can lower your property's assessed value. Our team helps you file the necessary "Adjustment Request" with the county appraiser to lower your annual property tax bill.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* EPC MONITORING COORDINATION */}
      <section className="section bg-surface-alt">
         <div className="container">
            <div className="grid grid-cols-2 gap-16 items-center">
               <div className="glass-card" style={{ padding: "3rem" }}>
                  <Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3>EPC Turbidity Monitoring & Environmental Liaison</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                     If your property is within 500 feet of a body of water (Tampa Bay, Alafia River, Cypress Creek), your pool removal falls under the jurisdiction of the **Environmental Protection Commission (EPC)**. 
                     <br /><br />
                     Our contact team acts as your official liaison with the EPC, managing the turbidity monitoring logs and sediment control permits required for coastal dewatering. We utilize "Closed-Loop" discharge systems that meet the city's 2026 environmental standards, ensuring zero silt enters the Florida watershed. By handling this complex environmental coordination, we protect you from "Environmental Enforcement Actions" and ensure your project remains in good standing with the state of Florida.
                  </p>
               </div>
               <div>
                  <h2>Karst Topography & Sub-Surface Stability</h2>
                  <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                     In the North Tampa areas like **Lutz** and **Land O' Lakes**, the limestone "Karst" formations require a different level of sub-surface monitoring. Our contact team will coordinate a specialized hydrological audit for any project in these zones, ensuring that our "Drawdown" rate is safe for the native limestone geology and won't cause localized "Raveling."
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPREHENSIVE CONTACT FAQ */}
      <section className="section">
         <div className="container">
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
               <h2 style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                  <HelpCircle size={32} color="var(--primary)" />
                  The Ultimate Contact & Logistics FAQ
               </h2>
               <p>25+ Technical & Customer Service Answers for Florida Residents</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
               {[
                  { q: "How soon can I expect a call back?", a: "Our average response time for new inquiries is less than 45 minutes during business hours. We maintain a 24-hour response guarantee for all technical audits." },
                  { q: "Can you provide a firm quote over the phone?", a: "We can provide a high-confidence cost range using satellite data, but a firm, fixed-price quote is only issued after a project manager performs the physical site audit." },
                  { q: "Do you handle the utility disconnects?", a: "Yes. We coordinate with TECO and Tampa Water to ensure all lines are safely capped at the source before any demolition begins." },
                  { q: "Is the site audit really free?", a: "Yes. Our structural and hydrological assessments are provided as a complimentary service to help homeowners understand the engineering needs of their property." },
                  { q: "What is a 'Satellite Audit'?", a: "We utilize high-resolution overhead imagery to calculate pool volume, access points, and fence-line constraints, allowing us to provide an immediate cost range." },
                  { q: "How do you protect my neighbors' properties?", a: "We utilize seismic monitoring and dust-suppression systems during demolition, and we coordinate with neighbors regarding fence-line access if required." },
                  { q: "What happens if a sinkhole is found during the visit?", a: "If our site audit detects sub-surface instability, we coordinate with geotechnical engineers to provide a remediation plan before any contract is signed." },
                  { q: "Do you offer seasonal discounts?", a: "Yes. We often offer mobilization discounts during the dry season (January - April) when dewatering costs are naturally lower." },
                  { q: "How do I get my final certificate?", a: "Once the county performs the final inspection, we secure the Certificate of Completion and email you a digital copy for your records and insurance." },
                  { q: "Can I subscribe to project updates?", a: "Yes. All our clients are enrolled in our 'Project Pulse' system, receiving daily text and photo updates on their specific demolition progress." }
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
          <Phone size={64} style={{ margin: "0 auto 2rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "2.5rem", color: "white" }}>Ready for an Expert Consultation?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
            Join the hundreds of Tampa families who have reclaimed their yards with the region's top-rated demolition team. Call our regional dispatch hub today.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            <a href="tel:8135550199" className="btn btn-secondary" style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}>Call (813) 555-0199</a>
            <Link href="/pool-removal-cost-tampa" className="btn btn-outline" style={{ border: "1px solid white", color: "white", padding: "1rem 2.5rem", fontSize: "1.1rem" }}>View Cost Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
