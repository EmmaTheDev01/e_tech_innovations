'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Send,
  CheckCircle2,
  ChevronRight,
  Building2,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'Enterprise ERP Systems',
    timeline: '1-3 months',
    deployment: 'Hybrid Cloud',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const slaTiers = [
    {
      tier: 'Tier 1: Mission-Critical 24/7',
      response: '< 15 minutes',
      desc: 'Dedicated engineer pod with 24/7 paging for high-throughput ERP, HISM, and financial ledger deployments.',
    },
    {
      tier: 'Tier 2: Business-Hours Priority',
      response: '< 1 hour',
      desc: 'Dedicated technical lead for sprint iterations, feature expansion, and database optimizations.',
    },
    {
      tier: 'Tier 3: Standard Maintenance',
      response: '< 4 hours',
      desc: 'Continuous security patching, dependency updates, and automated system health monitoring.',
    },
  ];

  const offices = [
    {
      city: 'Kigali, Rwanda',
      type: 'Headquarters & Engineering Center',
      address: 'Gikondo, Iriba House',
      phones: ['+250 788 301 054', '+250 788 304 025'],
      email: 'hello@e-techinnovations.com',
    },
  ];

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
        <Navbar />

        {/* Hero Banner */}
        <section style={{ padding: '60px 0 40px', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#0066ff', fontWeight: 600 }}>Contact Us</span>
            </nav>

            <div style={{ maxWidth: '860px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Enterprise Technical Discovery</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '20px',
                }}
              >
                Speak with our <span style={{ color: '#0066ff' }}>principal architects.</span>
              </h1>

              <p
                style={{
                  fontSize: '1.18rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                Have an enterprise software requirement or request for proposal (RFP)? Submit your project parameters below. Our software architects respond within 2 business hours with an initial technical assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Form & SLA Grid */}
        <section style={{ padding: '20px 0 80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div
              className="scroll-reveal-stagger"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '48px', alignItems: 'start' }}
            >
              {/* Form Container */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '24px',
                  padding: 'clamp(28px, 4vw, 44px)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.2)',
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 16px' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'rgba(0, 102, 255, 0.1)',
                        border: '1px solid #0066ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0066ff',
                        margin: '0 auto 24px',
                      }}
                    >
                      <CheckCircle2 size={36} />
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                      RFP Parameters Received
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 24px' }}>
                      Thank you for submitting your system requirements. Our principal solutions architect is reviewing your specifications and will follow up with you at <strong style={{ color: 'var(--text-primary)' }}>{formData.email}</strong> within 2 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-primary)',
                        padding: '10px 24px',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ marginBottom: '8px' }}>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                        Enterprise Project Discovery
                      </h2>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        Provide details regarding your desired system, timeline, and infrastructure preferences.
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Enter your full name"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '10px',
                            color: 'var(--text-primary)',
                            fontSize: '0.95rem',
                            outline: 'none',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '10px',
                            color: 'var(--text-primary)',
                            fontSize: '0.95rem',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                        Company / Enterprise Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enter your company name"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-glass)',
                          borderRadius: '10px',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          Target System Solution *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '10px',
                            color: 'var(--text-primary)',
                            fontSize: '0.95rem',
                            outline: 'none',
                          }}
                        >
                          <option value="Enterprise ERP Systems">Enterprise ERP Systems</option>
                          <option value="HR & Payroll Platforms (HRMS)">HR & Payroll Platforms (HRMS)</option>
                          <option value="Learning Management (LMS)">Learning Management (LMS)</option>
                          <option value="Hospital Information Systems (HISM)">Hospital Information Systems (HISM)</option>
                          <option value="Bespoke Enterprise Software">Bespoke Enterprise Software</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                          Desired Deployment Target
                        </label>
                        <select
                          value={formData.deployment}
                          onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '10px',
                            color: 'var(--text-primary)',
                            fontSize: '0.95rem',
                            outline: 'none',
                          }}
                        >
                          <option value="Hybrid Cloud">Hybrid Cloud</option>
                          <option value="On-Premises Bare Metal">On-Premises Bare Metal</option>
                          <option value="Private Sovereign Cloud">Private Sovereign Cloud (AWS/Azure)</option>
                          <option value="To Be Determined">To Be Determined with Architect</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                        System Scope & Operational Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Enter your project details or requirements..."
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-glass)',
                          borderRadius: '10px',
                          color: 'var(--text-primary)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary-blue"
                      style={{
                        padding: '14px 28px',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        marginTop: '8px',
                      }}
                    >
                      <Send size={18} />
                      <span>Transmit Project Specifications</span>
                    </button>
                  </form>
                )}
              </div>

              {/* SLA & Office Information */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Contact Information & Engineering Hub */}
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '24px',
                    padding: '32px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <Building2 size={22} color="#0066ff" />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Contact &amp; Engineering Center
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {offices.map((office, idx) => (
                      <div key={idx} style={{ borderBottom: idx < offices.length - 1 ? '1px solid var(--border-glass)' : 'none', paddingBottom: idx < offices.length - 1 ? '16px' : '0' }}>
                        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          {office.city}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#0066ff', fontWeight: 600, marginBottom: '8px' }}>
                          {office.type}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                          <MapPin size={14} style={{ color: '#0066ff' }} />
                          <span>{office.address}</span>
                        </div>
                        {office.phones.map((p, pIdx) => (
                          <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                            <Phone size={14} style={{ color: pIdx === 0 ? '#41b94b' : '#0066ff' }} />
                            <a href={`tel:${p.replace(/\s+/g, '')}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                              {p}
                            </a>
                          </div>
                        ))}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          <Mail size={14} style={{ color: '#0066ff' }} />
                          <a href={`mailto:${office.email}`} style={{ color: '#0066ff', textDecoration: 'none', fontWeight: 600 }}>
                            {office.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SLA Tiers Box */}
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '24px',
                    padding: '32px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <ShieldCheck size={22} color="#0066ff" />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Enterprise SLA Guarantees
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
                    Every system deployed by e-Tech Innovations is backed by contractually guaranteed response times and dedicated principal engineers.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {slaTiers.map((sla, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-glass)',
                          borderRadius: '12px',
                          padding: '16px',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>{sla.tier}</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-lime)' }}>{sla.response}</span>
                        </div>
                        <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
                          {sla.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
