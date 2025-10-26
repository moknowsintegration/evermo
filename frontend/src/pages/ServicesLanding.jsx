import React from 'react';
import { Calculator, Building2, Heart, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const ServicesLanding = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Services',
      description: 'Strategic tax solutions for individuals and businesses. From preparation to planning, cost segregation studies to IRS representation, we help you minimize liability and maximize deductions.',
      link: '/services/tax'
    },
    {
      icon: Building2,
      title: 'Business Services',
      description: 'Complete business solutions from formation to growth. Full-service bookkeeping, payroll processing, compliance filings, and strategic advisory services to keep your business running smoothly.',
      link: '/services/business'
    },
    {
      icon: Heart,
      title: 'Healthcare Services',
      description: 'Healthcare compliance and administration expertise. Home care licensing, state surveys, policy development, and specialized payroll for healthcare providers.',
      link: '/services/healthcare'
    },
    {
      icon: Star,
      title: 'Specialized Services',
      description: 'Industry-specific expertise for unique needs. Trucking compliance, government contracting, IRS transcript services, and custom solutions for specialized industries.',
      link: '/services/specialized'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Services for Your Business
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            EverMo Solutions offers a complete range of professional services designed to meet the unique needs of multi-industry businesses. From tax preparation to healthcare compliance, we provide the expertise you need to succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesLanding;