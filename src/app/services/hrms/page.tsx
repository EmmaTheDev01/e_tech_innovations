'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import {
  Fingerprint,
  TrendingUp,
  FileText,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Calculator,
  Lock,
} from 'lucide-react';

export default function HRMSServicePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const modules = [
    {
      icon: Calculator,
      title: 'Multi-Country Statutory Payroll Engine',
      desc: 'Automated gross-to-net computation handling multi-tier tax brackets, statutory pension, health insurance deductions, and electronic direct-deposit bank files.',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Clock-in & Hardware Gate Sync',
      desc: 'Native TCP/IP socket connections directly interfacing with ZKTeco, Suprema, and RFID turnstiles for real-time, tamper-proof attendance logging.',
    },
    {
      icon: FileText,
      title: 'Employee & Manager Self-Service (ESS)',
      desc: 'Intuitive web portals for leave applications, multi-tier expense claim approvals, digital encrypted payslip retrieval, and tax certificate downloads.',
    },
    {
      icon: TrendingUp,
      title: '360° Appraisal & OKR Performance Matrices',
      desc: 'Customizable annual and quarterly review cycles, objective key results (OKRs) telemetry, peer reviews, and automated promotion recommendation scoring.',
    },
    {
      icon: Clock,
      title: 'Dynamic Shift Scheduling & Overtime Audit',
      desc: 'Automated rota generation, cross-shift substitution rules, night-shift differentials, and strict statutory overtime capping to eliminate labor law liabilities.',
    },
    {
      icon: Lock,
      title: 'Encrypted HR Document & Contract Vault',
      desc: 'Centralized digital employee dossiers with role-scoped AES-256 encryption, visa/permit expiration alerts, and immutable disciplinary log tracking.',
    },
  ];

  const highlights = [
    'Engineered for 500 to 50,000+ active enterprise personnel',
    'Custom statutory formula builders for any national tax regime',
    'Dual-authorization (Maker-Checker) payroll approval workflows',
    'Direct integration with enterprise ERP ledgers and bank clearing systems',
    'On-premises database isolation or sovereign private cloud hosting',
  ];

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
        <Navbar onOpenContact={handleOpenContact} />

        {/* Hero Section */}
        <section style={{ padding: '60px 0 40px', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#0066ff', fontWeight: 600 }}>HR & Payroll Systems (HRMS)</span>
            </nav>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                  <span>#Workforce Systems & Payroll</span>
                </div>

                <h1
                  style={{
                    fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.03em',
                    marginBottom: '20px',
                  }}
                >
                  OmniPulse Enterprise <span style={{ color: '#0066ff' }}>HRMS & Payroll.</span>
                </h1>

                <p
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                  }}
                >
                  Simplify enterprise workforce operations with zero payroll computation error. We engineer custom HRMS platforms uniting statutory tax processing, biometric hardware clocking, employee self-service, and granular performance management.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button onClick={handleOpenContact} className="btn-primary-blue">
                    <span>Schedule HRMS Technical Discovery</span>
                    <ArrowRight size={16} />
                  </button>
                  <Link
                    href="/featured-work"
                    style={{
                      padding: '12px 24px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      transition: 'all 0.2s',
                    }}
                  >
                    View Case Study
                  </Link>
                </div>
              </div>

              {/* Showcase Image */}
              <div
                style={{
                  position: 'relative',
                  height: '420px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-glass)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Image
                  src="/images/work-hr.jpg"
                  alt="OmniPulse Enterprise HRMS"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 15, 29, 0.85) 0%, transparent 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(10, 15, 29, 0.9)',
                    backdropFilter: 'blur(12px)',
                    padding: '14px 20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Personnel Scalability</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>10,000+ Staff</div>
                  </div>
                  <div style={{ height: '30px', width: '1px', background: 'rgba(255, 255, 255, 0.2)' }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Calculation Accuracy</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-lime)' }}>100% Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section style={{ padding: '60px 0 80px', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Workforce Capabilities</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Engineered for strict statutory compliance and frictionless operations.
              </h2>
            </div>

            <div
              className="scroll-reveal-stagger"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px',
              }}
            >
              {modules.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '20px',
                      padding: '32px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(0, 102, 255, 0.1)',
                        border: '1px solid rgba(0, 102, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0066ff',
                        marginBottom: '20px',
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                      {m.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Security & Features Bar */}
        <section style={{ padding: '60px 0 80px', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Enterprise Standards</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
                Payroll confidentiality built into the database layer.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
              {highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <CheckCircle2 size={20} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(10, 15, 29, 0.95) 100%)',
                border: '1px solid rgba(0, 102, 255, 0.35)',
                borderRadius: '28px',
                padding: 'clamp(40px, 6vw, 64px) clamp(24px, 4vw, 56px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '32px',
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Ready to automate your workforce & payroll operations?
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Let our engineering team demonstrate our live biometric integration and multi-country tax calculations tailored to your operating territories.
                </p>
              </div>

              <button onClick={handleOpenContact} className="btn-primary-blue" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                <span>Request HRMS Demonstration</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <Footer />
        <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      </main>
    </ThemeProvider>
  );
}
