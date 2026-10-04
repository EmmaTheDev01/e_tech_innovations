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
                marginBottom: '28px',
              }}
            >
              Unified data pipelines and real-time enterprise analytics engineered to power high-confidence decisions.
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
            <div className="dock-tile" title="Spotify">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>

            {/* Row 1, Col 2: GitHub */}
            <div className="dock-tile" title="GitHub" style={{ color: 'var(--text-primary)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>

            {/* Row 1, Col 3: Slack */}
            <div className="dock-tile" title="Slack">
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path fill="#E01E5A" d="M6 15a3 3 0 0 1-3-3 3 3 0 0 1 3-3h3v3a3 3 0 0 1-3 3zm1 0a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-3h3z" />
                <path fill="#36C5F0" d="M9 6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3H9V6zm0 1a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3H9V7z" />
                <path fill="#2EB67D" d="M18 9a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-3V9h3zm-1 0a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3 3 3 0 0 1 3 3v3h-3z" />
                <path fill="#ECB22E" d="M15 18a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-3h3v3zm0-1a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-3h3v3z" />
              </svg>
            </div>

            {/* Row 1, Col 4: Google Cloud */}
            <div className="dock-tile" title="Google Cloud">
              <svg width="26" height="26" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>

            {/* Row 2, Col 1: Figma */}
            <div className="dock-tile" title="Figma">
              <svg width="20" height="30" viewBox="0 0 38 57">
                <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
                <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
                <path fill="#a259ff" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
                <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
                <path fill="#ff7262" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
              </svg>
            </div>

            {/* Row 2, Col 2: Stylized AI 4-Point Star (Purple gradient) */}
            <div className="dock-tile" title="AI Intelligence">
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

            {/* Row 2, Col 3: Twitter / X */}
            <div className="dock-tile" title="Twitter / X">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1d9bf0">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
              </svg>
            </div>

            {/* Row 2, Col 4: Amazon Web Services (AWS) */}
            <div className="dock-tile" title="Amazon Web Services">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 15.5c-4.2 0-7.8-1.5-10.4-3.9-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 2.4 2.2 5.7 3.6 9.7 3.6 3.4 0 6.6-1.1 9-3.2.2-.2.6-.2.8 0 .2.2.2.5 0 .7-2.6 2.3-6.2 3.5-9.8 3.5z" fill="#FF9900" />
                <path d="M22.5 13.8c-.3-.4-1.8-.2-2.7-.1-.3 0-.4-.3-.2-.5 1.4-1.2 3.8-.8 4.1-.4.3.4-.2 2.8-1.5 4-.2.2-.5.1-.5-.2.1-.8.8-2.4.8-2.8z" fill="#FF9900" />
                <path d="M5.5 11.2c0-1.8 1.1-2.9 2.8-2.9 1.4 0 2.3.8 2.6 1.8h-1.3c-.2-.5-.6-.8-1.3-.8-.9 0-1.5.7-1.5 1.9s.6 1.9 1.5 1.9c.7 0 1.1-.3 1.3-.8h1.3c-.3 1-1.2 1.8-2.6 1.8-1.7 0-2.8-1.1-2.8-2.9zm6.6-2.8h1.4l1.8 5.6h-1.3l-.4-1.4h-1.8l-.4 1.4h-1.3l2-5.6zm1 3.2l-.5-1.9-.5 1.9h1zm4.4-3.2h1.4l1.2 4.1 1.2-4.1h1.4l-1.9 5.6h-1.4l-1.9-5.6z" fill="var(--text-primary)" />
              </svg>
            </div>

            {/* Row 3, Col 1: Docker */}
            <div className="dock-tile" title="Docker">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#2496ED">
                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185m21.688 1.258c-.378-.255-1.464-.38-2.61-.17-1.148.21-2.124 1.01-2.457 1.272-.372-.083-.756-.135-1.144-.156-.37-.02-.741-.012-1.11.026v-1.64h-3.696v2.247c-.687.355-1.284.851-1.758 1.455-.473.605-.8 1.306-.96 2.057-.158.751-.157 1.528.002 2.28.16.751.488 1.451.964 2.055a6.046 6.046 0 001.758 1.454c.732.39 1.547.618 2.378.666 4.708.272 9.07-2.316 11.002-6.526.438-.957.653-2 .63-3.05a2.532 2.532 0 00-.999-1.95" />
              </svg>
            </div>

            {/* Row 3, Col 2: Stripe */}
            <div className="dock-tile" title="Stripe">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#635BFF">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.56 12.365.56 6.855.56 3.02 3.447 3.02 8.168c0 5.494 4.57 6.643 8.356 8.038 2.457.904 3.328 1.531 3.328 2.507 0 1.042-.986 1.584-2.486 1.584-2.403 0-5.362-.973-7.23-2.073l-.93 5.495c1.88.945 5.097 1.722 8.357 1.722 5.86 0 9.883-2.887 9.883-7.806 0-5.362-4.48-6.684-8.322-8.085z" />
              </svg>
            </div>

            {/* Row 3, Col 3: Microsoft Azure */}
            <div className="dock-tile" title="Microsoft Azure">
              <svg width="22" height="22" viewBox="0 0 23 23">
                <path fill="#f25022" d="M1 1h10v10H1z" />
                <path fill="#00a4ef" d="M1 12h10v10H1z" />
                <path fill="#7fba00" d="M12 1h10v10H12z" />
                <path fill="#ffb900" d="M12 12h10v10H12z" />
              </svg>
            </div>

            {/* Row 3, Col 4: Salesforce */}
            <div className="dock-tile" title="Salesforce">
              <svg width="30" height="20" viewBox="0 0 24 17" fill="#00A1E0">
                <path d="M10.2 2.7a5.2 5.2 0 0 1 4.9 3.5 4 4 0 0 1 3.6.7 3.9 3.9 0 0 1 3.8 3.9c0 2.2-1.7 3.9-3.9 3.9H5A4.9 4.9 0 0 1 0 10a4.8 4.8 0 0 1 4.3-4.8c1-1.5 2.8-2.5 5.9-2.5zm0 1.4c-2.3 0-4 1.3-4.5 3.3l-.2.8-.8.1A3.4 3.4 0 0 0 1.4 10a3.5 3.5 0 0 0 3.5 3.5h13.7a2.5 2.5 0 0 0 2.5-2.5c0-1.4-1.1-2.5-2.5-2.5l-1-.1-.3-.9c-.6-1.6-2.1-2.6-3.8-2.6a3.5 3.5 0 0 0-2.3.9l-.7.6-.5-.8a3.8 3.8 0 0 0-3.2-1.5z" />
              </svg>
            </div>
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
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Effortless bidirectional integration with modern cloud stacks, SaaS APIs, and legacy enterprise systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
