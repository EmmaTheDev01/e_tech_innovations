'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface PromoAppBannerProps {
  onOpenContact?: () => void;
}

export default function PromoAppBanner({ onOpenContact }: PromoAppBannerProps) {
  return (
    <section
      id="download"
      style={{
        padding: '50px 0 90px',
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
          className="glass-panel"
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            padding: '50px 48px',
            background: 'radial-gradient(ellipse at 80% 50%, rgba(0, 102, 255, 0.25) 0%, rgba(12, 16, 26, 0.95) 70%)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 102, 255, 0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Left Column: Copy & App Store CTA */}
          <div style={{ zIndex: 2 }}>
            <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
              <span>Promo!</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}
            >
              Download e-Tech Innovations App And Start Smarter AI Today
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '520px',
                marginBottom: '36px',
              }}
            >
              Sodales natoque faucibus convallis enim venenatis letius massa amet mauris
              lacus taciti placerat consectetur justo. Sync all your workflows in real-time.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {/* Google Play Button */}
              <button
                onClick={onOpenContact}
                className="btn-primary-blue"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  borderRadius: '12px',
                }}
              >
                <Play size={16} fill="currentColor" />
                <span>Google Play</span>
              </button>

              {/* Apple App Store Button */}
              <button
                onClick={onOpenContact}
                className="btn-primary-blue"
                style={{
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  borderRadius: '12px',
                  background: '#0a1020',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                {/* Apple icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z" />
                </svg>
                <span>App Store</span>
              </button>
            </div>
          </div>

          {/* Right Column: Phone Mockup Visual */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '260px',
                height: '380px',
              }}
            >
              <Image
                src="/images/mobile-app-ui.png"
                alt="e-Tech Innovations Mobile Experience"
                fill
                sizes="260px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
