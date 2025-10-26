import React from 'react';
import { BookOpen, DollarSign, Building, Lightbulb } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const BusinessServices = () => {
  const serviceCategories = [
    {
      icon: BookOpen,
      title: 'Bookkeeping & Accounting',
      description: 'Accurate financial records and reporting for informed business decisions.',
      services: [
        'Monthly bank and credit card reconciliation',
        'Financial statement preparation (P&L, Balance Sheet, Cash Flow)',
        'Accounts payable and receivable management',
        'Cash flow management and forecasting',
        'QuickBooks Online setup and training',
        'Multi-entity consolidation',
        'General ledger maintenance'
      ]
    },
    {
      icon: DollarSign,
      title: 'Payroll Services',
      description: 'Comprehensive payroll processing with full compliance across all states.',
      services: [
        'Full-service payroll processing',
        'Multi-state payroll compliance',
        'Quarterly payroll tax filing (941, state forms)',
        'Annual tax filing (940, W-2s, 1099s)',
        'New hire reporting',
        'Time tracking system integration (TSheets, QuickBooks Time, etc.)',
        'Direct deposit and payment distribution',
        'Year-end payroll reconciliation'
      ]
    },
    {
      icon: Building,
      title: 'Business Formation & Compliance',
      description: 'Expert guidance from business formation through ongoing compliance.',
      services: [
        'LLC and Corporation formation',
        'EIN (Employer Identification Number) registration',
        'Operating agreement and bylaws preparation',
        'Annual compliance filings (Annual Reports, etc.)',
        'Foreign qualification (registering to do business in other states)',
        'Registered agent services',
        'Business license research and application'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Advisory Services',
      description: 'Strategic guidance to help your business grow and thrive.',
      services: [
        'Strategic tax planning sessions',
        'Business structure optimization',
        'Financial analysis and KPI development',
        'Growth strategy consulting',
        'Profitability analysis',
        'Budgeting and forecasting',
        'Exit planning and succession consulting'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Complete Business Solutions from Formation to Growth
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            We handle the financial operations that keep your business running smoothly, so you can focus on what you do best.
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
            Let's streamline your business operations
          </h2>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg mt-4"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BusinessServices;