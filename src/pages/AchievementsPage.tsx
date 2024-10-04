import achievements from '../achievements.json';
import Achievements from '../components/Achievements';
import Article from '../components/Article';
import PageBody from '../components/PageBody';
import PageHeader from '../components/PageHeader';

export default function AchievementsPage() {
  return (
    <>
      <PageHeader backgroundImageUrl="./achievements_bg.png">Achievements</PageHeader>
      <PageBody>
        <Article>
          Here are some of the achievements I have accomplished over the years.
          I am always striving to achieve more and reach new heights.
        </Article>
        <Achievements achievements={achievements} />
      </PageBody>
    </>
  );
}
