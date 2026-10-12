import { Backpack, Building2, GraduationCap, School } from "lucide-react";
import { Container, SectionHeading } from "./ui";

const audiences = [
  {
    icon: Backpack,
    title: "School Students",
    level: "Classes 6–8",
    text: "Simple examples, stories and group games that explain what AI is and how to use it safely.",
    tone: "from-cyan/25 to-cyan/5 text-cyan",
  },
  {
    icon: School,
    title: "Senior School Students",
    level: "Classes 9–12",
    text: "Clearer prompting, smarter study and research habits, and a first look at future skills.",
    tone: "from-violet/30 to-violet/5 text-violet-soft",
  },
  {
    icon: GraduationCap,
    title: "College Students",
    level: "BA, BSc, BCom and other streams",
    text: "Using AI responsibly for assignments, research and presentations, and exploring digital project ideas.",
    tone: "from-blue/30 to-blue/5 text-blue",
  },
  {
    icon: Building2,
    title: "Schools and Colleges",
    level: "Institutions interested in hosting an AI workshop",
    text: "Talk to us about the format, schedule and activities that suit your students and classrooms.",
    tone: "from-fuchsia-400/25 to-fuchsia-400/5 text-fuchsia-300",
  },
];

export function Who() {
  return (
    <section id="who" aria-labelledby="who-title" className="relative bg-ink-2/60 py-20 sm:py-28">
      <Container>
        <SectionHeading id="who-title" title="Who Can Join?">
          The content is adapted to the age and existing knowledge of each group, so beginners are welcome.
        </SectionHeading>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, level, text, tone }) => (
            <li key={title} className="glass glow-card flex flex-col rounded-3xl p-6">
              <span
                aria-hidden="true"
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ring-1 ring-white/10 ${tone}`}
              >
                <Icon size={26} />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-1 text-sm font-medium text-cyan">{level}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
