import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="space-y-12 px-4">
      <h2 className="text-3xl font-bold text-center text-foreground">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Passionate software engineer with strong foundation in Python, Java, AWS, and React. Experienced in building scalable distributed systems and passionate about leveraging cloud technologies to solve complex problems.
          </p>
          <p className="text-lg text-muted-foreground">
            Adept at designing RESTful APIs, implementing microservices architecture, and optimizing system performance. Strong problem-solver with excellent communication skills and team collaboration experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/resume-abhinav.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary px-4 py-2 rounded text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Download Resume
            </Link>
            <Link
              href="https://linkedin.com/in/abhinav"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted px-4 py-2 rounded text-muted-foreground font-medium hover:bg-muted/90 transition-colors"
            >
              LinkedIn Profile
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/abhinav-photo.jpg"
            alt="Abhinav profile photo"
            className="w-48 h-48 rounded-full object-cover border-4 border-primary/20"
          />
        </div>
      </div>
    </section>
  );
}