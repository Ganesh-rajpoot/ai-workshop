import {
  Bot,
  Cpu,
  FileText,
  Globe,
  Lightbulb,
  MessagesSquare,
  Monitor,
  NotebookPen,
  Palette,
  PenLine,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container, SectionHeading } from "./ui";

const topics = [
  { icon: Cpu, title: "Introduction to Artificial Intelligence", text: "What AI is, where it appears in daily life, and how it works in simple terms." },
  { icon: Bot, title: "Generative AI and AI Assistants", text: "How tools that write, answer and create work, and what they can and cannot do." },
  { icon: MessagesSquare, title: "Prompt Engineering Fundamentals", text: "How to ask clear questions and give clear instructions to get useful answers." },
  { icon: Search, title: "AI for Study and Research", text: "Ways to understand lessons, plan revision and check facts instead of trusting blindly." },
  { icon: Palette, title: "AI for Creative Content and Presentations", text: "Turn an idea into a story, a speech outline or a slide plan." },
  { icon: Globe, title: "AI-Assisted Website Creation", text: "See how a website idea is planned, written and designed with AI help." },
  { icon: Lightbulb, title: "AI for Problem-Solving and Innovation", text: "Break a real problem into steps and brainstorm solutions as a team." },
  { icon: ShieldCheck, title: "Online Safety, Privacy, and Responsible AI", text: "Protect personal information, spot wrong or biased answers and use AI honestly." },
];

const noDevice = [
  { icon: Monitor, label: "Live demonstrations on a shared screen" },
  { icon: FileText, label: "Printed worksheets" },
  { icon: Users, label: "Group discussions" },
  { icon: PenLine, label: "Paper-based exercises" },
];

export function Learn() {
  return (
    <section id="learn" aria-labelledby="learn-title" className="relative bg-ink-2/60 py-20 sm:py-28">
      <Container>
        <SectionHeading id="learn-title" title="What Students Will Learn">
          Eight beginner-friendly topics that build from understanding AI to using it safely and creatively.
        </SectionHeading>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {topics.map(({ icon: Icon, title, text }) => (
            <li key={title} className="glass glow-card rounded-3xl p-6">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-violet/30 to-cyan/20 text-white ring-1 ring-white/15"
              >
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 rounded-3xl border border-cyan/25 bg-linear-to-br from-cyan/10 to-violet/10 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold sm:text-2xl">
              <NotebookPen aria-hidden="true" className="text-cyan" size={24} />
              Designed for classrooms without personal devices
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Students do not need a mobile phone, a laptop or internet access. Activities run on instructor-led
              demonstrations and hands-on work that needs only paper and teamwork.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {noDevice.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/50 px-4 py-3.5 text-sm font-medium">
                <Icon aria-hidden="true" size={18} className="shrink-0 text-cyan" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
