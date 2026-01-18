import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectShowcase: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with Docusaurus, featuring blog system and project showcases.",
      techStack: ["React", "TypeScript", "Docusaurus", "TailwindCSS"],
      githubUrl: "https://github.com/TuringProblem/portfolio",
      liveUrl: "https://turingproblem.github.io/portfolio/",
    },
    // Add more projects here as you build them
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};