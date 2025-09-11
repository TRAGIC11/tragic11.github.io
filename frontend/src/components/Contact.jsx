import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, MessageCircle, Check  } from 'lucide-react';


const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400" size={24} />,
      label: "Email",
      value: "piyush.bhujbal0201@gmail.com",
      onClick: () => copyToClipboard("piyush.bhujbal0201@gmail.com"),
      description: "Send me an email for business inquiries"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      label: "Phone",
      value: "+91 88063 06120",
      href: "tel:+918806306120",
      description: "Call me directly for urgent matters"
    },
    {
      icon: <Github className="text-gray-400" size={24} />,
      label: "GitHub",
      value: "github.com/TRAGIC11",
      href: "https://github.com/TRAGIC11",
      description: "Check out my code and projects"
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/piyush-bhujbal",
      href: "https://www.linkedin.com/in/piyush-bhujbal",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss data science opportunities, collaborations, or just connect over shared interests
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Section */}
          <div className="text-center mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
              <MessageCircle className="text-cyan-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, innovative projects, 
                or connecting with fellow data scientists and tech enthusiasts. Choose your preferred way to reach out!
              </p>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                onClick={info.onClick || undefined}
                className={`flex items-start p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 group 
                ${info.onClick ? "cursor-pointer hover:border-cyan-400/50 hover:scale-105" : "hover:border-cyan-400/50 hover:scale-105"}`}
              >
                <div className="mr-4 mt-1">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                    {info.label}
                  </h4>
                  <p className="text-cyan-400 font-medium mb-2 flex items-center">
                    {info.value}
                    {info.label === "Email" && copied && (
                      <span className="ml-2 text-green-400 text-sm">Copied!</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-400">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Location and Availability */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-red-400 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-white">Location</h4>
              </div>
              <p className="text-gray-300 mb-2">Based in India</p>
              <p className="text-sm text-gray-400">Open to remote opportunities worldwide</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h4 className="text-lg font-semibold text-white">Availability</h4>
              </div>
              <p className="text-gray-300 mb-2">Always interested in new opportunities</p>
              <p className="text-sm text-gray-400">Usually responds within 24 hours</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-400/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-300 mb-6">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:piyush.bhujbal0201@gmail.com"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/piyush-bhujbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <Linkedin size={20} className="mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;