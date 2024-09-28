"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    id: string;
    number: string;
    picture: string;
    title: string;
    description: string;
    skills: string[];
    position: "left" | "right";
    githubLink: string;
    liveLink: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Get the first 25 characters of the description
  const shortDescription =
    project.description.slice(0, 50) +
    (project.description.length > 50 ? "..." : "");

  return (
    <div
      className="relative w-full max-w-xs m-4 h-64 shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
      id={project.id}
    >
      {/* Full background image */}
      <Image
        src={project.picture}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

      {/* Project content */}
      <div
        className={`absolute z-20 flex flex-col justify-center p-4 text-white ${
          project.position === "left" ? "left-3" : "right-3"
        }`}
      >
        <div
          className={`project-number text-4xl font-bold transition-opacity duration-300`}
        >
          {project.number}
        </div>
        <div className="project-skill-container flex flex-wrap gap-2 mb-2">
          {project.skills.map((skill, index) => (
            <Image
              key={index}
              src={`/mytech/stack/${skill}`}
              alt={skill.split(".")[0]}
              className="project-skill w-6 h-6"
              width={24}
              height={24}
            />
          ))}
        </div>

        <h2 className="project-heading text-xl font-semibold">
          {project.title}
        </h2>
        <p className="project-sub-heading mb-2 italic text-sm">
          {shortDescription}
        </p>

        <div className="btn-group flex gap-2">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-1 px-2 rounded-lg text-center"
          >
            Read More
          </button>

          <button
            onClick={() => window.open(project.githubLink, "_blank")}
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-1 px-2 rounded-lg text-center"
          >
            <FaGithub />
          </button>
        </div>
      </div>

      {/* Modal for full description */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-4 rounded-lg text-black max-w-sm w-full">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p>{project.description}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
