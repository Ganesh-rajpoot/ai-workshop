import { BookOpen, GraduationCap, School } from "lucide-react";
import { Container, ButtonLink } from "./ui";
import { FadeIn } from "./FadeIn";
import { HeroVisual } from "./HeroVisual";

const strip = [
  { icon: GraduationCap, label: "For Classes 6–12" },
  { icon: BookOpen, label: "For College Students" },
  { icon: School, label: "School & College Workshops" },
];

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet/15 blur-[120px]"
      />

      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-28">
        <div>
          <p className="inline-block max-w-full rounded-2xl border border-violet/40 bg-violet/10 px-4 py-2 text-[0.7rem] font-semibold leading-snug tracking-wide text-violet-soft sm:text-xs">
            AI EDUCATION • PRACTICAL LEARNING • FUTURE SKILLS
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-balance bg-linear-to-b from-white from-40% to-violet-soft bg-clip-text text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            Discover AI. Build Ideas. Shape Your Future.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Explore the world of Artificial Intelligence with ACIT Computer Center. Discover how AI can help you learn
            smarter, solve problems, create digital projects, and explore future career opportunities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">Enquire About Workshop</ButtonLink>
            <ButtonLink href="#learn" variant="secondary">
              Explore What You&apos;ll Learn
            </ButtonLink>
          </div>

          <FadeIn delay={0.25}>
            <ul className="glass mt-10 grid max-w-xl gap-px overflow-hidden rounded-2xl sm:grid-cols-3">
              {strip.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 bg-ink/40 px-4 py-3.5 text-sm font-medium">
                  <Icon size={18} aria-hidden="true" className="shrink-0 text-cyan" />
                  {label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <HeroVisual />
        </FadeIn>
      </Container>
    </section>
  );
}
