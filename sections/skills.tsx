import { FaPython, FaJava, FaAws, FaReact } from 'react-icons/fa';

export default function Skills() {
  return (
    <section id="skills" className="space-y-12 px-4">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaPython className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">Python</span>
          </div>
          <div className="w-full bg-muted/50 rounded h-2.5">
            <div className="bg-primary h-2.5 rounded w-[90%]"></div>
          </div>
          <p className="text-sm text-muted-foreground">90%</p>
        </div>
        <div className="flex items-center gap-3">
          <FaJava className="h-6 w-6 text-primary" />
          <span className="text-lg font-medium">Java</span>
        </div>
        <div className="w-full bg-muted/50 rounded h-2.5">
          <div className="bg-primary h-2.5 rounded w-[80%]"></div>
        </div>
        <p className="text-sm text-muted-foreground">80%</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaAws className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">AWS</span>
          </div>
          <div className="w-full bg-muted/50 rounded h-2.5">
            <div className="bg-primary h-2.5 rounded w-[85%]"></div>
          </div>
          <p className="text-sm text-muted-foreground">85%</p>
        </div>
        <div className="flex items-center gap-3">
          <FaReact className="h-6 w-6 text-primary" />
          <span className="text-lg font-medium">React</span>
        </div>
        <div className="w-full bg-muted/50 rounded h-2.5">
          <div className="bg-primary h-2.5 rounded w-[75%]"></div>
        </div>
        <p className="text-sm text-muted-foreground">75%</p>
      </div>
    </section>
  );
}