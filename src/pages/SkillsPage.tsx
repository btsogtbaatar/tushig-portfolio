import Article from '../components/Article';
import PageBody from '../components/PageBody';
import PageHeader from '../components/PageHeader';
import Skills from '../components/Skills';
import skills from '../skills.json';

export default function SkillsPage() {
  return (
    <>
      <PageHeader backgroundImageUrl="./skills_bg.png">Skills</PageHeader>
      <PageBody>
        <Article className='mb-8'>
          Here are my skills I have acquired over my 7 years of professional experience.
        </Article>
        <Skills skills={skills} />
      </PageBody>
    </>
  );
}
