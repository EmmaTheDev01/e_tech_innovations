'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface WhyChooseUsBentoProps {
  onOpenContact?: () => void;
}

export default function WhyChooseUsBento({ onOpenContact }: WhyChooseUsBentoProps) {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const reasons = [
    {
      num: '01',
      title: 'How we can help your business?',
      summary:
        'We design, engineer, and deploy tailor-made enterprise software and high-performance native applications across all platforms and operating systems (iOS, Android, Windows, macOS, Linux, and Web) — whether modernizing an outdated ERP, launching an automated HR payroll engine, deploying an LMS, or integrating a HIPAA-compliant Hospital Information System (HISM). We align every line of code to your exact operational workflows.',
    },
    {
      num: '02',
      title: 'Why become our partner?',
      summary:
        'You retain 100% full source code ownership and intellectual property with zero recurring seat license fees. You collaborate directly with principal full-stack engineers who deliver working software in rapid agile sprints with contract-backed SLAs.',
    },
    {
      num: '03',
      title: 'What are the best of e-Tech Innovations?',
      summary:
        'Proven enterprise scale, battle-tested microservices architecture, rigorous data security (SOC 2, HIPAA, HL7/FHIR), and reliable post-launch maintenance with 99.99% uptime guarantees.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      style={{
        padding: '90px 0 110px',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Our Company Heading & Paragraph */}
          <div>
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
              OUR COMPANY
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                marginBottom: '24px',
              }}
            >
              We’ve been thriving in{' '}
              <span style={{ color: '#0066ff' }}>enterprise software &amp; native systems</span>
            </h2>

            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '540px',
              }}
            >
              e-Tech Innovations specializes in technological and software development services across all operating systems and platforms — engineering custom ERPs, native mobile &amp; desktop applications (iOS, Android, Windows, macOS, Linux), automated HR systems, modern LMSs, cloud infrastructure, and hospital networks (HISM). We put a strong focus on the needs of your business to figure out solutions that best fit your demand and nail it.
            </p>

            <Link
              href="/contact"
              onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              className="btn-primary-blue"
              style={{
                padding: '14px 32px',
                fontSize: '0.98rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <span>Join us now</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Column: Numbered List matching Mitech Reference */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {reasons.map((item, idx) => {
              const isOpen = openItem === idx;
              return (
                <div
                  key={item.num}
                  style={{
                    borderTop: idx === 0 ? '1px solid var(--border-glass)' : 'none',
                    borderBottom: '1px solid var(--border-glass)',
                    padding: '28px 0',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenItem(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      padding: 0,
                      gap: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                      <span
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-mono)',
                          color: isOpen ? '#0066ff' : 'var(--text-secondary)',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {item.num}
                      </span>

                      <h3
                        style={{
                          fontSize: '1.22rem',
                          fontWeight: 700,
                          color: isOpen ? 'var(--text-primary)' : 'var(--text-primary)',
                          margin: 0,
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <ArrowRight
                      size={20}
                      style={{
                        color: isOpen ? '#0066ff' : 'var(--text-secondary)',
                        transform: isOpen ? 'translateX(6px)' : 'translateX(0)',
                        transition: 'all 0.25s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        paddingLeft: '52px',
                        paddingTop: '16px',
                        fontSize: '0.96rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.summary}
                    </div>
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
