"use client"
// ProjectCard.js
// ProjectCard.js

import React from 'react';

function ProjectCard({ project }) {
    if (!project) {
        // Handle the case where project is undefined
        return <div>No project data available.</div>;
      }
  const { projectTitle, 'project-description': projectDescription, projectLink, githubLink } = project;

  return (
    <div className="border p-4 m-4">
      <h2 className="text-xl font-bold">{projectTitle}</h2>
      <p className="text-gray-600">{projectDescription}</p>

      <div className="mt-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
        <span className="mx-2 text-gray-400">|</span>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:underline"
        >
          GitHub Link
        </a>
      </div>

      <div className="mt-4">
        {/* Embed the link preview using an iframe */}
        <iframe
          src={projectLink}
          title={`Preview of ${projectTitle}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default ProjectCard;
