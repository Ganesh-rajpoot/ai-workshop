import { Container, SectionHeading } from "./ui";
import { Faq, type FaqItem } from "./Faq";
import { site } from "@/lib/site";

export const faqItems: FaqItem[] = [
  {
    q: "What is an AI Training Workshop?",
    a: "It is a beginner-friendly session where students learn what Artificial Intelligence is, how to use AI tools responsibly, and how ideas can become digital projects. Learning happens through demonstrations, discussion and group activities.",
  },
  {
    q: "Who can participate?",
    a: "School students in Classes 6–12, college students from BA, BSc, BCom and other streams, teachers, and schools or colleges that want to host a workshop. The content is adapted to the age and existing knowledge of the group.",
  },
  {
    q: "Is prior programming knowledge required?",
    a: "No. The workshop is designed for beginners and explains ideas in simple language with everyday examples.",
  },
  {
    q: "Do students need a laptop or mobile phone?",
    a: "No. Activities are planned around live demonstrations on a shared screen, printed worksheets, group discussions and paper-based exercises, so students without personal devices or internet access can take part fully. Where equipment is available, some activities can be extended, but it is not required.",
  },
  {
    q: "Can ACIT Computer Center organize a workshop at our school?",
    a: "Yes. Schools and colleges are welcome to enquire. Contact us to discuss the format, schedule and activities that suit your students.",
  },
  {
    q: "How can a school or student enquire?",
    a: `Use the enquiry form on this page to send your details on WhatsApp, call ${site.phoneDisplay}, or tap Get Directions to find the institute.`,
  },
  {
    q: "What is the duration of the workshop?",
    a: "Duration depends on the audience and the institution's requirements. Scheduling, duration and fees are confirmed through direct enquiry.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading id="faq-title" title="Frequently Asked Questions">
          Quick, honest answers for students, parents, teachers and principals.
        </SectionHeading>
        <Faq items={faqItems} />
      </Container>
    </section>
  );
}
