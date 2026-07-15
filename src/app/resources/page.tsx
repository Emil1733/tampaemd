import React from "react";
import { Metadata } from "next";
import { HardHat, FileText, ClipboardCheck, Waves, Microscope, ChevronRight, HelpCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tampa Pool Demolition Permits & Engineering Resources | Tampa EMD",
  description: "Access our collection of county-specific permitting guides, hydrological dewatering guidelines, and soil stabilization engineering manuals for Tampa Bay.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesIndex() {
  const resourceGuides = [
    {
      title: "Hillsborough County Permitting Guide",
      href: "/resources/hillsborough-pool-permits",
      icon: <FileText size={32} className="text-primary" />,
      description: "Detailed regulatory breakdown of building permit classification 010, certified site plans, utility disconnections, and inspector verification cycles in Tampa and unincorporated areas.",
      category: "Permitting Regulations"
    },
    {
      title: "Pinellas County Permitting Guide",
      href: "/resources/pinellas-pool-permits",
      icon: <ClipboardCheck size={32} className="text-primary" />,
      description: "Complete compliance roadmap under Pinellas Chapter 158. Detailed parameters for municipal filings, seawall buffer restrictions, and local utility clearance mandates.",
      category: "Permitting Regulations"
    },
    {
      title: "Pasco County Permitting Guide",
      href: "/resources/pasco-pool-permits",
      icon: <HardHat size={32} className="text-primary" />,
      description: "Step-by-step regulatory pathways for Wesley Chapel, Lutz, and Land O' Lakes. Covers SWFWMD drainage limits, geotechnical reports, and soil compaction inspection protocols.",
      category: "Permitting Regulations"
    },
    {
      title: "High Water Table & Dewatering Engineering",
      href: "/resources/high-water-table-dewatering",
      icon: <Waves size={32} className="text-primary" />,
      description: "The physics of groundwater table float hazards in the Florida peninsula. Detailed breakdown of multi-point vacuum well arrays, Trench Sump systems, and pressure equalization.",
      category: "Engineering Guides"
    },
    {
      title: "Soil Stabilization & Engineered Backfill",
      href: "/resources/soil-stabilization-backfill",
      icon: <Microscope size={32} className="text-primary" />,
      description: "Geotechnical requirements for land stabilization. Understanding Proctor density targets (98%), lift thickness restrictions, Clean A-3 sandy soil specs, and dynamic cone compaction testing.",
      category: "Engineering Guides"
    }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What resource guides are available for pool removal in Tampa Bay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide detailed permitting manuals for Hillsborough, Pinellas, and Pasco counties, along with engineering guides for Florida high-water-table dewatering and soil stabilization."
        }
      },
      {
        "@type": "Question",
        "name": "Is a permit required for pool removal in all Tampa Bay counties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Hillsborough, Pinellas, and Pasco counties all require residential demolition permits, engineered site plans, and P.E.-certified soil compaction reports."
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
        { name: "Resources", href: "/resources" }
      ]} />

      {/* HERO SECTION */}
      <section className="section bg-surface" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem", background: "rgba(2, 62, 138, 0.05)", padding: "0.5rem 1.25rem", borderRadius: "100px" }}>
            <ShieldCheck size={18} />
            <span style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.05em" }}>Florida Engineering Library</span>
          </div>
          <h1 style={{ fontSize: "3rem", marginBottom: "1.5rem", color: "var(--primary-dark)" }}>Pool Demolition & Permitting Resources</h1>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
            Pool removal in the Tampa Bay area is a precise hydrological and structural process. Explore our library of engineering manuals, local soil compaction specifications, and county permitting checklists.
          </p>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="section bg-surface-alt" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {resourceGuides.map((guide, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  background: "var(--surface)", 
                  padding: "2.5rem", 
                  borderRadius: "var(--radius-lg)", 
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "var(--transition-smooth)"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div style={{ background: "rgba(2, 62, 138, 0.05)", padding: "0.75rem", borderRadius: "12px" }}>
                      {guide.icon}
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-light)", background: "var(--surface-alt)", padding: "0.25rem 0.75rem", borderRadius: "100px" }}>
                      {guide.category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--primary-dark)" }}>{guide.title}</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "2rem" }}>
                    {guide.description}
                  </p>
                </div>
                <Link 
                  href={guide.href} 
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "0.5rem", 
                    fontWeight: 700, 
                    color: "var(--primary)",
                    marginTop: "auto"
                  }}
                  className="read-more-link"
                >
                  <span>Read Guide</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="glass-card" style={{ padding: "3rem", borderLeft: "4px solid var(--accent)", background: "var(--surface-alt)" }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.5rem", marginBottom: "1.25rem" }}>
              <HelpCircle size={24} color="var(--primary)" />
              Need a Custom Hydrological & Permitting Audit?
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-main)", marginBottom: "1.5rem" }}>
              Every property in Florida has different soil properties and hydrological constraints. Whether you live on the waterfront in St. Petersburg or on the higher clay/silt ridges in Wesley Chapel, we provide site surveys that detail soil types, permitting workflows, and risk mitigation strategies.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/contact" className="btn btn-primary" style={{ display: "inline-block", padding: "0.75rem 2rem" }}>
                Request Site Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
