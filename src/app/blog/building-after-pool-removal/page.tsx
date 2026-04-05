import React from "react";
import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Can You Build an Addition After Pool Removal? | Tampa Zoning",
  description: "Planning to build a garage or home addition over an old pool? Learn why Hillsborough county zoning requires a full exhumation and certified soil compaction.",
};

export default function BuildingBlog() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 600 }}>
            <ArrowLeft size={16} /> Back to Library
          </Link>

          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Can You Build an Addition After Removing a Pool in Tampa?</h1>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '3rem' }}>
            <span>Updated for 2026</span>
            <span>|</span>
            <span>Zoning & Construction Planning</span>
          </div>

          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
            <p>Reclaiming your yard from a deteriorating pool is a smart move, especially in the booming Tampa real estate market. An empty backyard opens up endless possibilities: a larger patio, a mother-in-law suite, a massive garage, or just wide-open green grass.</p>
            
            <p>But when you go to pull a construction permit to build a new heavy structure where the pool used to be, the county will immediately ask one question:</p>

            <blockquote style={{ borderLeft: '4px solid var(--secondary)', background: 'var(--surface-alt)', padding: '1.5rem', margin: '2rem 0', fontWeight: 600, color: 'var(--primary-dark)', fontStyle: 'italic' }}>
              "Did you perform a Full Exhumation or a Partial Abandonment?"
            </blockquote>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>The Prohibition on "Partial" Demolition</h2>
            <p>If you opted for a <strong>partial removal</strong> (also known as abandonment), the old concrete walls and broken rubble are still buried in your yard under three feet of topsoil. </p>
            
            <p><strong>You are legally prohibited from building any load-bearing structure on top of this footprint.</strong> The city of Tampa and Hillsborough County recognize that rubble-filled soil will gradually settle. Over time, heavy rain and Florida's infamous underground water tables will shift those buried chunks of concrete.</p>
            
            <p>If you pour a concrete slab or build a garage over a partial removal, that foundation will inevitably crack, sink, and fail within a few years as the earth underneath rearranges itself.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>The Right Way: Full Demolition & Engineered Compaction</h2>
            <p>If you have any suspicion that you (or a future home buyer) might want to build an ADU (Accessory Dwelling Unit) or addition in the yard, you must invest in a <strong>Full Structural Removal</strong>.</p>
            
            <p>This process ensures every ounce of the old pool—rebar, concrete, fiberglass, plaster—is excavated and hauled away. However, simply removing the pool isn't enough to pass a building inspector's demands.</p>

            <p>We execute <strong>Engineered Soil Compaction</strong>. This means:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>Instead of dumping 30,000 pounds of dirt all at once, we bring it in slowly in 12-inch layered "lifts."</li>
              <li>Each layer is violently compacted using specialized heavy machinery until the soil reaches maximum density.</li>
              <li>Depending on municipal codes, a geo-technical engineer can test our compaction to formally certify the ground as structurally sound for a new foundation.</li>
            </ul>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Bottom Line</h2>
            <p>Cheaping out on a pool removal now will cost you tens of thousands of dollars later if you try to pull a building permit. Do it right the first time, and your yard will be officially zoned as clear, buildable land.</p>
          </div>

          {/* Calculator Embed as the CTA */}
          <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>See the exact cost difference between Full and Partial Removal</h3>
            <Calculator />
          </div>

        </div>
      </section>
    </>
  );
}
