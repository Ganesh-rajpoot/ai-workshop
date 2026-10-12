import { Container } from "./ui";
import { Wordmark } from "./Logo";
import { CopyrightYear } from "./CopyrightYear";
import { footerLinks, links, shortAddress, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#home" aria-label="ACIT Computer Center — back to top" className="inline-block rounded-lg">
              <Wordmark />
            </a>
            <p className="mt-5 font-semibold">{site.workshop}</p>
            <p className="mt-1 text-muted">{site.director}, Director</p>
            <address className="mt-3 not-italic leading-relaxed text-muted">{shortAddress}</address>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold text-white">On this page</h2>
            <ul className="mt-4 grid gap-1">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-block py-1 text-muted transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 grid gap-1">
              <li>
                <a href={links.tel} className="inline-block py-1 text-muted transition hover:text-white">
                  Call {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-muted transition hover:text-white"
                >
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-muted transition hover:text-white"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-muted">
          <p>
            AI workshop content, activities, duration, and availability may vary according to the audience and
            institution&apos;s requirements.
          </p>
          <p className="mt-3">
            © <CopyrightYear /> {site.institute}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
