import React from 'react';
import { Brain, Phone, Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">InflecIQ</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering innovation with technology, data, and AI solutions. 
              Your trusted partner for digital transformation.
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p>8 The Green #8931</p>
              <p>Dover, DE 19901, United States</p>
              <p className="mt-2 text-green-400">✅ E-Verified Company</p>
            </div>
            <div className="flex space-x-4">
             <a 
  href="https://www.linkedin.com/company/infleciq" 
  className="text-gray-400 hover:text-blue-400 transition-colors"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit InflecIQ on LinkedIn"
>
  <Linkedin className="h-6 w-6" />
</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
           <div className="space-y-2 text-sm text-gray-300">
  <p className="flex items-center">
    <Phone className="h-5 w-5 mr-3 text-blue-400" />
    +1 (202) 743-4091
  </p>

  <a href="mailto:hr@infleciq.org" className="flex items-center text-gray-300 hover:underline">
    <Mail className="h-5 w-5 mr-3 text-blue-400" />
    hr@infleciq.org
  </a>

  <p className="flex items-center">
    <MapPin className="h-5 w-5 mr-3 text-blue-400" />
    Dover, DE 19901
  </p>
</div>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} InflecIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}