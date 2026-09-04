import React from "react";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { AlertTriangle, Waves, CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pool Dewatering Tampa, FL | High Water Table Guide",
  description: "Learn how Tampa's high water table can affect pool removal, when dewatering may be needed, common methods, and questions to ask before demolition.",
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
        "name": "Why can groundwater matter during pool removal in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a pool is drained, groundwater around the shell can create upward pressure. Site conditions should be evaluated before demolition so the contractor can choose an appropriate drainage or dewatering approach."
        }
      },
      {
        "@type": "Question",
        "name": "Does every Tampa pool removal need a well-point dewatering system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The appropriate method depends on groundwater, soil, pool depth, weather, access and the demolition plan. Some sites may need active dewatering while others may use simpler groundwater-control methods."
        }
      },
      {
        "@type": "Question",
        "name": "Can I drain an inground pool myself before demolition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is safer to have site conditions evaluated first. Draining an inground pool without considering groundwater can create avoidable risks, particularly after heavy rain or in low-lying areas."
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
        { name: "Resources", href: "/resources" },
        { name: "Dewatering", href: "/resources/high-water-table-dewatering" }
      ]} />

      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-start">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <Waves size={20} />
              <span>Tampa Pool Removal Resource</span>
            </div>
            <h1>Pool Dewatering & High Water Tables in Tampa</h1>
            <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--text-muted)" }}>
              Groundwater is one of the site conditions that can change how an inground pool is safely removed in the Tampa Bay area. Before a shell is drained or demolished, the contractor should consider recent rainfall, soil conditions, pool depth and the groundwater level around the excavation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              If you are planning a project, start with our <Link href="/" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "underline" }}>Tampa pool removal overview</Link> for costs, removal options and the quote process.
            </p>

            <div style={{ background: "rgba(0,180,216,0.05)", padding: "2rem", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--primary)" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <AlertTriangle size={22} color="var(--primary)" /> Why an Empty Pool Can Be Different
              </h3>
              <p style={{ margin: 0, lineHeight: 1.7 }}>
                Water inside a pool adds substantial weight. After the pool is drained, groundwater outside the shell can create upward hydrostatic pressure. The actual risk varies from property to property, which is why groundwater conditions should be evaluated rather than assumed.
              </p>
            </div>
          </div>

          <aside className="calculator-wrap" style={{ position: "sticky", top: "100px" }}>
            <Calculator />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "950px", margin: "0 auto" }}>
            <img
              src="/images/tampa-pool-dewatering-system.png"
              alt="Dewatering equipment used around an inground pool excavation"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-lg)", marginBottom: "3rem" }}
            />

            <h2>Why Tampa Pool Removal Can Involve Groundwater Management</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.9 }}>
              Tampa Bay has many low-lying properties, sandy soils and seasonal rainfall patterns. Those conditions do not mean every pool has the same groundwater problem, but they do make site-specific evaluation important. A contractor may inspect visible water, surrounding grade, drainage, soil behavior and the depth of the pool before deciding how to proceed.
            </p>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.9 }}>
              Groundwater is especially relevant during the period between draining the pool and stabilizing the excavation. The goal is to keep the work area stable enough for demolition, material removal and proper backfilling.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2>Common Dewatering Approaches</h2>
            <p style={{ maxWidth: "760px", margin: "0 auto", color: "var(--text-muted)" }}>
              The right method depends on the property. These are common approaches a qualified contractor may consider, not a prescription for every Tampa pool.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>Well-Point Dewatering</h3>
              <p>Multiple small well points can be installed around an excavation and connected to a pump. This approach may be used where groundwater needs to be lowered around a larger or deeper work area.</p>
            </div>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>Sump Pumping</h3>
              <p>Water can sometimes be collected at a low point and pumped away from the active excavation. Whether this is appropriate depends on soil stability, water inflow and the approved discharge location.</p>
            </div>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>Hydrostatic Relief</h3>
              <p>Existing relief devices or controlled openings may be part of a contractor's plan for managing pressure around a pool shell. The method should be selected based on the pool and site conditions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-start">
            <div>
              <h2>What Determines Whether Dewatering Is Needed?</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Groundwater observed around or beneath the pool",
                  "Recent heavy rainfall and seasonal conditions",
                  "Pool depth and type of shell",
                  "Native soil and how quickly water moves through it",
                  "Property elevation and nearby drainage features",
                  "Full removal versus partial demolition plan",
                  "Equipment access and excavation sequence"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <h3>Planning a Pool Removal?</h3>
              <p style={{ lineHeight: 1.8 }}>
                Dewatering is only one part of the project. You should also compare full versus partial removal, permit requirements, access, hauling and the backfill plan.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                See our <Link href="/full-vs-partial-pool-removal" style={{ color: "var(--primary)", fontWeight: 600 }}>full vs. partial pool removal guide</Link> and <Link href="/resources/soil-stabilization-backfill" style={{ color: "var(--primary)", fontWeight: 600 }}>backfill and soil stabilization guide</Link> before requesting estimates.
              </p>
              <Link href="/" className="btn btn-primary" style={{ marginTop: "1rem" }}>Tampa Pool Removal Options</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2>Water Discharge and Site Protection</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.9 }}>
              Pumped water has to go somewhere, and the acceptable discharge method can depend on the jurisdiction, water quality and site. Contractors should plan for sediment control and follow applicable local requirements rather than simply sending cloudy excavation water into a street or storm drain.
            </p>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.9 }}>
              Ask the contractor where water will be discharged, how sediment will be controlled and whether the project requires any additional approvals. For permitting questions, read our <Link href="/blog/do-you-need-a-permit-in-tampa" style={{ color: "var(--primary)", fontWeight: 600 }}>Tampa pool removal permit guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "950px", margin: "0 auto" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <HelpCircle size={30} color="var(--primary)" /> Pool Dewatering FAQ
            </h2>

            <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
              <div className="glass-card" style={{ padding: "2rem" }}>
                <h3>Does every pool removal in Tampa require dewatering?</h3>
                <p>No. Groundwater conditions vary significantly by property and season. The contractor should evaluate the site and choose the method appropriate for the actual conditions.</p>
              </div>
              <div className="glass-card" style={{ padding: "2rem" }}>
                <h3>Can an inground pool move after it is drained?</h3>
                <p>Hydrostatic pressure can create upward force on an empty pool shell when surrounding groundwater is high. That is one reason draining and demolition should be planned together.</p>
              </div>
              <div className="glass-card" style={{ padding: "2rem" }}>
                <h3>How much does dewatering add to pool removal cost?</h3>
                <p>There is no reliable flat surcharge because the equipment, duration and water volume vary by site. Use the estimator above for an initial planning range, then obtain a site-specific contractor quote.</p>
              </div>
              <div className="glass-card" style={{ padding: "2rem" }}>
                <h3>What should I ask a contractor about groundwater?</h3>
                <p>Ask how groundwater will be evaluated, what happens if water enters the excavation, where pumped water will go and how the backfill will be placed and compacted afterward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary" style={{ color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ color: "white" }}>Get a Tampa Pool Removal Estimate</h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2rem" }}>
            Compare your pool type, access and site conditions, then request a site-specific quote for the actual project.
          </p>
          <Link href="/#calculator" className="btn" style={{ background: "white", color: "var(--primary)" }}>Estimate My Pool Removal</Link>
        </div>
      </section>
    </>
  );
}
