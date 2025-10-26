import React from 'react';
import { Truck, Briefcase, FileSearch } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const SpecializedServices = () => {
  const serviceCategories = [
    {
      icon: Truck,
      title: 'Trucking & Transportation',
      description: 'Complete compliance and tax services for trucking companies and owner-operators.',
      services: [
        'DOT compliance consulting',
        'IFTA (International Fuel Tax Agreement) reporting',
        'IRP (International Registration Plan) registration',
        'Driver classification (employee vs. independent contractor)',
        'Mileage tracking system implementation',
        'Per diem calculation and optimization',
        'Equipment depreciation planning',
        'HOS (Hours of Service) compliance support'
      ]
    },
    {
      icon: Briefcase,
      title: 'Government Contracting',
      description: 'Navigate the complex world of government contracting with confidence.',
      services: [
        'SAM.gov registration and renewal',
        'Capability statement development',
        'NAICS code selection and strategy',
        'Small business certification assistance (8(a), HUBZone, WOSB, etc.)',
        'Government accounting system setup',
        'Compliance with FAR (Federal Acquisition Regulation)',
        'Contract review and analysis',
        'Prevailing wage compliance'
      ]
    },
    {
      icon: FileSearch,
      title: 'IRS Transcript Services',
      description: 'Efficient transcript retrieval and analysis for tax professionals and resolution specialists.',
      services: [
        'Bulk IRS transcript retrieval',
        'Comprehensive transcript analysis',
        'Wage and income verification',
        'Account monitoring and status updates',
        'Resolution documentation support',
        'Lien and levy research',
        'Payment history verification',
        'Return transcript requests'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Industry-Specific Expertise for Unique Business Needs
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Beyond our core services, we offer specialized solutions for industries with unique compliance and operational requirements.
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
            Need specialized industry support?
          </h2>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg mt-4"
            onClick={() => window.location.href = '/contact'}
          >
            Discuss Your Needs
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SpecializedServices;