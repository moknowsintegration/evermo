import React from 'react';
import { FileText, TrendingUp, Shield, Calculator } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const TaxServices = () => {
  const serviceCategories = [
    {
      icon: FileText,
      title: 'Tax Preparation & Filing',
      description: 'Accurate, timely tax preparation for all entity types and situations.',
      services: [
        'Individual tax returns (Form 1040)',
        'Partnership tax returns (Form 1065)',
        'Corporate tax returns (Form 1120, 1120-S)',
        'Multi-state tax return preparation',
        'Amended returns and corrections',
        'Prior year tax return preparation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Tax Planning & Strategy',
      description: 'Proactive tax planning to reduce your tax burden and optimize your financial position.',
      services: [
        'Cost segregation studies for real estate investors',
        'Short-term rental (STR) tax classification',
        'Entity structure optimization (LLC, S-Corp, C-Corp)',
        'Estimated tax payment planning',
        'Multi-state nexus analysis and planning',
        'Tax-efficient business transition planning'
      ]
    },
    {
      icon: Shield,
      title: 'IRS Representation & Resolution',
      description: 'Expert assistance when dealing with IRS matters and tax problems.',
      services: [
        'Tax resolution services',
        'Installment agreement assistance',
        'Collection matter support',
        'Penalty abatement requests',
        'Offer in Compromise assistance',
        'Transcript analysis and review',
        'Correspondence response and management'
      ]
    },
    {
      icon: Calculator,
      title: 'Specialized Tax Services',
      description: 'Advanced tax strategies for real estate and business owners.',
      services: [
        'Comprehensive depreciation studies',
        'Section 179 deduction optimization',
        'Bonus depreciation strategies',
        'Real estate professional status qualification',
        'Self-rental property tax strategies',
        '1031 exchange consulting',
        'Cost basis calculations'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Strategic Tax Solutions for Individuals and Businesses
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Our comprehensive tax services go beyond basic preparation. We help you minimize liability, maximize deductions, and plan strategically for long-term success.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1E3A8A] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <category.icon className="h-6 w-6 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-[#1F2937] mb-2">
                        {category.title}
                      </CardTitle>
                      <p className="text-[#6B7280]">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-16">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-[#047857] mr-2">•</span>
                        <span className="text-[#6B7280]">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to reduce your tax burden?
          </h2>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg mt-4"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule Tax Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TaxServices;