import React, { useState } from 'react';
import { Download, Calendar, Calculator, FileText, Building2, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const resources = [
    {
      icon: Calendar,
      title: '2025 Tax Calendar and Deadlines',
      description: 'Important federal and state tax deadlines, quarterly estimated tax due dates, and annual filing requirements.',
      type: 'pdf', // Will be a PDF download
      filename: '2025-tax-calendar.pdf'
    },
    {
      icon: FileText,
      title: 'STR Classification Checklist',
      description: 'Determine if your property qualifies for STR treatment, average rental period calculations, and material participation requirements.',
      type: 'pdf',
      filename: 'str-classification-checklist.pdf'
    },
    {
      icon: Calculator,
      title: 'Cost Segregation Calculator',
      description: 'Estimate potential tax savings, property type considerations, and ROI on cost segregation study.',
      type: 'pdf',
      filename: 'cost-segregation-calculator.pdf'
    },
    {
      icon: FileText,
      title: 'Payroll Compliance Guide',
      description: 'Multi-state payroll requirements, tax withholding checklist, and common payroll mistakes to avoid.',
      type: 'pdf',
      filename: 'payroll-compliance-guide.pdf'
    },
    {
      icon: Building2,
      title: 'Home Care Licensing Requirements by State',
      description: 'State-by-state licensing overview, application process timelines, and common requirements checklist. Updated regularly.',
      type: 'google-sheet', // External link to Google Sheet
      externalLink: 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit' // Replace with your actual Google Sheet link
    }
  ];

  const faqs = {
    tax: [
      {
        q: 'When are estimated tax payments due?',
        a: 'Estimated tax payments are due quarterly: April 15, June 15, September 15, and January 15 (of the following year). If the due date falls on a weekend or holiday, the deadline is the next business day.'
      },
      {
        q: 'What is a cost segregation study?',
        a: 'A cost segregation study is a tax planning tool that identifies building components that can be depreciated over shorter periods (5, 7, or 15 years) rather than the standard 27.5 or 39 years. This accelerates depreciation deductions and can result in significant tax savings.'
      },
      {
        q: 'How do I know if my rental property qualifies as a short-term rental for tax purposes?',
        a: 'A property qualifies as a short-term rental (STR) if the average rental period is 7 days or less, OR 30 days or less with significant personal services. We can help you determine qualification and ensure proper classification.'
      },
      {
        q: "What's the difference between an LLC and an S-Corporation?",
        a: 'An LLC is a legal entity structure that provides liability protection. An S-Corporation is a tax classification that can provide tax savings through reasonable salary strategies. You can have an LLC taxed as an S-Corp to get both benefits.'
      }
    ],
    healthcare: [
      {
        q: 'How long does it take to get a home care license?',
        a: 'The timeline varies by state but typically ranges from 3-6 months from application submission to license approval. Preparation time before application can add another 1-2 months.'
      },
      {
        q: 'What is a state survey?',
        a: 'A state survey is an inspection conducted by your state\'s regulatory agency to ensure your home care agency is in compliance with all applicable regulations. Surveys can be scheduled or unannounced.'
      },
      {
        q: 'Do I need workers compensation insurance for caregivers?',
        a: 'In most states, yes. Workers compensation requirements vary by state, but most require coverage once you have employees. We can help you understand your state\'s specific requirements.'
      }
    ],
    business: [
      {
        q: 'Should I form an LLC or a Corporation?',
        a: 'It depends on your specific situation, including liability concerns, tax goals, and future plans. We can help you analyze the options and choose the right structure for your business.'
      },
      {
        q: 'Do I need an EIN (Employer Identification Number)?',
        a: 'You need an EIN if you have employees, operate as a corporation or partnership, file certain tax returns, or withhold taxes. Even if not required, we often recommend getting one for privacy and banking purposes.'
      },
      {
        q: 'What is foreign qualification?',
        a: 'Foreign qualification is the process of registering your business to operate legally in a state other than where you originally formed. It\'s required if you have a physical presence, employees, or significant business activity in another state.'
      }
    ],
    payroll: [
      {
        q: 'What\'s included in full-service payroll?',
        a: 'Full-service payroll includes calculating wages, withholding taxes, filing all federal and state payroll tax returns, producing W-2s and 1099s, handling direct deposits, and managing year-end reconciliation.'
      },
      {
        q: 'How do I handle employees who work in multiple states?',
        a: 'Multi-state payroll requires careful attention to each state\'s withholding rules, unemployment insurance, and worker\'s compensation requirements. We handle all the complexity for you.'
      }
    ]
  };

  const handleDownload = (resource) => {
    if (resource.type === 'google-sheet') {
      // For Google Sheets, open lead capture modal
      setSelectedResource(resource);
      setDialogOpen(true);
    } else {
      // For PDFs, open lead capture modal
      setSelectedResource(resource);
      setDialogOpen(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send this to your backend to save the lead
    console.log('Lead captured:', {
      ...formData,
      resource: selectedResource.title,
      timestamp: new Date().toISOString()
    });

    if (selectedResource.type === 'google-sheet') {
      // Open Google Sheet in new tab
      window.open(selectedResource.externalLink, '_blank');
      toast.success(`Access granted! Opening ${selectedResource.title}...`);
    } else {
      // Trigger PDF download
      // Note: You'll need to place actual PDF files in /public/downloads/ folder
      const link = document.createElement('a');
      link.href = `/downloads/${selectedResource.filename}`;
      link.download = selectedResource.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success(`Thank you! Downloading ${selectedResource.title}...`);
    }

    // Reset form and close dialog
    setFormData({ name: '', email: '', company: '' });
    setDialogOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Tools and Information to Help Your Business Succeed
          </h1>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">Free Resources</h2>
            <p className="text-lg text-[#6B7280]">
              Download our free resources to help you navigate compliance and make informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="border-2 hover:border-[#1E3A8A] hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#1E3A8A] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="h-6 w-6 text-[#1E3A8A]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#1F2937]">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B7280] mb-4">{resource.description}</p>
                  {resource.type === 'google-sheet' ? (
                    <Button
                      variant="outline"
                      className="w-full border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                      onClick={() => handleDownload(resource)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access Resource
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                      onClick={() => handleDownload(resource)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">Tax FAQs</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.tax.map((faq, index) => (
                  <AccordionItem key={index} value={`tax-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-[#6B7280]">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">Healthcare Compliance FAQs</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.healthcare.map((faq, index) => (
                  <AccordionItem key={index} value={`healthcare-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-[#6B7280]">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">Business Formation FAQs</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.business.map((faq, index) => (
                  <AccordionItem key={index} value={`business-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-[#6B7280]">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">Payroll Processing FAQs</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.payroll.map((faq, index) => (
                  <AccordionItem key={index} value={`payroll-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-[#6B7280]">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4">Still have questions?</h2>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-3"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Lead Capture Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1F2937]">
              Get Your Free Resource
            </DialogTitle>
            <DialogDescription className="text-[#6B7280]">
              Enter your information below to access: <strong>{selectedResource?.title}</strong>
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="lead-name">Full Name *</Label>
              <Input
                id="lead-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lead-email">Email Address *</Label>
              <Input
                id="lead-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lead-company">Company Name (Optional)</Label>
              <Input
                id="lead-company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your Company"
                className="mt-1"
              />
            </div>
            <p className="text-xs text-[#6B7280]">
              By submitting this form, you agree to receive communications from EverMo Solutions. 
              We respect your privacy and will never share your information.
            </p>
            <Button
              type="submit"
              className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold"
              size="lg"
            >
              {selectedResource?.type === 'google-sheet' ? 'Access Resource' : 'Download Now'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;