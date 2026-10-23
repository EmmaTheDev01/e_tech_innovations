'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`tekni-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: '#ffffff',
        boxShadow: scrolled
          ? '0 10px 30px rgba(15, 23, 42, 0.08)'
          : '0 2px 10px rgba(15, 23, 42, 0.03)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* 1. Tekni Top Info Bar (Light Mode, smoothly hides when scrolled) */}
      <div
        className="tekni-topbar"
        style={{
          backgroundColor: '#f8fafc',
          borderBottom: scrolled ? 'none' : '1px solid rgba(15, 23, 42, 0.06)',
          fontSize: '0.82rem',
          color: '#64748b',
          padding: scrolled ? '0 24px' : '8px 24px',
          maxHeight: scrolled ? '0px' : '44px',
          opacity: scrolled ? 0 : 1,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: scrolled ? 'none' : 'auto',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Left contact info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="#1254ff" />
              <span style={{ color: '#475569' }}>Kigali Innovation Hub, Rwanda</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} color="#1254ff" />
              <a href="tel:+250788301054" style={{ color: '#475569', textDecoration: 'none' }}>
                +250 788 301 054
              </a>
              <span style={{ color: '#cbd5e1', margin: '0 2px' }}>/</span>
              <a href="tel:+250788304025" style={{ color: '#475569', textDecoration: 'none' }}>
                +250 788 304 025
              </a>
            </div>
          </div>

          {/* Right social media links */}
          <div className="topbar-socials" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#64748b', transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1254ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#64748b', transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1254ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              aria-label="Twitter X"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#64748b', transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1254ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              aria-label="GitHub"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Clean Pure White Light Mode) */}
      <div
        className="tekni-main-navbar"
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          position: 'relative',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled ? '12px 24px' : '16px 24px',
            transition: 'padding 0.3s ease',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <Image
              src="/assets/1logo.png"
              alt="e-Tech Innovations"
              width={170}
              height={46}
              priority
              style={{
                width: 'auto',
                height: scrolled ? '38px' : '44px',
                objectFit: 'contain',
                transition: 'height 0.3s ease',
              }}
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              style={{
                color: pathname === '/' ? '#1254ff' : '#1e293b',
                fontSize: '0.94rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
                padding: '8px 0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1254ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === '/' ? '#1254ff' : '#1e293b')}
            >
              Home
              {pathname === '/' && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#1254ff',
                    borderRadius: '2px',
                  }}
                />
              )}
            </Link>

            <Link
              href="/about"
              style={{
                color: pathname === '/about' ? '#1254ff' : '#1e293b',
                fontSize: '0.94rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
                padding: '8px 0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1254ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === '/about' ? '#1254ff' : '#1e293b')}
            >
              About Us
              {pathname === '/about' && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#1254ff',
                    borderRadius: '2px',
                  }}
                />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/services"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: pathname.startsWith('/services') ? '#1254ff' : '#1e293b',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '8px 0',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1254ff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = pathname.startsWith('/services') ? '#1254ff' : '#1e293b')}
              >
                Services <ChevronDown size={14} style={{ opacity: 0.8 }} />
                {pathname.startsWith('/services') && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0px',
                      left: '0',
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#1254ff',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>

              {openDropdown === 'services' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-10px',
                    background: '#ffffff',
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    borderRadius: '10px',
                    padding: '8px',
                    minWidth: '270px',
                    boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12)',
                    zIndex: 60,
                  }}
                >
                  {[
                    { name: 'Enterprise ERP Systems', href: '/services/erp' },
                    { name: 'HR & Payroll Systems (HRMS)', href: '/services/hrms' },
                    { name: 'Learning Management (LMS)', href: '/services/lms' },
                    { name: 'Hospital Systems (HISM)', href: '/services/hism' },
                    { name: 'Custom Native Applications', href: '/services/custom-software' },
                    { name: 'Cloud Architecture & DevOps', href: '/services#cloud' },
                  ].map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      style={{
                        display: 'block',
                        padding: '10px 14px',
                        fontSize: '0.88rem',
                        color: pathname === service.href ? '#1254ff' : '#334155',
                        fontWeight: 500,
                        borderRadius: '6px',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(18, 84, 255, 0.08)';
                        e.currentTarget.style.color = '#1254ff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = pathname === service.href ? '#1254ff' : '#334155';
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/featured-work"
              style={{
                color: pathname === '/featured-work' ? '#1254ff' : '#1e293b',
                fontSize: '0.94rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
                padding: '8px 0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1254ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === '/featured-work' ? '#1254ff' : '#1e293b')}
            >
              Case Studies
              {pathname === '/featured-work' && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#1254ff',
                    borderRadius: '2px',
                  }}
                />
              )}
            </Link>

            <Link
              href="/contact"
              style={{
                color: pathname === '/contact' ? '#1254ff' : '#1e293b',
                fontSize: '0.94rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
                padding: '8px 0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1254ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === '/contact' ? '#1254ff' : '#1e293b')}
            >
              Contact
              {pathname === '/contact' && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#1254ff',
                    borderRadius: '2px',
                  }}
                />
              )}
            </Link>
          </nav>

          {/* Right Action: Royal Blue "Get Consultant" CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link
              href="/contact"
              onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
              className="tekni-btn-solid"
              style={{
                textDecoration: 'none',
                fontSize: '0.92rem',
                padding: '10px 22px',
                borderRadius: '6px',
                fontWeight: 600,
                letterSpacing: '0.01em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)',
                transition: 'all 0.25s ease',
              }}
            >
              <span>Get Consultant</span>
              <ArrowUpRight size={16} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f8fafc',
                border: '1px solid rgba(15, 23, 42, 0.12)',
                borderRadius: '6px',
                padding: '8px',
                color: '#0f172a',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === '/' ? '#1254ff' : '#0f172a', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === '/about' ? '#1254ff' : '#334155', fontSize: '1rem', fontWeight: 500, textDecoration: 'none' }}
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname.startsWith('/services') ? '#1254ff' : '#334155', fontSize: '1rem', fontWeight: 500, textDecoration: 'none' }}
          >
            Services
          </Link>
          <Link
            href="/featured-work"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === '/featured-work' ? '#1254ff' : '#334155', fontSize: '1rem', fontWeight: 500, textDecoration: 'none' }}
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === '/contact' ? '#1254ff' : '#334155', fontSize: '1rem', fontWeight: 500, textDecoration: 'none' }}
          >
            Contact
          </Link>

          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Direct Lines
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
              <a href="tel:+250788301054" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#1254ff" />
                <span>+250 788 301 054</span>
              </a>
              <a href="tel:+250788304025" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#1254ff" />
                <span>+250 788 304 025</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .tekni-topbar {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
