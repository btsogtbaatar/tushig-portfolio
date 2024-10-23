import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Button from './Button';
import Carousel from './CustomCarousel';
import Modal from './Modal';
import Project, {
  ProjectEvent,
  ProjectEventType,
  ProjectModel,
} from './Project';

export interface ProjectsProps {
  projects: ProjectModel[];
}

export default function Projects(props: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<
    ProjectModel | undefined
  >();
  const [eventType, setEventType] = useState<ProjectEventType>();
  const [showModal, setShowModal] = useState(false);
  const windowSize = useWindowSize();

  const onProjectClick = (event: ProjectEvent) => {
    const project = props.projects.find((project) => project.id === event.id);
    setSelectedProject(project);
    setEventType(event.eventType);
    setShowModal(true);
  };

  const renderModalContent = () => {
    if (eventType === 'demo') {
      return (
        <object
          height={windowSize.height - 100}
          aria-label={`Project ${selectedProject?.name} demo`}
          data={selectedProject?.demoUrl}
        ></object>
      );
    } else if (eventType === 'screenshots') {
      return <Carousel imageUrls={selectedProject?.screenshots ?? []} />;
    }
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Button className="mb-4 w-40" onClick={() => setShowModal(false)}>
          Close
        </Button>
        {renderModalContent()}
      </Modal>
      <div className="space-y-24">
        {props.projects.map((project: ProjectModel) => (
          <Project
            key={project.id}
            onClick={onProjectClick}
            project={project}
          />
        ))}
      </div>
    </>
  );
}
