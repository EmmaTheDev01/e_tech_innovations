'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Lauren Fisher',
      role: 'VP of Technology, FinScale',
      avatar: 'LF',
      title: 'Driving Growth With Intelligent Automation',
      content:
        'e-Tech Innovations helped us unlock new levels of growth. The automation features saved us countless hours. We now make faster and smarter decisions every day.',
      stars: 5,
    },
    {
      name: 'Ethan Maxwell',
      role: 'Chief AI Architect, NeuralEdge',
      avatar: 'EM',
      title: 'Efficiency Boost Through Smart AI',
      content:
        'e-Tech Innovations has completely transformed how we use data. Their AI tools are intuitive and incredibly powerful. We have seen a 40% improvement in operational efficiency.',
      stars: 5,
    },
    {
      name: 'Sarah Collins',
      role: 'Head of Analytics, Horizon Tech',
      avatar: 'SC',
      title: 'Fast, Accurate, And Insightful',
      content:
        'I am impressed by how fast e-Tech Innovations platform processes complex data. It helps me generate accurate insights in minutes. Their NLP features are particularly outstanding.',
      stars: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        padding: '70px 0 100px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '50px',
          }}
        >
          <div>
            <div className="section-tag">
              <span className="dot" />
              <span>Testimonial</span>
            </div>

            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Trusted by millions
            </h2>
          </div>

          {/* Rating Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '10px 20px',
              borderRadius: '16px',
            }}
          >
            <div style={{ display: 'flex', gap: '3px', color: 'var(--accent-lime)' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
              }}
            >
              4.7 <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>(2,488 Rating)</span>
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '28px',
          }}
        >
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="glass-panel"
              style={{
                padding: '36px 30px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(12, 16, 26, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
              }}
            >
              <div>
                {/* Top: Avatar & Quote Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0066ff, #00f0ff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 0 15px rgba(0, 102, 255, 0.4)',
                    }}
                  >
                    {rev.avatar}
                  </div>

                  <Quote size={32} color="#334155" />
                </div>

                {/* Review Heading */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '14px',
                    lineHeight: 1.3,
                  }}
                >
                  {rev.title}
                </h3>

                {/* Review Body */}
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '28px',
                  }}
                >
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Bottom: Author & Stars */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                    {rev.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{rev.role}</div>
                </div>

                <div style={{ display: 'flex', gap: '2px', color: 'var(--accent-lime)' }}>
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
