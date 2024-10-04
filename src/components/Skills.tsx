import Skill, { SkillModel } from './Skill';

export interface SkillProps {
  skills: SkillModel[];
}

export default function Skills(props: SkillProps) {
  return (
    <div className="space-y-12">
      {props.skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </div>
  );
}
