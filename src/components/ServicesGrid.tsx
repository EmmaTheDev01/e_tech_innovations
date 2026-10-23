'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Users,
  GraduationCap,
  Activity,
  Cpu,
  Smartphone,
  ArrowRight,
  Globe,
  Layers,
  Shield,
  Workflow,
} from 'lucide-react';

interface ServicesGridProps {
  onOpenContact?: () => void;
}

export default function ServicesGrid({ onOpenContact }: ServicesGridProps) {
  const services = [
    {
      num: '01',
      title: 'Enterprise ERP Systems',
      href: '/services/erp',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1254ff" strokeWidth="2">
          <circle cx="24" cy="24" r="20" strokeDasharray="4 2" />
          <path d="M24 4V44M4 24H44" />
          <ellipse cx="24" cy="24" rx="10" ry="20" />
        </svg>
      ),
      desc: 'Scalable multi-warehouse inventory, real-time general ledger accounting, automated procurement, and manufacturing batch tracking.',
    },
    {
      num: '02',
      title: 'HR & Payroll Systems (HRMS)',
      href: '/services/hrms',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1254ff" strokeWidth="2">
          <rect x="6" y="10" width="36" height="28" rx="4" />
          <path d="M16 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M6 22h36" />
          <circle cx="24" cy="30" r="3" />
        </svg>
      ),
      desc: 'Automated global payroll, biometric hardware synchronization, employee self-service portals, and integrated KPI tracking.',
    },
    {
      num: '03',
      title: 'Learning Management (LMS)',
      href: '/services/lms',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1254ff" strokeWidth="2">
          <path d="M24 6L4 16l20 10 20-10L24 6z" />
          <path d="M10 19v12c0 6 6 11 14 11s14-5 14-11V19" />
        </svg>
      ),
      desc: 'SCORM and xAPI compliant digital learning, WebRTC virtual classrooms, automated grading, and cryptographic certificate issuance.',
    },
    {
      num: '04',
      title: 'Hospital Information Systems (HISM)',
      href: '/services/hism',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1254ff" strokeWidth="2">
          <circle cx="24" cy="24" r="18" />
          <path d="M24 14v20M14 24h20" strokeWidth="2.5" />
        </svg>
      ),
      desc: 'HL7/FHIR compliant electronic medical records, inpatient ward tracking, digital pharmacy dispensing, and insurance claims billing.',
    },
    {
      num: '05',
      title: 'Enterprise AI & Automation',
      href: '/services#ai-systems',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1254ff" strokeWidth="2">
          <rect x="10" y="10" width="28" height="28" rx="6" />
          <circle cx="24" cy="24" r="6" />
          <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
        </svg>
      ),
      desc: 'Fine-tuned LLMs, private RAG knowledge bases, intelligent document extraction, automated workflows, and predictive analytics.',
    },
    {
      num: '06',
      title: 'Custom Native Applications',
      href: '/services/custom-software',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#1254ff" strokeWidth="2">
          <rect x="8" y="6" width="32" height="36" rx="4" />
          <path d="M18 12h12M18 18h12M18 24h6" />
          <circle cx="24" cy="36" r="2" />
        </svg>
      ),
      desc: 'High-performance native applications across Web, iOS, Android, Windows, macOS, and Linux with full hardware integration and offline sync.',
    },
  ];

  return (
    <section
      id="services-section"
      style={{
        padding: '110px 0',
        backgroundColor: '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background subtle wavy curves */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="100" r="250" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="400" cy="100" r="350" stroke="#e2e8f0" strokeWidth="1" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Tekni Header with 2-Column or Stacked Layout */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            marginBottom: '60px',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '6px',
                border: '1px solid #bfdbfe',
                background: '#eff6ff',
                color: '#1254ff',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              OUR SERVICES
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.4vw, 3rem)',
                fontWeight: 700,
                color: '#0b132b',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
              }}
            >
              Technical solutions that revolutionize your business.
            </h2>
          </div>

          <Link
            href="/services"
            className="tekni-btn-gradient"
            style={{
              padding: '14px 28px',
              fontWeight: 600,
              fontSize: '0.94rem',
            }}
          >
            <span>View All Services</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Services Cards Grid (Tekni Style) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '30px',
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.num}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '40px 32px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)',
                position: 'relative',
              }}
              className="tekni-service-card"
            >
              <div>
                {/* Minimalist Wireframe Icon */}
                <div
                  style={{
                    marginBottom: '26px',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px',
                    background: '#eff6ff',
                  }}
                >
                  {svc.icon}
                </div>

                {/* Connecting Line & Step Dot */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#1254ff',
                    }}
                  />
                  <span
                    style={{
                      height: '1px',
                      flex: 1,
                      background: '#e2e8f0',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#94a3b8',
                    }}  
                  >
                    {svc.num}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontSize: '1.28rem',
                    fontWeight: 750,
                    color: '#0b132b',
                    marginBottom: '14px',
                    lineHeight: 1.3,
                  }}
                >
                  {svc.title}
                </h3>

                {/* Service Description */}
                <p
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 450,
                    color: '#334155',
                    lineHeight: 1.68,
                    marginBottom: '32px',
                  }}
                >
                  {svc.desc}
                </p>
              </div>

              {/* Tekni Circular Blue Arrow Button */}
              <div>
                <Link
                  href={svc.href}
                  className="tekni-btn-circle"
                  aria-label={`Learn more about ${svc.title}`}
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tekni-service-card:hover {
          transform: translateY(-6px);
          border-color: #93c5fd !important;
          box-shadow: 0 16px 36px rgba(18, 84, 255, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
