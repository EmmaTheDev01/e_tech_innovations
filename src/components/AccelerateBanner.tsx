'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface AccelerateBannerProps {
  onOpenContact?: () => void;
}

export default function AccelerateBanner({ onOpenContact }: AccelerateBannerProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const bannerRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bannerRef.current) {
            const rect = bannerRef.current.getBoundingClientRect();
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

  return (
    <section
      ref={bannerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '460px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '90px 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
      }}
    >
      {/* 1. Full-bleed Edge-to-Edge Parallax Background Image */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: 0,
          right: 0,
          bottom: '-20%',
          transform: `translateY(${parallaxOffset}px) scale(1.08)`,
          transition: 'transform 0.08s ease-out',
          willChange: 'transform',
          zIndex: 1,
        }}
      >
        <Image
          src="/images/team-banner.jpg"
          alt="Accelerate Innovation With e-Tech Innovations"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          priority
        />
      </div>

      {/* 2. Full-bleed Edge-to-Edge Clean Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLight
            ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.97) 0%, rgba(255, 255, 255, 0.92) 55%, rgba(255, 255, 255, 0.72) 100%)'
            : 'linear-gradient(90deg, rgba(8, 16, 40, 0.96) 0%, rgba(8, 16, 40, 0.90) 55%, rgba(8, 16, 40, 0.75) 100%)',
          zIndex: 2,
        }}
      />



      {/* 3. Centered Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          maxWidth: '1320px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div style={{ maxWidth: '740px' }}>
          {/* Badge */}
          <div style={{ marginBottom: '20px' }}>
            <span
              className="tekni-badge"
              style={{
                fontSize: '0.84rem',
                padding: '7px 18px',
                borderRadius: '6px',
                border: '1px solid rgba(18, 84, 255, 0.25)',
                background: 'rgba(18, 84, 255, 0.08)',
                color: '#1254ff',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
             
              <span>Next-Gen Enterprise Engine</span>
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
              fontWeight: 800,
              color: '#081028',
              lineHeight: 1.16,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
            }}
          >
            Accelerate Operations With e-Tech Innovations’ Enterprise Software
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '1.08rem',
              fontWeight: 500,
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '620px',
            }}
          >
            From multi-warehouse ERP and automated HR payroll to scalable LMS platforms and Hospital Information Systems (HISM) — we engineer high-performance software tailored to your exact business rules.
          </p>

          {/* Action Button: Discover more */}
          <div>
            <Link
              href="/contact"
              onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              className="tekni-btn-solid"
              style={{
                padding: '16px 36px',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                letterSpacing: '0.01em',
              }}
            >
              <span>Discover more</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
