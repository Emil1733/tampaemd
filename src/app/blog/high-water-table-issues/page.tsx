import React from "react";
import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "High Water Table Issues: Florida Pool Removal | Tampa Demolition",
  description: "Learn how the Florida high water table impacts your pool removal. Dewatering, hydrostatic pressure, and sandy soil stabilization explained.",
};

export default function WaterTableBlog() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 600 }}>
            <ArrowLeft size={16} /> Back to Library
          </Link>

          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>High Water Table Issues in Florida Pool Removal</h1>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', borderBottom: '1px solid var(--border)', paddingBottom: '2rem', marginBottom: '3rem' }}>
            <span>Updated for 2026</span>
            <span>|</span>
            <span>Coastal Geology & Engineering</span>
          </div>

          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
            <p>If you're hiring a contractor to remove a pool in Ohio, they dig a hole, smash the concrete, and dump dirt in. If you try that exact same method in Tampa Bay, Florida, you are going to destroy your property.</p>
            
            <p>The difference? <strong>The water table.</strong></p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Understanding "Hydrostatic Pressure"</h2>
            <p>In many parts of Tampa (particularly South Tampa, Clearwater, and waterfront communities in Riverview), if you dig just three feet into the dirt, you will hit groundwater. </p>

            <p>Your existing pool is practically sitting in a subterranean lake. Right now, the thousands of gallons of water <em>inside</em> the pool are pushing outward, perfectly balancing the pressure of the groundwater pushing <em>inward</em>.</p>
            
            <p>When an inexperienced demolition crew rapidly drains your pool, that internal pressure vanishes. Suddenly, the groundwater forces itself upward. We have seen instances where fiberglass pools literally "pop" out of the ground like a cork, destroying concrete decks and severing plumbing lines violently.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>The Mud Pit Disaster</h2>
            <p>Furthermore, when breaking the concrete bottom of a pool in a high-water zone, the underground water instantly floods the cavity. If the contractor doesn't have industrial <strong>dewatering</strong> pumps running, their 15,000-pound excavators will sink into the mud.</p>
            
            <p>Worse, if they just dump regular dirt into this muddy water, you won't get a solid yard. You get a sponge. Even months later, walking over the old pool area will feel like walking on a waterbed. Grass will rot, mosquitoes will breed, and sinkholes can form.</p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>The Professional Solution</h2>
            <p>A legitimate Florida demolition treats the ground like a coastal engineering project:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><strong>Controlled Discharge:</strong> We drain the pool slowly while actively surveying the surrounding deck for micro-stress fractures.</li>
              <li><strong>Active Dewatering:</strong> High-velocity pumps clear the groundwater out of the cavity so our men and machines operate on dry sub-soil.</li>
              <li><strong>Angular Sand Backfill:</strong> Instead of dumping clumped clay, we use specific washed sand and granular soils that lock together tightly even in moisture, creating a rock-solid, drainable base layer.</li>
            </ul>

            <p>Don't let a generic out-of-state excavation crew turn your Tampa yard into a swamp.</p>
          </div>

          {/* Calculator Embed as the CTA */}
          <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Get a Tampa-Specific Cost Estimate Below</h3>
            <Calculator />
          </div>

        </div>
      </section>
    </>
  );
}
