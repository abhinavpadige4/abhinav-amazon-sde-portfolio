export default function Footer() {
  return (
    <footer className="mt-20 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Abhinav. All rights reserved.
        </p>
      </div>
      <div className="w-full h-px bg-border/50"></div>
    </footer>
  );
}