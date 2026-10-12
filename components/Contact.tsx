import { Building2, MapPin, MessageCircle, Phone, UserRound } from "lucide-react";
import { Container, ButtonLink } from "./ui";
import { EnquiryForm } from "./EnquiryForm";
import { links, shortAddress, site } from "@/lib/site";

const details = [
  { icon: UserRound, label: "Director", value: site.director },
  { icon: Building2, label: "Institute", value: site.institute },
  { icon: MapPin, label: "Address", value: shortAddress.replace(`, ${site.country}`, "") },
  { icon: Phone, label: "Phone", value: site.phoneDisplay },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-bg relative isolate overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h2 id="contact-title" className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Bring AI Learning to Your School
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Interested in an AI workshop for your school, college, or students? Contact ACIT Computer Center to
            discuss the format, schedule, and suitable activities.
          </p>

          <dl className="mt-8 grid gap-4">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25"
                >
                  <Icon size={20} />
                </span>
                <div>
                  <dt className="text-sm text-white/80">{label}</dt>
                  <dd className="text-lg font-semibold">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={links.tel} variant="light">
              <Phone aria-hidden="true" size={20} /> Call Now
            </ButtonLink>
            <ButtonLink href={links.whatsapp} target="_blank" rel="noopener noreferrer" variant="secondary">
              <MessageCircle aria-hidden="true" size={20} /> WhatsApp Enquiry
            </ButtonLink>
            <ButtonLink href={links.directions} target="_blank" rel="noopener noreferrer" variant="secondary">
              <MapPin aria-hidden="true" size={20} /> Get Directions
            </ButtonLink>
          </div>
        </div>

        <EnquiryForm />
      </Container>
    </section>
  );
}
