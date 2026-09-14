export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  demoUrl,
  githubUrl,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border/50 p-6 hover:bg-card/50 transition-colors">
      <div className="mb-4">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-primary/20 text-primary px-3 py-1 rounded text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary px-4 py-2 rounded text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted px-4 py-2 rounded text-muted-foreground font-medium hover:bg-muted/90 transition-colors"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}