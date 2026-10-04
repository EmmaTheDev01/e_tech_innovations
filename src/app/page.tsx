'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientLogosMarquee from '@/components/ClientLogosMarquee';
import DataBentoSection from '@/components/DataBentoSection';
import AccelerateBanner from '@/components/AccelerateBanner';
import ServicesChatDemo from '@/components/ServicesChatDemo';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUsBento from '@/components/WhyChooseUsBento';
import FeaturedWorkSection from '@/components/FeaturedWorkSection';
import EnterpriseWorkflowSection from '@/components/EnterpriseWorkflowSection';
import EnterpriseSecuritySection from '@/components/EnterpriseSecuritySection';
import Footer from '@/components/Footer';

export default function Home() {
  const router = useRouter();

  const handleOpenContact = () => router.push('/contact');

  return (
    <ThemeProvider>
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navigation with Theme Toggle (Light & Dark Mode) */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Hero Section with Interactive 3D WebGL Animation (Adapts to Light & Dark) */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* Brand Logos Marquee */}
        <ClientLogosMarquee />

        {/* Data-Driven & 100+ Integrations Bento */}
        <DataBentoSection onOpenContact={handleOpenContact} />

        {/* Accelerate Innovation Panoramic Banner with Parallax */}
        <AccelerateBanner onOpenContact={handleOpenContact} />

        {/* Live Code & Engineering Studio Demo (With Notched Cutout Card & Services Link) */}
        <ServicesChatDemo />

        {/* Core Software Capabilities Cards (Mitech Style with Line-art Icons) */}
        <ServicesGrid onOpenContact={handleOpenContact} />

        {/* Our Company (Mitech 2-Column with 01, 02, 03 Numbered Rows) */}
        <WhyChooseUsBento onOpenContact={handleOpenContact} />

        {/* Featured Work Case Studies (HR Systems, ERP, LMSs, HISM with Realistic Black Professionals) */}
        <FeaturedWorkSection onOpenContact={handleOpenContact} />

        {/* Enterprise Software Implementation Roadmap */}
        <EnterpriseWorkflowSection onOpenContact={handleOpenContact} />

        {/* Enterprise Security, Quality & Restyled 2-Column FAQ Section */}
        <EnterpriseSecuritySection onOpenContact={handleOpenContact} />

        {/* High-Tech Footer with Authentic SVG Social Icons */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
