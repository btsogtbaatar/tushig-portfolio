import Achievement, { AchievementModel } from './Achievement';

export interface AchievementsProps {
  achievements: AchievementModel[];
}

export default function Achievements(props: AchievementsProps) {
  return (
    <div className="space-y-16 sm:space-y-32">
      {props.achievements.map((achievement) => (
        <Achievement key={achievement.id} achievement={achievement}/>
      ))}
    </div>
  );
}
