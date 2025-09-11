import React from 'react';
import { Code, Database, Brain, Cloud, Settings, Languages } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: "Python", level: 100 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="text-purple-400" size={24} />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "Computer Vision", level: 85 },
        { name: "Deep Learning", level: 88 }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="text-green-400" size={24} />,
      skills: [
        { name: "AWS", level: 95 },
        { name: "GCP", level: 45 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 }
      ]
    },
    {
      title: "Data & Databases",
      icon: <Database className="text-yellow-400" size={24} />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MS Excel", level: 90 },
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Experience in ML sub-fields",
      icon: <Settings className="text-red-400" size={24} />,
      skills: [
        { name: "NLP", level: 88 },
        { name: "Computer Vision", level: 77 },
        { name: "Reinforcement Learning", level: 70 },
        { name: "Optimization Algorithms", level: 92 }
      ]
    },
    {
      title: "Languages",
      icon: <Languages className="text-cyan-400" size={24} />,
      skills: [
        { name: "English", level: 100 },
        { name: "German", level: 70 },
        { name: "French", level: 35 },
        { name: "Hindi", level: 100 },
        { name: "Marathi", level: 100 }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-cyan-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the data science and machine learning technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-lg font-bold text-white ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getSkillColor(skill.level)} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly updating my skills through 
              online courses, personal projects, and hands-on experience with the latest tools 
              and frameworks in data science and machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;