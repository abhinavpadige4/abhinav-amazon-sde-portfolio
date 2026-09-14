import Link from 'next/link';
import TypeAnimation from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center gap-8 text-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
        Abhinav
      </h1>
      <div className="text-3xl md:text-4xl font-semibold">
        <TypeAnimation
          speed={100}
          loop={false}
          wrapperClassName="text-primary"
        >
          Amazon SDE
        </TypeAnimation>
      </div>
      <Link
        href="#projects"
        className="inline-block bg-primary px-6 py-3 rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
      >
        View Projects
      </Link>
    </section>
  );
}