import React from 'react';
import { Heart, ClipboardCheck, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const HealthcareServices = () => {
  const serviceCategories = [
    {
      icon: Heart,
      title: 'Home Care Administration',
      description: 'Complete support for home care agencies from licensing through daily operations.',
      services: [
        'License application and renewal assistance',
        'Policy and procedure manual development',
        'Caregiver compliance management',
        'State survey preparation and readiness',
        'Operational systems setup and optimization',
        'Quality assurance program development',
        'Staff training coordination'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Healthcare Site Surveys',
      description: 'Professional survey services to ensure compliance and prepare for state inspections.',
      services: [
        'Pre-licensure surveys',
        'Compliance assessments and audits',
        'Deficiency remediation plans',
        'Mock surveys and inspection preparation',
        'Plan of correction development',
        'Documentation review and organization',
        'Best practice implementation'
      ]
    },
    {
      icon: DollarSign,
      title: 'Healthcare Payroll & Compliance',
      description: 'Specialized payroll services addressing the unique needs of healthcare providers.',
      services: [
        'Caregiver payroll processing',
        'Overtime calculation (including live-in caregiver rules)',
        'Workers compensation management',
        'Healthcare-specific tax compliance',
        'Shift differential and premium pay calculations',
        'On-call and standby pay management',
        'EVV (Electronic Visit Verification) integration'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Healthcare Compliance and Administration Expertise
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            With hands-on experience as a Licensed Home Care Administrator, we provide real-world solutions for healthcare providers navigating complex regulatory requirements.
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
            Ensure your healthcare business stays compliant
          </h2>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg mt-4"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Our Healthcare Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HealthcareServices;