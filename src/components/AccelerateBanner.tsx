'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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
            // Only calculate if visible in viewport
            if (rect.top < viewportHeight && rect.bottom > 0) {
              const middle = rect.top + rect.height / 2 - viewportHeight / 2;
              setParallaxOffset(middle * 0.22);
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
        padding: '40px 0 80px',
        position: 'relative',
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
            position: 'relative',
            width: '100%',
            minHeight: '440px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: isLight ? '0 16px 40px rgba(0, 0, 0, 0.06)' : '0 24px 60px rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            transition: 'border 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Parallax Background Image Container */}
          <div
            style={{
              position: 'absolute',
              top: '-15%',
              left: 0,
              right: 0,
              bottom: '-15%',
              transform: `translateY(${parallaxOffset}px) scale(1.1)`,
              transition: 'transform 0.08s ease-out',
              willChange: 'transform',
            }}
          >
            <Image
              src="/images/team-banner.jpg"
              alt="Accelerate Innovation With e-Tech Innovations"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Clean Solid Overlay (White in Light Mode, Dark in Dark Mode) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: isLight ? 'rgba(255, 255, 255, 0.91)' : 'rgba(7, 9, 14, 0.82)',
              transition: 'background 0.3s ease',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              padding: '60px 48px',
              maxWidth: '680px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: isLight ? 'rgba(0, 102, 255, 0.08)' : 'rgba(0, 102, 255, 0.2)',
                border: isLight ? '1px solid rgba(0, 102, 255, 0.25)' : '1px solid rgba(0, 102, 255, 0.4)',
                borderRadius: '30px',
                padding: '6px 14px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#0066ff',
                marginBottom: '20px',
              }}
            >
              <span>Next-Gen Enterprise Engine</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 800,
                color: isLight ? '#0f172a' : '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                transition: 'color 0.3s ease',
              }}
            >
              Accelerate Operations With e-Tech Innovations’ Enterprise Software
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: isLight ? '#475569' : '#cbd5e1',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '560px',
                transition: 'color 0.3s ease',
              }}
            >
              From multi-warehouse ERP and automated HR payroll to scalable LMS platforms and Hospital Information Systems (HISM) — we engineer high-performance software tailored to your exact business rules.
            </p>

            <Link
              href="/contact"
              onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              className="btn-primary-blue"
              style={{
                padding: '14px 30px',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
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
