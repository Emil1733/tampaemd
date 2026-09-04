import React from "react";
import Image from "next/image";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, Activity, Waves, HelpCircle, TrendingUp, Target } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool Removal Tampa, FL | Cost, Drainage & Permits",
  description: "Pool removal in Tampa requires proper drainage, permitting, and soil stabilization. Compare removal options, costs, and next steps for your property.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does pool removal cost in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pool removal cost in Tampa depends on pool size, construction type, access, disposal, groundwater conditions, and whether the project is a partial or full removal."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for pool removal in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pool demolition or abandonment may require permits and inspections depending on the property and jurisdiction. Homeowners should confirm current requirements with the applicable local building department before work begins."
        }
      },
      {
        "@type": "Question",
        "name": "Why does groundwater matter during pool removal in Tampa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High groundwater can affect excavation, drainage, backfill, and compaction. A contractor should evaluate site conditions before choosing the demolition and backfill approach."
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

      {/* HERO */}
      <section className="hero bg-surface">
        <div className="container grid grid-cols-2 items-center gap-12">
          <div className="animate-fade-in">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <ShieldCheck size={20} />
              <span>Tampa Bay Pool Removal Guide & Estimate Request</span>
            </div>

            <h1 style={{ fontSize: "3.5rem", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Pool Removal Tampa, FL
            </h1>

            <p style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "2rem", lineHeight: 1.8 }}>
              Compare pool demolition options, understand Tampa-area permit and drainage issues, and request an estimate for your property.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <a href="#calculator" className="btn btn-primary" style={{ padding: "1rem 2.5rem" }}>
                Get Instant Estimate
              </a>
              <Link href="/contact" className="btn btn-outline" style={{ padding: "1rem 2.5rem" }}>
                Request a Quote
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ background: "rgba(0,180,216,0.1)", padding: "0.5rem", borderRadius: "8px" }}>
                  <Target size={20} color="var(--primary)" />
                </div>
                <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Full & Partial Removal Options</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ background: "rgba(0,180,216,0.1)", padding: "0.5rem", borderRadius: "8px" }}>
                  <Waves size={20} color="var(--primary)" />
                </div>
                <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Groundwater & Drainage Considerations</span>
              </div>
            </div>
          </div>

          <div id="calculator" className="animate-fade-in delay-200 calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* TRUST / DECISION BAR */}
      <div className="trust-bar" style={{ background: "var(--primary-dark)", padding: "2rem 0" }}>
        <div className="container trust-bar-items" style={{ justifyContent: "space-around" }}>
          <div className="trust-item" style={{ color: "white" }}><CheckCircle size={18} color="var(--accent)" /> Tampa-Area Cost Guidance</div>
          <div className="trust-item" style={{ color: "white" }}><CheckCircle size={18} color="var(--accent)" /> Permit Resources</div>
          <div className="trust-item" style={{ color: "white" }}><CheckCircle size={18} color="var(--accent)" /> Full vs Partial Comparison</div>
        </div>
      </div>

      {/* CORE TAMPA ISSUE */}
      <section className="section reveal">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-16">
            <div>
              <div className="icon-box"><Activity size={32} /></div>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
                Why Pool Removal in Tampa Requires More Than Demolition
              </h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Tampa Bay properties can have high groundwater, tight backyard access, drainage constraints, and jurisdiction-specific permit requirements. Those conditions affect how a pool should be drained, broken up, removed, backfilled, and compacted.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Before hiring a contractor, understand the difference between <Link href="/full-vs-partial-pool-removal" style={{ color: "var(--primary)", fontWeight: 700 }}>full and partial pool removal</Link>, review the <Link href="/pool-demolition-process" style={{ color: "var(--primary)", fontWeight: 700 }}>pool demolition process</Link>, and check the permit rules that apply to your address.
              </p>
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--secondary)" }}>
                <h4 style={{ marginBottom: "0.5rem" }}>Groundwater matters</h4>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  An empty pool shell can be affected by hydrostatic pressure when groundwater is high. Site conditions should be evaluated before demolition so drainage and backfill decisions match the property.
                </p>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <Image
                src="/excavator_pool_demolition.png"
                alt="Excavator performing pool demolition and backfill work in Tampa, Florida"
                width={1000}
                height={667}
                style={{ borderRadius: "var(--radius-lg)", position: "relative", zIndex: 1, boxShadow: "var(--shadow-lg)", maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* COST / CHOICE */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div style={{ maxWidth: "950px", margin: "0 auto", textAlign: "center", marginBottom: "3rem" }}>
            <TrendingUp size={36} color="var(--primary)" className="icon-center" />
            <h2 style={{ fontSize: "2.5rem", marginTop: "1rem" }}>What Drives Pool Removal Cost in Tampa?</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
              Cost is mainly driven by the removal method, pool size and material, equipment access, hauling and disposal, groundwater conditions, fill requirements, and local permit or inspection requirements.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>Partial Removal</h3>
              <p style={{ lineHeight: 1.7 }}>Usually involves breaking portions of the shell, creating drainage openings where required, and backfilling the remaining cavity. It can cost less, but future construction options may be more limited.</p>
            </div>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>Full Removal</h3>
              <p style={{ lineHeight: 1.7 }}>Removes the pool shell and associated material before backfill. This is typically more expensive but may be preferable when future construction or full site restoration is planned.</p>
            </div>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>Tampa Site Conditions</h3>
              <p style={{ lineHeight: 1.7 }}>Tight access, groundwater, drainage, demolition debris, and hauling distance can materially change a quote even when two pools are similar in size.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/pool-removal-cost-tampa" className="btn btn-primary">See Tampa Pool Removal Cost Factors</Link>
          </div>
        </div>
      </section>

      {/* STRONG SUPPORTING CONTENT */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>Tampa Pool Removal Resources</h2>
            <p>Use these guides to understand the technical and local issues before requesting quotes.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>High Water Table & Dewatering</h3>
              <p>Learn why groundwater can affect demolition, drainage, excavation, and compaction across Tampa Bay.</p>
              <Link href="/resources/high-water-table-dewatering" style={{ color: "var(--primary)", fontWeight: 700 }}>Read the dewatering guide</Link>
            </div>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>Soil Stabilization & Backfill</h3>
              <p>Understand why fill material, lift thickness, moisture, and compaction matter after the shell is removed or abandoned.</p>
              <Link href="/resources/soil-stabilization-backfill" style={{ color: "var(--primary)", fontWeight: 700 }}>Read the backfill guide</Link>
            </div>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3>Tampa Permit Guide</h3>
              <p>Review the permit questions homeowners should resolve before starting a pool demolition project in the Tampa area.</p>
              <Link href="/blog/do-you-need-a-permit-in-tampa" style={{ color: "var(--primary)", fontWeight: 700 }}>Read the permit guide</Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL AREAS */}
      <section className="section bg-surface reveal">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>Pool Removal Across Tampa Bay</h2>
            <p>Local conditions vary by neighborhood, county, access, drainage, and soil.</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[
              { n: "South Tampa", href: "/tampa-service-areas/south-tampa", d: "Tight access, older pools, and urban lot constraints." },
              { n: "Brandon", href: "/tampa-service-areas/brandon", d: "Suburban access, drainage, and backyard restoration." },
              { n: "Riverview", href: "/tampa-service-areas/riverview", d: "Groundwater and drainage considerations near the Alafia River corridor." },
              { n: "St. Petersburg", href: "/tampa-service-areas/st-petersburg", d: "Pinellas permitting and coastal groundwater considerations." },
              { n: "Clearwater", href: "/tampa-service-areas/clearwater", d: "Coastal conditions, access, and Pinellas County requirements." },
              { n: "Carrollwood", href: "/tampa-service-areas/carrollwood", d: "Established neighborhoods, tree protection, and access planning." },
              { n: "Wesley Chapel", href: "/tampa-service-areas/wesley-chapel", d: "Pasco-area permitting and newer residential development." },
              { n: "Tampa Bay", href: "/tampa-service-areas", d: "See the full Tampa Bay service-area guide." }
            ].map((loc) => (
              <Link key={loc.n} href={loc.href} style={{ background: "white", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border)", color: "inherit" }}>
                <h4 style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>{loc.n}</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>{loc.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-surface-alt reveal">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem" }}>Typical Pool Removal Process</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>The exact sequence depends on the property, jurisdiction, and removal method.</p>
          </div>
          <div className="grid grid-cols-3 gap-12">
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
              <div style={{ background: "var(--primary)", color: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "1rem" }}>1</div>
              <h4>Site Review & Permits</h4>
              <p>Confirm access, utilities, pool construction, groundwater concerns, local permit requirements, and the intended use of the reclaimed area.</p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
              <div style={{ background: "var(--primary)", color: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "1rem" }}>2</div>
              <h4>Drain & Demolish</h4>
              <p>Drain the pool using an appropriate method, disconnect or cap utilities as required, and perform the selected partial or full demolition.</p>
            </div>
            <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
              <div style={{ background: "var(--primary)", color: "white", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "1rem" }}>3</div>
              <h4>Backfill & Restore</h4>
              <p>Place suitable fill, compact it appropriately for the planned future use, complete required inspections, and restore the final grade.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/pool-demolition-process" className="btn btn-outline">See the Full Pool Demolition Process</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "3rem", display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
              <HelpCircle size={40} color="var(--primary)" />
              Tampa Pool Removal FAQ
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-x-12 gap-y-12">
            {[
              { q: "How much does pool removal cost in Tampa?", a: "Cost varies by pool size, material, access, disposal, groundwater conditions, fill needs, and whether the project is a partial or full removal. Use the calculator above for a planning estimate, then confirm with a site-specific quote." },
              { q: "Is a permit required?", a: "Permit requirements depend on the local jurisdiction and scope of work. Confirm current requirements with the applicable building department before demolition begins." },
              { q: "What is the difference between partial and full removal?", a: "Partial removal leaves portions of the pool structure in place after approved demolition and drainage work. Full removal removes the shell and associated material before backfill." },
              { q: "Does high groundwater matter?", a: "Yes. Groundwater can affect excavation, drainage, shell stability, and backfill conditions, so Tampa-area sites should be evaluated before work begins." },
              { q: "Can I build where the pool used to be?", a: "Possibly, but future construction depends on the removal method, soil conditions, compaction, engineering requirements, and local building rules. Tell the contractor your future plans before demolition." },
              { q: "How long does pool removal take?", a: "The work itself can often be completed in several days, but access, weather, inspections, permitting, hauling, and site conditions can extend the overall project timeline." },
              { q: "What happens to pool equipment?", a: "Pumps, filters, heaters, electrical connections, gas lines, and other equipment need to be removed or properly disconnected as part of the project scope." },
              { q: "What should I ask a contractor?", a: "Ask which removal method is proposed, what permits are required, how groundwater and drainage will be handled, what fill will be used, how compaction will be verified, what is included in disposal, and what documentation you receive at completion." },
              { q: "Will removing a pool increase home value?", a: "It depends on the property and buyer. Pool removal can reduce maintenance and reclaim yard space, but there is no universal guaranteed increase in property value." }
            ].map((faq) => (
              <div key={faq.q} className="faq-item">
                <h4 style={{ color: "var(--primary)", fontSize: "1.05rem", marginBottom: "0.75rem" }}>{faq.q}</h4>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-muted)", margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <TrendingUp size={64} className="icon-center" style={{ marginBottom: "2.5rem", opacity: 0.9 }} />
          <h2 style={{ fontSize: "3.5rem", color: "white", marginBottom: "1.5rem" }}>Planning a Pool Removal in Tampa?</h2>
          <p style={{ fontSize: "1.3rem", maxWidth: "800px", margin: "0 auto 3rem", opacity: 0.9, lineHeight: 1.8 }}>
            Start with a planning estimate, compare full and partial removal, and request a site-specific quote for your property.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/#calculator" className="btn btn-secondary" style={{ padding: "1.25rem 3rem", fontSize: "1.1rem" }}>Get Instant Estimate</Link>
            <Link href="/contact" className="btn" style={{ border: "2px solid white", color: "white", padding: "1.25rem 3rem", fontSize: "1.1rem" }}>Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
