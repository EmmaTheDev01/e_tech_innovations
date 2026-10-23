'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Globe, ShieldCheck, Cpu, Cloud, ArrowRight } from 'lucide-react';

interface AboutCompanySectionProps {
  onOpenContact?: () => void;
}

export default function AboutCompanySection({ onOpenContact }: AboutCompanySectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const features = [
    {
      title: 'Enterprise Security & System Integrity',
      desc: 'Bank-grade encryption, role-based access control (RBAC), and rigorous vulnerability testing protect your mission-critical organizational data across all environments.',
    },
    {
      title: 'Regulatory Compliance & Risk Governance',
      desc: 'Full compliance with international standards, automated audit trails, and strict data governance safeguards built directly into every ERP and financial module.',
    },
    {
      title: 'Cloud Architecture & Multi-Platform Native Migration',
      desc: 'Seamless migration of legacy workflows to modern distributed microservices and native multi-platform apps (Web, iOS, Android, macOS, Windows).',
    },
  ];

  return (
    <section
      id="about-section"
      style={{
        padding: '110px 0',
        backgroundColor: '#ffffff',
        color: '#0f172a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle decorative cross marks */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '5%',
          fontSize: '28px',
          color: '#38bdf8',
          opacity: 0.6,
          fontWeight: 300,
          userSelect: 'none',
        }}
      >
        ✕
      </div>
      <div
        style={{
          position: 'absolute',
          top: '70px',
          left: '3%',
          fontSize: '32px',
          color: '#1254ff',
          opacity: 0.4,
          userSelect: 'none',
        }}
      >
        ~
      </div>

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Image with Signature Tekni Royal Blue Overlapping Stat Card */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              height: '520px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
            }}
          >
            <Image
              src="/images/tekni-about-team.jpg"
              alt="e-Tech Innovations Engineering Leadership"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Signature Overlapping Blue Stat Box */}
          <div
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-20px',
              backgroundColor: '#1254ff',
              color: '#ffffff',
              padding: '36px 32px',
              borderRadius: '6px',
              boxShadow: '0 12px 32px rgba(15, 23, 42, 0.15)',
              minWidth: '270px',
              zIndex: 3,
            }}
            className="tekni-stat-box"
          >
            {/* Stat Item 1 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '26px' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={28} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '2.1rem', fontWeight: 800, lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '0.86rem', opacity: 0.95, marginTop: '4px', fontWeight: 600 }}>
                  Code Ownership
                </div>
              </div>
            </div>

            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.2)', marginBottom: '24px' }} />

            {/* Stat Item 2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Globe size={28} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '2.1rem', fontWeight: 800, lineHeight: 1 }}>120+</div>
                <div style={{ fontSize: '0.86rem', opacity: 0.95, marginTop: '4px', fontWeight: 600 }}>
                  Enterprise Clients
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: About Content & Accordion Features */}
        <div>
          {/* Pill Badge */}
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '6px',
                border: '1px solid #bfdbfe',
                background: '#eff6ff',
                color: '#1254ff',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              ABOUT OUR COMPANY
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.6vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#0b132b',
              marginBottom: '20px',
              letterSpacing: '-0.025em',
            }}
          >
            Discover Innovative <br />
            Solutions &amp; Technology
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 450,
              color: '#334155',
              lineHeight: 1.75,
              marginBottom: '36px',
            }}
          >
            We work intimately to understand your organization’s core operational challenges and are driven to engineer resilient, scalable enterprise software. From mission-critical ERPs and automated HRMS to healthcare infrastructure and specialized native applications, we build technology that empowers long-term growth.
          </p>

          {/* Interactive Feature Accordion (Tekni Style) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {features.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={item.title}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    borderLeft: isActive ? '3.5px solid #1254ff' : '3.5px solid #e2e8f0',
                    paddingLeft: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.14rem',
                      fontWeight: 700,
                      color: isActive ? '#1254ff' : '#0f172a',
                      marginBottom: '8px',
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.title}
                  </h3>
                  {isActive && (
                    <p style={{ fontSize: '0.96rem', fontWeight: 450, color: '#475569', lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action button */}
          <Link
            href="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#1254ff',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '6px',
              fontSize: '0.96rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0a38b8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1254ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Learn More About Us</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .tekni-stat-box {
            position: static !important;
            margin-top: 20px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
