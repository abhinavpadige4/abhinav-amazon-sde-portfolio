import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 text-xl font-bold text-primary">
              Abhinav
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link href="#about" className="mx-4 text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="mx-4 text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="mx-4 text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="mx-4 text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="mx-4 text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}