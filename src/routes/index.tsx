import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Certs } from "@/components/certs";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Project } from "@/components/project";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-svh bg-bg text-fg">
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Project />
        <Skills />
        <Certs />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
