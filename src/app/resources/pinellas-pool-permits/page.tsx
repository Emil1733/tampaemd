import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, Gavel, FileText, Waves, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pinellas County Pool Removal Permits | Homeowner Guide",
  description: "Planning a pool removal in Pinellas County? Learn what to verify about demolition permits, inspections, coastal conditions, utilities and permit closeout.",
  alternates: { canonical: "/resources/pinellas-pool-permits" },
};

export default function PinellasPermits() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do I need a permit to remove a pool in Pinellas County?", "acceptedAnswer": { "@type": "Answer", "text": "Pool demolition generally requires permitting, but the exact application, inspections and supporting documents depend on the municipality, property and scope. Confirm current requirements with the authority having jurisdiction before work begins." } },
      { "@type": "Question", "name": "Are permit requirements the same throughout Pinellas County?", "acceptedAnswer": { "@type": "Answer", "text": "No. Properties may fall under different municipal permitting authorities, so homeowners should verify requirements for the exact property rather than assuming one countywide checklist applies everywhere." } },
      { "@type": "Question", "name": "Why does permit closeout matter after pool removal?", "acceptedAnswer": { "@type": "Answer", "text": "Required final inspections and permit closeout create a record that the permitted work reached the required completion stage. Homeowners should keep the final permit documentation with their property records." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ name: "Resources", href: "/resources" }, { name: "Pinellas Permits", href: "/resources/pinellas-pool-permits" }]} />

      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}><Gavel size={20} /><span>Pinellas County Homeowner Resource</span></div>
            <h1>Pinellas County Pool Removal Permit Guide</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--text-main)" }}>Before removing or filling an existing swimming pool, homeowners should identify the permitting authority for the property and confirm the current demolition, utility, inspection and site-restoration requirements. St. Petersburg, Clearwater and other Pinellas municipalities can have different procedures.</p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem" }}>This page is a planning guide, not an official permit checklist. For the broader service, cost and demolition process, see our <Link href="/" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}>Tampa pool removal guide</Link>.</p>
            <Link href="#calculator" className="btn btn-primary">Estimate My Pool Removal</Link>
          </div>
          <aside className="calculator-wrap" id="calculator" style={{ position: "sticky", top: "100px" }}><Calculator /></aside>
        </div>
      </section>

      <section className="section">
        <div className="container"><div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "3rem" }}><h2>What to Verify Before Demolition</h2><p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>Requirements change by jurisdiction and project scope. Use these categories to organize your questions when speaking with the permitting office and contractor.</p></div>
          <div className="grid grid-cols-3 gap-8">{[["Permitting Authority", "Confirm whether the property is permitted through the city or another local authority and which application applies to pool demolition or abandonment."], ["Removal Method", "Full removal and partial removal can involve different demolition and restoration scopes. Confirm what the jurisdiction permits for your property."], ["Utilities", "Ask what documentation is required for electrical, gas, plumbing or other pool-related utility disconnections."], ["Pre-Fill Inspection", "Some scopes may require inspection before the excavation is covered. Confirm the required inspection sequence before backfill begins."], ["Backfill & Grading", "Ask whether the jurisdiction specifies fill, compaction, drainage, final grade or documentation requirements."], ["Final Closeout", "Determine which final inspection or completion record is required and keep the closed permit documentation with your property records."]].map(([title, text]) => (<div key={title} className="glass-card" style={{ padding: "2rem" }}><CheckCircle size={26} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h3 style={{ fontSize: "1.15rem" }}>{title}</h3><p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{text}</p></div>))}</div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container grid grid-cols-2 gap-16 items-center">
          <div><FileText size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h2>City Requirements Can Differ</h2><p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>Pinellas County contains multiple municipalities. A procedure that applies to one address should not automatically be treated as the rule for another. The safest workflow is to identify the exact permitting authority, describe the proposed scope, and obtain the current application and inspection requirements directly from that authority.</p><p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>For St. Petersburg-specific project considerations, see our <Link href="/tampa-service-areas/st-petersburg" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>St. Petersburg pool removal guide</Link>. We also maintain a <Link href="/tampa-service-areas/clearwater" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>Clearwater pool removal guide</Link>.</p></div>
          <div className="glass-card" style={{ padding: "2.5rem" }}><h3>Questions for the Permit Office</h3><ul style={{ lineHeight: 2, paddingLeft: "1.25rem" }}><li>Which permit application covers this scope?</li><li>Can partial abandonment be permitted?</li><li>Which inspections must happen before backfill?</li><li>Are utility disconnect records required?</li><li>Are there drainage or final-grade requirements?</li><li>What closes the permit after work is finished?</li></ul></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-cols-2 gap-16 items-center">
          <div className="glass-card" style={{ padding: "2.5rem" }}><Waves size={38} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h3>Coastal and Groundwater Conditions</h3><p style={{ lineHeight: 1.8 }}>Waterfront or low-lying properties may have additional site constraints. Groundwater can affect demolition and backfilling, while coastal or flood-related rules may affect certain properties. These conditions should be checked for the specific address rather than assumed from the neighborhood name alone.</p><Link href="/resources/high-water-table-dewatering" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>Read the high-water-table guide</Link></div>
          <div><h2>Permitting and Site Conditions Are Connected</h2><p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>The permit is only one part of a successful removal. The written scope should also explain how the pool will be demolished, what debris will leave the property, how groundwater will be handled if encountered, what backfill will be used, and how the final grade will drain.</p><p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>See our <Link href="/resources/soil-stabilization-backfill" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>backfill and soil stabilization guide</Link> before comparing contractor proposals.</p></div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container"><div style={{ maxWidth: "900px", margin: "0 auto" }}><h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>Pinellas Pool Removal Permit FAQ</h2><div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{[["How much does a pool demolition permit cost?", "Fees can change and may depend on jurisdiction and project scope. Check the current fee schedule for the permitting authority handling the property rather than relying on an old fixed-dollar estimate."], ["Can the contractor handle the permit?", "A contractor may handle permitting when allowed and included in the agreement. The proposal should clearly state who applies, who pays fees, who schedules inspections and who is responsible for final closeout."], ["Should work start before the permit is issued?", "If the project requires a permit, homeowners should wait until the required authorization is in place before demolition begins."], ["What documents should I keep?", "Keep the contract, permit, inspection records, invoices and final closeout documentation. If compaction or engineering documentation is produced for the project, retain that as well."], ["What if I plan to build on the area later?", "Tell the contractor and permitting authority before demolition. Future construction can affect the removal method, backfill specification and documentation you may want to preserve."]].map(([q, a]) => (<div key={q} className="glass-card" style={{ padding: "2rem" }}><h3 style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem" }}><HelpCircle size={20} color="var(--primary)" />{q}</h3><p style={{ margin: 0, lineHeight: 1.8, color: "var(--text-muted)" }}>{a}</p></div>))}</div></div></div>
      </section>

      <section className="section bg-primary text-white" style={{ textAlign: "center" }}><div className="container"><h2 style={{ color: "white" }}>Planning a Pool Removal in Pinellas County?</h2><p style={{ maxWidth: "720px", margin: "1rem auto 2rem", opacity: 0.9 }}>Use the estimator for an initial planning range, then confirm the exact permit requirements and request a site-specific contractor quote.</p><Link href="#calculator" className="btn btn-accent">Get My Estimate <ArrowRight size={18} /></Link></div></section>
    </>
  );
}
