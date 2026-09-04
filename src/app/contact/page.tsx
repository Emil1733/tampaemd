import React from "react";
import type { Metadata } from "next";
import { Clock, CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Request a Pool Removal Estimate | Tampa, FL",
  description: "Request a Tampa pool removal estimate. Share your pool type, access and project details so the scope can be reviewed before a site-specific quote is prepared.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Request a Tampa Pool Removal Estimate",
    url: "https://poolremovaltampa.com/contact",
    description: "Estimate request page for Tampa Bay pool removal projects."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}><Clock size={20} /><span>Tampa Bay Estimate Request</span></div>
            <h1>Request a Tampa Pool Removal Estimate</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>Share a few details about your pool and property so the project scope can be reviewed. Access, pool construction, demolition method, groundwater, permitting and backfill can all affect the final quote.</p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>The estimate form is the primary contact method until a verified local phone number is added.</p>
          </div>
          <div className="calculator-wrap"><Calculator /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "3rem" }}><h2>What Helps Produce a Better Quote?</h2><p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>The more accurate the project details, the easier it is to compare scopes and identify potential site constraints.</p></div>
          <div className="grid grid-cols-3 gap-8">{[["Pool Type", "Concrete, fiberglass or vinyl."], ["Approximate Size", "Length, width, depth or rough square footage."], ["Access", "Gate width, fences, side-yard clearance and driveway access."], ["Desired Outcome", "Full removal, partial removal or still deciding."], ["Future Use", "Lawn, patio, driveway, addition or another structure."], ["Site Conditions", "Known groundwater, drainage, utility or permitting concerns."]].map(([title, text]) => (<div key={title} className="glass-card" style={{ padding: "2rem" }}><CheckCircle2 size={24} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h3 style={{ fontSize: "1.1rem" }}>{title}</h3><p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{text}</p></div>))}</div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container grid grid-cols-2 gap-16 items-center">
          <div><h2>Before You Compare Contractors</h2><p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>Make sure each proposal clearly states what is demolished, what remains, what is hauled away, how the excavation is backfilled, who handles permits, and whether groundwater or access conditions can change the price.</p><Link href="/" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}>Review the Tampa pool removal guide</Link></div>
          <div className="glass-card" style={{ padding: "2.5rem" }}><h3>Useful Supporting Guides</h3><ul style={{ lineHeight: 2, paddingLeft: "1.25rem" }}><li><Link href="/pool-removal-cost-tampa">Tampa pool removal cost factors</Link></li><li><Link href="/full-vs-partial-pool-removal">Full vs partial removal</Link></li><li><Link href="/resources/high-water-table-dewatering">Groundwater and dewatering</Link></li><li><Link href="/resources/soil-stabilization-backfill">Backfill and compaction</Link></li><li><Link href="/resources/pinellas-pool-permits">Pinellas permit guide</Link></li></ul></div>
        </div>
      </section>

      <section className="section">
        <div className="container"><div style={{ maxWidth: "900px", margin: "0 auto" }}><h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>Estimate Request FAQ</h2><div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{[["Do I need exact measurements?", "No. Approximate dimensions are enough for an initial planning estimate. A final quote should be based on the actual property and scope."], ["Can I request an estimate if I am still deciding between full and partial removal?", "Yes. Indicate that you are comparing options so the scope can be discussed before pricing is finalized."], ["Will the calculator be the final price?", "No. The calculator is a planning tool. Actual pricing depends on the property, removal method, access, permits, groundwater, hauling and backfill."], ["Can I add a phone number later?", "Yes. Once a verified local or tracking number is available, it can be added consistently across the website and any business listings."]].map(([q, a]) => (<div key={q} className="glass-card" style={{ padding: "2rem" }}><h3 style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "1.1rem" }}><HelpCircle size={20} color="var(--primary)" />{q}</h3><p style={{ margin: 0, lineHeight: 1.8, color: "var(--text-muted)" }}>{a}</p></div>))}</div></div></div>
      </section>

      <section className="section bg-primary text-white" style={{ textAlign: "center" }}><div className="container"><h2 style={{ color: "white" }}>Ready to Estimate Your Project?</h2><p style={{ maxWidth: "720px", margin: "1rem auto 2rem", opacity: 0.9 }}>Use the estimator above and submit your project details for review.</p><Link href="/#calculator" className="btn btn-accent">Start My Estimate <ArrowRight size={18} /></Link></div></section>
    </>
  );
}
