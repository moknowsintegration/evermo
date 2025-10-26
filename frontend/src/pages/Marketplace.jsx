import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Star, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partners = [
    {
      id: 1,
      name: 'Grasshopper',
      category: 'communications',
      description: 'Professional phone numbers and messaging for your business',
      logo: 'https://via.placeholder.com/150x80/1E3A8A/FFFFFF?text=Grasshopper',
      pricing: 'Starting at $16/mo',
      tiers: ['Solopreneurs $16/mo', 'Solo Plus $31/mo', 'Partner $51/mo', 'Small Business $89/mo'],
      features: ['Virtual phone number', 'Call forwarding', 'Voicemail transcription', 'Mobile & desktop apps'],
      link: 'https://grasshopper.o9o4.net/MmRBGJ',
      featured: true,
      discount: null
    },
    {
      id: 2,
      name: 'AdCreative.ai',
      category: 'marketing',
      description: 'AI-powered creative generation that converts',
      logo: 'https://via.placeholder.com/150x80/047857/FFFFFF?text=AdCreative',
      pricing: '$21-$111/mo',
      tiers: ['Starter $21/mo', 'Premium $44/mo', 'Ultimate $74/mo', 'Scale-Up $111/mo'],
      features: ['AI-generated ad creatives', 'Multiple format support', 'Brand customization', 'Performance predictions'],
      link: 'https://free-trial.adcreative.ai/pkrv9bm36w9e',
      featured: true,
      discount: 'Free Trial Available'
    },
    {
      id: 3,
      name: 'Alliance Virtual Offices',
      category: 'business-services',
      description: 'Professional business addresses and virtual office services',
      logo: 'https://via.placeholder.com/150x80/F59E0B/FFFFFF?text=Alliance',
      pricing: 'Varies by location',
      tiers: ['Virtual Address', 'Live Receptionist', 'Meeting Rooms', 'Full Office Space'],
      features: ['Professional address', 'Mail forwarding', 'Meeting spaces', 'Live receptionist'],
      link: 'https://ps.alliancevirtualoffices.com/hrted0qf0hv1-c1bkgt',
      featured: false,
      discount: 'Save $200 - Free Setup'
    },
    {
      id: 4,
      name: 'iPostal1',
      category: 'business-services',
      description: 'Digital mailbox with street address for mail and packages',
      logo: 'https://via.placeholder.com/150x80/1E3A8A/FFFFFF?text=iPostal1',
      pricing: '$9.99/mo',
      tiers: ['Green $9.99/mo', 'Blue $19.99/mo', 'Red $29.99/mo'],
      features: ['Real street address', 'Mail scanning', 'Package acceptance', 'Mail forwarding'],
      link: 'https://ipostal1.com/?ref=4825',
      featured: false,
      discount: null
    },
    {
      id: 5,
      name: 'Fax.Plus',
      category: 'communications',
      description: 'Online fax service - send and receive faxes online',
      logo: 'https://via.placeholder.com/150x80/047857/FFFFFF?text=Fax.Plus',
      pricing: '$8.99/mo',
      tiers: ['Basic $8.99/mo', 'Premium $19.99/mo', 'Corporate $39.99/mo'],
      features: ['Send/receive faxes', 'Mobile apps', 'Cloud storage', 'E-signature support'],
      link: 'https://www.fax.plus/#5dca6500f1e5a',
      featured: false,
      discount: null
    },
    {
      id: 6,
      name: 'Phone.com',
      category: 'communications',
      description: 'Cloud phone system for small businesses',
      logo: 'https://via.placeholder.com/150x80/F59E0B/FFFFFF?text=Phone.com',
      pricing: 'Varies',
      tiers: ['Basic', 'Plus', 'Pro', 'Enterprise'],
      features: ['Business phone system', 'Auto attendant', 'Call recording', 'SMS messaging'],
      link: 'https://www.tkqlhce.com/click-100857907-10802806',
      featured: false,
      discount: '20% OFF for 3 Months'
    },
    {
      id: 7,
      name: 'Looka',
      category: 'marketing',
      description: 'AI-powered logo maker and brand kit builder',
      logo: 'https://via.placeholder.com/150x80/1E3A8A/FFFFFF?text=Looka',
      pricing: 'One-time purchase',
      tiers: ['Basic Logo $20', 'Premium Logo $65', 'Brand Kit $96'],
      features: ['Logo design', 'Brand kit', 'Social media templates', 'Business card designs'],
      link: 'https://looka.grsm.io/8vpu9gqe4ru5',
      featured: true,
      discount: null
    },
    {
      id: 8,
      name: 'Neo.Tax',
      category: 'tax-accounting',
      description: 'R&D tax credits and capitalization optimization',
      logo: 'https://via.placeholder.com/150x80/047857/FFFFFF?text=Neo.Tax',
      pricing: 'Custom pricing',
      tiers: ['Small Business', 'Mid-Market', 'Enterprise'],
      features: ['R&D credit analysis', 'Section 174 capitalization', 'Tax savings optimization', 'Compliance support'],
      link: 'https://get.neo.tax/68ehwy0ustwy',
      featured: false,
      discount: null
    },
    {
      id: 9,
      name: 'ClickUp',
      category: 'productivity',
      description: 'The perfect project management tool for teams',
      logo: 'https://via.placeholder.com/150x80/F59E0B/FFFFFF?text=ClickUp',
      pricing: 'Free & Paid Plans',
      tiers: ['Free Forever', 'Unlimited $7/mo', 'Business $12/mo', 'Enterprise Custom'],
      features: ['Task management', 'Time tracking', 'Goals & reporting', 'Docs & wikis'],
      link: 'https://clickup.pxf.io/c/1929042/1416724/16855',
      featured: true,
      discount: 'Free Forever Plan'
    },
    {
      id: 10,
      name: 'Northwest Registered Agent',
      category: 'business-services',
      description: 'Professional registered agent services',
      logo: 'https://via.placeholder.com/150x80/1E3A8A/FFFFFF?text=Northwest',
      pricing: '$125/year',
      tiers: ['Registered Agent $125/yr', 'Business Formation Package'],
      features: ['Registered agent service', 'Compliance alerts', 'Document storage', 'Privacy protection'],
      link: 'https://shareasale.com/r.cfm?b=965743&u=2226891&m=69959',
      featured: false,
      discount: null
    },
    {
      id: 11,
      name: 'OpenPhone',
      category: 'communications',
      description: 'Modern business phone for teams',
      logo: 'https://via.placeholder.com/150x80/047857/FFFFFF?text=OpenPhone',
      pricing: 'Varies',
      tiers: ['Starter', 'Business', 'Enterprise'],
      features: ['Shared phone numbers', 'Team collaboration', 'CRM integrations', 'Call analytics'],
      link: 'https://get.openphone.com/891om0shxwkg',
      featured: false,
      discount: null
    },
    {
      id: 12,
      name: 'Envato Elements',
      category: 'marketing',
      description: 'Unlimited downloads of creative assets',
      logo: 'https://via.placeholder.com/150x80/F59E0B/FFFFFF?text=Envato',
      pricing: '$16.50/mo',
      tiers: ['Individual $16.50/mo', 'Teams Custom'],
      features: ['Stock photos', 'Graphics & templates', 'Fonts', 'Video footage'],
      link: 'https://1.envato.market/c/1929042/298927/4662',
      featured: false,
      discount: null
    }
  ];

  const categories = [
    { value: 'all', label: 'All Partners', count: partners.length },
    { value: 'communications', label: 'Communications', count: partners.filter(p => p.category === 'communications').length },
    { value: 'marketing', label: 'Marketing', count: partners.filter(p => p.category === 'marketing').length },
    { value: 'business-services', label: 'Business Services', count: partners.filter(p => p.category === 'business-services').length },
    { value: 'tax-accounting', label: 'Tax & Accounting', count: partners.filter(p => p.category === 'tax-accounting').length },
    { value: 'productivity', label: 'Productivity', count: partners.filter(p => p.category === 'productivity').length }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPartners = filteredPartners.filter(p => p.featured);
  const regularPartners = filteredPartners.filter(p => !p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted Partners & Resources
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover hand-picked tools and services to help your business thrive. All partners are carefully vetted and trusted by EverMo Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search partners..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>{filteredPartners.length} partners found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto">
              {categories.map(cat => (
                <TabsTrigger key={cat.value} value={cat.value} className="flex items-center gap-2">
                  {cat.label}
                  <Badge variant="secondary" className="ml-1">{cat.count}</Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Featured Partners */}
      {featuredPartners.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Star className="h-6 w-6 text-[#F59E0B] fill-current" />
              <h2 className="text-3xl font-bold text-[#1F2937]">Featured Partners</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPartners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Partners */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPartners.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-[#1F2937] mb-8">All Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPartners.map(partner => (
                  <PartnerCard key={partner.id} partner={partner} featured={false} />
                ))}
              </div>
            </>
          )}
          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No partners found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Become a Partner?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for quality partners to recommend to our clients.
          </p>
          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us About Partnerships
          </Button>
        </div>
      </section>
    </div>
  );
};

const PartnerCard = ({ partner, featured }) => {
  return (
    <Card className={`h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
      featured ? 'border-2 border-[#F59E0B]' : 'border-2 hover:border-[#1E3A8A]'
    }`}>
      <CardHeader>
        {featured && (
          <div className="flex items-center gap-1 text-[#F59E0B] mb-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs font-semibold uppercase">Featured Partner</span>
          </div>
        )}
        <div className="bg-gray-50 rounded-lg p-4 mb-4 h-20 flex items-center justify-center">
          <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
        </div>
        <CardTitle className="text-xl font-bold text-[#1F2937]">{partner.name}</CardTitle>
        <CardDescription className="text-[#6B7280] min-h-[48px]">{partner.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {partner.discount && (
          <Badge className="bg-[#047857] text-white mb-4 hover:bg-[#047857]">
            {partner.discount}
          </Badge>
        )}
        <div className="mb-4">
          <p className="text-sm font-semibold text-[#1F2937] mb-2">Pricing Tiers:</p>
          <ul className="space-y-1">
            {partner.tiers.map((tier, idx) => (
              <li key={idx} className="text-sm text-[#6B7280] flex items-start">
                <Check className="h-4 w-4 text-[#047857] mr-2 flex-shrink-0 mt-0.5" />
                <span>{tier}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1F2937] mb-2">Key Features:</p>
          <ul className="space-y-1">
            {partner.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-sm text-[#6B7280] flex items-start">
                <span className="text-[#047857] mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#1F2937]">{partner.pricing}</span>
          </div>
          <Button
            className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white"
            onClick={() => window.open(partner.link, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Partner Site
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Marketplace;