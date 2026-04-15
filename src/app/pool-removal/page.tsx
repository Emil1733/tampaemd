import React from "react";
import type { Metadata } from "next";
import { Droplets, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Pool Removal Tampa | Tampa Pool Demolition",
  description: "Expert pool removal in Tampa Bay. Specializing in high water table dewatering, sandy soil stabilization, and Hillsborough County permits. Compare full vs partial.",
  alternates: {
    canonical: "/pool-removal",
  },
};

export default function PoolRemoval() {
  return (
    <>
      <section className="hero" style={{ padding: '4rem 0 6rem', backgroundImage: 'linear-gradient(135deg, rgba(240, 244, 248, 0.95), rgba(226, 232, 240, 0.9))' }}>
        <div className="container text-center animate-fade-in" style={{ maxWidth: '800px' }}>
          <h1>Professional Pool Removal in Tampa</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            We specialize in dismantling, dewatering, and safely backfilling old pools across Tampa, ensuring strict compliance with local soil stability requirements.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-8 items-center">
          <div>
            <h2>Full vs. Partial Removal</h2>
            <p>In Tampa, you generally have two legal options for removing your pool:</p>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ color: 'var(--primary)' }}>Partial Removal (Abandonment)</h3>
                <p style={{ color: 'var(--text-muted)' }}>The top 18-36 inches of the pool shell are demolished and the bottom is drilled to allow for water drainage. The debris is placed in the bottom and backfilled. It is the most cost-effective option, however, it does limit future construction on that specific footprint.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ color: 'var(--primary)' }}>Full Pool Removal</h3>
                <p style={{ color: 'var(--text-muted)' }}>The entire pool shell (concrete, rebar, fiberglass) is extracted and hauled away. The cavity is then filled with engineered, compacted soil. This entirely restores your yard and legally allows for new structures to be built without restrictions.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="glass-card" style={{ background: 'var(--primary-dark)', color: 'white' }}>
              <h3 style={{ color: 'white' }}>Why Tampa Soil Demands Perfection</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>Unlike inland areas, Tampa Bay sits on coastal sandy soil combined with a highly active water table. If a pool is improperly removed without accounting for dewatering:</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}><Droplets color="var(--secondary)" size={20} /> <span style={{ fontWeight: 500 }}>Water pooling and yard swelling</span></li>
                <li style={{ display: 'flex', gap: '0.75rem' }}><Droplets color="var(--secondary)" size={20} /> <span style={{ fontWeight: 500 }}>Sinkholes and dangerous yard collapse</span></li>
                <li style={{ display: 'flex', gap: '0.75rem' }}><Droplets color="var(--secondary)" size={20} /> <span style={{ fontWeight: 500 }}>Foundational shifts putting your home at risk</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-cols-2 gap-8 items-center">
          <div>
            <div style={{ padding: '2rem', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
              <h3>Permit Requirements (Hillsborough County)</h3>
              <p>Failure to pull the correct demolition and environmental permits can lead to severe fines. We fully manage:</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><ShieldCheck size={18} color="var(--primary)" /> Demolition permits</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><ShieldCheck size={18} color="var(--primary)" /> Tree/Environmental checks</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><ShieldCheck size={18} color="var(--primary)" /> Utility disconnections</li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><ShieldCheck size={18} color="var(--primary)" /> Final city inspections</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Expected Tampa Costs</h2>
            <p>Because of groundwater variables, Tampa pool removals generally run <strong>$9,000 – $16,000</strong>.</p>
            <p style={{ color: 'var(--text-muted)' }}>Concrete pools frequently require heavy machinery and advanced moisture management, typically putting costs on the higher end, especially if site accessibility is limited.</p>
            <a href="/pool-removal-cost-tampa" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              View full cost breakdown <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-12 items-center">
          <div>
            <h3>Specialized Fiberglass Shell Removal</h3>
            <p>Fiberglass pools require a different approach than concrete. Because the shells are a single composite unit, they can "pop" out of the ground if the local water table is high. We specialize in the precision extraction and legal disposal of fiberglass shells across Tampa.</p>
            <Link href="/pool-removal/fiberglass" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--primary)' }}>
               Learn about fiberglass extraction <ArrowRight size={16} />
            </Link>
          </div>
          <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
            <h4 style={{ marginBottom: '1rem' }}>We also manage:</h4>
            <ul style={{ listStyle: 'none', padding: 0.5, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={18} color="var(--secondary)" /> Vinyl Liner Pool Removal</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={18} color="var(--secondary)" /> Commercial Pool Demolition</li>
              <li style={{ display: 'flex', gap: '0.5rem' }}><CheckCircle2 size={18} color="var(--secondary)" /> Concrete Deck Extraction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <h2>Ready to get started?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/#calculator" className="btn btn-primary">Use Cost Estimator</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
