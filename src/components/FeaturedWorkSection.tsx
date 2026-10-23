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
  Sparkles,
  ArrowUpRight,
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
      image: '/images/cliparts/erp.jpg',
      icon: <Building2 size={22} />,
      accentColor: '#1254ff',
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
      image: '/images/cliparts/ai-recruitment.jpg',
      icon: <Cpu size={22} />,
      accentColor: '#1254ff',
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
      image: '/images/cliparts/stock.jpg',
      icon: <Layers size={22} />,
      accentColor: '#1254ff',
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
      image: '/images/cliparts/hrms.jpg',
      icon: <Users size={22} />,
      accentColor: '#1254ff',
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
        padding: '100px 0 110px',
        backgroundColor: '#ffffff',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <span
            className="tekni-badge"
            style={{
              fontSize: '0.8rem',
              padding: '6px 16px',
              borderRadius: '6px',
              border: '1px solid rgba(18, 84, 255, 0.25)',
              background: 'rgba(18, 84, 255, 0.08)',
              color: '#1254ff',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '16px',
            }}
          >
            <span>PROVEN ENTERPRISE DELIVERIES</span>
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.6vw, 3.2rem)',
              fontWeight: 800,
              color: '#081028',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
            }}
          >
            Featured Case Studies &amp;{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #1254ff 0%, #00d2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Enterprise Systems
            </span>
          </h2>
        </div>

        {/* 4 Case Studies / Featured Work Cards (Compact 2x2 Horizontal Layout) */}
        <div className="featured-work-grid">
          {projects.map((item, idx) => (
            <div
              key={item.id}
              className="featured-work-card"
              onClick={() => setActiveModalProject(idx)}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(15, 23, 42, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.08)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(15, 23, 42, 0.04)';
              }}
            >
              {/* Clipart Illustration Container */}
              <div className="card-clipart-container">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.4s ease',
                  }}
                  className="card-image-zoom"
                />
              </div>

              {/* Card Details */}
              <div className="card-details-container">
                {/* Top Row: Category Tag & Metric Chip */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#1254ff',
                    }}
                  >
                    {item.systemType}
                  </span>

                  {/* Metric Chip */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(18, 84, 255, 0.08)',
                      border: '1px solid rgba(18, 84, 255, 0.2)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#1254ff',
                    }}
                  >
                    <span>{item.metrics[0].value}</span>
                    <span style={{ opacity: 0.4 }}>•</span>
                    <span style={{ color: '#081028', fontWeight: 600 }}>{item.metrics[0].label}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#081028',
                    lineHeight: 1.3,
                    margin: '0 0 8px',
                  }}
                >
                  {item.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#475569',
                    lineHeight: 1.5,
                    margin: '0 0 14px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.description}
                </p>

                {/* Learn More Button */}
                <div style={{ marginTop: 'auto' }}>
                  <span
                    style={{
                      color: '#1254ff',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .featured-work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }
        .featured-work-card {
          display: flex;
          flex-direction: row;
          min-height: 200px;
        }
        .card-clipart-container {
          position: relative;
          width: 230px;
          min-width: 230px;
          background-color: #ffffff;
          border-right: 1px solid rgba(15, 23, 42, 0.06);
          overflow: hidden;
        }
        .card-details-container {
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        @media (max-width: 860px) {
          .featured-work-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 580px) {
          .featured-work-card {
            flex-direction: column;
          }
          .card-clipart-container {
            width: 100%;
            min-width: 100%;
            height: 180px;
            border-right: none;
            border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          }
        }
      `}</style>

      {/* Interactive Modal for Deep Dive into Case Study */}
      {activeModalProject !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(7, 13, 30, 0.75)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={() => setActiveModalProject(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(15, 23, 42, 0.1)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(15, 23, 42, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#081028',
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '24px' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#1254ff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'inline-block',
                  marginBottom: '8px',
                }}
              >
                {projects[activeModalProject].systemType}
              </span>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#081028',
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                {projects[activeModalProject].name}
              </h3>
            </div>

            {/* Clipart in Modal */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '260px',
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '28px',
                border: '1px solid rgba(15, 23, 42, 0.06)',
              }}
            >
              <Image
                src={projects[activeModalProject].image}
                alt={projects[activeModalProject].name}
                fill
                style={{ objectFit: 'contain', padding: '16px' }}
              />
            </div>

            {/* Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginBottom: '28px',
              }}
            >
              {projects[activeModalProject].metrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    borderRadius: '10px',
                    padding: '16px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1254ff', marginBottom: '4px' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#081028', marginBottom: '10px' }}>
                System Architecture &amp; Delivery Overview
              </h4>
              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                {projects[activeModalProject].fullOverview}
              </p>
            </div>

            {/* Core Modules Delivered */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#081028', marginBottom: '14px' }}>
                Core Modules Deployed
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {projects[activeModalProject].modules.map((mod) => (
                  <div key={mod} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#1254ff" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.94rem', color: '#1e293b', fontWeight: 500 }}>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#081028', marginBottom: '12px' }}>
                Technology Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {projects[activeModalProject].techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: 'rgba(18, 84, 255, 0.08)',
                      border: '1px solid rgba(18, 84, 255, 0.2)',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: '#1254ff',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px' }}>
              <button
                onClick={() => setActiveModalProject(null)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  color: '#475569',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={() => {
                  setActiveModalProject(null);
                  if (onOpenContact) onOpenContact();
                }}
                className="tekni-btn-solid"
                style={{
                  padding: '12px 28px',
                  borderRadius: '6px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Request Custom Architecture</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
