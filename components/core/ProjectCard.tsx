import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: string;
    number: string;
    picture: string; // URL for the project image
    title: string;
    description: string;
    skills: string[];
    position: "left" | "right";
    githubLink: string;
    liveLink: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="relative w-full max-w-xl m-6 h-80 shadow-lg transition-transform transform hover:scale-105"
      id={project.id}
    >
      {/* Full background image */}
      <Image
        src={project.picture}
        alt={project.title}
        layout="fill" // Makes the image cover the div
        objectFit="cover" // Ensures the image covers the entire div
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>

      {/* Project content */}
      <div
        className={`absolute z-20 flex flex-col justify-center p-6 text-white ${
          project.position === "left" ? "left-5" : "right-5"
        }`}
      >
        <div
          className={`project-number text-5xl font-bold transition-opacity duration-300`}
        >
          {project.number}
        </div>
        <div className="project-skill-container flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, index) => (
            <Image
              key={index}
              src={`/mytech/stack/${skill}`}
              alt={skill.split(".")[0]}
              className="project-skill w-10 h-10"
              width={40}
              height={40}
            />
          ))}
        </div>

        <h2 className="project-heading text-2xl font-semibold">
          {project.title}
        </h2>
        <p className="project-sub-heading mb-4 italic">{project.description}</p>

        <div className="btn-group flex gap-2">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg text-center"
          >
            Read More
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              title="GitHub Link"
              className="fa-brands fa-github text-white text-2xl transition-colors duration-300 hover:text-pink-400"
            ></i>
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <i
              title="Live Link"
              className="fa-solid fa-link text-white text-2xl transition-colors duration-300 hover:text-pink-400"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
