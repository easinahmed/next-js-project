import { Mail, Instagram, Linkedin, ArrowRight, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16 px-6 md:px-12">
      {/* Main Footer Content */}
      <div className="container  grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Logo & About */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8  flex items-center justify-center">
              <img src="/logo.svg" alt="" />
            </div>
            <span className="text-xl font-bold">PixFix</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Yes, there are many notable ma corporate businesses informati worldwide, such as Google the man design ever
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-white mb-6">Company</h3>
          <ul className="space-y-3">
            {['About Us', 'Our Services', 'Our Team', 'Contact'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 text-sm group">
                  <span className="text-orange-500">›</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-bold text-white mb-6">Resources</h3>
          <ul className="space-y-3">
            {['Support Center', 'Documentation', 'Changelog'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-bold text-white mb-6">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-6">
            Lorem Ipsum is simply is dumiorny is text Lorem Ipsum is simply
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your e-mail"
              className="flex-1 px-4 py-3 bg-gray-800 text-white text-sm placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-3 flex items-center justify-center">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-8"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © Yoursitenme 2023 | All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
            <Share2 size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
            Terms & Condition
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}