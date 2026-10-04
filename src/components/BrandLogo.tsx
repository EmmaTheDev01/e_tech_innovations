'use client';

import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  height?: number;
  className?: string;
}

export default function BrandLogo({ height = 38, className = '' }: BrandLogoProps) {
  // Width calculated based on 1699 x 607 aspect ratio (~2.8)
  const width = Math.round(height * (1699 / 607));

  return (
    <div
      className={`brand-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      {/* Light Mode Logo (Original: Vibrant Blue Emblem + Black Text) */}
      <Image
        src="/assets/1logo.png"
        alt="e-Tech Innovations"
        width={width}
        height={height}
        priority
        className="logo-theme-light"
        style={{
          width: 'auto',
          height: `${height}px`,
          objectFit: 'contain',
        }}
      />
      {/* Dark Mode Logo (Vibrant Blue Emblem + Inverted White Text) */}
      <Image
        src="/assets/1logo-dark.png"
        alt="e-Tech Innovations"
        width={width}
        height={height}
        priority
        className="logo-theme-dark"
        style={{
          width: 'auto',
          height: `${height}px`,
          objectFit: 'contain',
        }}
      />
    </div>
  );
}
