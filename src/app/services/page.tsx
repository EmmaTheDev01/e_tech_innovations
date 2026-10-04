'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import {
  Database,
  Users2,
  GraduationCap,
  Activity,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  BarChart3,
} from 'lucide-react';

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const services = [
    {
      id: 'erp',
      title: 'Enterprise Resource Planning (ERP)',
      tagline: 'ApexCore Global ERP Suite',
      description:
        'Unified financial ledgers, automated multi-warehouse inventory, procurement workflows, and real-time operational telemetry designed for multi-entity enterprises.',
      image: '/images/work-erp.jpg',
      icon: Database,
      href: '/services/erp',
      highlights: [
        'Multi-currency general ledger & audit reconciliation',
        'Multi-warehouse logistics & barcoding automation',
        'Custom approval matrices & procurement controls',
        '100% on-premises or private cloud deployment',
      ],
      metrics: '40% reduction in procurement cycle times',
    },
    {
      id: 'hrms',
      title: 'HR & Payroll Systems (HRMS)',
      tagline: 'OmniPulse Enterprise Workforce Platform',
      description:
        'End-to-end workforce management integrating multi-country statutory tax engines, direct biometric clock-in hardware, automated self-service, and KPI appraisals.',
      image: '/images/work-hr.jpg',
      icon: Users2,
      href: '/services/hrms',
      highlights: [
        'Automated multi-jurisdiction tax and payroll computation',
        'Biometric hardware & geolocation attendance capture',
        'Employee self-service portals for leave & claims',
        'Configurable 360-degree performance evaluation matrices',
      ],
      metrics: 'Zero payroll computation errors across 10,000+ staff',
    },
    {
      id: 'lms',
      title: 'Learning Management Systems (LMS)',
      tagline: 'EduSphere Corporate & Higher-Ed Academy',
      description:
        'Institutional-grade learning ecosystems with SCORM/xAPI compliance, interactive virtual lecture rooms, automated certification, and structured curriculum paths.',
      image: '/images/work-lms.jpg',
      icon: GraduationCap,
      href: '/services/lms',
      highlights: [
        'SCORM 2004 & xAPI Tin Can standard compatibility',
        'Integrated low-latency WebRTC video lecture suites',
        'Automated multi-tiered question banks & proctored testing',
        'Custom branded student and faculty management portals',
      ],
      metrics: '99.98% uptime during concurrent exam spikes',
    },
    {
      id: 'hism',
      title: 'Hospital Information Systems (HISM)',
      tagline: 'CareMatrix Clinical & Hospital Management',
      description:
        'Mission-critical healthcare infrastructure uniting outpatient queues, electronic medical records (EMR), inpatient ward management, pharmacy dispensing, and insurance billing.',
      image: '/images/work-hism.jpg',
      icon: Activity,
      href: '/services/hism',
      highlights: [
        'HL7/FHIR compliant electronic medical records (EMR)',
        'Inpatient bed telemetry, nursing stations & surgery scheduling',
        'Automated pharmacy formulary & inventory deduction',
        'Multi-tier insurance claims adjudication & billing ledger',
      ],
      metrics: '55% faster patient triage to consultation handoff',
    },
    {
      id: 'custom-software',
      title: 'Bespoke Enterprise Software',
      tagline: 'Architected For Your Proprietary Workflow',
      description:
        'Tailor-made web portals, microservices architectures, legacy mainframe migrations, and robust internal tooling engineered when commercial off-the-shelf software falls short.',
      image: '/images/custom-apps-team.jpg',
      icon: Layers,
      href: '/services/custom-software',
      highlights: [
        'Full IP and clean unencumbered source code transfer',
        'High-concurrency microservices with Go, Python & Next.js',
        'Private cloud orchestration on AWS, Azure or bare metal',
        'Custom REST, GraphQL & gRPC integration middleware',
      ],
      metrics: '100% intellectual property ownership transferred to client',
    },
  ];

  const sdlcSteps = [
    {
      step: '01',
      title: 'Architectural Discovery',
      desc: 'Our principal systems architects analyze your operational workflows, data schemas, and legacy integrations to produce a comprehensive technical specification.',
    },
    {
      step: '02',
      title: 'Iterative Sprint Engineering',
      desc: 'Bi-weekly sprint demos deliver production-grade modules. You review working software early and often with full Git repository access.',
    },
    {
      step: '03',
      title: 'Rigorous Verification & Pentesting',
      desc: 'Automated CI/CD pipelines run unit tests, load simulation up to 100K virtual users, and OWASP Top 10 penetration security audits.',
    },
    {
      step: '04',
      title: 'Turnkey Deployment & SLA Support',
      desc: 'Seamless migration with zero data loss, on-site personnel training, complete source code handover, and contractual 24/7 Tier-3 SLA response.',
    },
  ];

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
        <Navbar onOpenContact={handleOpenContact} />

        {/* Hero Section */}
        <section style={{ padding: '60px 0 40px', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            {/* Breadcrumbs */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#0066ff', fontWeight: 600 }}>Services</span>
            </nav>

            <div style={{ maxWidth: '860px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Enterprise Engineering Services</span>
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
                Mission-critical enterprise software,{' '}
                <span style={{ color: '#0066ff' }}>built to scale.</span>
              </h1>

              <p
                style={{
                  fontSize: '1.18rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '36px',
                }}
              >
                We do not sell generic off-the-shelf subscriptions that constrain your company. e-Tech Innovations engineers bespoke, enterprise-grade software platforms tailored to your organizational hierarchy, regulatory framework, and technical infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Services Directory List */}
        <section style={{ padding: '20px 0 80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-reveal"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    {/* Media Container */}
                    <div
                      style={{
                        position: 'relative',
                        minHeight: '340px',
                        order: isEven ? 1 : 2,
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(10, 15, 29, 0.7) 0%, transparent 60%)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '24px',
                          left: '24px',
                          right: '24px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 16px',
                          background: 'rgba(10, 15, 29, 0.85)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                        }}
                      >
                        <BarChart3 size={18} color="#0066ff" />
                        <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                          {service.metrics}
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div
                      style={{
                        padding: 'clamp(28px, 4vw, 48px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        order: isEven ? 2 : 1,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(0, 102, 255, 0.1)',
                            border: '1px solid rgba(0, 102, 255, 0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0066ff',
                          }}
                        >
                          <IconComponent size={22} />
                        </div>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0066ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {service.tagline}
                        </span>
                      </div>

                      <h2
                        style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '14px',
                          lineHeight: 1.25,
                        }}
                      >
                        {service.title}
                      </h2>

                      <p
                        style={{
                          fontSize: '1.02rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                          marginBottom: '24px',
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '32px' }}>
                        {service.highlights.map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <CheckCircle2 size={16} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '4px' }} />
                            <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <Link
                          href={service.href}
                          className="btn-primary-blue"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                          }}
                        >
                          <span>Explore Architecture</span>
                          <ArrowRight size={16} />
                        </Link>
                        <button
                          onClick={handleOpenContact}
                          style={{
                            background: 'transparent',
                            border: '1px solid var(--border-glass)',
                            color: 'var(--text-primary)',
                            padding: '12px 22px',
                            borderRadius: '12px',
                            fontSize: '0.92rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#0066ff';
                            e.currentTarget.style.color = '#0066ff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-glass)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                          }}
                        >
                          Request Technical Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise SDLC Methodology */}
        <section style={{ padding: '60px 0 80px', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Delivery Methodology</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              >
                Predictable, rigorous software delivery.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Our agile engineering and modern delivery practices have refined an engineering pipeline that eliminates software risk, protects your data, and delivers on exact milestones.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '24px',
              }}
            >
              {sdlcSteps.map((step) => (
                <div
                  key={step.step}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '20px',
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: '#0066ff',
                      fontFamily: 'var(--font-space)',
                      marginBottom: '16px',
                    }}
                  >
                    {step.step}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Architecture Blueprint CTA */}
        <section style={{ padding: '80px 0', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.12) 0%, rgba(10, 15, 29, 0.95) 100%)',
                border: '1px solid rgba(0, 102, 255, 0.3)',
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
                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#0066ff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  Enterprise Systems Advisory
                </span>
                <h2
                  style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                    lineHeight: 1.25,
                  }}
                >
                  Ready to architect your custom enterprise system?
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Schedule a private working session with our principal systems architects. We will evaluate your technical requirements and construct a tailored architecture blueprint.
                </p>
              </div>

              <button
                onClick={handleOpenContact}
                className="btn-primary-blue"
                style={{
                  padding: '16px 36px',
                  fontSize: '1.05rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span>Schedule Architecture Review</span>
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
