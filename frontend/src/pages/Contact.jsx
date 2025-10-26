import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    industry: '',
    message: '',
    contactMethod: 'email'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Thank you for contacting EverMo Solutions! We\'ve received your message and will respond within 1 business day.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: '',
      industry: '',
      message: '',
      contactMethod: 'email'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to simplify your compliance and streamline your operations? We're here to help. Schedule a consultation or reach out with your questions.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="serviceInterest">Service Interest *</Label>
                  <Select
                    required
                    value={formData.serviceInterest}
                    onValueChange={(value) => setFormData({ ...formData, serviceInterest: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tax">Tax Services</SelectItem>
                      <SelectItem value="business">Business Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare Services</SelectItem>
                      <SelectItem value="specialized">Specialized Services</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                      <SelectItem value="not-sure">Not Sure - Need Guidance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select
                    required
                    value={formData.industry}
                    onValueChange={(value) => setFormData({ ...formData, industry: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="transportation">Transportation/Trucking</SelectItem>
                      <SelectItem value="small-business">Small Business</SelectItem>
                      <SelectItem value="government">Government Contracting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">How Can We Help? *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1"
                    rows={5}
                    maxLength={500}
                  />
                  <p className="text-sm text-[#6B7280] mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <div>
                  <Label className="mb-3 block">Preferred Contact Method</Label>
                  <RadioGroup
                    value={formData.contactMethod}
                    onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-method" />
                      <Label htmlFor="email-method" className="font-normal">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-method" />
                      <Label htmlFor="phone-method" className="font-normal">Phone</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="either" id="either-method" />
                      <Label htmlFor="either-method" className="font-normal">Either</Label>
                    </div>
                  </RadioGroup>
                </div>

                <p className="text-sm text-[#6B7280]">
                  Your information is confidential and will never be shared with third parties.
                </p>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Contact Details</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-[#1E3A8A] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#1F2937] mb-1">Email Contacts:</p>
                        <p className="text-[#6B7280]">General: connect@evermosolutions.com</p>
                        <p className="text-[#6B7280]">Assistance: assistteam@evermosolutions.com</p>
                        <p className="text-[#6B7280]">Tax: taxprep@evermosolutions.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-[#1E3A8A] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#1F2937] mb-1">Address:</p>
                        <p className="text-[#6B7280]">
                          2727 W Paces Ferry Road<br />
                          Suite 750<br />
                          Atlanta, GA 30339
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-[#1E3A8A] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#1F2937] mb-1">Business Hours:</p>
                        <p className="text-[#6B7280]">Monday - Friday: 8:00 AM - 8:00 PM</p>
                        <p className="text-[#6B7280]">Saturday - Sunday: By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F3F4F6] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Consultation Booking</h3>
                  <p className="text-[#6B7280] mb-4">
                    Prefer to schedule directly? Use our online calendar to book a 30-minute consultation at a time that works for you.
                  </p>
                  <Button
                    className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white font-semibold w-full"
                    onClick={() => toast.info('Online scheduling will be available soon!')}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Google Maps Integration (To be added)</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
            Looking for Immediate Assistance?
          </h2>
          <p className="text-lg text-[#6B7280]">
            For urgent tax matters or time-sensitive compliance issues, please call our office directly or send an email to connect@evermosolutions.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;