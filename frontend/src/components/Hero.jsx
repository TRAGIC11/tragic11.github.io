import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Piyush <span className="text-cyan-400">Bhujbal</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            Data Scientist & Machine Learning Engineer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights. Specialized in ML/AI solutions, 
            with experience at WiseTech Global and a strong foundation from IIT Madras.
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="mailto:piyush.bhujbal0201@gmail.com"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            
            <a
              href="tel:+918806306120"
              className="flex items-center space-x-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              <Phone size={20} />
              <span>Call Me</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-6">
            <a
              href="https://github.com/TRAGIC11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-bhujbal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;