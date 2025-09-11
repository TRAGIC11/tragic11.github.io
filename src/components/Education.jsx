import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "BTech Aerospace Engineering",
    institution: "Indian Institute of Technology, Madras",
    period: "2019 - 2023",
    minor: "Artificial Intelligence and Machine Learning"
  };

  const courses = [
    "Non-Linear Optimization",
    "Stochastic Optimization", 
    "Computer Vision",
    "Multi-Armed Bandits"
  ];

  const certifications = [
    {
      title: "Introduction to Machine Learning",
      provider: "Coursera | Stanford University",
      icon: <BookOpen className="text-blue-400" size={20} />
    },
    {
      title: "Deep Learning Specialization", 
      provider: "Coursera | DeepLearning.AI",
      icon: <Award className="text-green-400" size={20} />
    },
    {
      title: "Convolutional Neural Networks",
      provider: "Coursera | DeepLearning.AI", 
      icon: <Trophy className="text-yellow-400" size={20} />
    },
    {
      title: "Sequence Models",
      provider: "Coursera | DeepLearning.AI",
      icon: <BookOpen className="text-purple-400" size={20} />
    },
    {
      title: "Algorithms on Graphs",
      provider: "Coursera | San Diego University",
      icon: <Award className="text-red-400" size={20} />
    },
    {
      title: "Applications of AI for Anomaly Detection",
      provider: "NVIDIA",
      icon: <Trophy className="text-cyan-400" size={20} />
    }
  ];

  const achievements = [
    "Top 1% contributor on Project Euler, solving complex computational mathematics problems",
    "Hockey Team Captain for Hostel during first year at IIT Madras (2020)"
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education & <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strong academic foundation with continuous learning in cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Formal Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{education.degree}</h4>
                  <p className="text-cyan-400 font-medium text-lg">{education.institution}</p>
                  <p className="text-gray-400">{education.period}</p>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-cyan-400 font-semibold mb-2">MINOR SPECIALIZATION</p>
                  <p className="text-white font-medium">{education.minor}</p>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">ML/AI Minor Courses</h4>
              <div className="grid grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <div key={index} className="bg-gray-800/50 p-3 rounded-lg">
                    <p className="text-gray-300 text-sm font-medium">{course}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Professional Certifications</h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors duration-200">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-semibold mb-1">{cert.title}</h5>
                        <p className="text-gray-400 text-sm">{cert.provider}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;