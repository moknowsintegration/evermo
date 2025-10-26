import React from 'react';
import { Heart, Home, Truck, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare Industry',
      industries: [
        'Home care agencies',
        'Medical practices',
        'Healthcare facilities',
        'Assisted living facilities',
        'Caregiver networks',
        'Medical billing companies'
      ],
      services: [
        'Licensing and compliance',
        'Healthcare payroll',
        'State survey preparation',
        'Policy development'
      ],
      link: '/services/healthcare'
    },
    {
      icon: Home,
      title: 'Real Estate Industry',
      industries: [
        'Short-term rental operators',
        'Property investors',
        'Real estate professionals',
        'Multi-property portfolio managers',
        'Property management companies',
        'Real estate developers'
      ],
      services: [
        'Cost segregation studies',
        'STR tax classification',
        'Real estate professional status',
        'Multi-state compliance'
      ],
      link: '/services/tax'
    },
    {
      icon: Truck,
      title: 'Transportation Industry',
      industries: [
        'Trucking companies',
        'Owner-operators',
        'Fleet management companies',
        'Logistics companies',
        'Transportation brokers',
        'Freight forwarders'
      ],
      services: [
        'DOT compliance',
        'IFTA reporting',
        'Driver classification',
        'Mileage tracking'
      ],
      link: '/services/specialized'
    },
    {
      icon: Briefcase,
      title: 'Small Business',
      industries: [
        'Startups and new businesses',
        'Established small businesses',
        'Multi-state operations',
        'Government contractors',
        'Professional services firms',
        'Retail and e-commerce'
      ],
      services: [
        'Business formation',
        'Bookkeeping and payroll',
        'Tax planning',
        'Growth consulting'
      ],
      link: '/services/business'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Serving Multiple Industries with Specialized Expertise
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Our diverse experience across industries means we understand the unique challenges you face. We don't just provide generic solutions—we deliver industry-specific expertise.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 hover:border-[#1E3A8A] hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#1E3A8A] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-[#1E3A8A]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#1F2937]">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-2">Industries Served:</h3>
                    <ul className="space-y-1">
                      {industry.industries.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#047857] mr-2">•</span>
                          <span className="text-[#6B7280]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-2">Key Services:</h3>
                    <ul className="space-y-1">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#047857] mr-2">•</span>
                          <span className="text-[#6B7280]">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={industry.link}
                    className="inline-flex items-center text-sm font-medium text-[#1E3A8A] hover:text-[#F59E0B] group"
                  >
                    {industry.title} Solutions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-lg text-[#6B7280] mb-6">
            We serve businesses across many sectors. Contact us to discuss how we can help your specific industry.
          </p>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-3"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;