'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  Lock,
  GitBranch,
  RefreshCw,
  Coins,
  Boxes,
} from 'lucide-react';

export default function ERPServicePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const modules = [
    {
      icon: Coins,
      title: 'Multi-Currency General Ledger',
      desc: 'Real-time double-entry bookkeeping, automated forex adjustments, branch consolidation, and automated bank reconciliation compliant with IFRS and GAAP.',
    },
    {
      icon: Boxes,
      title: 'Multi-Warehouse Logistics & Inventory',
      desc: 'Real-time stock valuation (FIFO, LIFO, Weighted Average), barcode/RFID lot scanning, automated replenishment thresholds, and inter-branch transfer protocols.',
    },
    {
      icon: RefreshCw,
      title: 'Procurement & Vendor Governance',
      desc: 'End-to-end purchase order generation, automated hierarchical approval routing based on monetary thresholds, and supplier performance tracking.',
    },
    {
      icon: Layers,
      title: 'Manufacturing & Bill of Materials (BOM)',
      desc: 'Multi-level BOM engineering, work center routing, capacity planning, scrap tracking, and real-time finished goods costing.',
    },
    {
      icon: Lock,
      title: 'Granular Role-Based Permissions (RBAC)',
      desc: 'Departmental security scopes, two-factor authentication, cryptographic session tracking, and immutable audit logs recording every ledger mutation.',
    },
    {
      icon: GitBranch,
      title: 'Direct Banking & ERP Interoperability',
      desc: 'High-throughput REST and gRPC gateways providing native integration with electronic fund transfers, POS hardware, and tax authority filing APIs.',
    },
  ];

  const comparison = [
    {
      feature: 'Source Code Ownership',
      custom: '100% Client Ownership (Full IP transfer)',
      offTheShelf: 'Proprietary vendor lock-in (zero code access)',
    },
    {
      feature: 'Licensing Fees',
      custom: 'One-time engineering cost (zero per-seat licenses)',
      offTheShelf: '$150 - $400 / user / month indefinitely',
    },
    {
      feature: 'Workflow Flexibility',
      custom: 'Engineered directly to your exact operational hierarchy',
      offTheShelf: 'Forces you to alter your business to fit their system',
    },
    {
      feature: 'Data Sovereignty & Privacy',
      custom: 'Private bare-metal or cloud on your dedicated servers',
      offTheShelf: 'Multi-tenant cloud shared across third-party tenants',
    },
    {
      feature: 'Support & SLAs',
      custom: 'Direct access to principal software engineers 24/7',
      offTheShelf: 'Multi-tiered ticket queues with offshore helpdesks',
    },
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
              <span style={{ color: '#0066ff', fontWeight: 600 }}>Enterprise ERP</span>
            </nav>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                  <span>#Custom Enterprise Resource Planning</span>
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
                  ApexCore Global <span style={{ color: '#0066ff' }}>Enterprise ERP.</span>
                </h1>

                <p
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                  }}
                >
                  Eliminate per-seat subscription models and inflexible legacy frameworks. e-Tech Innovations engineers bespoke ERP platforms that consolidate multi-branch accounting, global supply chains, automated procurement, and operational telemetry into a unified command dashboard.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button onClick={handleOpenContact} className="btn-primary-blue">
                    <span>Request ERP Architecture Review</span>
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

              {/* ERP Media Showcase */}
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
                  src="/images/work-erp.jpg"
                  alt="ApexCore Enterprise ERP Dashboard"
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
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Financial Volume</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>$120M+ Audited</div>
                  </div>
                  <div style={{ height: '30px', width: '1px', background: 'rgba(255, 255, 255, 0.2)' }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Procurement Cycle</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-lime)' }}>-40% Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Architecture Modules */}
        <section style={{ padding: '60px 0 80px', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#System Modules</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Comprehensive modules tailored to your operational blueprint.
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
                      transition: 'all 0.2s ease',
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

        {/* Custom ERP vs Off-The-Shelf Comparison Table */}
        <section style={{ padding: '60px 0 80px', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Strategic Advantage</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              >
                Custom Engineered ERP vs Off-The-Shelf Software
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Why leading enterprises commission e-Tech Innovations instead of paying recurring per-seat fees for bloated generic platforms.
              </p>
            </div>

            <div
              style={{
                overflowX: 'auto',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                borderRadius: '20px',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-glass)', background: 'rgba(0, 102, 255, 0.05)' }}>
                    <th style={{ padding: '20px 24px', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 700 }}>Evaluation Criteria</th>
                    <th style={{ padding: '20px 24px', fontSize: '0.92rem', color: '#0066ff', fontWeight: 700 }}>e-Tech Innovations Custom ERP</th>
                    <th style={{ padding: '20px 24px', fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Commercial Off-The-Shelf (SAP, NetSuite)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < comparison.length - 1 ? '1px solid var(--border-glass)' : 'none' }}>
                      <td style={{ padding: '20px 24px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '20px 24px', fontSize: '0.95rem', color: 'var(--accent-lime)', fontWeight: 600 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={16} />
                          <span>{row.custom}</span>
                        </div>
                      </td>
                      <td style={{ padding: '20px 24px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        {row.offTheShelf}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                  Commission an Enterprise ERP Architecture Blueprint
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Speak directly with a principal enterprise architect. We will review your data flow, multi-branch footprint, and construct an actionable implementation plan.
                </p>
              </div>

              <button onClick={handleOpenContact} className="btn-primary-blue" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                <span>Speak with an ERP Architect</span>
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
