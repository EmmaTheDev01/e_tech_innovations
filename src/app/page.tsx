'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientLogosMarquee from '@/components/ClientLogosMarquee';
import AboutCompanySection from '@/components/AboutCompanySection';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUsBento from '@/components/WhyChooseUsBento';
import FeaturedWorkSection from '@/components/FeaturedWorkSection';
import AccelerateBanner from '@/components/AccelerateBanner';
import EnterpriseWorkflowSection from '@/components/EnterpriseWorkflowSection';
import EnterpriseSecuritySection from '@/components/EnterpriseSecuritySection';
import Footer from '@/components/Footer';

export default function Home() {
  const router = useRouter();

  const handleOpenContact = () => router.push('/contact');

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navigation with Tekni Topbar and Angled White Logo Badge */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Hero Section (Tekni Full-bleed Hero with Collaborative Tech Team & Cyan Waves) */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* Brand Logos Marquee */}
        <ClientLogosMarquee />

        {/* Tekni About Our Company Section with Overlapping Royal Blue Stat Box & Feature List */}
        <AboutCompanySection onOpenContact={handleOpenContact} />

        {/* Tekni Services Section with Minimalist Geometric Icons and Circular Arrow Buttons */}
        <ServicesGrid onOpenContact={handleOpenContact} />

        {/* Tekni Why Choose Us Section with Numbered Value Cards & Enterprise Reliability */}
        <WhyChooseUsBento onOpenContact={handleOpenContact} />

        {/* Featured Case Studies (ERP, HRMS, LMS, HISM) */}
        <FeaturedWorkSection onOpenContact={handleOpenContact} />

        {/* Panoramic Enterprise Acceleration Banner */}
        <AccelerateBanner onOpenContact={handleOpenContact} />

        {/* Enterprise Software Implementation Roadmap */}
        <EnterpriseWorkflowSection onOpenContact={handleOpenContact} />

        {/* Enterprise Security, Quality & FAQ Section */}
        <EnterpriseSecuritySection onOpenContact={handleOpenContact} />

        {/* Tekni 4-Column Navy Footer */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
