import { useState } from "react";
import Container from "../container";
import Shapes from "../shapes";
import Carousel from "./carousel";
import { portfolioSection } from "../../config";
import Image from "../Image";
import ViewProjectModal from "../viewProjectModal";
import { Project } from "../../config.types";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setIsOpen(true);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      id="portfolio"
      className="bg-primary-100  bg-opacity-[0.15] mt-32 relative"
    >
      <Shapes noLine />
      <span className="absolute top-0 left-0 drop-shadow-[0_0_2px_black]">
        <Image
          src="/assets/images/shapes/dotted-design.png"
          width={300}
          height={300}
          alt="shape"
        />
      </span>
      <span className="absolute bottom-0 rotate-[180deg] right-0 drop-shadow-[0_0_2px_black]">
        <Image
          src="/assets/images/shapes/dotted-design.png"
          width={300}
          height={300}
          alt="shape"
        />
      </span>
      <Container className="py-32">
        {portfolioSection.title && (
          <p className="text-center font-bold text-primary-900 text-xl">
            {portfolioSection.title}
          </p>
        )}
        {portfolioSection.heading && (
          <h4 className="mt-6 font-bold text-4xl text-center josefinSans">
            {portfolioSection.heading}
          </h4>
        )}
        <Carousel handleOpenModal={handleOpenModal} />
      </Container>
      <ViewProjectModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        media={{
          id: 1,
          image: selectedProject?.image,
          title: selectedProject?.title,
          description: selectedProject?.description,
          link: selectedProject?.link,
        }}
      />
    </div>
  );
};

export default Portfolio;
