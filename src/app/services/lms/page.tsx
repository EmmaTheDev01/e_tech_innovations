'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import {
  Video,
  FileCheck,
  Award,
  Users,
  BarChart,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

export default function LMSServicePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const modules = [
    {
      icon: BookOpen,
      title: 'SCORM & xAPI (Tin Can) Engine',
      desc: 'Seamless compatibility with Articulate 360, Adobe Captivate, and standard course packages with real-time learner state synchronization and telemetry.',
    },
    {
      icon: Video,
      title: 'WebRTC Low-Latency Virtual Classrooms',
      desc: 'Browser-based HD video lectures, live multi-presenter whiteboarding, screen sharing, student hand-raising queues, and automated server-side recording.',
    },
    {
      icon: FileCheck,
      title: 'Proctored Testing & Randomized Question Banks',
      desc: 'Automated randomized question delivery, anti-cheat tab-switch detection, time-gated submissions, and instantaneous automated rubric grading.',
    },
    {
      icon: Award,
      title: 'Structured Curriculums & Cryptographic Certificates',
      desc: 'Multi-chapter prerequisite progression, mandatory competency benchmarks, and dynamically generated QR-code verifiable completion credentials.',
    },
    {
      icon: Users,
      title: 'Faculty, Instructor & Student Portals',
      desc: 'Role-scoped portals for syllabus publication, assignment dropboxes, batch gradebooks, attendance audits, and private student advisory channels.',
    },
    {
      icon: BarChart,
      title: 'Institutional Analytics & Engagement Telemetry',
      desc: 'Deep learning telemetry visualizing drop-off points, question difficulty heatmaps, course feedback trends, and accreditation audit reports.',
    },
  ];

  const highlights = [
    'Engineered for universities, vocational colleges, and corporate enterprise academies',
    'Low-bandwidth optimization enabling smooth video streaming on 3G/4G networks',
    'Custom white-label branding matching institutional domain and identity guidelines',
    'Direct integration with enterprise single sign-on (SAML 2.0, OAuth, Active Directory)',
    'Zero per-student recurring license tax — you own the deployment',
  ];

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
        <Navbar onOpenContact={handleOpenContact} />

        {/* Hero Section */}
        <section style={{ padding: '60px 0 40px', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} />
              <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</Link>
              <ChevronRight size={14} />
              <span style={{ color: '#0066ff', fontWeight: 600 }}>Learning Management (LMS)</span>
            </nav>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                  <span>#Institutional Learning Infrastructure</span>
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
                  EduSphere Institutional <span style={{ color: '#0066ff' }}>LMS Platform.</span>
                </h1>

                <p
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                  }}
                >
                  Empower universities and enterprise training academies with scalable e-learning infrastructure. EduSphere provides SCORM/xAPI compliance, low-latency WebRTC virtual classrooms, proctored testing, and automated certification without recurrent student seat fees.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button onClick={handleOpenContact} className="btn-primary-blue">
                    <span>Schedule LMS Platform Demo</span>
                    <ArrowRight size={16} />
                  </button>
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

              {/* Media Container */}
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
                  src="/images/work-lms.jpg"
                  alt="EduSphere Institutional LMS"
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
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Concurrent Learners</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>50,000+ Enrolled</div>
                  </div>
                  <div style={{ height: '30px', width: '1px', background: 'rgba(255, 255, 255, 0.2)' }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Exam Spike Reliability</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-lime)' }}>99.98% Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section style={{ padding: '60px 0 80px', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Platform Architecture</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Comprehensive digital learning & evaluation features.
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
              {modules.map((m, idx) => {
                const Icon = m.icon;
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
                      {m.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section style={{ padding: '60px 0 80px', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-glass)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
              <div className="section-tag" style={{ color: 'var(--accent-lime)' }}>
                <span>#Institutional Scalability</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
                Engineered for peak performance during critical exam periods.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
              {highlights.map((h, i) => (
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
                    {h}
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
                  Deploy a dedicated institutional LMS platform.
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Stop paying tens of thousands in recurring SaaS fees. Commission a custom, high-concurrency learning academy tailored to your curriculum.
                </p>
              </div>

              <button onClick={handleOpenContact} className="btn-primary-blue" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                <span>Consult with an LMS Architect</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <Footer />
        <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      </main>
    </ThemeProvider>
  );
}
