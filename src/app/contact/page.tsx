import React from "react";
import type { Metadata } from "next";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Contact Us | Tampa Pool Removal",
  description: "Contact the leading Tampa pool demolition experts. Call (813) 555-0199 for an immediate, water-table adjusted pool removal quote.",
};

export default function Contact() {
  return (
    <>
      <section className="hero" style={{ padding: '4rem 0', background: 'var(--primary-dark)', color: 'white' }}>
        <div className="container animate-fade-in text-center" style={{ maxWidth: '800px' }}>
          <h1 style={{ color: 'white' }}>Contact Tampa's Pool Removal Experts</h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
            We're standing by to assess your property, deal with the county permits, and reclaim your yard.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-cols-2 gap-8 items-start">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2>Get in Touch</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              We pride ourselves on answering the phone and giving transparent quotes. Use the methods below to reach our local Tampa operations team.
            </p>

            <a href="tel:8135550199" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)', textDecoration: 'none' }} className="animate-fade-in">
              <div style={{ padding: '1rem', background: 'var(--primary)', color: 'white', borderRadius: '50%' }}>
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ margin: 0, color: 'var(--primary-dark)' }}>Call Us Directly</h3>
                <span style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700 }}>(813) 555-0199</span>
              </div>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-md)' }} className="animate-fade-in delay-100">
              <div style={{ padding: '1rem', background: 'var(--secondary)', color: 'white', borderRadius: '50%' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ margin: 0, color: 'var(--primary-dark)' }}>Service Area</h3>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Greater Tampa Area & Hillsborough Co</span>
              </div>
            </div>

          </div>

          <div style={{ background: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>Request a Callback Fast</h3>
            <Calculator />
          </div>

        </div>
      </section>
    </>
  );
}
