"use client";
// Force re-bundling to fix Lucide icon factory error in Turbopack

import React, { useState } from "react";
import { Calculator as CalcIcon, Droplets, Ruler, Truck, User, Phone, CheckCircle2, ArrowRight, ShieldAlert } from "lucide-react";
import { submitLead } from "@/app/actions/submitLead";

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    poolType: "",
    size: "",
    waterConditions: "",
    access: "",
    name: "",
    phone: "",
    website: "" // Honeypot field
  });
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculatePrice = (data: typeof formData) => {
    let min = 9000;
    let max = 13000;

    if (data.poolType === "Concrete") { min = 10000; max = 16000; }
    else if (data.poolType === "Vinyl") { min = 8000; max = 12000; }

    if (data.size === "Medium") { min += 1500; max += 2000; }
    else if (data.size === "Large") { min += 3000; max += 4500; }

    if (data.access === "Limited") { min += 1500; max += 3000; }
    else if (data.access === "Tight") { min += 2500; max += 4000; }

    if (data.waterConditions === "High Water Table") { min += 1500; max += 2500; }

    setPriceRange({ min, max });
    setStep(2);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    calculatePrice(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await submitLead({ ...formData, priceRange });

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
    } else {
      setStep(3); // Success
      setIsSubmitting(false);
    }
  };

  if (step === 3) {
    return (
      <div className="glass-card text-center reveal" style={{ padding: '3rem 2rem' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
           <CheckCircle2 color="white" size={40} />
        </div>
        <h3 style={{ fontSize: '2rem' }}>Report Scheduled</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Your estimated range for Tampa conditions is:
        </p>
        <div style={{ margin: '1.5rem 0', padding: '1.5rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-md)' }}>
           <strong style={{ fontSize: '2rem', color: 'var(--primary)', display: 'block' }}>
            ${priceRange.min.toLocaleString()} – ${priceRange.max.toLocaleString()}
          </strong>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase' }}>Estimated Investment</span>
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem' }}>
          Our local specialist will contact you shortly at <strong>{formData.phone}</strong> to verify soil conditions and finalize your quote.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card" id="calculator" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Progress Bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: 'var(--border)' }}>
        <div style={{ 
          width: step === 1 ? '50%' : '100%', 
          height: '100%', 
          background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
          transition: 'width 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
        }}></div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
        <div style={{ display: 'inline-flex', padding: '0.75rem', background: 'rgba(0,180,216,0.1)', borderRadius: '12px', marginBottom: '1rem' }}>
           <CalcIcon color="var(--primary)" size={24} />
        </div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Site Investment Estimator</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {step === 1 ? "Step 1: Environmental & Site Analysis" : "Step 2: Personal Report Delivery"}
        </p>
      </div>

      {step === 1 ? (
        <form onSubmit={handleNext} className="reveal">
          <div className="grid grid-cols-2">
            <div className="input-group">
              <label className="input-label">Pool Material</label>
              <select name="poolType" required className="input-field" onChange={handleChange} value={formData.poolType}>
                <option value="">Select Type</option>
                <option value="Concrete">Concrete / Gunite</option>
                <option value="Fiberglass">Fiberglass</option>
                <option value="Vinyl">Vinyl Liner</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Project Size</label>
              <select name="size" required className="input-field" onChange={handleChange} value={formData.size}>
                <option value="">Select Size</option>
                <option value="Small">Small (&lt; 15x30)</option>
                <option value="Medium">Standard Yard</option>
                <option value="Large">Estate (&gt; 20x40)</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="input-group">
              <label className="input-label">Groundwater Level</label>
              <select name="waterConditions" required className="input-field" onChange={handleChange} value={formData.waterConditions}>
                <option value="">Select Conditions</option>
                <option value="Normal">Normal Soil</option>
                <option value="High Water Table">High Water Table / Wet</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Equipment Access</label>
              <select name="access" required className="input-field" onChange={handleChange} value={formData.access}>
                <option value="">Select Access</option>
                <option value="Easy">Wide Open</option>
                <option value="Limited">Standard Gate</option>
                <option value="Tight">Tight / Zero Entry</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', borderRadius: 'var(--radius-md)' }}>
            Calculate Est. Replacement <ArrowRight size={18} />
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="reveal">
          <div style={{ background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginBottom: '2.5rem', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Estimated Range for Tampa</span>
            <div style={{ fontSize: '2.75rem', color: 'var(--primary-dark)', fontWeight: 800, fontFamily: 'var(--font-outfit)', margin: '0.5rem 0' }}>
              ${priceRange.min.toLocaleString()} – ${priceRange.max.toLocaleString()}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontStyle: 'italic' }}>*Based on local 2026 material and disposal rates.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
             <p style={{ textAlign: 'center', fontWeight: 600, color: 'var(--text-main)' }}>
              Where should we send your site-specific dewatering report?
             </p>
          </div>

          <div className="grid grid-cols-2">
             <div className="input-group">
               <label className="input-label">Full Name</label>
               <input type="text" name="name" required className="input-field" placeholder="John Doe" onChange={handleChange} value={formData.name} />
             </div>
             <div className="input-group">
               <label className="input-label">Phone Number</label>
               <input type="tel" name="phone" required className="input-field" placeholder="(813) 555-0199" onChange={handleChange} value={formData.phone} />
             </div>
          </div>

          {/* Secure Honeypot - Hidden from humans */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input 
              type="text" 
              name="website" 
              tabIndex={-1} 
              autoComplete="off" 
              onChange={handleChange} 
              value={formData.website} 
            />
          </div>

          {error && (
            <div style={{ padding: '1rem', background: '#fee2e2', color: '#dc2626', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldAlert size={16} /> {error}
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="btn btn-accent" style={{ width: '100%', marginTop: '0.5rem', borderRadius: 'var(--radius-md)' }}>
            {isSubmitting ? "Generating Report..." : "Get My Professional Site Analysis"}
          </button>
          
          <button type="button" onClick={() => setStep(1)} className="btn btn-outline" style={{ width: '100%', marginTop: '1rem', border: 'none', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            ← Back to Site Details
          </button>
        </form>
      )}
    </div>
  );
}
