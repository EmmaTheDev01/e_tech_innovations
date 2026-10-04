'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowUpRight, Layers } from 'lucide-react';

const Hero3DCanvas = dynamic(() => import('./Hero3DCanvas'), { ssr: false });

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 76px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 0 50px',
        overflow: 'visible',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          alignItems: 'center',
          gap: '40px',
          overflow: 'visible',
        }}
        className="hero-grid"
      >
        {/* Left Column: Copy & Stats */}
        <div style={{ zIndex: 2, overflow: 'visible' }}>
          {/* Green Tag */}
          <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
            <span>#Enterprise Software &amp; Native Applications</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 3.2vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}
          >
            Custom Software. Real <br />
            Business Impact.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '560px',
              marginBottom: '36px',
            }}
          >
            e-Tech Innovations architects and delivers mission-critical software systems and high-performance native applications across all platforms and operating systems (Web, iOS, Android, Windows, macOS, Linux) — from robust ERP &amp; HR systems to next-generation LMS platforms and Hospital Information Systems (HISM).
          </p>

          {/* CTA Buttons - Identical Widths */}
          <div
            className="hero-buttons-container"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '60px',
            }}
          >
            <a
              href="#featured-work"
              className="btn-primary-blue hero-action-btn"
              style={{
                fontSize: '1.02rem',
                padding: '15px 24px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '260px',
                minWidth: '260px',
                maxWidth: '100%',
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Explore Featured Work</span>
              <ArrowUpRight size={18} />
            </a>

            <Link
              href="/contact"
              onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              className="btn-outline-glass hero-action-btn"
              style={{
                fontSize: '1.02rem',
                padding: '15px 24px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '260px',
                minWidth: '260px',
                maxWidth: '100%',
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Request Consultation</span>
            </Link>
          </div>

          {/* Metrics Stats Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border-glass)',
            }}
            className="stats-row"
          >
            <div>
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--accent-lime)',
                  lineHeight: 1.1,
                  marginBottom: '8px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                14M+
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.4,
                }}
              >
                Operations Processed Daily
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--accent-lime)',
                  lineHeight: 1.1,
                  marginBottom: '8px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                99.99%
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.4,
                }}
              >
                System Uptime &amp; SLA
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--accent-lime)',
                  lineHeight: 1.1,
                  marginBottom: '8px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.4,
                }}
              >
                Code Ownership &amp; Customization
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Canvas + Floating AI Companion Card */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '540px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
          }}
        >
          {/* Three.js 3D WebGL Torus Knot Animation */}
          <div
            className="hero-canvas-box"
            style={{
              position: 'relative',
              width: '100%',
              height: '520px',
              zIndex: 1,
              overflow: 'visible',
            }}
          >
            <Hero3DCanvas />
          </div>

          {/* Interactive Floating Enterprise Software Architecture Glass Card */}
          <div
            className="floating-ai-card glass-panel"
            style={{
              position: 'absolute',
              bottom: '15px',
              right: '-24px',
              maxWidth: '310px',
              padding: '16px',
              zIndex: 3,
              borderRadius: '20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--accent-lime)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 102, 255, 0.15)',
              animation: 'floatElement 6s ease-in-out infinite',
            }}
          >
            {/* Enterprise Architecture Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '155px',
                borderRadius: '14px',
                overflow: 'hidden',
                marginBottom: '14px',
                border: '1px solid var(--border-glass)',
              }}
            >
              <Image
                src="/images/work-erp.jpg"
                alt="Enterprise Software Engineering Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 310px"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10, 14, 24, 0.35)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(0, 102, 255, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#ffffff',
                }}
              >
                <Layers size={12} />
                <span>Architecture v4.0</span>
              </div>
            </div>

            {/* Title & Description */}
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '8px',
                lineHeight: 1.3,
              }}
            >
              Enterprise &amp; Native Systems
            </h3>
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              Native applications across iOS, Android, Windows, macOS, and Linux alongside cloud enterprise microservices.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 980px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 980px) {
          .hero-canvas-box {
            height: 400px !important;
          }
          .floating-ai-card {
            right: 0px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-buttons-container {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }
          .hero-action-btn {
            width: 100% !important;
            min-width: 0 !important;
            text-align: center !important;
          }
          .stats-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .hero-canvas-box {
            height: 300px !important;
          }
          .floating-ai-card {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            max-width: 100% !important;
            margin-top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
