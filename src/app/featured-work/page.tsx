'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ChevronRight,
  ArrowRight,
  Database,
  Users2,
  Building,
  FileText,
  Cpu,
  Layers,
} from 'lucide-react';

export default function FeaturedWorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'itracom-erp',
      category: 'erp',
      categoryName: 'Enterprise ERP',
      title: 'ERP for Itracom Holding Group',
      client: 'Itracom Holding Group',
      image: '/images/work-erp.jpg',
      icon: Database,
      metrics: [
        { label: 'Supply Chain Sync', value: '100% Real-Time' },
        { label: 'Procurement Efficiency', value: '+45%' },
        { label: 'Inventory Auditing', value: '100% Traceable' },
      ],
      challenge:
        'Itracom Holding Group required a unified, high-performance ERP system to coordinate large-scale industrial manufacturing, multi-entity financial accounting, complex supply chains, and extensive warehouse inventories.',
      solution:
        'Architected and deployed a tailor-made ERP suite providing real-time multi-warehouse inventory reconciliation, automated purchase approvals, batch tracking for industrial production, and centralized general ledgers.',
      techStack: ['Next.js', 'Go Microservices', 'PostgreSQL Cluster', 'Redis', 'Docker'],
      link: '/services/erp',
    },
    {
      id: 'volkswagen-invoice',
      category: 'invoice',
      categoryName: 'Billing & Invoicing',
      title: 'Invoice Management System for Volkswagen Rwanda',
      client: 'Volkswagen Rwanda',
      image: '/images/work-custom.jpg',
      icon: FileText,
      metrics: [
        { label: 'Billing Latency', value: 'Instantaneous' },
        { label: 'Audit Accuracy', value: '100.00%' },
        { label: 'Reconciliation', value: 'Automated' },
      ],
      challenge:
        'Manual fleet billing and invoicing led to reconciliation delays, complex multi-tier approvals, and paper-intensive tax documentation for dealership vehicle sales and corporate services.',
      solution:
        'Engineered a streamlined, automated invoice management platform for Volkswagen Rwanda that connects billing workflows, automated tax authority compliance, multi-tier corporate authorizations, and instant financial reporting.',
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Secure Gateways'],
      link: '/services/custom-software',
    },
    {
      id: 'coopedu-recruitment',
      category: 'ai-recruitment',
      categoryName: 'AI & Recruitment',
      title: 'AI Powered e-Recruitment System for Coopedu PLC',
      client: 'Coopedu PLC',
      image: '/images/work-hr.jpg',
      icon: Cpu,
      metrics: [
        { label: 'Screening Speed', value: '10x Faster' },
        { label: 'Candidate Scoring', value: 'AI-Powered' },
        { label: 'Time-to-Hire', value: '-60%' },
      ],
      challenge:
        'Processing thousands of job applications manually created bottlenecks in candidate screening, subjective evaluation inconsistencies, and delayed hiring turnaround.',
      solution:
        'Developed an intelligent AI-powered e-recruitment platform for Coopedu PLC featuring automated resume parsing, semantic candidate scoring, structured interview pipelines, and applicant notification automation.',
      techStack: ['Next.js', 'Python / AI Models', 'PostgreSQL', 'FastAPI', 'Redis'],
      link: '/services/custom-software',
    },
    {
      id: 'stock-management',
      category: 'stock',
      categoryName: 'Stock Management',
      title: 'Real-Time Stock Management System',
      client: 'Enterprise Supply & Retail Logistics',
      image: '/images/work-lms.jpg',
      icon: Layers,
      metrics: [
        { label: 'Stock Visibility', value: '100% Real-Time' },
        { label: 'Discrepancy Rate', value: '< 0.01%' },
        { label: 'Order Fulfillment', value: '+50% Speed' },
      ],
      challenge:
        'Managing multiple warehouse facilities with delayed stock reconciliation, stockouts during peak distribution, and lack of serial batch traceability.',
      solution:
        'Built a high-throughput stock and warehouse management system with real-time barcode scanning, automated low-stock reorder triggers, dispatch manifests, and shrinkage audit prevention.',
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.IO', 'Docker'],
      link: '/services/custom-software',
    },
    {
      id: 'hrms-system',
      category: 'hrms',
      categoryName: 'HR & Payroll',
      title: 'Enterprise HR Management System (HRMS)',
      client: 'Corporate Enterprise Clients',
      image: '/images/work-hism.jpg',
      icon: Users2,
      metrics: [
        { label: 'Payroll Accuracy', value: '100.00%' },
        { label: 'Biometric Sync', value: 'Real-Time' },
        { label: 'Admin Overhead', value: '-70%' },
      ],
      challenge:
        'Fragmented workforce management, manual attendance tracking, and error-prone payroll computing across diverse departments and shift patterns.',
      solution:
        'Engineered a robust HRMS platform integrating biometric attendance hardware, automated statutory tax calculations, leave approval workflows, and employee self-service portals.',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Hardware Sockets', 'AWS'],
      link: '/services/hrms',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filters = [
    { id: 'all', name: 'All Deployments' },
    { id: 'erp', name: 'ERP Systems' },
    { id: 'invoice', name: 'Billing & Invoicing' },
    { id: 'ai-recruitment', name: 'AI & Recruitment' },
    { id: 'stock', name: 'Stock Management' },
    { id: 'hrms', name: 'HR & Payroll' },
  ];

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
        <Navbar />

        {/* Hero Section */}
        <section style={{ padding: '60px 0 40px', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#0066ff', fontWeight: 600 }}>Featured Work</span>
            </nav>

            <div style={{ maxWidth: '860px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Case Studies & Production Deployments</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                Proven enterprise software,{' '}
                <span style={{ color: '#0066ff' }}>delivering real ROI.</span>
              </h1>

              <p
                style={{
                  fontSize: '1.18rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '36px',
                }}
              >
                Explore our portfolio of mission-critical systems in active production. Each platform was engineered to replace inefficient manual processes or costly off-the-shelf software with tailor-made, high-reliability architecture.
              </p>

              {/* Filter Pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                {filters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    style={{
                      background: activeFilter === f.id ? '#0066ff' : 'var(--bg-card)',
                      color: activeFilter === f.id ? '#ffffff' : 'var(--text-secondary)',
                      border: activeFilter === f.id ? '1px solid #0066ff' : '1px solid var(--border-glass)',
                      padding: '10px 20px',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section style={{ padding: '20px 0 80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
              {filteredProjects.map((p) => {
                const IconComponent = p.icon;

                return (
                  <div
                    key={p.id}
                    id={p.id}
                    className="scroll-reveal"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {/* Media Showcase */}
                    <div style={{ position: 'relative', minHeight: '380px' }}>
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
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
                          top: '24px',
                          left: '24px',
                          background: 'rgba(0, 102, 255, 0.9)',
                          color: '#ffffff',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        <IconComponent size={14} />
                        <span>{p.categoryName}</span>
                      </div>

                      {/* Floating Key Metrics */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '24px',
                          left: '24px',
                          right: '24px',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '12px',
                          background: 'rgba(10, 15, 29, 0.9)',
                          backdropFilter: 'blur(12px)',
                          padding: '14px 18px',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                        }}
                      >
                        {p.metrics.map((m, idx) => (
                          <div key={idx} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                              {m.value}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div style={{ padding: 'clamp(28px, 4vw, 44px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <Building size={16} color="#0066ff" />
                        <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                          {p.client}
                        </span>
                      </div>

                      <h2
                        style={{
                          fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          marginBottom: '16px',
                          lineHeight: 1.25,
                        }}
                      >
                        {p.title}
                      </h2>

                      {/* Challenge & Solution */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                        <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px 18px', borderRadius: '12px', borderLeft: '3px solid #ef4444' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Operational Challenge</span>
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '4px' }}>
                            {p.challenge}
                          </p>
                        </div>
                        <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px 18px', borderRadius: '12px', borderLeft: '3px solid var(--accent-lime)' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-lime)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Delivered Architecture</span>
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '4px' }}>
                            {p.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack Tags */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                        {p.techStack.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              background: 'var(--border-glass)',
                              padding: '5px 12px',
                              borderRadius: '8px',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <Link
                          href={p.link}
                          className="btn-primary-blue"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                          }}
                        >
                          <span>Explore System Architecture</span>
                          <ArrowRight size={16} />
                        </Link>
                        <Link
                          href="/contact"
                          style={{
                            background: 'transparent',
                            border: '1px solid var(--border-glass)',
                            color: 'var(--text-primary)',
                            padding: '12px 20px',
                            borderRadius: '12px',
                            fontSize: '0.92rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                          }}
                        >
                          Request Live Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                  Have an enterprise system to build or modernize?
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Let our principal software architects conduct a technical requirements review and provide a free preliminary architecture blueprint.
                </p>
              </div>

              <Link href="/contact" className="btn-primary-blue" style={{ padding: '16px 36px', fontSize: '1.05rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>Schedule Working Session</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
