'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Cpu,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  GitBranch,
  Terminal,
  Cloud,
  Smartphone,
} from 'lucide-react';

export default function CustomSoftwareServicePage() {
  const capabilities = [
    {
      icon: Smartphone,
      title: 'Native Applications for All Platforms & OS',
      desc: 'High-performance native applications engineered for iOS, Android, Windows, macOS, and Linux — built with Swift, Kotlin, Rust, C++, and Flutter/Electron with direct OS hardware integration and offline-first data sync.',
    },
    {
      icon: Terminal,
      title: 'Enterprise Web & Distributed Cloud Portals',
      desc: 'Bespoke client, partner, and executive portals engineered with modern Next.js and TypeScript, featuring millisecond latency and real-time WebSocket data feeds.',
    },
    {
      icon: Cpu,
      title: 'Distributed Microservices & Event Streams',
      desc: 'High-throughput backend architectures built with Go, Python, and Java Spring Boot, backed by Apache Kafka and Redis for millions of concurrent operational events.',
    },
    {
      icon: Workflow,
      title: 'Legacy Modernization & Database Migrations',
      desc: 'Deconstruct brittle legacy monoliths into scalable containerized services with zero business interruption and 100% verified historical data integrity.',
    },
    {
      icon: GitBranch,
      title: 'Enterprise Integration & Custom Middleware',
      desc: 'Engineered gRPC, GraphQL, and secure RESTful middleware bridging disparate internal databases, banking networks, and third-party industrial hardware.',
    },
    {
      icon: Cloud,
      title: 'Sovereign Cloud & Bare-Metal Orchestration',
      desc: 'Production-ready Kubernetes pipelines deployed to private clouds, AWS, Azure, Google Cloud, or self-hosted air-gapped datacenters with automated failover.',
    },
  ];

  const guarantees = [
    '100% Client Intellectual Property & Source Code Ownership Transfer',
    'Zero proprietary vendor lock-in or recurring per-seat user fees',
    'Complete architectural blueprints, API documentation, and deployment runbooks',
    'Rigorous OWASP Top 10 automated security audits & load testing',
    'Guaranteed 24/7 Tier-3 emergency SLA response times',
  ];

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
        <Navbar />

        {/* Hero Section */}
        <section style={{ padding: '60px 0 40px', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#0066ff', fontWeight: 600 }}>Bespoke Enterprise Software</span>
            </nav>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                  <span>#Tailor-Made Software Architecture</span>
                </div>

                <h1
                  style={{
                    fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.03em',
                    marginBottom: '20px',
                  }}
                >
                  Bespoke Software &amp; <span style={{ color: '#0066ff' }}>Native Applications.</span>
                </h1>

                <p
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                  }}
                >
                  We do not only build for the web — e-Tech Innovations architects and delivers high-performance native applications across all platforms and operating systems (iOS, Android, Windows, macOS, Linux, and Web) alongside mission-critical cloud backends, with 100% full client source code ownership.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-primary-blue" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span>Discuss Your Custom Software Project</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/featured-work"
                    style={{
                      padding: '12px 24px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      transition: 'all 0.2s',
                    }}
                  >
                    View Case Study
                  </Link>
                </div>
              </div>

              {/* Showcase Image */}
              <div
                style={{
                  position: 'relative',
                  height: '420px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-glass)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Image
                  src="/images/custom-apps-team.jpg"
                  alt="e-Tech Innovations Custom Software Engineering Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 15, 29, 0.85) 0%, transparent 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(10, 15, 29, 0.9)',
                    backdropFilter: 'blur(12px)',
                    padding: '14px 20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Source Code Ownership</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>100% Client Owned</div>
                  </div>
                  <div style={{ height: '30px', width: '1px', background: 'rgba(255, 255, 255, 0.2)' }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Delivery Methodology</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-lime)' }}>Agile Sprints</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section style={{ padding: '60px 0 80px', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Technical Capabilities</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Engineered for maximum resilience, performance, and maintainability.
              </h2>
            </div>

            <div
              className="scroll-reveal-stagger"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px',
              }}
            >
              {capabilities.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '20px',
                      padding: '32px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(0, 102, 255, 0.1)',
                        border: '1px solid rgba(0, 102, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0066ff',
                        marginBottom: '20px',
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {c.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section style={{ padding: '60px 0 80px', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Contractual Commitments</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
                Enterprise peace of mind, written into our contracts.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
              {guarantees.map((g, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <CheckCircle2 size={20} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {g}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(10, 15, 29, 0.95) 100%)',
                border: '1px solid rgba(0, 102, 255, 0.35)',
                borderRadius: '28px',
                padding: 'clamp(40px, 6vw, 64px) clamp(24px, 4vw, 56px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '32px',
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Commission custom software built for your business.
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Tell us about your technical specifications, timeline, and security parameters. Our principal architects will provide an engineering blueprint and cost estimate.
                </p>
              </div>

              <Link href="/contact" className="btn-primary-blue" style={{ padding: '16px 36px', fontSize: '1.05rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>Initiate Custom Project</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
