import { Container } from "./ui";
import { site } from "@/lib/site";

export function Director() {
  return (
    <section id="director" aria-labelledby="director-title" className="relative bg-ink-2/60 py-20 sm:py-28">
      <Container>
        <div className="glass relative grid gap-10 overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/25 blur-[90px]"
          />
          <div
            role="img"
            aria-label={`Initials avatar for ${site.director}`}
            className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br from-violet via-blue to-cyan p-[3px] sm:h-52 sm:w-52"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-ink-2 text-5xl font-bold tracking-tight sm:text-6xl">
              <span className="bg-linear-to-br from-violet-soft to-cyan bg-clip-text text-transparent">GR</span>
            </div>
          </div>

          <div className="relative">
            <h2 id="director-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
              About the Director
            </h2>
            <p className="mt-5 text-2xl font-semibold">{site.director}</p>
            <p className="mt-1 font-medium text-cyan">{site.directorTitle}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {site.director} leads ACIT Computer Center with a focus on practical computer education and helping
              students understand emerging technologies. Through AI awareness and hands-on learning activities, the
              goal is to make artificial intelligence easier to understand and more approachable for students.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
