import { useState } from 'react';
import Modal from './Modal';
import Project, { ProjectEvent, ProjectEventType, ProjectModel } from './Project';

export interface ProjectsProps {
  projects: ProjectModel[];
}

export default function Projects(props: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<
    ProjectModel | undefined
  >();
  const [eventType, setEventType] = useState<ProjectEventType>();
  const [showModal, setShowModal] = useState(false);

  const onProjectClick = (event: ProjectEvent) => {
    const project = props.projects.find((project) => project.id === event.id);
    setSelectedProject(project);
    setEventType(event.eventType);
    setShowModal(true);
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {eventType === 'demo' ? (
          <object
            width="375"
            height="812"
            aria-label={`Project ${selectedProject?.name} demo`}
            data={selectedProject?.demoUrl}
          ></object>
        ) : (
          <object
            width="375"
            height="812"
            aria-label={`Project ${selectedProject?.name} screenshots`}
            data={selectedProject?.pdfUrl}
          ></object>
        )}
      </Modal>
      <div className="space-y-16 sm:space-y-24">
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
