import Image from "next/image";

const About = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between my-12"
      id="about"
    >
      <div className="skill-container-left flex-1">
        <h2 className="skill-heading text-3xl font-bold text-slate-200 mb-4">
          MyTech Stack
        </h2>

        <div className="skill-subHeading text-slate-100 mb-6">
          <p>
            Hi Everyone! My name is Akshat Jain. I’m passionate about technology
            and continuously strive to expand my skills in software development.
            With a keen interest in creating innovative solutions, I enjoy
            tackling complex challenges and turning ideas into reality. I
            believe in the power of collaboration and am always eager to learn
            from others in the field. Let’s connect and explore new
            opportunities together!
          </p>
        </div>
      </div>

      <div className="skill-container-right flex-1 relative">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            "HTML.png",
            "CSS.png",
            "Javascript.svg",
            "React.png",
            "NodeJs.svg",
            "Next.svg",
            "Redux.svg",
            "Tailwind.png",
            "Bootstrap.svg",
            "Express.png",
            "Git.svg",
            "Github.svg",
            "Graphql.svg",
            "MongoDB.svg",
            "Vercel.svg",
            "Bash.svg",
            "Docker.svg",
          ].map((tech) => (
            <Image
              key={tech}
              src={`/mytech/stack/${tech}`}
              alt={tech.split(".")[0]}
              className="skills-logo h-12 w-12 object-contain"
              width={50} // Adjust the width and height as needed
              height={50}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
