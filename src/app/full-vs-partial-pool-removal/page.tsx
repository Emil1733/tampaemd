import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Info, Construction, SearchCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Full vs Partial Pool Removal Tampa | What's Legal?",
  description: "Understand the difference between full vs partial pool removal (abandonment) in Tampa. We break down the costs, pros/cons, and zoning laws.",
};

export default function FullVsPartial() {
  return (
    <>
      <section className="hero" style={{ padding: '3rem 0 5rem', background: '#f0f4f8' }}>
        <div className="container text-center animate-fade-in" style={{ maxWidth: '800px' }}>
          <h1>Full vs. Partial Pool Removal</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
            Comparing your options under Tampa & Hillsborough County zoning laws.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            {/* Partial Block */}
            <div style={{ border: '2px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '3rem' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(251, 133, 0, 0.1)', color: 'var(--accent)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <SearchCheck size={32} />
              </div>
              <h2 style={{ fontSize: '2rem' }}>Partial Removal</h2>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '2rem' }}>(Also known as Pool Abandonment)</p>
              
              <p>In a partial removal, we demolish the top 1.5 to 3 feet of the pool's structural shell. We then violently fracture the bottom of the pool to intentionally ruin its ability to hold water.</p>
              
              <p>The rubble generated from the top section is dropped into the deep end of the pool, serving as a base layer. Tampa-approved engineered fill dirt is then packed aggressively on top, graded to flow seamlessly with the yard.</p>

              <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>When to choose Partial:</h4>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
                <li>Your priority is saving money (this is the most affordable method).</li>
                <li>You never plan to build a heavy structure (garage, home addition) in the exact spot the pool was.</li>
                <li>Your yard has landscaping over normal grassy areas.</li>
              </ul>
              
              <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--surface-alt)', borderLeft: '4px solid var(--accent)' }}>
                <strong style={{ color: 'var(--text-main)' }}>Caveat:</strong> Depending on the city municipality (City of Tampa vs. Unincorporated County), you may have to legally declare this abandoned structure to future home buyers.
              </div>
            </div>

            {/* Full Block */}
            <div style={{ border: '2px solid var(--secondary)', borderRadius: 'var(--radius-lg)', padding: '3rem', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--secondary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0 var(--radius-lg) 0 var(--radius-md)', fontWeight: 'bold' }}>Most Popular</div>
              <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(0, 180, 216, 0.1)', color: 'var(--secondary)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Construction size={32} />
              </div>
              <h2 style={{ fontSize: '2rem' }}>Full Pool Removal</h2>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '2rem' }}>(Complete Exhumation)</p>
              
              <p>During a full removal, 100% of the pool's structure is fractured, ripped out of the earth via hydraulic excavators, loaded into heavy dump trucks, and permanently hauled away from your Tampa property.</p>
              
              <p>Because there is no rubble left behind, the entire cavity requires significantly more engineered sand and soil backfill to correctly pack the void. This requires intense layering and mechanical compaction.</p>

              <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>When to choose Full:</h4>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
                <li>You want maximum property resale value with zero disclosures.</li>
                <li>You intend to build an addition, heavy deck, or new dwelling on the exact pool footprint.</li>
                <li>The pool has suffered catastrophic foundational sinkhole damage and the county mandates a full clear-out.</li>
              </ul>

              <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--surface-alt)', borderLeft: '4px solid var(--secondary)' }}>
                <strong style={{ color: 'var(--text-main)' }}>Consideration:</strong> This method costs significantly more due to heavy hauling and increased backfill volume.
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-surface text-center">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2>Not sure which option fits your property?</h2>
          <p style={{ marginBottom: '2rem' }}>Consult with our Florida-licensed specialists to review your property layout, survey constraints, and budget.</p>
          <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Book Free Site Inspection <ArrowRight size={18} /></a>
        </div>
      </section>
    </>
  );
}
