import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About EverMo */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold text-white">EverMo</span>
              <span className="text-sm font-medium text-gray-400 -mt-1">Solutions</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Multi-industry professional services specializing in tax, healthcare, and business solutions.
            </p>
            <div className="space-y-1">
              <p className="text-xs font-semibold text-white">Credentials:</p>
              <p className="text-xs text-gray-400">Licensed Healthcare Administrator</p>
              <p className="text-xs text-gray-400">Tax Professional</p>
              <p className="text-xs text-gray-400">Multi-Industry Specialist</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/tax" className="text-sm hover:text-[#F59E0B]">
                  Tax Services
                </Link>
              </li>
              <li>
                <Link to="/services/business" className="text-sm hover:text-[#F59E0B]">
                  Business Services
                </Link>
              </li>
              <li>
                <Link to="/services/healthcare" className="text-sm hover:text-[#F59E0B]">
                  Healthcare Services
                </Link>
              </li>
              <li>
                <Link to="/services/specialized" className="text-sm hover:text-[#F59E0B]">
                  Specialized Services
                </Link>
              </li>
            </ul>
            <h3 className="text-white font-semibold mt-6 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-[#F59E0B]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm hover:text-[#F59E0B]">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm hover:text-[#F59E0B]">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#F59E0B] mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Email:</p>
                  <a href="mailto:connect@evermosolutions.com" className="hover:text-[#F59E0B]">
                    connect@evermosolutions.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#F59E0B] mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Address:</p>
                  <p className="text-gray-400">
                    2727 W Paces Ferry Road<br />
                    Suite 750<br />
                    Atlanta, GA 30339
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[#F59E0B] mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Business Hours:</p>
                  <p className="text-gray-400">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-400">Sat-Sun: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <div className="space-y-2 mb-6">
              <p className="text-sm font-medium text-white">Primary:</p>
              <p className="text-sm text-gray-400">Georgia (Statewide)</p>
              <p className="text-sm font-medium text-white mt-4">Multi-State Services:</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Tax preparation</li>
                <li>• Business formation</li>
                <li>• Payroll processing</li>
                <li>• Consulting services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 EverMo Solutions. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-[#F59E0B]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-[#F59E0B]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;