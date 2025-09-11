import React from 'react';
import { GraduationCap, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Data Scientist with a passion for transforming complex datasets into actionable business insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Piyush Bhujbal, a Data Scientist currently working at WiseTech Global. 
              With a BTech in Aerospace Engineering from IIT Madras and a Minor in Artificial Intelligence 
              and Machine Learning, I bring a unique blend of technical expertise and analytical thinking 
              to complex data challenges.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in data science began during my internship at Perpetual Block, where I worked on 
              table structure extraction and reconstruction. Since then, I've been involved in various 
              projects ranging from machine learning optimization to computer vision applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building end-to-end ML solutions, from data preprocessing and model development 
              to deployment and monitoring. My experience spans across multiple domains including computer vision, 
              natural language processing, and optimization algorithms.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-gray-300">
                BTech Aerospace Engineering from IIT Madras with Minor in AI/ML. 
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <Target className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
              </div>
              <p className="text-gray-300">
                Machine Learning, Computer Vision, Data Analytics, 
                Algorithm Optimization, and AI-driven Solutions
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <Users className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Leadership</h3>
              </div>
              <p className="text-gray-300">
                Hockey Team Captain at IIT Madras for my Hostel, demonstrating 
                leadership and team coordination skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;