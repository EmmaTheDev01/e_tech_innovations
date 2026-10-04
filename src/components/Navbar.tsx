'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          {/* e-Tech Innovations Logo */}
          <BrandLogo height={46} />
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
          {/* Home Direct Link */}
          <Link
            href="/"
            style={{
              color: pathname === '/' ? '#0066ff' : 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: pathname === '/' ? 700 : 500,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            Home
          </Link>

          <Link
            href="/about"
            style={{
              color: pathname === '/about' ? '#0066ff' : 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: pathname === '/about' ? 700 : 500,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0066ff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === '/about' ? '#0066ff' : 'var(--text-secondary)')}
          >
            About us
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
                color: pathname.startsWith('/services') ? '#0066ff' : 'var(--text-secondary)',
                fontSize: '0.95rem',
                fontWeight: pathname.startsWith('/services') ? 700 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '8px 0',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0066ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname.startsWith('/services') ? '#0066ff' : 'var(--text-secondary)')}
            >
              Services <ChevronDown size={15} style={{ opacity: 0.7 }} />
            </Link>
            {openDropdown === 'services' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-10px',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '14px',
                  padding: '10px',
                  minWidth: '240px',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                  zIndex: 60,
                }}
              >
                {[
                  { name: 'Enterprise ERP Systems', href: '/services/erp' },
                  { name: 'HR & Payroll Systems (HRMS)', href: '/services/hrms' },
                  { name: 'Learning Management (LMS)', href: '/services/lms' },
                  { name: 'Hospital Systems (HISM)', href: '/services/hism' },
                  { name: 'Bespoke Enterprise Software', href: '/services/custom-software' },
                ].map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    style={{
                      display: 'block',
                      padding: '9px 14px',
                      fontSize: '0.9rem',
                      color: pathname === service.href ? '#0066ff' : 'var(--text-secondary)',
                      fontWeight: pathname === service.href ? 600 : 500,
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--border-glass)';
                      e.currentTarget.style.color = '#0066ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = pathname === service.href ? '#0066ff' : 'var(--text-secondary)';
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
              color: pathname === '/featured-work' ? '#0066ff' : 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: pathname === '/featured-work' ? 700 : 500,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0066ff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === '/featured-work' ? '#0066ff' : 'var(--text-secondary)')}
          >
            Featured Work
          </Link>

          <Link
            href="/contact"
            style={{
              color: pathname === '/contact' ? '#0066ff' : 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: pathname === '/contact' ? 700 : 500,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0066ff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = pathname === '/contact' ? '#0066ff' : 'var(--text-secondary)')}
          >
            Contact us
          </Link>
        </nav>

        {/* Right Actions: CTA Button + Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>

          {/* CTA Button navigating directly to /contact */}
          <Link
            href="/contact"
            onClick={onOpenContact ? (e) => { e.preventDefault(); onOpenContact(); } : undefined}
            className="btn-primary-blue"
            style={{
              padding: '10px 22px',
              fontSize: '0.9rem',
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <span>Get In Touch</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              padding: '8px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-glass)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === '/' ? '#0066ff' : 'var(--text-primary)', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === '/about' ? '#0066ff' : 'var(--text-secondary)', fontSize: '1rem', textDecoration: 'none' }}
          >
            About us
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname.startsWith('/services') ? '#0066ff' : 'var(--text-secondary)', fontSize: '1rem', textDecoration: 'none' }}
          >
            Services
          </Link>
          <Link
            href="/featured-work"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === '/featured-work' ? '#0066ff' : 'var(--text-secondary)', fontSize: '1rem', textDecoration: 'none' }}
          >
            Featured Work
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: pathname === '/contact' ? '#0066ff' : 'var(--text-secondary)', fontSize: '1rem', textDecoration: 'none' }}
          >
            Contact us
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
