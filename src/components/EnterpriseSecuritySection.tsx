import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Server,
  Clock,
  CheckCircle2,
} from 'lucide-react';

interface EnterpriseSecuritySectionProps {
  onOpenContact?: () => void;
}

export default function EnterpriseSecuritySection({ onOpenContact }: EnterpriseSecuritySectionProps) {

  const pillars = [
    {
      icon: <Lock size={26} />,
      title: '100% Source Code & IP Ownership',
      desc: 'All bespoke software code, database schemas, and system architectures belong entirely to your enterprise. No recurring proprietary seat licensing fees.',
      badge: 'Zero Vendor Lock-in',
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'HIPAA, SOC 2 & GDPR Compliance',
      desc: 'Every system is built to stringent international compliance frameworks — including HL7/FHIR protocols for HISM and bank-grade TLS 1.3 / AES-256 encryption.',
      badge: 'Audited Standards',
    },
    {
      icon: <Server size={26} />,
      title: 'Private Cloud & On-Premises Deploy',
      desc: 'Containerized microservices via Docker and Kubernetes deployable in your AWS GovCloud, Azure Enclave, or private on-premises hospital/corporate datacenter.',
      badge: 'Air-Gapped Ready',
    },
    {
      icon: <Clock size={26} />,
      title: '99.99% Availability & Support SLA',
      desc: 'Contract-backed mission-critical reliability guarantees with 24/7/365 telemetry monitoring, automated disaster failover, and rapid support response times.',
      badge: 'Enterprise SLA',
    },
  ];

  return (
    <section
      id="security"
      style={{
        padding: '100px 0',
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
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <span className="dot" />
            <span>Enterprise Security & Quality Standards</span>
          </div>

          <h2 className="section-title">
            Enterprise-Grade Trust, Security & Compliance
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Engineered to Fortune 500 standards, regulated healthcare requirements, and strict enterprise data sovereignty protocols.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          className="scroll-reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px',
            marginBottom: '90px',
          }}
        >
          {pillars.map((item) => (
            <div
              key={item.title}
              className="glass-panel"
              style={{
                padding: '32px 28px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'var(--border-glass)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'var(--accent-blue)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(0, 102, 255, 0.35)',
                    }}
                  >
                    {item.icon}
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      background: 'rgba(0, 102, 255, 0.12)',
                      color: 'var(--accent-blue)',
                      border: '1px solid rgba(0, 102, 255, 0.25)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '24px',
                  fontSize: '0.85rem',
                  color: 'var(--accent-lime)',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={16} />
                <span>Enterprise Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Security Consultation CTA */}
        <div
          className="glass-panel"
          style={{
            padding: '28px 36px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
              Have strict compliance or sovereignty requirements?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
              Our security architects assist with HL7/FHIR, biometric encryption, and private VPC deployment audits.
            </p>
          </div>
          {onOpenContact ? (
            <button
              onClick={onOpenContact}
              className="btn-primary-blue"
              style={{
                padding: '12px 24px',
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Request Security Consultation
            </button>
          ) : (
            <Link
              href="/contact"
              className="btn-primary-blue"
              style={{
                padding: '12px 24px',
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Request Security Consultation
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

