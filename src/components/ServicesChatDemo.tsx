'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Layers,
  Target,
  Copy,
  Check,
  Paperclip,
} from 'lucide-react';

// Mathematical G2/C1 Continuous Notched Card Boundary matching reference
function getCardPath(w: number, h: number) {
  const btnSize = 104;
  const gap = 16;
  const notchW = btnSize + gap; // 120px notch width from right
  const notchH = btnSize + gap; // 120px notch height from top
  const rOuter = 32;
  const rCorner = 24;
  const rInner = 24;

  return `M ${rOuter} 0 L ${w - notchW - rCorner} 0 A ${rCorner} ${rCorner} 0 0 1 ${w - notchW} ${rCorner} L ${w - notchW} ${notchH - rInner} A ${rInner} ${rInner} 0 0 0 ${w - notchW + rInner} ${notchH} L ${w - rCorner} ${notchH} A ${rCorner} ${rCorner} 0 0 1 ${w} ${notchH + rCorner} L ${w} ${h - rOuter} A ${rOuter} ${rOuter} 0 0 1 ${w - rOuter} ${h} L ${rOuter} ${h} A ${rOuter} ${rOuter} 0 0 1 0 ${h - rOuter} L 0 ${rOuter} A ${rOuter} ${rOuter} 0 0 1 ${rOuter} 0 Z`;
}

export default function ServicesChatDemo() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'python' | 'api' | 'sql'>('python');
  const [customInput, setCustomInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const [cardSize, setCardSize] = useState({ w: 540, h: 580 });
  const cardContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!cardContainerRef.current) return;
    const updateSize = () => {
      if (cardContainerRef.current) {
        setCardSize({
          w: cardContainerRef.current.clientWidth || 540,
          h: cardContainerRef.current.clientHeight || 580,
        });
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(cardContainerRef.current);
    return () => ro.disconnect();
  }, []);

  const snippets = {
    python: {
      prompt: 'Write a line of Python code',
      filename: 'example.py',
      code: `print("Hello, World!")`,
      explanation: 'Let me know if you need a specific type of Python code!',
    },
    api: {
      prompt: 'Deploy ERP inventory microservice endpoint',
      filename: 'inventory_service.py',
      code: `@app.post("/v1/inventory/reorder")\nasync def reorder_stock(data: StockOrder):\n    return await erp_service.reorder(data)`,
      explanation: 'Endpoint secured with rate-limiting and enterprise JWT auth middleware.',
    },
    sql: {
      prompt: 'Query active employee shift attendance records',
      filename: 'attendance_query.sql',
      code: `SELECT employee_id, punch_in, status\nFROM hrms.daily_attendance\nWHERE clock_date = CURRENT_DATE`,
      explanation: 'Query optimized with distributed partitioning and employee index.',
    },
  };

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setCustomInput('');
    }, 600);
  };

  return (
    <section
      id="about"
      style={{
        padding: '90px 0 110px',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}
        className="services-split-grid"
      >
        {/* Left Column: Image with Mathematical Notched Cutout & Arrow Button + Floating Creachat Studio */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* SVG Clip Path Definition */}
          <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
            <defs>
              <clipPath id="card-notch-clip" clipPathUnits="userSpaceOnUse">
                <path d={getCardPath(cardSize.w, cardSize.h)} />
              </clipPath>
            </defs>
          </svg>

          {/* Main Photo Card Container with Cutout */}
          <div
            ref={cardContainerRef}
            className="services-photo-card"
            style={{
              position: 'relative',
              width: '100%',
              height: '580px',
              filter: 'drop-shadow(0 20px 45px rgba(0, 0, 0, 0.5))',
            }}
          >
            {/* The clipped photo wrapper */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                clipPath: 'url(#card-notch-clip)',
                WebkitClipPath: 'url(#card-notch-clip)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/about-engineer.jpg"
                alt="Software Engineer architecting enterprise solutions"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(7, 9, 14, 0.16)',
                }}
              />
            </div>

            {/* Subtle border following the exact cutout path */}
            <svg
              width="100%"
              height="100%"
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 3,
              }}
            >
              <path
                d={getCardPath(cardSize.w, cardSize.h)}
                fill="none"
                stroke="var(--border-glass-bright)"
                strokeWidth="1.2"
              />
            </svg>

            {/* Interactive Arrow Button nestled inside the Top-Right Cutout */}
            <Link
              href="/services"
              aria-label="Redirect to Services"
              className="arrow-cutout-btn"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '104px',
                height: '104px',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
                textDecoration: 'none',
                cursor: 'pointer',
                background: 'var(--accent-lime)',
                color: '#121212',
              }}
            >
              <ArrowUpRight size={48} strokeWidth={2.8} />
            </Link>
          </div>

          {/* Floating Interactive Creachat Studio UI (Overlaid at bottom-left) */}
          <div
            className="glass-panel creachat-studio-card"
            style={{
              position: 'absolute',
              bottom: '-75px',
              left: '-65px',
              width: '92%',
              maxWidth: '320px',
              padding: '16px 18px',
              borderRadius: '22px',
              zIndex: 4,
            }}
          >
            {/* Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--border-glass)',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

              </div>

              {/* Title & Tab switcher */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  e-Tech
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>▾</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

              </div>
            </div>

            {/* Presets (python, api, sql) */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
              {(['python', 'api', 'sql'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: activeTab === tab ? '#0066ff' : 'var(--bg-glass)',
                    border: '1px solid var(--border-glass)',
                    color: activeTab === tab ? '#ffffff' : 'var(--text-secondary)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* User Prompt Message */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                marginBottom: '14px',
              }}
            >
              <div
                className="creachat-user-bubble"
                style={{
                  padding: '7px 14px',
                  borderRadius: '16px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  maxWidth: '85%',
                }}
              >
                {currentSnippet.prompt}
              </div>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                1 minute ago
              </span>
            </div>

            {/* AI Response Card */}
            <div style={{ marginBottom: '14px' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontWeight: 500,
                }}
              >
                Here&apos;s a simple line of Python code:
              </div>

              {/* Code Box */}
              <div
                className="creachat-code-box"
                style={{
                  borderRadius: '10px',
                  padding: '10px 12px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '6px',
                    borderBottom: '1px solid var(--border-glass)',
                    marginBottom: '6px',
                    color: 'var(--text-muted)',
                    fontSize: '0.7rem',
                  }}
                >
                  <span>{currentSnippet.filename}</span>
                  <button
                    onClick={handleCopy}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: copied ? 'var(--accent-lime)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.68rem',
                    }}
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <pre style={{ margin: 0, color: '#0066ff', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
                  {currentSnippet.code}
                </pre>
              </div>

              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.4 }}>
                {currentSnippet.explanation}
              </div>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                1 minute ago
              </span>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleGenerate}
              className="creachat-input-bar"
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '12px',
                padding: '4px 6px 4px 10px',
              }}
            >
              <Paperclip size={14} color="var(--text-muted)" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Type any message you'd like..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.74rem',
                  outline: 'none',
                  paddingLeft: '6px',
                }}
              />
              <button
                type="submit"
                className="creachat-send-btn"
                style={{
                  border: 'none',
                  padding: '6px 12px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
              >
                {isGenerating ? 'Thinking...' : 'Send'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Title & Feature Details Matching Screenshot */}
        <div>
          <span
            style={{
              color: 'var(--accent-lime)',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            Our Services
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.16,
              letterSpacing: '-0.025em',
              marginBottom: '22px',
            }}
          >
            Custom Software Engineering Tailored For Every Business Need.
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.68,
              marginBottom: '38px',
              maxWidth: '560px',
            }}
          >
            We architect, engineer, and deploy high-performance custom enterprise software — from mission-critical ERP and HR systems to automated LMS platforms and Hospital Information Systems (HISM) built for seamless scale.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border-glass)',
            }}
          >
            {/* Feature 1: Enterprise Architecture & Cloud Microservices */}
            <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start' }}>
              <div
                className="service-feature-icon"
                style={{
                  width: '66px',
                  height: '66px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Layers size={28} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  Enterprise Architecture &amp; Microservices
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    maxWidth: '460px',
                  }}
                >
                  Containerized cloud architectures with automated Kubernetes failovers, high-throughput database replication, and zero-downtime microservices.
                </p>
              </div>
            </div>

            {/* Feature 2: Custom Tailored To Your Workflows */}
            <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start' }}>
              <div
                className="service-feature-icon"
                style={{
                  width: '66px',
                  height: '66px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Target size={28} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  Tailored To Your Exact Workflows
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    maxWidth: '460px',
                  }}
                >
                  Bespoke business rules, hardware biometric sync, and custom payroll engines that eliminate expensive recurring seat licenses and vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .services-photo-card {
            height: 440px !important;
          }
          .creachat-studio-card {
            left: 10px !important;
            bottom: -30px !important;
            max-width: calc(100% - 20px) !important;
          }
        }
        @media (max-width: 480px) {
          .services-photo-card {
            height: 380px !important;
          }
          .creachat-studio-card {
            position: relative !important;
            left: 0 !important;
            bottom: 0 !important;
            max-width: 100% !important;
            margin-top: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
