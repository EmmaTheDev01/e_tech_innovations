'use client';

import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'AmaliTech', src: '/images/partners/amalitech.png', width: 3188, height: 750, displayHeight: 42 },
  { name: 'BPR Bank', src: '/images/partners/bpr.png', width: 1120, height: 421, displayHeight: 58 },
  { name: 'LuxDev', src: '/images/partners/luxdev.png', width: 1010, height: 649, displayHeight: 70 },
  { name: 'Vigilance', src: '/images/partners/Vigilance logo.png', width: 1408, height: 768, displayHeight: 66 },
];

export default function ClientLogosMarquee() {
  // Duplicate 4 times for infinite seamless loop
  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  return (
    <section
      style={{
        padding: '36px 0 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: '28px' }}>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Trusted by leading enterprises, government agencies &amp; financial institutions
        </p>
      </div>

      {/* Infinite scrolling logo bar */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '68px',
            animation: 'marqueeScroll 26s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {marqueeList.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="partner-logo-item"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px',
                padding: '6px 12px',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="partner-logo-img"
                style={{
                  height: `${partner.displayHeight}px`,
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .partner-logo-item {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .partner-logo-item:hover {
          transform: translateY(-3px) scale(1.08);
        }

        .partner-logo-img {
          filter: brightness(0) invert(1);
          opacity: 0.95;
          transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
        }

        .partner-logo-item:hover .partner-logo-img {
          opacity: 1;
          filter: brightness(0) invert(1) drop-shadow(0 2px 14px rgba(255, 255, 255, 0.45));
        }

        /* Light Mode: authentic colors, zero borders */
        [data-theme="light"] .partner-logo-item {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        [data-theme="light"] .partner-logo-img {
          filter: none !important;
          opacity: 1 !important;
        }

        @media (prefers-color-scheme: light) {
          :root:not([data-theme="dark"]) .partner-logo-item {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
          }
          :root:not([data-theme="dark"]) .partner-logo-img {
            filter: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
