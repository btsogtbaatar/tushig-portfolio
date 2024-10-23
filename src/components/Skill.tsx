import clsx from 'clsx';
import { getIconSrc } from '../utility';
import H3 from './H3';
import Paragraph from './Paragraph';

export type SkillModel = {
  id: number;
  icon: string;
  name: string;
  color?: string;
  description: string;
  order?: number;
  yearsOfExperience: number;
};

export interface SkillProps {
  skill: SkillModel;
}

export default function Skill(props: SkillProps) {
  const getBarColor = (years: number) => {
    if (years > 4) return 'bg-green-500';
    if (years > 2) return 'bg-yellow-300';
    return 'bg-red-400';
  };

  return (
    <div className="w-full flex flex-col sm:flex-row">
      <div className="p-6 shadow-inner bg-gray-900/90 flex flex-1 flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0 sm:items-center">
        <img
          className="flex"
          height="60"
          width="60"
          src={getIconSrc(props.skill.icon, props.skill.color)}
        />
        <div className="flex-1">
          <H3>{props.skill.name}</H3>
          <Paragraph className="mt-2">{props.skill.description}</Paragraph>
        </div>
      </div>
      <div className="flex items-center py-2 mt-2 px-2 sm:px-0 sm:mt-0 sm:py-0">
        <div className="flex text-xl font-['Futura'] font-bold text-wrap text-center w-full sm:w-24 sm:justify-center">
          <div>{props.skill.yearsOfExperience}</div>
          <div className="sm:hidden">&nbsp;years</div>
        </div>
        <div className="flex w-full sm:h-full bg-gray-900 h-[1px] sm:w-[1px] items-end overflow-hidden">
          <div
            className={clsx(
              `flex w-[1px]`,
              getBarColor(props.skill.yearsOfExperience)
            )}
            style={{
              height: `${(props.skill.yearsOfExperience * 100) / 7}%`,
              width: `${(props.skill.yearsOfExperience * 100) / 7}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
