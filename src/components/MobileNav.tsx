"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/pool-removal" },
    { name: "Tampa Costs", href: "/pool-removal-cost-tampa" },
    { name: "Full vs Partial", href: "/full-vs-partial-pool-removal" },
    { name: "Our Process", href: "/pool-demolition-process" },
    { name: "Service Areas", href: "/tampa-service-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <div className="mobile-only-nav">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--primary-dark)' }}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              style={{ padding: '0.75rem', fontWeight: 600, color: 'var(--text-main)', borderBottom: '1px solid var(--surface-alt)' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
