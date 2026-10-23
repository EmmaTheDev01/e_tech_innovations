'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsBentoProps {
  onOpenContact?: () => void;
}

export default function WhyChooseUsBento({ onOpenContact }: WhyChooseUsBentoProps) {
  const [openItem, setOpenItem] = useState<number>(0);

  const reasons = [
    {
      num: '01',
      title: 'How we empower your enterprise?',
      summary:
        'We design, engineer, and deploy tailor-made software systems across all platforms and operating systems (iOS, Android, Windows, macOS, Linux, and Web) — whether modernizing an outdated ERP, launching an automated HR payroll engine, deploying an LMS, or integrating a HIPAA-compliant Hospital Information System (HISM). Every line of code matches your exact operational workflows.',
    },
    {
      num: '02',
      title: 'Why choose us as your technology partner?',
      summary:
        'You retain 100% full source code ownership and intellectual property with zero recurring seat licensing penalties. You collaborate directly with principal full-stack engineers who deliver working software in rapid agile sprints with contract-backed SLAs.',
    },
    {
      num: '03',
      title: 'Enterprise reliability & high assurance',
      summary:
        'Proven enterprise scale, battle-tested microservices architecture, rigorous data security (SOC 2, HIPAA, HL7/FHIR), automated CI/CD deployment pipelines, and reliable 24/7 post-launch maintenance with 99.98% uptime guarantees.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      style={{
        padding: '110px 0',
        backgroundColor: '#f8fafc',
        color: '#0f172a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient subtle grid lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(rgba(18, 84, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 84, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.8,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Tekni Heading, Badge & Highlights */}
          <div>
            <span
              className="tekni-badge"
              style={{
                fontSize: '0.8rem',
                padding: '6px 16px',
                marginBottom: '18px',
                borderRadius: '6px',
                border: '1px solid rgba(18, 84, 255, 0.25)',
                background: 'rgba(18, 84, 255, 0.08)',
                color: '#1254ff',
                fontWeight: 700,
              }}
            >
              WHY CHOOSE US
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                color: '#081028',
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                marginBottom: '24px',
              }}
            >
              We’ve been thriving in{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #1254ff 0%, #00d2ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                enterprise software &amp; native systems
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#475569',
                lineHeight: 1.75,
                marginBottom: '36px',
                maxWidth: '560px',
              }}
            >
              e-Tech Innovations specializes in technological and software development services across all operating systems and platforms — engineering custom ERPs, native mobile &amp; desktop applications (iOS, Android, Windows, macOS, Linux), automated HR systems, modern LMSs, and hospital networks (HISM).
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              {[
                'Full IP & Source Code Ownership (Zero Seat Fees)',
                'Direct Collaboration with Senior Software Architects',
                '99.98% High-Availability Production Architecture',
              ].map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(18, 84, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1254ff',
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2 size={16} color="#1254ff" />
                  </div>
                  <span style={{ fontSize: '0.96rem', color: '#1e293b', fontWeight: 600 }}>{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              className="tekni-btn-solid"
              style={{
                padding: '14px 32px',
                fontSize: '0.96rem',
                borderRadius: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <span>Get Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Column: Numbered Interactive Rows (Tekni Light Style) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {reasons.map((item, idx) => {
              const isOpen = openItem === idx;
              return (
                <div
                  key={item.num}
                  onClick={() => setOpenItem(idx)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: isOpen ? '1px solid #1254ff' : '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '28px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen
                      ? '0 8px 24px rgba(15, 23, 42, 0.08)'
                      : '0 2px 8px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: isOpen ? '14px' : '0' }}>
                    <span
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: '#1254ff',
                        background: 'rgba(18, 84, 255, 0.08)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                      }}
                    >
                      {item.num}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.12rem',
                        fontWeight: 700,
                        color: isOpen ? '#1254ff' : '#081028',
                        margin: 0,
                        transition: 'color 0.2s',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {isOpen && (
                    <p
                      style={{
                        fontSize: '0.94rem',
                        color: '#475569',
                        lineHeight: 1.7,
                        margin: 0,
                        paddingLeft: '44px',
                      }}
                    >
                      {item.summary}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
