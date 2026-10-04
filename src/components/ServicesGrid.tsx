'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Users,
  GraduationCap,
  Activity,
  Server,
  Smartphone,
  ArrowRight,
} from 'lucide-react';

interface ServicesGridProps {
  onOpenContact?: () => void;
}

export default function ServicesGrid({ onOpenContact }: ServicesGridProps) {
  const services = [
    {
      num: '01',
      title: 'Enterprise ERP Systems',
      icon: <Building2 size={26} />,
      desc: 'Scalable multi-warehouse inventory, real-time general ledger accounting, automated procurement, and manufacturing batch tracking.',
    },
    {
      num: '02',
      title: 'HR & Payroll Systems (HRMS)',
      icon: <Users size={26} />,
      desc: 'Automated global payroll, biometric hardware synchronization, self-service employee portals, leave approval workflows, and talent KPIs.',
    },
    {
      num: '03',
      title: 'Learning Management (LMS)',
      icon: <GraduationCap size={26} />,
      desc: 'SCORM 1.2/2004 and xAPI compliant digital learning, WebRTC virtual classrooms, automated grading, and cryptographic certification.',
    },
    {
      num: '04',
      title: 'Hospital Information Systems (HISM)',
      icon: <Activity size={26} />,
      desc: 'HL7/FHIR compliant electronic medical records (EMR), inpatient ward tracking, pharmacy dispensing, and insurance billing.',
    },
    {
      num: '05',
      title: 'Cloud Architecture & DevOps',
      icon: <Server size={26} />,
      desc: 'Containerized Kubernetes microservices, multi-region CI/CD pipelines, automated failover, and zero-downtime database migrations.',
    },
    {
      num: '06',
      title: 'Native Apps & Bespoke Software',
      icon: <Smartphone size={26} />,
      desc: 'High-performance native applications across all operating systems — iOS, Android, Windows, macOS, and Linux — engineered with offline sync and hardware integration.',
    },
  ];

  return (
    <section
      id="capabilities"
      style={{
        padding: '90px 0 100px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Section Header Matching Reference Image */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            OUR SERVICES
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.4vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.22,
              letterSpacing: '-0.025em',
            }}
          >
            For your very specific industry, we have{' '}
            <span style={{ color: '#0066ff' }}>highly-tailored software solutions.</span>
          </h2>
        </div>

        {/* Cards Grid with Top-Left Icon Cutout and Animate-on-Hover Learn More Button */}
        <div
          className="scroll-reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '36px 28px',
            marginBottom: '50px',
          }}
        >
          {services.map((item) => (
            <div
              key={item.num}
              className="glass-panel service-interactive-card"
              style={{
                position: 'relative',
                padding: '44px 32px 36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                borderRadius: '24px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '330px',
              }}
            >
              {/* Top-Left Cutout Socket with Icon */}
              <div
                className="service-icon-socket"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: 'rgba(0, 102, 255, 0.08)',
                  border: '1.5px solid rgba(0, 102, 255, 0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0066ff',
                  marginBottom: '26px',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '14px',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '28px',
                  maxWidth: '340px',
                  flexGrow: 1,
                }}
              >
                {item.desc}
              </p>

              {/* Animate on Hover Learn More Button (Default hidden / no button at all) */}
              <div
                className="service-hover-btn-wrapper"
                style={{
                  width: '100%',
                  marginTop: 'auto',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Link
                  href="/contact"
                  className="service-hover-btn"
                  aria-label={`Learn more about ${item.title}`}
                  style={{
                    padding: '11px 24px',
                    borderRadius: '30px',
                    background: '#0066ff',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Challenge Prompt matching reference */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.02rem',
            color: 'var(--text-secondary)',
          }}
        >
          <span>Challenges are just opportunities in disguise. </span>
          <Link
            href="/contact"
            onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0066ff',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: 'inherit',
              padding: 0,
            }}
          >
            Take the challenge!
          </Link>
        </div>
      </div>

      <style jsx>{`
        /* By default show no button at all */
        .service-hover-btn {
          opacity: 0;
          visibility: hidden;
          transform: translateY(12px);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Clean card hover without glowing neon effects */
        .service-interactive-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 102, 255, 0.4) !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1) !important;
        }

        .service-interactive-card:hover .service-hover-btn {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
          box-shadow: none !important;
        }

        .service-interactive-card:hover .service-icon-socket {
          transform: scale(1.05);
          background: rgba(0, 102, 255, 0.12);
          border-color: rgba(0, 102, 255, 0.5);
          box-shadow: none !important;
        }

        [data-theme="light"] .service-interactive-card {
          background: #ffffff !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05) !important;
        }

        [data-theme="light"] .service-hover-btn {
          box-shadow: none !important;
        }

        [data-theme="light"] .service-interactive-card:hover {
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08) !important;
          border-color: rgba(0, 102, 255, 0.4) !important;
        }

        [data-theme="light"] .service-interactive-card:hover .service-icon-socket {
          box-shadow: none !important;
        }
      `}</style>
    </section>
  );
}
