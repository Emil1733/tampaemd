import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, Layers, Droplets, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Backfill & Soil Stabilization Tampa, FL | Guide",
  description: "Learn how pool backfill, compaction, drainage and future land use affect a Tampa pool removal project, plus what to ask contractors before filling the excavation.",
  alternates: { canonical: "/resources/soil-stabilization-backfill" },
};

export default function SoilStabilization() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why does pool backfill matter after removal?", "acceptedAnswer": { "@type": "Answer", "text": "The material placed in the former pool area becomes part of the property. Fill type, placement, moisture, compaction, drainage and intended future use can all affect long-term performance." } },
      { "@type": "Question", "name": "What is a Proctor compaction test?", "acceptedAnswer": { "@type": "Answer", "text": "A Proctor laboratory test establishes a reference relationship between soil moisture and dry density. When project specifications require field compaction testing, field results can be compared with that laboratory reference." } },
      { "@type": "Question", "name": "Can I build over a former pool area?", "acceptedAnswer": { "@type": "Answer", "text": "Future construction should be considered before the pool is removed. The appropriate demolition, fill, compaction, testing and foundation design depend on the proposed structure, site conditions and applicable building requirements." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ name: "Resources", href: "/resources" }, { name: "Soil & Backfill", href: "/resources/soil-stabilization-backfill" }]} />

      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}><Layers size={20} /><span>Tampa Pool Removal Resource</span></div>
            <h1>Pool Backfill & Soil Stabilization in Tampa</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "2rem", color: "var(--text-main)" }}>Once a swimming pool is demolished, the excavation still has to become usable ground. The backfill material, placement method, moisture conditions, drainage and intended future use of the area can matter as much as the demolition itself.</p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem" }}>If you are planning the complete project, start with our <Link href="/" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}>Tampa pool removal guide</Link>. This page focuses specifically on what happens after the pool shell is removed or prepared for backfilling.</p>
            <Link href="#calculator" className="btn btn-primary">Estimate My Pool Removal</Link>
          </div>
          <aside className="calculator-wrap" id="calculator" style={{ position: "sticky", top: "100px" }}><Calculator /></aside>
        </div>
      </section>

      <section className="section">
        <div className="container"><div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "3rem" }}><h2>What Makes Good Pool Backfill?</h2><p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>There is no single fill specification that is automatically correct for every Tampa property. The right approach depends on the soil, groundwater, removal method, local requirements and what you plan to do with the reclaimed area.</p></div>
          <div className="grid grid-cols-3 gap-8">{[["Suitable Fill Material", "Backfill should be appropriate for the project specification and should avoid uncontrolled debris or organic material that can create future voids."], ["Controlled Placement", "Placing a deep excavation all at once can make uniform compaction difficult. Contractors may place fill in controlled layers when the project specification calls for it."], ["Moisture Conditions", "Soil that is too wet or too dry can be difficult to compact effectively. Groundwater and recent weather can therefore affect the work."], ["Compaction", "Compaction requirements should match the intended use and any engineering, permit or construction specification for the site."], ["Drainage & Grade", "The finished area should be graded with site drainage in mind so water is not unintentionally directed toward structures or neighboring property."], ["Documentation", "If testing, engineering or inspection records are required or useful for future construction, keep copies with the property records."]].map(([title, text]) => (<div key={title} className="glass-card" style={{ padding: "2rem" }}><CheckCircle size={26} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h3 style={{ fontSize: "1.15rem" }}>{title}</h3><p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{text}</p></div>))}</div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container grid grid-cols-2 gap-16 items-center">
          <div><Layers size={42} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h2>Understanding Lift-by-Lift Compaction</h2><p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>On projects that require controlled compaction, fill is commonly placed in layers, often called lifts, rather than treating the entire excavation as one mass. Each layer can then be conditioned and compacted before additional material is placed.</p><p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>The appropriate lift thickness, equipment, moisture range and target density are project-specific. If a contractor quotes a precise compaction percentage, ask what specification requires it, how it will be measured and whether independent testing is included.</p></div>
          <div className="glass-card" style={{ padding: "2.5rem" }}><h3>Questions About Compaction</h3><ul style={{ lineHeight: 2, paddingLeft: "1.25rem" }}><li>What fill material is included in the quote?</li><li>Will the fill be placed in controlled layers?</li><li>How will wet conditions or groundwater be handled?</li><li>Is a compaction target specified?</li><li>Who performs any required testing?</li><li>Will I receive copies of test or inspection records?</li></ul></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-cols-2 gap-16 items-center">
          <div className="glass-card" style={{ padding: "2.5rem" }}><Droplets size={42} color="var(--primary)" style={{ marginBottom: "1rem" }} /><h3>Groundwater Can Change the Backfill Plan</h3><p style={{ lineHeight: 1.8 }}>Tampa Bay properties can experience seasonal or site-specific groundwater conditions. Water in the excavation can interfere with demolition, material placement and compaction. The contractor should evaluate actual conditions rather than assuming every site requires the same dewatering setup.</p><Link href="/resources/high-water-table-dewatering" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>Read the Tampa dewatering guide</Link></div>
          <div><h2>Backfill and Water Management Work Together</h2><p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>A successful fill operation needs stable working conditions. If groundwater is encountered, ask how it will be controlled, where water will be discharged, whether the proposed fill can be placed under those conditions, and whether the schedule should change after heavy rain.</p><p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>These decisions are particularly important when the reclaimed area may later support hardscape or construction.</p></div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container"><div style={{ textAlign: "center", marginBottom: "3rem" }}><h2>Future Use Should Determine the Backfill Scope</h2><p style={{ maxWidth: "800px", margin: "0 auto", color: "var(--text-muted)", lineHeight: 1.8 }}>Tell the contractor what you may do with the former pool area before demolition begins. A lawn and a future building are not the same end use.</p></div>
          <div className="grid grid-cols-3 gap-8">{[["Lawn & Landscaping", "The project still needs suitable fill and drainage, but the structural requirements may differ from an area intended to support a building."], ["Patio, Pavers or Hardscape", "Settlement can affect finished surfaces, so the base and compaction approach should be coordinated with the planned hardscape system."], ["Future Structure", "If you may build an addition, garage, ADU or other structure, involve the appropriate design and permitting professionals early. Additional investigation, engineered fill or foundation design may be needed."]].map(([title, text]) => (<div key={title} style={{ background: "white", padding: "2rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}><h3 style={{ fontSize: "1.15rem" }}>{title}</h3><p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{text}</p></div>))}</div>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>Also see <Link href="/blog/building-after-pool-removal" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>building after pool removal</Link> and our <Link href="/full-vs-partial-pool-removal" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "underline" }}>full vs partial removal comparison</Link>.</p>
        </div>
      </section>

      <section className="section">
        <div className="container"><div style={{ maxWidth: "900px", margin: "0 auto" }}><h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>Pool Backfill & Soil Stabilization FAQ</h2><div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>{[["What is a Proctor test?", "A laboratory Proctor test establishes a reference maximum dry density and optimum moisture relationship for a particular soil under a defined test method. A project specification may require field density to reach a stated percentage of that reference."], ["Does every pool removal need density testing?", "Not necessarily. Testing requirements depend on the scope, jurisdiction, engineering requirements and future use. Ask whether testing is required and whether it is included in the proposal."], ["Can demolition debris be left in the pool?", "That depends on the permitted removal method and local requirements. A partial-removal scope may differ from a full removal, so the contract should state exactly what material remains and what is hauled away."], ["How much settlement is normal?", "There is no responsible universal promise for every site. Settlement risk depends on existing soils, fill, moisture, placement, compaction and loading. Avoid contractors who guarantee a precise result without evaluating the property and scope."], ["Do I need an engineer if I want to build later?", "Future construction may require geotechnical, structural or other professional input depending on the project. Raise the future-building plan before pool removal so the demolition and fill work can be coordinated with later design."], ["What records should I keep?", "Keep the demolition contract, permit and inspection records, fill or material documentation, and any testing or engineering reports produced for the project."]].map(([q, a]) => (<div key={q} className="glass-card" style={{ padding: "2rem" }}><h3 style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem" }}><HelpCircle size={20} color="var(--primary)" />{q}</h3><p style={{ margin: 0, lineHeight: 1.8, color: "var(--text-muted)" }}>{a}</p></div>))}</div></div></div>
      </section>

      <section className="section bg-primary text-white" style={{ textAlign: "center" }}><div className="container"><h2 style={{ color: "white" }}>Planning a Tampa Pool Removal?</h2><p style={{ maxWidth: "720px", margin: "1rem auto 2rem", opacity: 0.9 }}>Use the estimator for a planning range, then compare site-specific quotes that clearly describe demolition, backfill, compaction, drainage and permit responsibility.</p><Link href="#calculator" className="btn btn-accent">Get My Estimate <ArrowRight size={18} /></Link></div></section>
    </>
  );
}
