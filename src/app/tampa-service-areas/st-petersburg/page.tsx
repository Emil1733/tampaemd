import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, MapPin, Waves, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Removal St. Petersburg, FL | Cost, Permits & Process",
  description: "Planning pool removal in St. Petersburg, FL? Learn about costs, permits, groundwater, access, full vs partial removal, and request a local estimate.",
  alternates: { canonical: "/tampa-service-areas/st-petersburg" },
};

export default function StPetersburg() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does pool removal cost in St. Petersburg?", "acceptedAnswer": { "@type": "Answer", "text": "Pool removal pricing varies with pool construction, access, demolition method, hauling, groundwater conditions, permitting and the final use of the yard. A site-specific contractor quote is the best way to establish the actual price." } },
      { "@type": "Question", "name": "Do I need a permit for pool removal in St. Petersburg?", "acceptedAnswer": { "@type": "Answer", "text": "Pool demolition generally requires local permitting. Requirements can vary by property and scope, so homeowners should confirm current requirements with the City of St. Petersburg or the authority having jurisdiction before work begins." } },
      { "@type": "Question", "name": "Does groundwater matter when removing a pool in St. Petersburg?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Groundwater can affect how a pool is drained, demolished, excavated and backfilled. The contractor should evaluate site conditions before deciding whether dewatering or another groundwater-control method is appropriate." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ name: "Service Areas", href: "/tampa-service-areas" }, { name: "St. Petersburg", href: "/tampa-service-areas/st-petersburg" }]} />

      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}><MapPin size={20} /><span>St. Petersburg & Pinellas County</span></div>
            <h1>Pool Removal in St. Petersburg, FL</h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", lineHeight: 1.8, marginBottom: "2rem" }}>Removing an unwanted swimming pool in St. Petersburg involves more than breaking concrete. Access, groundwater, hauling, local permitting and the way the excavation is backfilled can all affect the project. This guide explains the major decisions homeowners should understand before requesting a quote.</p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem" }}>Looking across Tampa Bay? Start with our <Link href="/" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}>Tampa pool removal overview</Link> for the main service, cost and planning information.</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}><Link href="#calculator" className="btn btn-primary">Get a Pool Removal Estimate</Link><Link href="/resources/pinellas-pool-permits" className="btn btn-outline">Pinellas Permit Guide</Link></div>
          </div>
          <div className="calculator-wrap" id="calculator"><Calculator /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "3rem" }}><h2>What Changes a St. Petersburg Pool Removal Project?</h2><p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>Two similar-looking pools can require very different scopes. These are the conditions worth identifying before comparing contractor estimates.</p></div>
          <div className="grid grid-cols-3 gap-8">
            {[["Pool Construction", "Concrete, fiberglass and vinyl pools are removed differently. The material affects demolition, loading and disposal."], ["Equipment Access", "Gate width, fences, landscaping, neighboring structures and alley access can determine what equipment can reach the backyard."], ["Groundwater", "Low-lying and coastal properties may require additional planning when groundwater is close to the excavation."], ["Full vs Partial Removal", "The amount of the shell removed affects hauling, backfill and what the former pool area may be suitable for later."], ["Backfill & Final Grade", "Fill material, placement, compaction and drainage should match the intended future use of the yard."], ["Permits & Inspections", "The applicable municipality determines the permit and inspection requirements for the specific property and scope."]].map(([title, text]) => (
              <div key={title} className="glass-card" style={{ padding: "2rem" }}><CheckCircle size={26} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h3 style={{ fontSize: "1.15rem" }}>{title}</h3><p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container grid grid-cols-2 gap-16 items-center">
          <div><Waves size={40} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h2>Groundwater and Coastal Site Conditions</h2><p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>St. Petersburg includes low-lying and waterfront neighborhoods where groundwater can become an important demolition consideration. An empty pool shell can be affected by hydrostatic pressure, and wet excavation conditions can complicate demolition and backfilling.</p><p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>The appropriate approach depends on the actual site. Read our <Link href="/resources/high-water-table-dewatering" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>high-water-table and dewatering guide</Link> for the questions to discuss with a contractor before the pool is drained or demolished.</p></div>
          <div className="glass-card" style={{ padding: "2.5rem" }}><h3>Ask Before Work Starts</h3><ul style={{ lineHeight: 2, paddingLeft: "1.25rem" }}><li>How will groundwater conditions be evaluated?</li><li>Where will pumped or drained water be discharged?</li><li>Can the planned equipment safely access the pool?</li><li>What material will be used for backfill?</li><li>What inspections or documentation are required?</li></ul></div>
        </div>
      </section>

      <section className="section">
        <div className="container"><div style={{ maxWidth: "900px", margin: "0 auto" }}><h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>Full Removal vs Partial Pool Removal</h2><div className="grid grid-cols-2 gap-8"><div className="glass-card" style={{ padding: "2.5rem" }}><h3>Full Removal</h3><p style={{ lineHeight: 1.8 }}>A full removal generally involves taking out substantially more of the pool structure and hauling the debris away before backfilling. It usually involves more demolition and disposal but may provide greater flexibility for future use of the area.</p></div><div className="glass-card" style={{ padding: "2.5rem" }}><h3>Partial Removal / Abandonment</h3><p style={{ lineHeight: 1.8 }}>A partial approach leaves some pool structure in place after required demolition or drainage work. Whether this method is permitted and appropriate depends on local rules, the property and the homeowner's future plans.</p></div></div><p style={{ textAlign: "center", marginTop: "2rem" }}>Compare the two approaches in our <Link href="/full-vs-partial-pool-removal" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>full vs partial pool removal guide</Link>.</p></div></div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-16 items-center"><div><h2>Backfill Matters After the Pool Is Gone</h2><p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>The demolition gets the attention, but the filled excavation is what remains on the property. Homeowners should understand what fill will be used, how it will be placed and compacted, how drainage will be handled and whether additional testing is appropriate for the intended future use.</p><Link href="/resources/soil-stabilization-backfill" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>Read the soil stabilization and backfill guide</Link></div><div className="glass-card" style={{ padding: "2.5rem" }}><h3>Future use changes the scope</h3><p style={{ lineHeight: 1.8 }}>A former pool area intended only for landscaping may have different requirements from an area that could later support hardscape, a driveway, an addition or another structure. Tell the contractor your future plans before the scope is finalized.</p></div></div>
      </section>

      <section className="section">
        <div className="container"><div style={{ maxWidth: "900px", margin: "0 auto" }}><h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>St. Petersburg Pool Removal FAQ</h2><div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{[["How much will my project cost?", "The final price depends on pool type and size, access, demolition method, hauling, groundwater, permitting, backfill and final grading. Use the estimator as a planning range, then compare site-specific quotes."], ["Does every St. Petersburg project need dewatering?", "No. Groundwater-control needs are site-specific. The contractor should evaluate conditions before deciding whether dewatering is necessary."], ["Can I build over the old pool area later?", "Potential future construction should be discussed before demolition. The removal method, fill specification, compaction and documentation can matter to later design and permitting."], ["Who should confirm permit requirements?", "Confirm current requirements with the City of St. Petersburg or other authority having jurisdiction for the property. A qualified contractor should also identify permits and inspections in the written scope."], ["What should I compare between quotes?", "Compare scope, amount of shell removed, disposal, groundwater plan, backfill material, compaction, grading, permit responsibility, exclusions and cleanup rather than comparing price alone."]].map(([q, a]) => (<div key={q} className="glass-card" style={{ padding: "2rem" }}><h3 style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem" }}><HelpCircle size={20} color="var(--primary)" />{q}</h3><p style={{ margin: 0, lineHeight: 1.8, color: "var(--text-muted)" }}>{a}</p></div>))}</div></div></div>
      </section>

      <section className="section bg-primary text-white" style={{ textAlign: "center" }}><div className="container"><h2 style={{ color: "white" }}>Planning Pool Removal in St. Petersburg?</h2><p style={{ maxWidth: "700px", margin: "1rem auto 2rem", opacity: 0.9 }}>Use the estimator to establish a planning range, then request a site-specific quote based on your pool, access and property conditions.</p><Link href="#calculator" className="btn btn-accent">Get My Estimate <ArrowRight size={18} /></Link><p style={{ marginTop: "1.5rem", fontSize: "0.9rem", opacity: 0.8 }}>Serving homeowners throughout St. Petersburg and the Tampa Bay area.</p></div></section>
    </>
  );
}
