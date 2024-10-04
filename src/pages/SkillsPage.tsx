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
        <Article>
          Here are some of the skills I have acquired over the years. I am
          always learning new things and improving my skills.
        </Article>
        <Skills skills={skills} />
      </PageBody>
    </>
  );
}
