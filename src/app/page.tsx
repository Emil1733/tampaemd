import React from "react";
import Image from "next/image";
import Calculator from "@/components/Calculator";
import { CheckCircle, ShieldCheck, MapPin, HardHat, Droplets, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. HERO & CALCULATOR */}
      <section className="hero">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div className="animate-fade-in">
            <h1>Tampa Pool Removal & Demolition</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '2rem', fontWeight: 500 }}>
              Remove your pool safely in high water table conditions. We handle dewatering, permits, and engineered backfill across Tampa Bay.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#calculator" className="btn btn-primary">
                Get Instant Estimate
              </a>
              <a href="tel:8135550199" className="btn btn-outline">
                Call (813) 555-0199
              </a>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '3rem' }}>
              <ShieldCheck color="var(--primary)" size={24} />
              <span style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>
                Serving Tampa, Clearwater, St. Petersburg & Hillsborough County
              </span>
            </div>
          </div>
          
          <div id="calculator" className="animate-fade-in delay-200 calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar">
        <div className="container trust-bar-items">
          <div className="trust-item"><CheckCircle size={18} color="var(--secondary)" /> Licensed & Insured Florida</div>
          <div className="trust-item"><CheckCircle size={18} color="var(--secondary)" /> Hillsborough County Permits</div>
          <div className="trust-item"><CheckCircle size={18} color="var(--secondary)" /> Compaction Certified</div>
          <div className="trust-item"><CheckCircle size={18} color="var(--secondary)" /> 3–5 Day Turnaround</div>
        </div>
      </div>

      {/* 3. GEO AUTHORITY BLOCK */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-8">
            <div>
              <div className="icon-box">
                <Droplets size={32} />
              </div>
              <h2>Why Tampa Pools Require Specialized Removal (High Water Table & Sandy Soil)</h2>
              <p>
                Pool removal in Tampa is not the same as inland cities. Most properties sit on <strong>sandy soil with a naturally high water table</strong>, which means improper demolition can lead to ground shifting, drainage issues, or even water intrusion after the project is complete.
              </p>
              <p>We handle Tampa-specific conditions including:</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['High groundwater levels requiring controlled dewatering', 'Sandy soil stabilization to prevent future settling', 'Drainage correction to avoid water pooling after removal', 'Compaction methods designed for coastal Florida soil'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                    <span style={{ fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontStyle: 'italic', color: 'var(--primary-dark)', fontWeight: 600 }}>
                Every project is completed with moisture-controlled backfill to ensure your yard stays stable long after the pool is gone.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', bottom: '1rem', right: '1rem', border: '2px solid var(--secondary)', borderRadius: 'var(--radius-lg)', zIndex: 0 }}></div>
              <Image src="/excavator_pool_demolition.png" alt="Excavator performing pool removal backfill" width={1000} height={667} style={{ borderRadius: 'var(--radius-lg)', position: 'relative', zIndex: 1, boxShadow: 'var(--shadow-lg)', maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. COST BLOCK */}
      <section className="section section-alt">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2>Tampa Pool Removal Cost (2026 Pricing Guide)</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Most Tampa homeowners spend between <strong>$9,000 – $16,000</strong> depending on pool type, access, and groundwater conditions.
          </p>
          
          <div className="grid grid-cols-2" style={{ textAlign: 'left', background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--text-muted)' }}>Pool Materials</h4>
              <ul style={{ listStyle: 'none', lineHeight: 2 }}>
                <li><strong>Concrete pools:</strong> $10,000 – $16,000</li>
                <li><strong>Fiberglass pools:</strong> $9,000 – $13,000</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-muted)' }}>Tampa Factors</h4>
              <ul style={{ listStyle: 'none', lineHeight: 2 }}>
                <li><strong>Difficult access:</strong> +$1,500 – $4,000</li>
                <li><strong>High water table dewatering:</strong> May increase cost</li>
              </ul>
            </div>
          </div>
          
          <a href="#calculator" className="btn btn-primary">
            Use Cost Estimator <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* 5. PROCESS BLOCK */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Our Tampa Pool Removal Process</h2>
            <p>A proven, step-by-step approach ensuring soil stability and proper drainage.</p>
          </div>
          
          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            {[
              { title: "Step 1: Site Evaluation & Water Control", desc: "We assess groundwater levels and prepare dewatering if needed to prevent flooding and ensure safe demolition." },
              { title: "Step 2: Demolition & Removal", desc: "Concrete or fiberglass is broken down and safely hauled away. For partial removals, holes are drilled to prevent water retention." },
              { title: "Step 3: Backfill & Compaction", desc: "We install layered, engineered fill designed specifically for sandy coastal soil stability, compacting at every level." },
              { title: "Step 4: Final Grade & Drainage Prep", desc: "Your yard is professionally leveled, correcting any drainage issues, and prepared for fresh grass or landscaping." }
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ width: '48px', height: '48px', flexShrink: 0, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PERMIT BLOCK */}
      <section className="section" style={{ background: 'var(--primary-dark)', color: 'white' }}>
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <HardHat size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ color: 'white' }}>Tampa & Hillsborough County Permit Requirements</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              Pool demolition in Tampa requires proper permitting depending on your location and project type. We handle all paperwork so you never worry about bureaucracy.
            </p>
            <ul style={{ listStyle: 'none', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "Hillsborough County demolition permits",
                "City of Tampa municipal approvals",
                "Underground utility checks & disconnections",
                "Final governmental inspection coordination"
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <ShieldCheck color="var(--accent)" size={20} />
                  <span style={{ fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Ready to move forward?</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>You don’t need to deal with the paperwork — we take care of everything from start to finish.</p>
            <a href="tel:8135550199" className="btn btn-accent" style={{ width: '100%' }}>
              Speak with a Tampa Specialist
            </a>
          </div>
        </div>
      </section>

      {/* 7. TRUST & TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Recent Pool Removal Projects in Tampa Bay</h2>
            <p>Real results from proper water-control demolition.</p>
          </div>
          
          <div className="grid grid-cols-3">
            {[
              {
                text: "Had our pool removed in Clearwater — biggest concern was water under the yard. These guys handled drainage perfectly and the grass looks amazing.",
                name: "Michael T.",
                loc: "Clearwater, FL"
              },
              {
                text: "St. Pete property with tight access. The crew navigated our narrow gate effortlessly. Fast, clean, and zero puddling after a heavy rainstorm.",
                name: "Sarah W.",
                loc: "St. Petersburg, FL"
              },
              {
                text: "Old structural pool in South Tampa. They walked us through all the Hillsborough County permits and everything passed the first inspection.",
                name: "David R.",
                loc: "South Tampa"
              }
            ].map((review, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>"{review.text}"</p>
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-main)' }}>{review.name}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>{review.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICE AREA & FINAL CTA */}
      <section className="section bg-surface">
        <div className="container grid grid-cols-2 items-center gap-8">
          <div>
            <MapPin size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            <h2>Serving Tampa & Surrounding Areas</h2>
            <p>We provide specialized pool removal, dewatering, and property grading across the entire Tampa Bay area, including:</p>
            <div className="grid grid-cols-2" style={{ gap: '1rem', marginTop: '2rem' }}>
              {['Tampa', 'Brandon', 'St. Petersburg', 'Riverview', 'Clearwater', 'Wesley Chapel'].map((city) => (
                <div key={city} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontWeight: '500' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                  {city}
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ background: 'var(--surface-alt)', padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Get Your Tampa Pool Removal Quote</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Stop dealing with an unused or failing pool. Get a fast estimate based on your property and local conditions.
            </p>
            <a href="#calculator" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
              Use Cost Estimator
            </a>
            <a href="tel:8135550199" className="btn btn-outline" style={{ width: '100%' }}>
              Call (813) 555-0199
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
