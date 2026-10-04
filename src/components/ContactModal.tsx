'use client';

import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Enterprise ERP Systems');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(5, 7, 12, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: 'clamp(20px, 4.5vw, 36px)',
          borderRadius: '24px',
          background: 'var(--modal-bg)',
          border: '1px solid var(--border-glass-bright)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 102, 255, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-glass)',
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
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--accent-lime-tag-bg)',
                color: 'var(--accent-lime)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px',
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Welcome to e-Tech Innovations!
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              We&apos;ve reserved your priority access. Our solutions engineer will reach out shortly.
            </p>
          </div>
        ) : (
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-lime)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '10px',
              }}
            >
              <span>Get Started with e-Tech Innovations</span>
            </div>

            <h3
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}
            >
              Build Custom Enterprise Software
            </h3>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginBottom: '24px',
              }}
            >
              Consult directly with our principal architects for your custom HR, ERP, LMS, or Hospital Information System (HISM).
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Primary System Requirement
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--modal-bg)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option value="Enterprise ERP Systems">Enterprise ERP Systems (Supply Chain, General Ledger)</option>
                  <option value="HR & Payroll Systems">HR Systems (HRMS &amp; Automated Payroll)</option>
                  <option value="Learning Management Systems">Learning Management (LMS / SCORM)</option>
                  <option value="Hospital Information Systems">Hospital Systems (HISM / HMIS / EHR)</option>
                  <option value="Cloud Architecture & DevOps">Cloud Microservices &amp; Infrastructure</option>
                  <option value="Bespoke Enterprise Software">Bespoke Enterprise Software &amp; Portals</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary-blue"
                style={{
                  marginTop: '10px',
                  padding: '14px',
                  fontSize: '0.95rem',
                }}
              >
                <span>Request Technical Consultation</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
