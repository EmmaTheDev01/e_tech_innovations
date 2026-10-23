'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#081028',
        color: '#ffffff',
        paddingTop: '80px',
        borderTop: '1px solid rgba(18, 84, 255, 0.2)',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '50px 30px',
            paddingBottom: '60px',
          }}
        >
          {/* Column 1: Brand & Bio */}
          <div>
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '8px 24px',
                clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0 100%)',
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '22px',
                borderRadius: '4px',
              }}
            >
              <Image
                src="/assets/1logo.png"
                alt="e-Tech Innovations"
                width={150}
                height={40}
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p
              style={{
                fontSize: '0.92rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                marginBottom: '26px',
                maxWidth: '320px',
              }}
            >
              e-Tech Innovations architects and delivers mission-critical enterprise software, ERPs, and high-performance cross-platform applications with 100% full IP code ownership.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <MapPin size={16} color="#1254ff" />
                <span>Kigali Innovation Hub, Rwanda</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#cbd5e1' }}>
                <Phone size={16} color="#1254ff" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="tel:+250788301054" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                    +250 788 301 054
                  </a>
                  <a href="tel:+250788304025" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                    +250 788 304 025
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <Mail size={16} color="#1254ff" />
                <a href="mailto:info@e-techinnovations.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  info@e-techinnovations.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '24px',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Quick Links
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '32px',
                  height: '2px',
                  background: '#1254ff',
                }}
              />
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Enterprise Services', href: '/services' },
                { name: 'Featured Case Studies', href: '/featured-work' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    <span>&rsaquo;</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '24px',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Enterprise Services
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '32px',
                  height: '2px',
                  background: '#1254ff',
                }}
              />
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Enterprise ERP Systems', href: '/services/erp' },
                { name: 'HR & Payroll Systems (HRMS)', href: '/services/hrms' },
                { name: 'Learning Management (LMS)', href: '/services/lms' },
                { name: 'Hospital Systems (HISM)', href: '/services/hism' },
                { name: 'Custom Native Applications', href: '/services/custom-software' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    <span>&rsaquo;</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Consultation */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '24px',
                position: 'relative',
                display: 'inline-block',
              }}
            >
              Get In Touch
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '32px',
                  height: '2px',
                  background: '#1254ff',
                }}
              />
            </h4>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '18px' }}>
              Subscribe for software architecture insights or request an NDA-backed discovery workshop.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to e-Tech Innovations updates!');
              }}
              style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="tekni-btn-solid"
                style={{
                  padding: '10px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  border: 'none',
                }}
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Social Icons Directly Below Email Form */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1254ff';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1254ff';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
                aria-label="Twitter X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1254ff';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
                aria-label="GitHub"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '26px 0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.86rem',
            color: '#64748b',
          }}
        >
          <div>&copy; {new Date().getFullYear()} e-Tech Innovations. All rights reserved.</div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/privacy" style={{ color: '#64748b', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: '#64748b', textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
