import Article from '../components/Article';
import PageBody from '../components/PageBody';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';
import projects from '../projects.json';

export default function ProjectsPage() {
  return (
    <>
      <PageHeader backgroundImageUrl="./projects_bg.png">Projects</PageHeader>
      <PageBody>
        <Article>
          Here are some of the projects I have worked on over the years. I am
          always looking for new projects to work on and new challenges to
          overcome.
        </Article>
        <Projects projects={projects} />
      </PageBody>
    </>
  );
}
