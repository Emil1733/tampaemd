import React from "react";
// Refreshing page to resolve potential icon module issues
import { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Removal Brandon, FL | Fast Estimates & Permit Handling",
  description: "Professional pool removal in Brandon, FL. We handle Hillsborough County permits, dewatering for high water table yards, and engineered backfill.",
  alternates: {
    canonical: "/tampa-service-areas/brandon",
  },
};

export default function BrandonPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              <MapPin size={20} />
              <span>Serving Brandon & Hillsborough County</span>
            </div>
            <h1>Pool Removal & Demolition in Brandon, FL</h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-main)", marginBottom: "2rem" }}>
              Specialized pool removal for Brandon homeowners. From high water table management near the Alafia River to standard suburban demolition, we handle the permits, the dirt, and the drainage.
            </p>
            <div className="trust-item" style={{ marginBottom: "2rem", background: "rgba(0,180,216,0.1)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--primary)" }}>
              <Info size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 500 }}>
                <strong>Note:</strong> Brandon properties often require specific Hillsborough County dewatering permits if groundwater is high.
              </p>
            </div>
          </div>
          <div className="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. LOCAL AUTHORITY SECTION */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <div className="icon-box">
                <Droplets size={32} />
              </div>
              <h2>Managing Brandon's High Water Table</h2>
              <p>
                Many areas in Brandon—particularly those closer to the river or south of Highway 60—face significant groundwater challenges. Removing a pool without stabilized dewatering can cause the shell to "float" or create massive mud pockets that lead to future yard sinking.
              </p>
              <p>
                Our Brandon-specific process includes:
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", gap: "0.75rem" }}>
                  <CheckCircle color="var(--primary)" size={20} />
                  <span><strong>Engineered Dewatering:</strong> Safe water removal to stabilize the soil before backfilling.</span>
                </li>
                <li style={{ display: "flex", gap: "0.75rem" }}>
                  <CheckCircle color="var(--primary)" size={20} />
                  <span><strong>Hillsborough Permit Management:</strong> We handle all local Brandon/Hillsborough county paperwork.</span>
                </li>
                <li style={{ display: "flex", gap: "0.75rem" }}>
                  <CheckCircle color="var(--primary)" size={20} />
                  <span><strong>Vibrated Compaction:</strong> Ensuring your new yard is solid enough for future sheds, decks, or additions.</span>
                </li>
              </ul>
            </div>
            <div style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Brandon Service Coverage</h3>
              <p style={{ marginBottom: "2rem" }}>We provide full pool demolition and backfill services across all Brandon zip codes including 33508, 33509, 33510, and 33511.</p>
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {["Bloomingdale", "Valrico", "Seffner", "Riverview", "Mango", "Sydney"].map((area) => (
                  <div key={area} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}>
                    <div style={{ width: "6px", height: "6px", backgroundColor: "var(--secondary)", borderRadius: "50%" }}></div>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA BLOCK */}
      <section className="section" style={{ background: "var(--primary-dark)", color: "white" }}>
        <div className="container text-center" style={{ maxWidth: "800px" }}>
          <HardHat size={48} color="var(--accent)" style={{ margin: "0 auto 1.5rem" }} />
          <h2 style={{ color: "white" }}>Need a Brandon Pool Removal Permit?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem" }}>
            Don't let the Hillsborough County building department slow you down. Our team specializes in the technical requirements for pool removal in the Brandon area.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
             <Link href="/contact" className="btn btn-accent">
                Request Local Estimate
             </Link>
             <a href="tel:8135550199" className="btn btn-outline" style={{ color: "white", borderColor: "white" }}>
                Call (813) 555-0199
             </a>
          </div>
        </div>
      </section>

      {/* 4. INTERNAL LINKING PILLAR */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2>Resources for Brandon Homeowners</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <Link href="/pool-removal-cost-tampa" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Tampa Cost Guide</h4>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>Understand the local factors that influence the price of pool removal in Hillsborough County.</p>
            </Link>
            <Link href="/pool-demolition-process" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Our Process</h4>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>See the 4-step system we use to ensure your Brandon yard is stable and ready for use.</p>
            </Link>
            <Link href="/blog/do-you-need-a-permit-in-tampa" className="glass-card" style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Permit Guide</h4>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>Specific details on Hillsborough County demolition permits and regulatory requirements.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
