import React from "react";
import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Do You Need a Permit for Pool Removal in Tampa? | 2026 Rules",
  description: "Learn why a demolition permit is mandatory in Hillsborough County and the City of Tampa to remove a pool, and what happens if you skip it.",
};

export default function PermitBlog() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 600 }}>
            <ArrowLeft size={16} /> Back to Library
          </Link>

          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Do You Need a Permit to Remove a Pool in Tampa?</h1>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '3rem' }}>
            <span>Updated for 2026</span>
            <span>|</span>
            <span>Hillsborough County & City of Tampa Guidelines</span>
          </div>

          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
            <p>If there’s one question we get asked more than any other by Tampa homeowners, it’s this: <em>"Can't I just rent a skid steer, fill in the pool, and plant some grass?"</em></p>
            
            <p>The short answer? <strong>No. You absolutely cannot.</strong></p>

            <p>If you live anywhere within Hillsborough County, the City of Tampa, St. Petersburg, or surrounding municipalities, you are legally required to pull a demolition permit before modifying or removing any in-ground pool structure.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Why the Government Cares About Your Empty Pool</h2>
            <p>It's easy to assume your backyard is your private business. However, pool construction heavily alters the <strong>hydrology</strong> of the neighborhood. When you remove a pool, the city needs to verify three critical safety milestones:</p>
            
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><strong>Utility Disconnections:</strong> Underground electrical lines and plumbing pipes must be formally capped off to prevent live currents or massive water leaks.</li>
              <li><strong>Drainage Compliance:</strong> Tampa is notorious for flooding. If an unlicensed crew dumps non-porous clay into your pool and paves it over, the rainwater that used to go into the pool will now wash directly onto your neighbor’s property (a massive liability) or into your home's foundation.</li>
              <li><strong>Environmental Tree Protection:</strong> Hillsborough County is extremely protective of Grand Oaks and specific tree roots. Heavy machinery cannot traverse your yard without an environmental review ensuring roots won't be crushed.</li>
            </ul>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>What Happens If You Skip the Permit?</h2>
            <p>If you skip the permitting process, you are creating a "zombie pool." Because the county property appraiser still has the pool listed on your tax records, when you try to sell the home, an inspector will flag the discrepancy.</p>
            
            <p>At that point, the city will force you to excavate the entire filled area (at your own massive expense) just to prove it was demolished properly, followed by heavy retroactive fines.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>How We Handle It</h2>
            <p>As state-licensed contractors, you never actually have to go to the permitting office. We submit the architectural abandonment drawings, coordinate the Sunshine 811 utility flags, and schedule the final city inspector to sign off on the backfill.</p>
          </div>

          {/* Calculator Embed as the CTA */}
          <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Curious how much removing your pool would cost legally?</h3>
            <Calculator />
          </div>

        </div>
      </section>
    </>
  );
}
