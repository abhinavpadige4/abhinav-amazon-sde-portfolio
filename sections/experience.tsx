export default function Experience() {
  const experienceData = [
    {
      company: 'Amazon',
      role: 'Software Development Engineer Intern',
      dates: 'Summer 2023',
      points: [
        'Developed and maintained microservices for inventory management system serving 1M+ daily requests',
        'Optimized database queries reducing latency by 40% through indexing and query optimization',
        'Collaborated with cross-functional team of 8 engineers to deliver features 2 weeks ahead of schedule',
        'Implemented automated testing suite increasing code coverage from 65% to 85%',
      ],
    },
    {
      company: 'TechCorp',
      role: 'Software Engineer',
      dates: '2021 - 2023',
      points: [
        'Built RESTful APIs using Python and Django serving 10K+ daily active users',
        'Deployed applications on AWS EC2 and S3, reducing infrastructure costs by 30%',
        'Mentored 3 junior developers in code reviews and best practices',
        'Led migration from monolith to microservices architecture improving system scalability',
      ],
    },
    {
      company: 'StartupXYZ',
      role: 'Frontend Developer',
      dates: '2020 - 2021',
      points: [
        'Created responsive web applications using React and TypeScript for e-commerce clients',
        'Optimized frontend performance reducing load time by 50% through code splitting and lazy loading',
        'Integrated third-party payment gateways and APIs enhancing user experience',
        'Conducted user testing and incorporated feedback to improve UI/UX design',
      ],
    },
  ];

  return (
    <section id="experience" className="space-y-12 px-4">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Experience
      </h2>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <TimelineItem
              company={exp.company}
              role={exp.role}
              dates={exp.dates}
              points={exp.points}
            />
          </div>
        ))}
      </div>
    </section>
  );
}