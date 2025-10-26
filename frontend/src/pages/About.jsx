import React from 'react';
import { CheckCircle2, Users, Lightbulb, Cog, Shield, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const credentials = [
    'Licensed Home Care Administrator - Direct expertise in healthcare operations and compliance',
    'Healthcare Site Surveyor - State survey preparation and compliance assessments',
    'Tax Preparation Specialist - Federal and multi-state tax expertise',
    'Trucking Industry Compliance Expert - DOT, IFTA, and transportation regulations',
    'Multi-State Business Compliance - Operating across state lines with confidence'
  ];

  const differentiators = [
    {
      icon: Users,
      title: 'Multi-Industry Expertise Under One Roof',
      description: 'No need for multiple service providers. Seamless coordination across all your business needs.'
    },
    {
      icon: Target,
      title: 'Comprehensive Tax and Business Services',
      description: 'From formation to ongoing compliance. Strategic planning backed by technical expertise.'
    },
    {
      icon: Shield,
      title: 'Hands-On Healthcare Compliance Experience',
      description: 'Real-world operational knowledge. Not just consultants—we\'ve been in the trenches.'
    },
    {
      icon: Cog,
      title: 'Automated Systems for Efficiency',
      description: 'Modern technology for faster, more accurate results. Streamlined processes save you time and money.'
    },
    {
      icon: Lightbulb,
      title: 'Personalized Service Backed by Technology',
      description: 'Direct access to experienced professionals. Technology that enhances, not replaces, human expertise.'
    }
  ];

  const approach = [
    {
      step: '1',
      title: 'Understand',
      description: 'We take time to learn your unique situation, challenges, and goals.'
    },
    {
      step: '2',
      title: 'Identify',
      description: 'We identify compliance requirements, tax opportunities, and operational improvements.'
    },
    {
      step: '3',
      title: 'Implement',
      description: 'We implement efficient, automated solutions tailored to your business.'
    },
    {
      step: '4',
      title: 'Support',
      description: 'We provide ongoing support and guidance as your business evolves.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience. Expertise. Excellence.
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Who We Are</h2>
          <div className="space-y-4 text-lg text-[#6B7280]">
            <p>
              EverMo Solutions is a multi-disciplinary professional services firm with specialized expertise in healthcare administration, transportation compliance, and complex tax strategies. We provide comprehensive solutions for businesses across multiple industries.
            </p>
            <p>
              Our unique approach combines deep industry knowledge with modern technology to deliver efficient, accurate, and personalized service. Whether you're managing a home care agency, operating a trucking company, or navigating complex tax situations, we have the expertise to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8 text-center">Our Credentials</h2>
          <div className="space-y-4">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#047857] mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-[#6B7280]">{credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-12 text-center">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-2 hover:border-[#1E3A8A] hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-[#1E3A8A] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-[#6B7280]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 gradient-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-12 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">{step.title}</h3>
                <p className="text-[#6B7280]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work with a team that understands your industry?
          </h2>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg mt-6"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;