import React from "react";
import type { Metadata } from "next";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Tampa Pool Removal Cost (2026) | Pricing Guide",
  description: "How much does it cost to remove a pool in Tampa? Get average pricing ($9k-$16k) and learn how water tables and access affect the final estimate.",
};

export default function PoolRemovalCost() {
  return (
    <>
      <section className="hero" style={{ padding: '3rem 0 5rem', background: 'var(--primary-dark)', color: 'white' }}>
        <div className="container text-center animate-fade-in" style={{ maxWidth: '800px' }}>
          <h1 style={{ color: 'white' }}>Tampa Pool Removal Cost Guide</h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
            Understanding the real cost of pool demolition in Hillsborough County, taking access limits and water tables into account.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-8">
          <div>
            <h2>What is the average cost?</h2>
            <p>
              In Tampa, the majority of homeowners will spend between <strong>$9,000 and $16,000</strong> to remove an inground pool structurally and legally. 
            </p>
            <p>
              Unlike purely hard-soil states, <strong>Tampa's pricing is heavily dictated by water control.</strong> Dewatering a saturated yard increases labor and requires specific pumping protocols.
            </p>

            <h3 style={{ marginTop: '3rem' }}>Cost By Pool Type</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ background: 'var(--surface-alt)', padding: '1.5rem', borderLeft: '4px solid var(--primary)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Concrete / Gunite Pools</h4>
                <p style={{ margin: 0, fontWeight: 700, color: 'var(--primary)', fontSize: '1.25rem' }}>$10,000 – $16,000</p>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>The most labor-intensive material, requiring heavy hydraulic breakers.</p>
              </div>
              <div style={{ background: 'var(--surface-alt)', padding: '1.5rem', borderLeft: '4px solid var(--secondary)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Fiberglass Pools</h4>
                <p style={{ margin: 0, fontWeight: 700, color: 'var(--secondary)', fontSize: '1.25rem' }}>$9,000 – $13,000</p>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Faster to dismantle, but hauling the molded fiberglass remains complex.</p>
              </div>
              <div style={{ background: 'var(--surface-alt)', padding: '1.5rem', borderLeft: '4px solid var(--accent)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Vinyl Liner Pools</h4>
                <p style={{ margin: 0, fontWeight: 700, color: 'var(--accent)', fontSize: '1.25rem' }}>$8,000 – $12,000</p>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Generally the least expensive to remove, though metal wall collapse requires careful extraction.</p>
              </div>
            </div>

            <h3 style={{ marginTop: '3rem' }}>The Tampa "Water Table" Impact</h3>
            <p>
              If your property is close to the bay, in South Tampa, or a low-lying zone in Riverview, the groundwater sits extremely close to the surface. Demolishing a pool in these areas requires constant pumping (dewatering) while machinery operates, which adds significant labor costs. Ignoring this leads to machines sinking in mud, and improperly backfilled sand washing out underneath.
            </p>
          </div>

          <div>
            <div style={{ position: 'sticky', top: '2rem' }}>
              <Calculator />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
