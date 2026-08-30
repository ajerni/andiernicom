import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Minisites", href: "/minisites" },
  { label: "Games", href: "/games" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/" aria-label="andierni.com home" className="flex items-center">
            <Logo className="text-[30px] sm:text-[38px]" />
          </Link>
          <nav className="flex items-center gap-1">
            {navigation.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <Button variant="outline" size="icon" asChild className="ml-2">
              <a
                href="https://github.com/ajerni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6">
        <section className="py-16 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Andi Erni
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            I build web apps, AI agents and tinker with all sorts of things.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A collection of things I made over the years — full web apps, AI
            experiments, Rust services and mini games (most of the game ideas from the kids, programmed by me). Everything below is live
            and ready to be used including the source code.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#projects">
                Browse projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/ajerni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </section>

        <Separator />

        <section id="projects" className="scroll-mt-36 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold">Projects</h2>
            <span className="text-sm text-muted-foreground">
              {projects.length} projects
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group flex flex-col overflow-hidden transition-all hover:ring-2 hover:ring-primary"
              >
                <div className="overflow-hidden border-b bg-muted">
                  <img
                    src={project.preview}
                    alt={`Preview of ${project.name}`}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-wrap gap-3">
                  <Button asChild size="sm" className="flex-1 min-w-[110px]">
                    <a
                      href={project.link}
                      target={
                        project.link.startsWith("/") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 min-w-[110px]"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Andreas Erni</span>
          <a
            href="https://github.com/ajerni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            github.com/ajerni
          </a>
        </div>
      </footer>
    </div>
  );
}
