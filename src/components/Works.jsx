import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const CardContent = () => (
    <div className="flex flex-col h-full">
      <div className="relative w-full h-[310px] flex-shrink-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-tertiary animate-pulse rounded-2xl" />
        )}
        <img
          style={{
            objectFit: "cover",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          src={image}
          alt={`${name} project thumbnail`}
          className="w-full h-full object-cover rounded-2xl"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={(e) => {
              e.preventDefault();
              window.open(source_code_link, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="View source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  const cardClasses =
    "bg-tertiary p-4 rounded-xl w-full min-h-[600px] flex flex-col m-0";

  if (isMobile) {
    return (
      <div className={cardClasses}>
        <CardContent />
      </div>
    );
  }

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className={cardClasses}
    >
      <CardContent />
    </Tilt>
  );
};

const Works = () => {
  return (
    <div className="min-h-screen">
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 w-full grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] justify-center gap-4">
        {projects.map((project, index) => (
          <a
            key={`project-${index}`}
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <ProjectCard {...project} />
          </a>
        ))}
      </div>
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const WrappedWorks = SectionWrapper(Works, "work");

export default function SafeWorks() {
  return (
    <ErrorBoundary>
      <WrappedWorks />
    </ErrorBoundary>
  );
}
