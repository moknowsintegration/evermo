import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const services = [
    { name: 'Tax Services', path: '/services/tax' },
    { name: 'Business Services', path: '/services/business' },
    { name: 'Healthcare Services', path: '/services/healthcare' },
    { name: 'Specialized Services', path: '/services/specialized' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#1E3A8A]">EverMo</span>
              <span className="text-sm font-medium text-[#6B7280] -mt-1">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium hover:text-[#1E3A8A] ${
                isActive('/') ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium hover:text-[#1E3A8A] ${
                isActive('/about') ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium hover:text-[#1E3A8A] flex items-center ${
                  location.pathname.startsWith('/services') ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
                }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#1E3A8A]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className={`text-sm font-medium hover:text-[#1E3A8A] ${
                isActive('/industries') ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
              }`}
            >
              Industries
            </Link>
            <Link
              to="/resources"
              className={`text-sm font-medium hover:text-[#1E3A8A] ${
                isActive('/resources') ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
              }`}
            >
              Resources
            </Link>
            <Link
              to="/marketplace"
              className={`text-sm font-medium hover:text-[#1E3A8A] ${
                isActive('/marketplace') ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
              }`}
            >
              Marketplace
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium hover:text-[#1E3A8A] ${
                isActive('/contact') ? 'text-[#1E3A8A]' : 'text-[#6B7280]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#6B7280] hover:text-[#1E3A8A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium text-[#6B7280] hover:text-[#1E3A8A]">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium text-[#6B7280] hover:text-[#1E3A8A]">
                About
              </Link>
              <div>
                <div className="text-sm font-medium text-[#6B7280] mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-sm text-[#6B7280] hover:text-[#1E3A8A]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/industries" className="text-sm font-medium text-[#6B7280] hover:text-[#1E3A8A]">
                Industries
              </Link>
              <Link to="/resources" className="text-sm font-medium text-[#6B7280] hover:text-[#1E3A8A]">
                Resources
              </Link>
              <Link to="/marketplace" className="text-sm font-medium text-[#6B7280] hover:text-[#1E3A8A]">
                Marketplace
              </Link>
              <Link to="/contact" className="text-sm font-medium text-[#6B7280] hover:text-[#1E3A8A]">
                Contact
              </Link>
              <Button
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium w-full"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;