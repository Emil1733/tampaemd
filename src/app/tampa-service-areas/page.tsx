import React from "react";
import type { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Tampa Pool Removal & Demolition",
  description: "Extensive pool removal service area covering the greater Tampa Bay region including South Tampa, St. Petersburg, Clearwater, Brandon, and Riverview.",
};

const locations = [
  { city: "Tampa", desc: "Expert dewatering and removal in South Tampa, Carrollwood, and city limits." },
  { city: "Brandon", desc: "Handling partial and full removals for expansive suburban backyards." },
  { city: "Riverview", desc: "Specializing in high water table dynamics near local water bodies." },
  { city: "Clearwater", desc: "Navigating tight property lines and heavy coastal soil regulations." },
  { city: "St. Petersburg", desc: "Full demolition and permitting under strict Pinellas County guidelines." },
  { city: "Carrollwood", desc: "Specialized soil stabilization and tree protection for North Tampa neighborhoods." },
  { city: "Wesley Chapel", desc: "Rapid removal for new construction and property expansions." }
];

export default function ServiceAreas() {
  return (
    <>
      <section className="hero" style={{ padding: '3rem 0 5rem', background: 'var(--surface-alt)' }}>
        <div className="container text-center animate-fade-in" style={{ maxWidth: '800px' }}>
          <MapPin size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
          <h1>Tampa Bay Service Areas</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
            We serve Hillsborough and Pinellas Counties with dedicated heavy machinery and geo-technical expertise.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', background: 'white', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ borderBottom: '2px solid var(--secondary)', paddingBottom: '0.75rem', display: 'inline-block', color: 'var(--primary-dark)' }}>{loc.city} Pool Removal</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem', flexGrow: 1 }}>{loc.desc}</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Link 
                    href={
                      loc.city === "Tampa" ? "/tampa-service-areas/south-tampa" : 
                      loc.city === "Brandon" ? "/tampa-service-areas/brandon" : 
                      loc.city === "Riverview" ? "/tampa-service-areas/riverview" : 
                      loc.city === "Carrollwood" ? "/tampa-service-areas/carrollwood" : 
                      loc.city === "St. Petersburg" ? "/tampa-service-areas/st-petersburg" : 
                      loc.city === "Clearwater" ? "/tampa-service-areas/clearwater" : 
                      loc.city === "Wesley Chapel" ? "/tampa-service-areas/wesley-chapel" : 
                      "/contact"
                    } 
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}
                  >
                    Request {loc.city} Estimate <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section section-alt text-center">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2>Don't see your city?</h2>
          <p style={{ marginBottom: '2rem' }}>We handle projects all across the Bay area. If you live within a 40-mile radius of downtown Tampa, we likely service your zip code.</p>
          <a href="tel:8135550199" className="btn btn-primary" style={{ width: '100%' }}>Call (813) 555-0199 to verify</a>
        </div>
      </section>
    </>
  );
}
