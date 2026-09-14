import ProjectCard from '@/components/project-card';
import projectsData from '@/data/projects.json';

export default function Projects() {
  return (
    <section id="projects" className="space-y-12 px-4">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Projects
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}