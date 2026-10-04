'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        padding: '60px 0 30px',
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
        {/* Curved Card Container */}
        <div
          className="glass-panel footer-card"
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            padding: '60px 48px 40px',
            border: '1px solid var(--border-glass)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Top glowing cyan edge highlight */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'var(--accent-blue)',
              boxShadow: '0 0 15px var(--accent-blue)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '40px',
              marginBottom: '50px',
            }}
          >
            {/* Brand Column */}
            <div>
              <Link
                href="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  marginBottom: '20px',
                }}
              >
                {/* e-Tech Innovations Logo */}
                <BrandLogo height={46} />
              </Link>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '320px',
                  marginBottom: '28px',
                }}
              >
                Engineering mission-critical enterprise software and high-performance cross-platform applications.
              </p>
              {/* Direct Contact Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px', fontSize: '0.88rem' }}>
                <a
                  href="mailto:hello@e-techinnovations.com"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0066ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Mail size={15} style={{ color: '#0066ff', flexShrink: 0 }} />
                  <span>hello@e-techinnovations.com</span>
                </a>
                <a
                  href="tel:+250788301054"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0066ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Phone size={15} style={{ color: '#41b94b', flexShrink: 0 }} />
                  <span>+250 788 301 054</span>
                </a>
                <a
                  href="tel:+250788304025"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0066ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <Phone size={15} style={{ color: '#0066ff', flexShrink: 0 }} />
                  <span>+250 788 304 025</span>
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  {
                    name: 'X (Twitter)',
                    href: 'https://twitter.com',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    href: 'https://linkedin.com',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Facebook',
                    href: 'https://facebook.com',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Instagram',
                    href: 'https://instagram.com',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },

                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0066ff';
                      e.currentTarget.style.borderColor = '#0066ff';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 102, 255, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-glass)';
                      e.currentTarget.style.borderColor = 'var(--border-glass)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.transform = 'translateY(0px)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 1: Enterprise Systems */}
            <div>
              <h4
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--accent-lime)',
                  marginBottom: '20px',
                }}
              >
                Enterprise Systems
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Enterprise ERP Suite', href: '/services/erp' },
                  { label: 'HR Systems (HRMS)', href: '/services/hrms' },
                  { label: 'Learning Management (LMS)', href: '/services/lms' },
                  { label: 'Hospital Systems (HISM)', href: '/services/hism' },
                  { label: 'Native & Cross-Platform Apps', href: '/services/custom-software' },
                  { label: 'Bespoke Enterprise Software', href: '/services/custom-software' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Engineering & Work */}
            <div>
              <h4
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--accent-lime)',
                  marginBottom: '20px',
                }}
              >
                Capabilities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Services Overview', href: '/services' },
                  { label: 'Featured Work & Case Studies', href: '/featured-work' },
                  { label: 'Architecture & Security', href: '/about' },
                  { label: 'Technical Discovery', href: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--accent-lime)',
                  marginBottom: '20px',
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Software Services', href: '/services' },
                  { label: 'Featured Work', href: '/featured-work' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Policy Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '26px',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <div>Copyright ©2026 e-Tech Innovations, All rights reserved.</div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link
              href="#about"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              Term of service
            </Link>
            <Link
              href="#about"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              Privacy Policy
            </Link>
            <Link
              href="#about"
              style={{ color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .footer-card {
            padding: 36px 20px 28px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </footer>
  );
}
