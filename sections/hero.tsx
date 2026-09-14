import Link from 'next/link';
export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center gap-8 text-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Abhinav</h1>
      <p className="text-3xl md:text-4xl font-semibold text-primary">Amazon SDE</p>
      <p className="text-muted-foreground max-w-xl">Python | Java | AWS | React — building scalable systems.</p>
      <Link href="#projects" className="inline-block bg-primary px-6 py-3 rounded-lg text-white hover:bg-primary/90 transition-colors font-medium">View Projects</Link>
    </section>
  );
}
