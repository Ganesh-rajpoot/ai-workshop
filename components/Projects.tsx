import { Container, SectionHeading } from "./ui";
import {
  AssistantIllustration,
  PosterIllustration,
  ProblemIllustration,
  WebsiteIllustration,
} from "./illustrations";

const projects = [
  {
    title: "Build a Website Concept",
    text: "Students plan a website, write its content, and understand how AI can assist with website creation.",
    art: WebsiteIllustration,
    glow: "hover:shadow-[0_20px_60px_-24px_rgb(139_92_246/0.7)]",
  },
  {
    title: "Create an AI-Powered Study Assistant Concept",
    text: "Students design questions, instructions, and sample answers for a study assistant.",
    art: AssistantIllustration,
    glow: "hover:shadow-[0_20px_60px_-24px_rgb(34_211_238/0.6)]",
  },
  {
    title: "Design a Digital Poster",
    text: "Students develop a campaign idea, headline, and visual layout for a school event.",
    art: PosterIllustration,
    glow: "hover:shadow-[0_20px_60px_-24px_rgb(59_130_246/0.7)]",
  },
  {
    title: "Solve a Real-World Problem",
    text: "Teams identify a local problem and propose an AI-assisted solution.",
    art: ProblemIllustration,
    glow: "hover:shadow-[0_20px_60px_-24px_rgb(232_121_249/0.6)]",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading id="projects-title" title="From Imagination to Innovation">
          Four project ideas students explore during the workshop. Each one is about understanding the process of
          going from an idea to a plan.
        </SectionHeading>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map(({ title, text, art: Art, glow }) => (
            <li
              key={title}
              className={`glass overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-white/25 motion-reduce:hover:translate-y-0 ${glow}`}
            >
              <div className="aspect-[320/190] w-full bg-ink-2/80 p-2">
                <Art />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-muted">
          Students learn the process through guided demonstrations and collaborative exercises. Individual
          device-based implementation depends on the equipment available at the venue.
        </p>
      </Container>
    </section>
  );
}
