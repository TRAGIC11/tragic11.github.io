import React from 'react';
import { ExternalLink, Github, Award, Zap, Navigation, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Armed Bandit for Optimal Cricket Shot Selection",
      description: "Built RL agents (UCB, Thompson Sampling) for optimal cricket shot selection, dynamically balancing runs vs. risk, leading to smarter decision-making. Simulated innings where agents adaptively learn the best strategies over time, improving decision-making.",
      tech: ["Reinforcement Learning", "Python", "Thompson Sampling", "UCB Algorithm"],
      icon: <Award className="text-yellow-400" size={24} />,
      achievements: [
        "Evaluated agent performance in terms of regret, total runs scored, and wickets lost, demonstrating real-world applicability of MAB techniques"
      ]
    },
    {
      title: "Traffic Image Segmentation",
      description: "Used the CARLA self-driving car dataset and UNet to achieve an training accuracy of 99.7/3%: Evaluated: agent performance in terms of regret, total runs scored and wickets lost, demonstrating real-world applicability of MAB techniques.",
      tech: ["Computer Vision", "UNet", "CARLA Dataset", "Deep Learning"],
      icon: <Navigation className="text-blue-400" size={24} />,
      achievements: [
        "Achieved 99.73% training accuracy on CARLA dataset",
        "Implemented advanced image segmentation for autonomous driving"
      ]
    },
    {
      title: "NVIDIA Network Intrusion Detector",
      description: "Built Network Intrusion Detectors: XC-Boost: Supervised model that achieved AUC-ROC of 0.9997 on test data. Auto-Encoders: Unsupervised model that also achieved an AUC-ROC of 0.994. GANs: Trained Generator(to produce data which doesn't follow gaussian distribution) and Discriminator (to detect anomalous). Achieved an AUC-ROC of 0.97.",
      tech: ["XGBoost", "AutoEncoders", "GANs", "Anomaly Detection", "Cybersecurity"],
      icon: <Shield className="text-red-400" size={24} />,
      achievements: [
        "XGBoost model: AUC-ROC of 0.9997",
        "AutoEncoder model: AUC-ROC of 0.994", 
        "GAN-based detector: AUC-ROC of 0.97"
      ],
      link: "https://nvidia-network-intrusion.example.com"
    },
    {
      title: "NYC PathFinder",
      description: "Used New York City Data on DIMACS consisting of 264,346 nodes and 733,846 edges. Developed 3 algorithms to improve path finding compared with basic Dijkstra's algorithm: Bidirectional Dijkstra: 4 times faster, A* algorithm: 7.5 times faster, Contraction Hierarchies: 82 times faster.",
      tech: ["Graph Algorithms", "Pathfinding", "Algorithm Optimization", "Data Structures"],
      icon: <Zap className="text-green-400" size={24} />,
      achievements: [
        "Bidirectional Dijkstra: 4x performance improvement",
        "A* Algorithm: 7.5x faster than basic Dijkstra",
        "Contraction Hierarchies: 82x performance boost"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in machine learning, computer vision, and algorithm optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-xl font-bold text-white ml-3">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">KEY ACHIEVEMENTS</h4>
                <div className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span className="text-sm font-medium">View Project</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;