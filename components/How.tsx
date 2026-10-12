import { Compass, Eye, Rocket } from "lucide-react";
import { Container, SectionHeading } from "./ui";

const steps = [
  {
    icon: Eye,
    title: "Understand",
    text: "Discover AI concepts through simple examples and demonstrations.",
  },
  {
    icon: Compass,
    title: "Explore",
    text: "Participate in activities, solve problems, and work in groups.",
  },
  {
    icon: Rocket,
    title: "Create",
    text: "Plan practical projects and understand how AI can turn ideas into digital outcomes.",
  },
];

export function How() {
  return (
    <section id="how" aria-labelledby="how-title" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading id="how-title" title="How the Workshop Works">
          A simple three-step flow that moves from curiosity to confidence.
        </SectionHeading>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-7 top-7 hidden h-[calc(100%-3.5rem)] w-px bg-linear-to-b from-cyan via-violet to-blue max-md:block md:left-[10%] md:top-7 md:h-px md:w-[80%] md:bg-linear-to-r"
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex gap-5 md:flex-col md:gap-6">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet/50 bg-ink-3 text-white shadow-[0_0_30px_-6px_rgb(139_92_246/0.8)]">
                <Icon aria-hidden="true" size={24} />
              </span>
              <div>
                <h3 className="text-xl font-semibold">
                  <span className="text-cyan">Step {i + 1}:</span> {title}
                </h3>
                <p className="mt-2 max-w-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-4 text-sm leading-relaxed text-muted md:grid-cols-2">
          <p className="rounded-2xl border border-white/10 bg-white/5 p-5">
            Workshop duration and scheduling can be discussed with your institution to fit the school timetable.
          </p>
          <p className="rounded-2xl border border-white/10 bg-white/5 p-5">
            This is an introductory workshop. Students plan projects and learn the process; it does not promise that
            each student will build and launch a finished application.
          </p>
        </div>
      </Container>
    </section>
  );
}
