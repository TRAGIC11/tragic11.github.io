import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Piyush Bhujbal</h3>
            <p className="text-gray-400 leading-relaxed">
              Data Scientist passionate about transforming complex data into actionable insights. 
              Building the future with ML and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-4">
              Follow my journey and connect with me on social platforms
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/piyushbhujbal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Github className="text-gray-400 hover:text-white" size={20} />
              </a>
              <a
                href="https://linkedin.com/in/piyushbhujbal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="text-gray-400 hover:text-blue-400" size={20} />
              </a>
              <a
                href="mailto:piyush.bhujbal2001@gmail.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Mail className="text-gray-400 hover:text-cyan-400" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Piyush Bhujbal. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-400 mx-2" size={16} />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-xs leading-relaxed">
              Data Science • Machine Learning • AI • Python • TensorFlow • PyTorch • Computer Vision • 
              AWS • GCP • Algorithm Optimization • Deep Learning • IIT Madras Graduate
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;