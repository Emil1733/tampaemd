import React from "react";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tampa Pool Demolition Blog & Resources | Water Table Guides",
  description: "Read our expert guides on high water table pool removals, Tampa permit requirements, and backfill regulations.",
};

const posts = [
  {
    title: "Tampa Pool Removal Cost (2026 Guide)",
    desc: "A breakdown of what to expect when paying for a pool demolition in Tampa, specifically covering the extra costs associated with dewatering and beach-sand backfill.",
    url: "/pool-removal-cost-tampa"
  },
  {
    title: "Do You Need a Permit to Remove a Pool in Tampa?",
    desc: "Hillsborough County has strict rules about abandoning structural concrete. Learn what permits are required before any heavy machinery arrives.",
    url: "/blog/do-you-need-a-permit-in-tampa"
  },
  {
    title: "High Water Table Issues in Florida Pool Removal",
    desc: "Why treating a Tampa pool removal like an inland demolition will result in a flooded yard and a collapsed fence.",
    url: "/blog/high-water-table-issues"
  },
  {
    title: "Can You Build an Addition After Pool Removal?",
    desc: "The critical differences in compaction needed if you intend to build a garage or home addition over an old pool cavity.",
    url: "/blog/building-after-pool-removal"
  }
];

export default function Blog() {
  return (
    <>
      <section className="hero" style={{ padding: '3rem 0 5rem', background: 'var(--surface-alt)' }}>
        <div className="container text-center animate-fade-in" style={{ maxWidth: '800px' }}>
          <BookOpen size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
          <h1>Tampa Demolition Resources</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
            Strategic insights on soil stabilization, permitting, and high-water coastal logistics.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            {posts.map((post, idx) => (
              <div key={idx} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', background: 'white', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1rem' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-muted)', flexGrow: 1 }}>{post.desc}</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Link href={post.url} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}>
                    Read Full Guide <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
