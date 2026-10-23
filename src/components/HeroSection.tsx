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
        {/* Subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.7,
          }}
        />
      </div>

      {/* 2. Tekni Decorative Cyan/Blue Wireframe Wave on bottom right */}
      <div
        style={{
          position: 'absolute',
          right: '-5%',
          bottom: '-5%',
          width: '55%',
          height: '70%',
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0.75,
        }}
      >
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          <path
            d="M50 500 C 200 450, 300 200, 500 350 C 650 450, 700 250, 850 300"
            stroke="url(#blueWaveGrad)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20 520 C 180 470, 280 230, 480 370 C 630 470, 680 270, 830 320"
            stroke="url(#blueWaveGrad)"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            fill="none"
          />
          <path
            d="M-10 540 C 160 490, 260 260, 460 390 C 610 490, 660 290, 810 340"
            stroke="url(#blueWaveGrad)"
            strokeWidth="1"
            strokeOpacity="0.6"
            fill="none"
          />
          <path
            d="M-40 560 C 140 510, 240 290, 440 410 C 590 510, 640 310, 790 360"
            stroke="url(#blueWaveGrad)"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            fill="none"
          />
          <defs>
            <linearGradient id="blueWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1254ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
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
            <span
              style={{
                background: 'linear-gradient(90deg, #1254ff 0%, #0099ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
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
            e-Tech Innovations architects and delivers mission-critical software systems and high-performance native applications across all platforms (Web, iOS, Android, Windows, macOS, Linux) — from robust ERP &amp; HR platforms to next-generation LMS and Hospital Information Systems.
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
            {/* Primary Tekni Gradient Button (Royal Blue to Cyan) */}
            <a
              href="#about-section"
              className="tekni-btn-gradient"
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
