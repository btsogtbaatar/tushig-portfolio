import {
  ArrowTopRightOnSquareIcon,
  LinkIcon,
  PhotoIcon,
  PlayIcon,
} from '@heroicons/react/20/solid';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { getIconSrc } from '../utility';
import H3 from './H3';
import Paragraph from './Paragraph';

export type ProjectEventType = 'demo' | 'pdf' | 'screenshots';

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
  imageUrlinMobile: string;
  screenshots?: string[];
  imageUrls: string[];
  startDate: string;
  endDate: string;
  type: string;
  paragraphs: ParagraphModel[];
  linkUrl: string;
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
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row space-x-7 justify-center mb-2">
          {props.project.linkUrl?.length > 0 && (
            <a
              className="flex flex-row items-center mb-2 hover:underline hover:cursor-pointer"
              target="_blank"
              href={props.project.linkUrl}
            >
              <LinkIcon className="h-4 w-4" />
              <span className="ml-2 text-sm pb-[1px]">Link</span>
            </a>
          )}
          {props.project.demoUrl?.length > 0 && (
            <div
              className="flex flex-row items-center mb-2 hover:underline hover:cursor-pointer"
              onClick={() =>
                props.onClick({ id: props.project.id, eventType: 'demo' })
              }
            >
              <PlayIcon className="h-4 w-4" />
              <span className="ml-2 text-sm pb-[1px]">Demo</span>
            </div>
          )}
          {props.project.screenshots &&
            props.project.screenshots?.length > 0 && (
              <>
                {isMobile && props.project?.type === 'web' ? (
                  <a
                    href={props.project.pdfUrl}
                    target="_blank"
                    className="flex flex-row items-center mb-2 hover:underline hover:cursor-pointer"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    <span className="ml-2 text-sm pb-[1px] font-['Futura']">
                      Screenshots
                    </span>
                  </a>
                ) : (
                  <div
                    className="flex flex-row items-center mb-2 hover:underline hover:cursor-pointer"
                    onClick={() =>
                      props.onClick({
                        id: props.project.id,
                        eventType: 'screenshots',
                      })
                    }
                  >
                    <PhotoIcon className="h-4 w-4" />
                    <span className="ml-2 text-sm pb-[1px] font-['Futura']">
                      Screenshots
                    </span>
                  </div>
                )}
              </>
            )}
        </div>
        <div className="hidden sm:flex flex-row w-full space-x-6 items-center">
          {props.project.imageUrls.map((imageUrl) => (
            <div className="flex flex-1">
              <img
                key={imageUrl}
                src={imageUrl}
                alt={`${props.project.name} screenshot in ${props.project.type} frame.`}
              />
            </div>
          ))}
        </div>
        <div className="flex sm:hidden flex-row w-full space-x-6">
          <img
            key={props.project.imageUrlinMobile}
            src={props.project.imageUrlinMobile}
            alt={`${props.project.name} screenshot in ${props.project.type} frame.`}
          />
        </div>
      </div>
      <div className="flex flex-col mt-8">
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
              className="h-8 cursor-pointer"
              src={getIconSrc(skill.icon, skill.color)}
              onClick={() => navigate(`/skills?search=${skill.name}`)}
              alt={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
