import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Building2, Heart, Star, Trophy, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Tax & Compliance',
      description: 'Federal and state tax preparation, cost segregation studies, STR classification, and strategic tax planning for individuals and businesses.',
      link: '/services/tax'
    },
    {
      icon: Heart,
      title: 'Healthcare Administration',
      description: 'Home care licensing, state surveys, compliance management, and operational systems for healthcare providers.',
      link: '/services/healthcare'
    },
    {
      icon: Building2,
      title: 'Business Operations',
      description: 'Full-service payroll, bookkeeping, financial reporting, company formation, and business advisory services.',
      link: '/services/business'
    },
    {
      icon: Star,
      title: 'Specialized Services',
      description: 'Trucking compliance, government contracting, IRS transcript services, and industry-specific solutions.',
      link: '/services/specialized'
    }
  ];

  const trustIndicators = [
    {
      icon: Trophy,
      title: '35+ Years',
      subtitle: 'Combined professional experience'
    },
    {
      icon: Award,
      title: 'Licensed & Certified',
      subtitle: 'Healthcare Administrator, Tax Professional, Site Surveyor'
    },
    {
      icon: Users,
      title: 'Multiple Industries',
      subtitle: 'Healthcare, Transportation, Real Estate, Small Business'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <p className="text-white text-sm font-medium">
                Licensed Healthcare Administrator | Tax Professional | Multi-Industry Specialist
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Multi-Industry Tax & Business Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Compliance-Focused. Results-Driven. Experience You Can Trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white bg-opacity-10 backdrop-blur-sm text-white border-white border-2 hover:bg-white hover:text-[#1E3A8A] font-semibold px-8 py-6 text-lg"
                onClick={() => window.location.href = '/services/tax'}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Comprehensive Solutions Across Industries
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              We provide expert guidance and support for all your business, tax, and healthcare compliance needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Why Choose EverMo Solutions?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1E3A8A] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="h-8 w-8 text-[#1E3A8A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-2">{indicator.title}</h3>
                <p className="text-[#6B7280]">{indicator.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#1E3A8A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Simplify Your Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation today and discover how we can help your business thrive.
          </p>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;