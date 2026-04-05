import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Clock, ShieldAlert, Tractor, TreePine } from "lucide-react";

export const metadata: Metadata = {
  title: "Tampa Pool Demolition Process | Timeline & Expectations",
  description: "Learn what to expect during a Tampa pool removal. High water table drainage handling, 3-5 day timelines, and strict county backfill compaction processes.",
};

export default function DemolitionProcess() {
  return (
    <>
      <section className="hero" style={{ padding: '3rem 0 5rem', background: '#023e8a', color: 'white' }}>
        <div className="container text-center animate-fade-in" style={{ maxWidth: '800px' }}>
          <h1 style={{ color: 'white' }}>The Demolition Process</h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
            Transparent timelines and expectations for removing your pool in the Tampa Bay area.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', textAlign: 'center' }}>
              We've engineered a specific process for Florida properties. Dewatering, grading, and county compliance are hard-coded into our 3-5 day execution timeline. Here is exactly what happens.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              {/* Step 1 */}
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ flexShrink: 0, padding: '1rem', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', borderRadius: '50%', height: 'fit-content' }}>
                  <ShieldAlert size={32} />
                </div>
                <div>
                  <h3>Phase 1: Permitting & Utility Disconnect</h3>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface-alt)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <Clock size={14} /> Pre-Construction (1-3 Weeks)
                  </div>
                  <p>Before a machine ever touches dirt, our office clears the legal hurdles. We pull the specific demolition permit with Hillsborough County or your respective municipality, arrange for Sunshine 811 utility markings, and cap off your pool's electrical and plumbing lines safely.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ flexShrink: 0, padding: '1rem', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', borderRadius: '50%', height: 'fit-content' }}>
                  <Tractor size={32} />
                </div>
                <div>
                  <h3>Phase 2: Dewatering & Fracture</h3>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface-alt)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <Clock size={14} /> Day 1-2
                  </div>
                  <p>Upon arrival, we evaluate the groundwater sitation. If you have a high water table, dewatering pumps are engaged. Then, heavy excavators utilize hydraulic hydraulic breakers to shatter the pool floor and walls. In a partial removal, this rubble drops into the deep end. In a full removal, it is loaded out.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ flexShrink: 0, padding: '1rem', background: 'rgba(0,180,216,0.1)', color: 'var(--primary)', borderRadius: '50%', height: 'fit-content' }}>
                  <TreePine size={32} />
                </div>
                <div>
                  <h3>Phase 3: Backfill, Compaction & Grading</h3>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface-alt)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <Clock size={14} /> Day 3-5
                  </div>
                  <p>This is where Florida soil expertise matters. We haul in clean, granular fill dirt. We place it in 12-inch "lifts" (layers), using machinery to severely compact each layer to prevent sinkholes later on. Finally, we establish the final grade of the yard to ensure rain properly washes away from your foundation.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2>Stop worrying about the timeline.</h2>
          <p style={{ marginBottom: '2rem' }}>We communicate daily so you always know where your Tampa project stands.</p>
          <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Talk To Us Today <ArrowRight size={18} /></a>
        </div>
      </section>
    </>
  );
}
