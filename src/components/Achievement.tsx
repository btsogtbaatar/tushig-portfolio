import clsx from 'clsx';
import H3 from './H3';
import Paragraph from './Paragraph';
import { ParagraphModel } from './Project';

export type AchievementModel = {
  id: number;
  companyLogoUrl: string;
  companyName: string;
  align: string;
  title: string;
  startDate: string;
  endDate: string;
  paragraphs: ParagraphModel[];
};

export interface AchievementProps {
  achievement: AchievementModel;
}

export default function Achievement(props: AchievementProps) {
  const logoStart = () => {
    if (props.achievement.align == 'left') {
      return (
        <div className="hidden sm:block pr-12">
          <img
            className="w-64"
            src={props.achievement.companyLogoUrl}
            alt={props.achievement.companyName}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  const logoEnd = () => {
    if (props.achievement.align == 'left') {
      return null;
    } else {
      return (
        <div className="hidden sm:block pl-12">
          <img
            className="w-64"
            src={props.achievement.companyLogoUrl}
            alt={props.achievement.companyName}
          />
        </div>
      );
    }
  };

  const header = () => {

    return (
      <div className="flex justify-between mt-2">
        <div className="text-xs font-['Futura']">
          {props.achievement.title}
        </div>
        <div className="text-xs font-['Futura']">
          {props.achievement.startDate} - {props.achievement.endDate}
        </div>
      </div>
    );

  };

  return (
    <div
      className={clsx(
        'flex justify-center',
        props.achievement.align == 'left' ? 'sm:justify-start' : 'sm:justify-end'
      )}
    >
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-[80%]">
        {logoStart()}
        <div
          className={clsx(
            'flex flex-col',
            props.achievement.align == 'left'
              ? 'sm:border-l sm:pl-12'
              : 'sm:border-r sm:pr-12'
          )}
        >
          <div className="flex flex-col">
            <H3
              className={
                props.achievement.align == 'left' ? 'text-left' : 'text-left'
              }
            >
              {props.achievement.companyName}
            </H3>
            {header()}
          </div>
          <div className="space-y-4 mt-5 text-justify">
            {props.achievement.paragraphs.map((paragraph: ParagraphModel) => (
              <Paragraph key={paragraph.id}>{paragraph.text}</Paragraph>
            ))}
          </div>
        </div>
        {logoEnd()}
      </div>
    </div>
  );
}
