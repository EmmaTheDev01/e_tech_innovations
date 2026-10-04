'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ShieldCheck,
  Lock,
  Server,
  Clock,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

export default function AboutPage() {

  const leadership = [
    {
      name: 'Mr. Jean Bosco Mukeshimana',
      role: 'Leader & Managing Director',
      experience: 'Executive Leadership & Enterprise Systems Strategy',
      bio: 'Steers e-Tech Innovations’ strategic vision, enterprise software engineering programs, and large-scale digital transformation initiatives across public and private enterprise sectors.',
    },
    {
      name: 'Dr. Christine Niyizamwiyitira',
      role: 'Director of Strategy, Research & Innovation',
      experience: 'Digital Transformation, Policy & Strategic Innovation',
      bio: 'Oversees strategic technology frameworks, institutional digital transformation, and advanced research initiatives powering next-generation education, healthcare, and enterprise platforms.',
    },
    {
      name: 'Mr. Leon Ntabomvura',
      role: 'Technical Director & Principal Architect',
      experience: 'Enterprise Software & Multi-Platform Native Engineering',
      bio: 'Directs systems architecture, distributed backend pipelines, and high-performance native application engineering across all platforms and operating systems (Web, iOS, Android, macOS, Windows, and Linux).',
    },
  ];

  const milestones = [
    {
      year: 'Vision',
      title: 'Next-Gen Inception',
      desc: 'Founded with a clear mission to engineer bespoke enterprise platforms and native applications, guaranteeing 100% client source code ownership.',
    },
    {
      year: 'Scale',
      title: 'Enterprise ERP & Stock Management',
      desc: 'Architected and deployed full-scale ERP and real-time stock management systems for major industrial conglomerates including Itracom Holding Group.',
    },
    {
      year: 'Impact',
      title: 'Automotive & AI FinTech Engineering',
      desc: 'Delivered mission-critical automated invoicing for Volkswagen Rwanda and AI-powered candidate e-recruitment platforms for Coopedu PLC.',
    },
    {
      year: 'Ahead',
      title: 'Multi-Platform Native Acceleration',
      desc: 'Engineering high-performance native applications across iOS, Android, Windows, macOS, and Linux alongside resilient cloud microservices.',
    },
  ];

  const pillars = [
    {
      icon: Lock,
      title: '100% Client IP & Source Ownership',
      desc: 'We transfer complete, unencumbered source code rights and IP to you upon delivery. No recurring per-seat user taxes or vendor lock-in.',
    },
    {
      icon: ShieldCheck,
      title: 'Security-First Architecture',
      desc: 'Every system is engineered to satisfy ISO 27001, OWASP Top 10, and regulatory frameworks including HIPAA, GDPR, and banking compliance.',
    },
    {
      icon: Server,
      title: 'Sovereign Deployment Freedom',
      desc: 'Host your software anywhere — private air-gapped bare-metal datacenters, sovereign national clouds, or hyperscalers (AWS, Azure).',
    },
    {
      icon: Clock,
      title: 'Direct Architect Support & SLAs',
      desc: 'Direct access to senior systems architects with contractually guaranteed response times, 24/7 mission-critical coverage, and proactive telemetry.',
    },
  ];

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
        <Navbar />

        {/* Hero Banner with Breadcrumbs */}
        <section style={{ padding: '60px 0 40px', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            {/* Breadcrumb */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#0066ff', fontWeight: 600 }}>About us</span>
            </nav>

            <div style={{ maxWidth: '860px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Enterprise Software Engineering</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                Engineering next-generation <br />
                <span style={{ color: '#0066ff' }}>enterprise software &amp; native systems.</span>
              </h1>

              <p
                style={{
                  fontSize: '1.18rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '36px',
                }}
              >
                e-Tech Innovations specializes in technological and software development services — engineering bespoke enterprise software and high-performance native applications across all platforms and operating systems (Web, iOS, Android, macOS, Windows, and Linux). From tailor-made ERP platforms and automated HR payroll systems to modern LMS academies and Hospital Information Systems (HISM), we engineer clean-coded, mission-critical systems that solve complex operational challenges with contract-backed guarantees.
              </p>
            </div>
          </div>
        </section>

        {/* Team Leadership Photography */}
        <section style={{ padding: '0 0 80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '460px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                border: '1px solid var(--border-glass)',
              }}
            >
              <Image
                src="/images/about-team-leadership.jpg"
                alt="e-Tech Innovations Enterprise Leadership Team"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 15, 29, 0.8) 0%, transparent 60%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '32px',
                  left: '32px',
                  right: '32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Engineering Leadership</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>Dedicated Systems Architects & Technical Directors</div>
                </div>
                <div
                  style={{
                    background: 'rgba(0, 102, 255, 0.25)',
                    border: '1px solid rgba(0, 102, 255, 0.5)',
                    backdropFilter: 'blur(8px)',
                    padding: '8px 18px',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  Next-Gen Enterprise Engineering
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Milestones */}
        <section style={{ padding: '60px 0 80px', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Our Journey &amp; Milestones</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Engineering high-impact systems for enterprise leaders.
              </h2>
            </div>

            <div
              className="scroll-reveal-stagger"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '24px',
              }}
            >
              {milestones.map((m) => (
                <div
                  key={m.year}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '20px',
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: '#0066ff',
                      fontFamily: 'var(--font-space)',
                      marginBottom: '12px',
                    }}
                  >
                    {m.year}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '10px',
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Pillars */}
        <section style={{ padding: '60px 0 80px', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Core Principles</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              >
                Why leading enterprises commission e-Tech Innovations.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                We believe that software should be an enduring strategic asset owned by your organization, not a permanent liability.
              </p>
            </div>

            <div
              className="scroll-reveal-stagger"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '24px',
              }}
            >
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
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
                        border: '1px solid rgba(0, 102, 255, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0066ff',
                        marginBottom: '20px',
                      }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Bios */}
        <section style={{ padding: '60px 0 80px', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Technical Leadership</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Guided by seasoned systems architects.
              </h2>
            </div>

            <div
              className="scroll-reveal-stagger"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '28px',
              }}
            >
              {leadership.map((leader, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '20px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {leader.name}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: '#0066ff', fontWeight: 600, marginBottom: '6px' }}>
                    {leader.role}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                    {leader.experience}
                  </div>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>
                    {leader.bio}
                  </p>
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
                  Work directly with senior systems architects.
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Discover how e-Tech Innovations can architect, deliver, and support your custom enterprise software with zero vendor lock-in.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-primary-blue"
                style={{
                  padding: '16px 36px',
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Connect With an Architect</span>
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
