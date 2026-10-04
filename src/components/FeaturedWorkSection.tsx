'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  Building2,
  CheckCircle2,
  Layers,
  ArrowRight,
  X,
  Cpu,
} from 'lucide-react';

interface FeaturedWorkSectionProps {
  onOpenContact?: () => void;
}

export default function FeaturedWorkSection({ onOpenContact }: FeaturedWorkSectionProps) {
  const [activeModalProject, setActiveModalProject] = useState<number | null>(null);

  const projects = [
    {
      id: 'itracom-erp',
      name: 'ERP for Itracom Holding Group',
      systemType: 'Enterprise ERP System',
      tagline: 'Multi-Entity Resource Planning, Supply Chain & Financial Ledgers',
      image: '/images/work-erp.jpg',
      icon: <Building2 size={22} />,
      accentColor: '#0066ff',
      badge: 'Industrial ERP',
      metrics: [
        { label: 'Supply Chain Sync', value: '100% Real-Time' },
        { label: 'Procurement Efficiency', value: '+45%' },
        { label: 'Inventory Shrinkage', value: '-80%' },
      ],
      description:
        'Enterprise resource planning system tailored for Itracom Holding Group, connecting manufacturing production lines, multi-warehouse logistics, procurement approval workflows, and centralized general ledgers.',
      fullOverview:
        'Engineered an enterprise ERP suite for Itracom Holding Group to unify complex manufacturing batches, multi-warehouse raw material stocks, supplier procurement cycles, and automated balance sheet consolidation into a high-performance system.',
      modules: [
        'Multi-Warehouse Inventory & Barcode Tracking',
        'General Ledger & Multi-Entity Financial Consolidation',
        'Automated Purchase Requisitions & Vendor Portal',
        'Industrial Batch & Production Run Tracking',
        'Executive Cash-Flow & Operational Dashboards',
      ],
      techStack: ['Next.js', 'Go (Golang)', 'PostgreSQL Cluster', 'Redis', 'Docker'],
      liveStatus: 'Production Deployed for Itracom Holding Group',
    },
    {
      id: 'coopedu-recruitment',
      name: 'AI Powered e-Recruitment for Coopedu PLC',
      systemType: 'Enterprise AI & Intelligent Recruitment',
      tagline: 'Intelligent Candidate Screening, Resume Scoring & Automated Hiring Pipelines',
      image: '/images/work-hr.jpg',
      icon: <Cpu size={22} />,
      accentColor: '#41b94b',
      badge: 'AI Systems',
      metrics: [
        { label: 'Screening Speed', value: '10x Faster' },
        { label: 'Candidate Scoring', value: 'AI-Powered' },
        { label: 'Time-to-Hire', value: '-60%' },
      ],
      description:
        'Next-generation e-recruitment platform powered by AI resume parsing, automated scoring criteria, and streamlined hiring workflows for Coopedu PLC.',
      fullOverview:
        'Engineered an intelligent talent acquisition platform for Coopedu PLC featuring AI semantic candidate matching, automated qualification scoring, structured interview scheduling, and integrated applicant communication portals.',
      modules: [
        'AI Semantic Resume Parsing & Competency Matching',
        'Automated Shortlisting & Candidate Scoring Algorithms',
        'Online Assessment & Structured Interview Portals',
        'Automated Candidate SMS & Email Notification Pipelines',
        'HR Analytics & Talent Pipeline Dashboards',
      ],
      techStack: ['Next.js', 'Python / AI Models', 'PostgreSQL', 'FastAPI', 'Redis'],
      liveStatus: 'Active System for Coopedu PLC',
    },
    {
      id: 'stock-management',
      name: 'Real-Time Stock Management System',
      systemType: 'Inventory & Warehouse Logistics',
      tagline: 'Live Inventory Sync, Barcode Auditing & Multi-Location Stock Tracking',
      image: '/images/work-lms.jpg',
      icon: <Layers size={22} />,
      accentColor: '#00f0ff',
      badge: 'Stock Logistics',
      metrics: [
        { label: 'Stock Visibility', value: '100% Real-Time' },
        { label: 'Discrepancy Rate', value: '< 0.01%' },
        { label: 'Order Fulfillment', value: '+50% Speed' },
      ],
      description:
        'Comprehensive stock and inventory management platform providing real-time stock-level visibility, automated low-stock reorder triggers, and barcode/QR verification.',
      fullOverview:
        'Built for modern enterprise distribution hubs, this system synchronizes incoming shipments, dispatch manifests, bin locations, and safety stock reorder triggers across multiple warehouse sites.',
      modules: [
        'Real-Time Multi-Location Inventory Ledger',
        'Barcode & QR Scanning for Goods Received / Dispatched',
        'Automated Purchase Orders on Safety Stock Thresholds',
        'Batch Expiry & Serial Number Traceability',
        'Discrepancy Auditing & Shrinkage Prevention',
      ],
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.IO', 'Docker'],
      liveStatus: 'Active Enterprise Deployment',
    },
    {
      id: 'hrms-system',
      name: 'Enterprise HR Management System (HRMS)',
      systemType: 'HR & Payroll Platform',
      tagline: 'Automated Payroll, Biometric Time Attendance & Employee Portals',
      image: '/images/work-hism.jpg',
      icon: <Users size={22} />,
      accentColor: '#10b981',
      badge: 'HR & Payroll',
      metrics: [
        { label: 'Payroll Accuracy', value: '100.00%' },
        { label: 'Biometric Sync', value: 'Real-Time' },
        { label: 'Admin Overhead', value: '-70%' },
      ],
      description:
        'End-to-end human resource management system featuring biometric time-clock hardware integration, automated salary computing, leave management, and staff self-service.',
      fullOverview:
        'An enterprise-grade workforce management suite eliminating payroll calculation errors, automating statutory tax deductions, and providing employees with direct mobile access to payslips, leave balances, and performance appraisals.',
      modules: [
        'Biometric Fingerprint & Facial Recognition Attendance Sync',
        'Automated Statutory Tax Withholding & Net Salary Engine',
        'Employee Self-Service (Leave Requests, Payslips, Documents)',
        'Performance KPI Tracking & Appraisal Cycles',
        'Role-Based Organizational Hierarchy & Shift Rotas',
      ],
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Hardware Sockets', 'Docker'],
      liveStatus: 'Active Enterprise Deployment',
    },
  ];

  return (
    <section
      id="featured-work"
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
        }}
      >
        {/* Section Header Matching Mitech Reference */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            HIRE US, WHY NOT?
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.6vw, 3.3rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
            }}
          >
            How we claim to <span style={{ color: '#0066ff' }}>excel?</span>
          </h2>
        </div>

        {/* 4 Case Studies / Featured Work Cards matching Mitech Image 5 */}
        <div
          className="scroll-reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {projects.map((item, idx) => (
            <div
              key={item.id}
              className="featured-work-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
              }}
            >
              {/* Photo Box with Hover Overlay & Centered Learn More Button */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '250px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveModalProject(idx)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  className="card-image-zoom"
                />

                {/* Constant Subtle Tint */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(7, 10, 20, 0.45)',
                  }}
                />

                {/* Title Overlay in center of image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--accent-lime)',
                      marginBottom: '8px',
                    }}
                  >
                    {item.systemType}
                  </span>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.3,
                      margin: 0,
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    {item.name}
                  </h3>
                </div>

                {/* Hover Reveal Overlay with White Button matching Mitech */}
                <div
                  className="card-hover-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 102, 255, 0.88)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(idx);
                    }}
                    style={{
                      background: '#ffffff',
                      color: '#0066ff',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      padding: '10px 24px',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    Learn more
                  </button>
                </div>
              </div>

              {/* Caption Text Below Card matching Mitech */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '12px',
                }}
              >
                {item.description}
              </p>

              {/* Key Metric Pill */}
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#0066ff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{item.metrics[0].value}</span>
                <span>•</span>
                <span>{item.metrics[0].label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link matching Mitech reference: "Learn more about how we work →" */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link
            href="/contact"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#0066ff',
              fontSize: '1.05rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: '6px 12px',
              textDecoration: 'none',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = '14px')}
            onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
          >
            <span>Learn more about how our enterprise systems work</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Modal for Deep-Dive System Architecture */}
        {activeModalProject !== null && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="glass-panel"
              style={{
                maxWidth: '780px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                background: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--border-glass)',
                padding: 'clamp(20px, 4vw, 40px)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              {(() => {
                const proj = projects[activeModalProject];
                return (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          padding: '4px 12px',
                          borderRadius: '20px',
                          background: 'rgba(0, 102, 255, 0.1)',
                          color: '#0066ff',
                          border: '1px solid rgba(0, 102, 255, 0.25)',
                        }}
                      >
                        {proj.systemType}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-lime)', fontWeight: 600 }}>
                        {proj.liveStatus}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        marginBottom: '8px',
                      }}
                    >
                      {proj.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.96rem',
                        fontWeight: 600,
                        color: proj.accentColor,
                        marginBottom: '20px',
                      }}
                    >
                      {proj.tagline}
                    </p>

                    <p
                      style={{
                        fontSize: '0.94rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                        marginBottom: '28px',
                      }}
                    >
                      {proj.fullOverview}
                    </p>

                    {/* Metrics */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px',
                        marginBottom: '28px',
                      }}
                    >
                      {proj.metrics.map((m) => (
                        <div
                          key={m.label}
                          style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '12px',
                            padding: '12px',
                            textAlign: 'center',
                          }}
                        >
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {m.value}
                          </div>
                          <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Modules */}
                    <h4
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '12px',
                      }}
                    >
                      Core Engineered Modules
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {proj.modules.map((mod) => (
                        <div
                          key={mod}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <CheckCircle2 size={16} color="#0066ff" style={{ flexShrink: 0 }} />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div style={{ marginBottom: '32px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          color: 'var(--text-secondary)',
                          display: 'block',
                          marginBottom: '8px',
                        }}
                      >
                        Production Tech Stack
                      </span>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {proj.techStack.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              background: 'rgba(0, 102, 255, 0.1)',
                              color: '#0066ff',
                              border: '1px solid rgba(0, 102, 255, 0.2)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA in modal */}
                    <Link
                      href="/contact"
                      onClick={(e) => {
                        setActiveModalProject(null);
                        if (onOpenContact) {
                          e.preventDefault();
                          onOpenContact();
                        }
                      }}
                      className="btn-primary-blue"
                      style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '0.95rem',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      Request System Architecture &amp; Demo
                    </Link>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .featured-work-card:hover .card-image-zoom {
          transform: scale(1.08);
        }
        .featured-work-card:hover .card-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
