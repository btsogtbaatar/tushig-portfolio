import { PlayIcon } from '@heroicons/react/16/solid';
import { PhotoIcon } from '@heroicons/react/20/solid';
import { getIconSrc } from '../utility';
import H3 from './H3';
import Paragraph from './Paragraph';

export type ProjectEventType = 'demo' | 'pdf';

export type ParagraphModel = {
  id: number;
  text: string;
};

export type ProjectSkillModel = {
  id: number;
  icon: string;
  name: string;
  color?: string;
};

export type ProjectModel = {
  id: number;
  name: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  type: string;
  paragraphs: ParagraphModel[];
  demoUrl: string;
  pdfUrl: string;
  skills: ProjectSkillModel[];
};

export type ProjectEvent = {
  id: number;
  eventType: ProjectEventType;
};

export interface ProjectProps {
  project: ProjectModel;
  onClick: (event: ProjectEvent) => void;
}

export default function Project(props: ProjectProps) {
  return (
    <>
      <div
        className={`flex ${props.project.type === 'mobile' ? 'flex-col sm:flex-row' : 'flex-col'}`}
      >
        <div
          className={`${props.project.type === 'mobile' ? 'sm:w-[24em]' : 'sm:w-[36em] mx-auto'}`}
        >
          <div className="flex flex-row space-x-7 justify-center mb-2">
            <div
              className="flex flex-row items-center mb-2 hover:underline hover:cursor-pointer"
              onClick={() =>
                props.onClick({ id: props.project.id, eventType: 'demo' })
              }
            >
              <div className="pb-1">
                <PlayIcon className="h-4 w-4" />
              </div>
              <a className="ml-2 text-sm pb-[1px]" href="#">
                Demo
              </a>
            </div>
            <div
              className="flex flex-row items-center mb-2 hover:underline hover:cursor-pointer"
              onClick={() =>
                props.onClick({ id: props.project.id, eventType: 'pdf' })
              }
            >
              <div className="pb-1">
                <PhotoIcon className="h-4 w-4" />
              </div>
              <a className="ml-2 text-sm pb-[1px] font-['Futura']" href="#">
                Screenshots
              </a>
            </div>
          </div>
          <img
            src={props.project.imageUrl}
            alt={`${props.project.name} screenshot in ${props.project.type} frame.`}
          />
        </div>
        <div
          className={`flex flex-col ${props.project.type === 'mobile' ? 'sm:ml-14 mt-10' : 'mt-14'}`}
        >
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <H3>{props.project.name}</H3>
              <span className="text-xs font-['Futura']">
                {props.project.startDate} - {props.project.endDate}
              </span>
            </div>
            <div className="flex flex-col space-y-6 mt-6">
              {props.project.paragraphs.map((paragraph: ParagraphModel) => (
                <Paragraph key={paragraph.id}>{paragraph.text}</Paragraph>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 mt-10 justify-end">
            {props.project.skills.map((skill) => (
              <img
                key={skill.id}
                className="h-8"
                src={getIconSrc(skill.icon, skill.color)}
                alt={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
