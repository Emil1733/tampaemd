"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Calculator as CalcIcon, Droplets, Ruler, Truck, User, Phone, CheckCircle2 } from "lucide-react";

// Initialize Supabase. Requires NEXT_PUBLIC vars to be set.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    poolType: "",
    size: "",
    waterConditions: "",
    access: "",
    name: "",
    phone: ""
  });
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculatePrice = (data: typeof formData) => {
    let min = 9000;
    let max = 13000;

    // Base on pool type
    if (data.poolType === "Concrete") {
      min = 10000;
      max = 16000;
    } else if (data.poolType === "Vinyl") {
      min = 8000;
      max = 12000;
    }

    // Size multiplier
    if (data.size === "Medium") {
      min += 1500; max += 2000;
    } else if (data.size === "Large") {
      min += 3000; max += 4500;
    }

    // Access
    if (data.access === "Limited") {
      min += 1500; max += 3000;
    } else if (data.access === "Tight") {
      min += 2500; max += 4000;
    }

    // Water conditions
    if (data.waterConditions === "High Water Table") {
      min += 1500; max += 2500; // dewatering costs
    }

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

    try {
      const estimatedPrice = `$${priceRange.min.toLocaleString()} - $${priceRange.max.toLocaleString()}`;
      
      // Combine missing fields into pool_size so we conform strictly to the existing schema
      const mappedPoolSize = `${formData.size} | Water: ${formData.waterConditions} | Access: ${formData.access}`;

      const { error } = await supabase
        .from('emd_leads_atlanta')
        .insert([
          {
            full_name: formData.name,
            phone: formData.phone,
            pool_type: formData.poolType,
            pool_size: mappedPoolSize,
            estimated_price_range: estimatedPrice,
            source_page: 'Tampa Home Calculator'
          }
        ]);

      if (error) {
        console.error("Error submitting lead:", error);
      }
      setStep(3); // Success
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 3) {
    return (
      <div className="glass-card text-center animate-fade-in" style={{ padding: '3rem 2rem' }}>
        <CheckCircle2 color="var(--secondary)" size={64} style={{ margin: '0 auto 1.5rem' }} />
        <h3>Estimate Requested Successfully</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Your estimated replacement cost based on Tampa conditions is:<br/>
          <strong style={{ fontSize: '1.5rem', color: 'var(--primary)', display: 'block', marginTop: '0.5rem' }}>
            ${priceRange.min.toLocaleString()} – ${priceRange.max.toLocaleString()}
          </strong>
        </p>
        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem' }}>
          Our local Tampa specialist will call you shortly at {formData.phone} to discuss your exact site conditions and finalize the quote.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card animate-fade-in" id="calculator">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <CalcIcon color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
        <h3 style={{ marginBottom: '0.5rem' }}>Instant Tampa Cost Estimator</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Get a real-time estimate based on actual Tampa soil and groundwater conditions.
        </p>
      </div>

      {step === 1 ? (
        <form onSubmit={handleNext} className="animate-fade-in">
          <div className="grid grid-cols-2">
            <div className="input-group">
              <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Pool Type
              </label>
              <select name="poolType" required className="input-field" onChange={handleChange} value={formData.poolType}>
                <option value="">Select Pool Type</option>
                <option value="Concrete">Concrete / Gunite</option>
                <option value="Fiberglass">Fiberglass</option>
                <option value="Vinyl">Vinyl Liner</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">
                <Ruler size={16} /> Pool Size
              </label>
              <select name="size" required className="input-field" onChange={handleChange} value={formData.size}>
                <option value="">Select Size</option>
                <option value="Small">Small (under 15x30)</option>
                <option value="Medium">Medium (standard)</option>
                <option value="Large">Large (over 20x40)</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="input-group">
              <label className="input-label">
                <Droplets size={16} /> Water Table Conditions
              </label>
              <select name="waterConditions" required className="input-field" onChange={handleChange} value={formData.waterConditions}>
                <option value="">Select Conditions</option>
                <option value="Normal">Normal</option>
                <option value="High Water Table">High Water Table / Wet Yard</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">
                <Truck size={16} /> Yard Access
              </label>
              <select name="access" required className="input-field" onChange={handleChange} value={formData.access}>
                <option value="">Select Access Difficulty</option>
                <option value="Easy">Easy (Wide Open)</option>
                <option value="Limited">Limited (Standard Gate)</option>
                <option value="Tight">Tight (Requires Small Machinery)</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Calculate My Estimate
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="animate-fade-in">
          <div style={{ background: 'rgba(0,180,216,0.05)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginBottom: '2rem', border: '1px solid rgba(0,180,216,0.2)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Estimated Range</p>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', fontWeight: 800, fontFamily: 'var(--font-outfit)' }}>
              ${priceRange.min.toLocaleString()} – ${priceRange.max.toLocaleString()}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>*Requires finalized site inspection of drainage and backfill needs.</p>
          </div>

          <p style={{ textAlign: 'center', fontWeight: 500, marginBottom: '1.5rem' }}>
            Where should we send your detailed site report?
          </p>

          <div className="input-group">
            <label className="input-label"><User size={16} /> Full Name</label>
            <input type="text" name="name" required className="input-field" placeholder="John Doe" onChange={handleChange} value={formData.name} />
          </div>
          
          <div className="input-group">
            <label className="input-label"><Phone size={16} /> Phone Number</label>
            <input type="tel" name="phone" required className="input-field" placeholder="(813) 555-0199" onChange={handleChange} value={formData.phone} />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-accent" style={{ width: '100%', marginTop: '1rem' }}>
            {isSubmitting ? "Sending..." : "Send My Request Structure"}
          </button>
          
          <button type="button" onClick={() => setStep(1)} className="btn btn-outline" style={{ width: '100%', marginTop: '0.75rem', padding: '0.75rem' }}>
            Recalculate
          </button>
        </form>
      )}
    </div>
  );
}
