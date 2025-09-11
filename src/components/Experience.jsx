import React from 'react';
import { Calendar, Building, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "loading...",
      company: "loading...",
      location: "loading...",
      period: "loading...",
      achievements: [
      ],
      current: true
    },
    {
      title: "Associate Data Scientist",
      company: "WiseTech Global",
      location: "Bengaluru, India",
      period: "05/2024 - 07/2025",
      achievements: [
        "AKBE Evolution: Upgraded the user-feedback engine from heuristics to GPT-4-In-context-learning (AKBE v3), leveraging live corrections to raise attribute-parsing precision and enable zero-shot support for invoices.",
        "Supplier-Invoice Revamp: Designed a new annotation schema, mentored data-entry validators, and fine-tuned Granite-3.0-2B, significantly boosting field-extraction accuracy and accelerating onboarding of new invoice formats.",
        "Customer Impacted: Analyzed system outputs to detect sub-normal results for a key customer and enhanced the pipeline, achieving a 99% improvement in accuracy for a critical data field.",
        "Automation Tools: Developed multiple internal tools using Streamlit for automating multiple processes, reducing manual efforts and simplifying workflows. Also prototyped additional tools as proofs of concept.",
        "Production Debug & Deployment: Built an AWS-native framework that automatically captures run-time artefacts, cuts root-cause analysis time, and standardizes secure model packaging for faster Safe rollout."
      ],
      current: false
    },
    {
      title: "Associate Software Developer",
      company: "Blume Global",
      location: "Bengaluru, India", 
      period: "07/2023 - 04/2024",
      achievements: [
        "Developed and implemented a sophisticated mathematical model utilizing Gurobi and OR-tools to address the Optimized Routing Problem in Logistics as a pivotal Onboarding Project.",
        "Enhanced Blume's Shipment Planning product by incorporating Rail mode functionality and defining the Container Loading Algorithm, contributing to optimized routing solutions.",
        "Independently managing the transition from Blume's Routing Optimizer to NVIDIA's CuOpt Solver, driving the integration of cutting-edge routing optimization techniques."
      ],
      current: false
    },
    {
      title: "Data Scientist Intern",
      company: "Perpetual Block",
      location: "Pune, India",
      period: "06/2022 - 07/2022",
      achievements: [
        "Worked on the project of Table Structure Extraction and Reconstruction.",
        "Devised two methods, one based on OpenCV and other on pdfPlumber to extract table structure and data within with 90% accuracy to provide labels for the DL model and designed a OOP code.",
        "Finally, Implemented Faster RCNN based model LayoutLM and VGG-19 based model TabletNet."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building innovative data solutions and driving business impact through advanced analytics
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-cyan-400/50 transition-colors duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold text-white mr-3">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="bg-cyan-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 mb-2">
                    <Building size={18} className="mr-2" />
                    <span className="text-lg font-medium">{exp.company}</span>
                    <span className="text-gray-400 ml-2">• {exp.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <ChevronRight size={16} className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;