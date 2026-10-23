'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Database, Cpu, Network, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

interface EnterpriseWorkflowSectionProps {
  onOpenContact?: () => void;
}

export default function EnterpriseWorkflowSection({ onOpenContact }: EnterpriseWorkflowSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            if (rect.top < viewportHeight && rect.bottom > 0) {
              const middle = rect.top + rect.height / 2 - viewportHeight / 2;
              setParallaxOffset(middle * 0.18);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Requirements & Architecture Discovery',
      badge: 'Phase 1 • Blueprint',
      icon: <Database size={22} />,
      desc: 'Complete discovery of your enterprise workflows, legacy database migrations, third-party API boundaries, and compliance parameters.',
      deliverables: ['Detailed software requirements (SRS)', 'Database schema & ERD modeling', 'SOC2 / HIPAA compliance architecture'],
      metric: '100% Architecture Alignment',
    },
    {
      num: '02',
      title: 'Agile Engineering & Sprint Delivery',
      badge: 'Phase 2 • Development',
      icon: <Cpu size={22} />,
      desc: 'Modular, clean-coded development using modern frameworks (Next.js, Spring Boot, Go, Node.js) delivered in transparent two-week sprints.',
      deliverables: ['Bi-weekly staging environment demos', 'Type-safe microservices & REST/GraphQL', 'Continuous integration & automated test suites'],
      metric: '100% Milestone Transparency',
    },
    {
      num: '03',
      title: 'System Integration & Security Audit',
      badge: 'Phase 3 • Verification',
      icon: <Network size={22} />,
      desc: 'End-to-end integration with biometric devices, ERP ledgers, hospital HL7/FHIR servers, and rigorous third-party vulnerability testing.',
      deliverables: ['Air-gapped deployment verification', 'End-to-end penetration testing audit', 'High-load stress & concurrency benchmarks'],
      metric: 'Zero-Defect Production Gate',
    },
    {
      num: '04',
      title: 'Production Cutover & 24/7 Support SLA',
      badge: 'Phase 4 • Live Operations',
      icon: <Activity size={22} />,
      desc: 'Zero-downtime cutover into your private cloud or on-premises servers with round-the-clock telemetry and dedicated sprint support.',
      deliverables: ['Live database data cutover scripts', '24/7/365 infrastructure monitoring', 'Guaranteed 15-min enterprise response SLA'],
      metric: '99.99% Production Uptime SLA',
    },
  ];

  return (
    <section
      ref={containerRef}
      id="workflow"
      style={{
        padding: '100px 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: '0',
          padding: '0 clamp(24px, 4.5vw, 72px)',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <span
            className="tekni-badge"
            style={{
              fontSize: '0.8rem',
              padding: '6px 16px',
              borderRadius: '6px',
              border: '1px solid rgba(18, 84, 255, 0.25)',
              background: 'rgba(18, 84, 255, 0.08)',
              color: '#1254ff',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '16px',
            }}
          >
            <span>IMPLEMENTATION FRAMEWORK</span>
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.6vw, 3.2rem)',
              fontWeight: 800,
              color: '#081028',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              marginBottom: '16px',
            }}
          >
            Our Enterprise Software{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #1254ff 0%, #00d2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Engineering Roadmap
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            From initial architectural blueprinting to production cutover and contract-backed enterprise support.
          </p>
        </div>

        {/* 2-Column Grid: Step Cards on Left, Interactive Deep Dive + Parallax Image on Right */}
        <div
          className="workflow-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Interactive Stepper List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`workflow-step-card ${isActive ? 'active' : ''}`}
                  style={{
                    padding: '24px 28px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    border: isActive ? '1.5px solid #1254ff' : '1px solid rgba(15, 23, 42, 0.08)',
                    background: isActive ? '#ffffff' : '#f8fafc',
                    boxShadow: isActive ? '0 8px 24px rgba(15, 23, 42, 0.08)' : '0 2px 8px rgba(15, 23, 42, 0.03)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '1rem',
                          fontWeight: 800,
                          fontFamily: 'monospace',
                          color: isActive ? '#1254ff' : '#94a3b8',
                        }}
                      >
                        {step.num}
                      </span>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: '20px',
                          background: isActive ? 'rgba(18, 84, 255, 0.1)' : 'rgba(15, 23, 42, 0.04)',
                          color: isActive ? '#1254ff' : '#64748b',
                          border: isActive ? '1px solid rgba(18, 84, 255, 0.25)' : '1px solid rgba(15, 23, 42, 0.08)',
                        }}
                      >
                        {step.badge}
                      </span>
                    </div>

                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: isActive ? '#1254ff' : 'rgba(15, 23, 42, 0.05)',
                        color: isActive ? '#ffffff' : '#475569',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: isActive ? '#081028' : '#1e293b',
                      marginBottom: '8px',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#475569',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Architecture Focus Card with Parallax Background */}
          <div
            className="workflow-focus-card"
            style={{
              borderRadius: '20px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              background: '#ffffff',
              boxShadow: '0 12px 36px rgba(15, 23, 42, 0.06)',
            }}
          >
            {/* Parallax Background Visual */}
            <div
              style={{
                position: 'absolute',
                top: '-15%',
                right: '-10%',
                width: '60%',
                height: '70%',
                opacity: 0.08,
                transform: `translateY(${parallaxOffset}px)`,
                pointerEvents: 'none',
                transition: 'transform 0.1s ease-out',
              }}
            >
              <Image
                src="/images/engineer-work.jpg"
                alt="Architecture Telemetry"
                fill
                sizes="(max-width: 980px) 100vw, 550px"
                style={{ objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>

            {/* Top Detail */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(18, 84, 255, 0.08)',
                  border: '1px solid rgba(18, 84, 255, 0.2)',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#1254ff',
                  marginBottom: '18px',
                }}
              >
                <span>Live Phase Inspection</span>
              </div>

              <h3
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: '#081028',
                  marginBottom: '12px',
                  lineHeight: 1.25,
                }}
              >
                {steps[activeStep].title}
              </h3>

              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '26px',
                }}
              >
                {steps[activeStep].desc}
              </p>

              {/* Deliverables Checklist */}
              <div style={{ marginBottom: '32px' }}>
                <h4
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#64748b',
                    fontWeight: 700,
                    marginBottom: '14px',
                  }}
                >
                  Key Architectural Deliverables
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {steps[activeStep].deliverables.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '0.94rem',
                        color: '#081028',
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle2 size={18} color="#1254ff" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Target Metric & CTA */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                paddingTop: '24px',
                borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                  Benchmark SLA
                </span>
                <span
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#1254ff',
                  }}
                >
                  {steps[activeStep].metric}
                </span>
              </div>

              <Link
                href="/contact"
                onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
                className="tekni-btn-solid"
                style={{
                  padding: '11px 24px',
                  fontSize: '0.92rem',
                  borderRadius: '6px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Request Custom Pipeline</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .workflow-step-card {
          box-shadow: none !important;
        }
        .workflow-step-card.active {
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06) !important;
        }
        [data-theme="light"] .workflow-step-card {
          background: #ffffff !important;
          border-color: rgba(0, 0, 0, 0.08) !important;
          box-shadow: none !important;
        }
        [data-theme="light"] .workflow-step-card.active {
          background: #ffffff !important;
          border-color: rgba(0, 102, 255, 0.45) !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04) !important;
        }
        [data-theme="light"] .workflow-focus-card {
          background: #ffffff !important;
          border-color: rgba(0, 0, 0, 0.08) !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04) !important;
        }
        @media (max-width: 980px) {
          .workflow-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
