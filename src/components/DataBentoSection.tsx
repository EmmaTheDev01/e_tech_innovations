'use client';

import React from 'react';
import Link from 'next/link';

interface DataBentoSectionProps {
  onOpenContact?: () => void;
}

export default function DataBentoSection({ onOpenContact }: DataBentoSectionProps) {
  // Proportional SVG paths calibrated to viewBox="0 0 360 210"
  const purplePath =
    'M 35 185 C 58 182, 75 174, 90 152 C 104 135, 116 142, 130 146 C 146 150, 162 126, 178 98 C 190 78, 200 68, 212 70 C 224 72, 232 110, 244 108 C 258 104, 268 58, 280 52 C 294 46, 304 68, 316 64 C 330 60, 340 40, 355 42';

  const dashedPath =
    'M 35 176 C 65 152, 90 134, 115 144 C 140 154, 165 128, 190 120 C 215 112, 235 138, 255 156 C 275 162, 295 148, 312 124 C 328 102, 342 92, 355 78';

  return (
    <section
      id="about"
      style={{
        padding: '50px 0 80px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.48fr) minmax(0, 1fr)',
          gap: '24px',
          alignItems: 'stretch',
        }}
        className="data-bento-grid"
      >
        {/* Card 1: Data-Driven Decisions + Embedded Dashboard Widget */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            borderRadius: '24px',
            padding: '38px 0 0 38px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '20px',
            alignItems: 'end',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          }}
          className="card1-split-layout"
        >
          {/* Left Column: Copy & Action */}
          <div style={{ paddingBottom: '38px', paddingRight: '8px' }}>
            <div
              style={{
                color: 'var(--accent-lime)',
                fontSize: '0.98rem',
                fontWeight: 600,
                letterSpacing: '0.01em',
                marginBottom: '16px',
              }}
            >
              Trusted Company
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.85rem, 2.5vw, 2.35rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                marginBottom: '16px',
              }}
            >
              Powering Over 10,000+ Data-Driven Decisions Daily
            </h2>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              Sodales posuere sociosqu dolor finibus viverra efficitur placerat sapien platea lacus arcu
              condimentum venenatis dignissim
            </p>

            <Link
              href="/contact"
              onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              className="btn-primary-blue"
              style={{
                padding: '13px 28px',
                borderRadius: '10px',
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Learn more
            </Link>
          </div>

          {/* Right Column: Embedded Dashboard Card */}
          <div
            className="databento-dashboard-card"
            style={{
              borderTopLeftRadius: '22px',
              borderTopRightRadius: '22px',
              borderBottom: 'none',
              padding: '24px 20px 0',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top row */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span
                      style={{
                        background: '#0066ff',
                        color: '#ffffff',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '2px 7px',
                        borderRadius: '5px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      MAU
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>JAN 2026</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      5.24k
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent-lime)',
                        fontWeight: 700,
                        background: 'var(--accent-lime-tag-bg)',
                        padding: '3px 7px',
                        borderRadius: '6px',
                        border: '1px solid var(--accent-lime-tag-border)',
                      }}
                    >
                      ▲ 25%
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div
                    className="databento-filter-pill"
                    style={{
                      borderRadius: '8px',
                      padding: '4px 10px',
                      fontSize: '0.72rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    <span>Daily active users</span>
                    <span style={{ fontSize: '0.65rem' }}>▾</span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                    Last 28 Days
                  </div>
                </div>
              </div>
            </div>

            {/* SVG Chart with Y-axis and wavy lines filling the lower widget */}
            <div style={{ position: 'relative', width: '100%', height: '210px', marginTop: '16px' }}>
              <svg
                viewBox="0 0 360 210"
                style={{ width: '100%', height: '100%', overflow: 'visible' }}
                preserveAspectRatio="none"
              >
                {/* Y-axis labels */}
                <text x="4" y="34" fill="var(--text-muted)" fontSize="10.5" fontFamily="var(--font-mono)">
                  6K
                </text>
                <text x="4" y="84" fill="var(--text-muted)" fontSize="10.5" fontFamily="var(--font-mono)">
                  5K
                </text>
                <text x="4" y="134" fill="var(--text-muted)" fontSize="10.5" fontFamily="var(--font-mono)">
                  4K
                </text>
                <text x="4" y="184" fill="var(--text-muted)" fontSize="10.5" fontFamily="var(--font-mono)">
                  3K
                </text>

                {/* Dashed reference grid lines */}
                <line x1="26" y1="30" x2="355" y2="30" stroke="var(--border-glass)" strokeDasharray="3 3" />
                <line x1="26" y1="80" x2="355" y2="80" stroke="var(--border-glass)" strokeDasharray="3 3" />
                <line x1="26" y1="130" x2="355" y2="130" stroke="var(--border-glass)" strokeDasharray="3 3" />
                <line x1="26" y1="180" x2="355" y2="180" stroke="var(--border-glass)" strokeDasharray="3 3" />

                {/* Secondary dashed comparison line */}
                <path
                  d={dashedPath}
                  fill="none"
                  stroke="var(--border-glass-bright)"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                />

                {/* Primary electric purple wavy line */}
                <path
                  d={purplePath}
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2: 100+ Popular Platforms Dock */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            borderRadius: '24px',
            padding: '38px 34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Top: 4x3 Embossed Squircle Icon Dock matching image */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 58px)',
              gap: '12px',
              justifyContent: 'center',
              padding: '10px 0 32px',
            }}
          >
            {/* Row 1, Col 1: Spotify */}
            <div className="dock-tile">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>

            {/* Row 1, Col 2: Blank embossed tile */}
            <div className="dock-tile" />

            {/* Row 1, Col 3: Slack */}
            <div className="dock-tile">
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path fill="#E01E5A" d="M6 15a3 3 0 0 1-3-3 3 3 0 0 1 3-3h3v3a3 3 0 0 1-3 3zm1 0a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-3h3z" />
                <path fill="#36C5F0" d="M9 6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3H9V6zm0 1a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3H9V7z" />
                <path fill="#2EB67D" d="M18 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-3V9h3zm-1 0a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3h-3z" />
                <path fill="#ECB22E" d="M15 18a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-3h3v3zm0-1a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-3h3v3z" />
              </svg>
            </div>

            {/* Row 1, Col 4: Blank embossed tile */}
            <div className="dock-tile" />

            {/* Row 2, Col 1: Figma */}
            <div className="dock-tile">
              <svg width="20" height="30" viewBox="0 0 38 57">
                <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
                <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
                <path fill="#a259ff" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
                <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
                <path fill="#ff7262" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
              </svg>
            </div>

            {/* Row 2, Col 2: Stylized AI 4-Point Star (Purple gradient) */}
            <div className="dock-tile">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z"
                  fill="url(#starGradientDock)"
                />
                <defs>
                  <linearGradient id="starGradientDock" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c084fc" />
                    <stop offset="1" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Row 2, Col 3: Twitter / X Blue Bird */}
            <div className="dock-tile">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1d9bf0">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
              </svg>
            </div>

            {/* Row 2, Col 4: Blank embossed tile */}
            <div className="dock-tile" />

            {/* Row 3, Col 1-4: Blank embossed tiles */}
            <div className="dock-tile" />
            <div className="dock-tile" />
            <div className="dock-tile" />
            <div className="dock-tile" />
          </div>

          {/* Bottom: Headline & Description */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 2.3vw, 2.15rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                letterSpacing: '-0.025em',
                marginBottom: '16px',
              }}
            >
              Connect e-Tech Innovations With 100+ Popular Platforms
            </h2>

            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Egestas ligula non hac si vestibulum quam dictum magna fusce nostra mattis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
