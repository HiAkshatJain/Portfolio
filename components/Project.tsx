// components/ProjectSection.tsx

import ProjectCard from "./core/ProjectCard";

interface Project {
  id: string;
  number: string;
  picture: string;
  title: string;
  description: string;
  skills: string[];
  position: "left" | "right";
  githubLink: string;
  liveLink: string;
}

const projectsData: Project[] = [
  {
    id: "project1",
    number: "01",
    picture: "/home1.png",
    title: "Learn Pulse",
    description:
      "LearnPulse is an innovative ed-tech platform that transforms learning with interactive, personalized content and real-time feedback.",
    skills: [
      "React.png",
      "Javascript.svg",
      "Express.png",
      "Tailwind.png",
      "NodeJs.svg",
      "MongoDB.svg",
      "Redux.svg",
      "Vercel.svg",
    ],
    position: "left",
    githubLink: "https://github.com/HiAkshatJain/LearnPulse",
    liveLink: "https://github.com/HiAkshatJain/LearnPulse",
  },
  {
    id: "project2",
    number: "02",
    picture: "/hero1.png",
    title: "Trend Mart",
    description:
      "An e-commerce platform built with TypeScript, MERN stack, and Sass. Designed for a seamless shopping experience with modern, scalable architecture.",
    skills: [
      "typeScript.png",
      "Saas.svg",
      "Express.png",
      "Tailwind.png",
      "NodeJs.svg",
      "MongoDB.svg",
      "Redux.svg",
      "Docker.svg",
    ],
    position: "right",
    githubLink: "https://github.com/HiAkshatJain/ECommerce",
    liveLink: "https://github.com/HiAkshatJain/ECommerce",
  },
  // Add more projects as needed
];

const ProjectSection: React.FC = () => {
  return (
    <section className="project-section">
      <h1 className="text-slate-200 text-5xl">My Projects</h1>
      <div className="flex flex-wrap justify-center items-center">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
