import { Brain, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import { Container, SectionHeading } from "./ui";

const cards = [
  {
    icon: Brain,
    title: "Understand AI",
    text: "Learn what AI is, where it is used, and how it works at a basic level.",
    tone: "text-cyan bg-cyan/10 ring-cyan/30",
  },
  {
    icon: Sparkles,
    title: "Use AI Smartly",
    text: "Explore prompting, responsible AI use, research, and creative problem-solving.",
    tone: "text-violet-soft bg-violet/15 ring-violet/40",
  },
  {
    icon: Lightbulb,
    title: "Think Like a Creator",
    text: "Discover how ideas can become websites, stories, presentations, and digital projects.",
    tone: "text-blue bg-blue/10 ring-blue/30",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="about-title" title="AI Is More Than Technology. It's a New Way to Create.">
            <p>
              Artificial Intelligence, or AI, is software that learns from examples so it can help with tasks like
              answering questions, writing, translating and spotting patterns. You already meet it in voice search,
              maps and video suggestions.
            </p>
            <p className="mt-4">
              In this workshop, students see how AI can support learning, creativity, research, problem-solving and
              building digital ideas, and how to use it with care.
            </p>
          </SectionHeading>

          <p className="mt-8 flex gap-3 rounded-2xl border border-cyan/25 bg-cyan/5 p-4 text-sm leading-relaxed text-white/90">
            <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-cyan" size={20} />
            <span>
              Practical understanding comes first. Sessions use real examples, live demonstrations and group
              activities, not only lectures.
            </span>
          </p>
        </div>

        <ul className="flex flex-col gap-5">
          {cards.map(({ icon: Icon, title, text, tone }) => (
            <li key={title} className="glass glow-card flex gap-5 rounded-3xl p-6 sm:p-8">
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 ${tone}`}
                aria-hidden="true"
              >
                <Icon size={26} />
              </span>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
