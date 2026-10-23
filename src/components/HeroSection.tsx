'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 0 100px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      {/* 1. Full-bleed Background Image with Clean Light Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Image
          src="/images/tekni-hero-bg.jpg"
          alt="e-Tech Innovations Engineering Team"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center 35%',
          }}
        />
        {/* Crisp light gradient overlay for light mode legibility */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.92) 50%, rgba(255, 255, 255, 0.60) 100%)',
          }}
        />
        {/* Clean subtle backdrop tint */}
      </div>

      {/* 3. Hero Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          {/* Tekni Pill Badge */}
          <div style={{ marginBottom: '22px' }}>
            <span
              className="tekni-badge"
              style={{
                fontSize: '0.84rem',
                padding: '7px 18px',
                borderRadius: '6px',
                border: '1px solid rgba(18, 84, 255, 0.25)',
                background: 'rgba(18, 84, 255, 0.08)',
                color: '#1254ff',
                letterSpacing: '0.12em',
                fontWeight: 700,
              }}
            >
              SMART TECHNOLOGY &amp; ENTERPRISE SYSTEMS
            </span>
          </div>

          {/* Tekni Display Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#081028',
              marginBottom: '24px',
            }}
          >
            Transforming Ideas <br />
            <span style={{ color: '#1254ff' }}>
              Tech Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              fontWeight: 500,
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '640px',
              marginBottom: '38px',
            }}
          >
            We architect and engineer mission-critical enterprise software, custom platforms, and high-performance native applications built for scale.
          </p>

          {/* Tekni Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '18px',
              alignItems: 'center',
              marginBottom: '50px',
            }}
          >
            {/* Primary Tekni Solid Button */}
            <a
              href="#about-section"
              className="tekni-btn-solid"
              style={{
                fontSize: '1.02rem',
                padding: '16px 36px',
                fontWeight: 700,
              }}
            >
              <span>Discover More</span>
              <ArrowRight size={18} />
            </a>

            {/* Secondary Consultation Button */}
            <Link
              href="/contact"
              onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#081028',
                border: '1px solid rgba(15, 23, 42, 0.16)',
                background: '#ffffff',
                padding: '15px 30px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1254ff';
                e.currentTarget.style.color = '#1254ff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.16)';
                e.currentTarget.style.color = '#081028';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(15, 23, 42, 0.04)';
              }}
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Quick Stats Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '24px',
              paddingTop: '30px',
              borderTop: '1px solid rgba(15, 23, 42, 0.1)',
              maxWidth: '640px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#1254ff',
                  lineHeight: 1.1,
                  marginBottom: '6px',
                }}
              >
                14M+
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                Users Powered
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#1254ff',
                  lineHeight: 1.1,
                  marginBottom: '6px',
                }}
              >
                120+
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                Enterprise Deployments
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#1254ff',
                  lineHeight: 1.1,
                  marginBottom: '6px',
                }}
              >
                99.98%
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                System Reliability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
