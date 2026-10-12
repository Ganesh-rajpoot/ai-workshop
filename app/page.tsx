import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Director } from "@/components/Director";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Learn } from "@/components/Learn";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Who } from "@/components/Who";
import { hasConfiguredSiteUrl, seo, site, siteUrl } from "@/lib/site";

/**
 * Structured data uses only verified details. FAQPage markup is intentionally left out:
 * Google limits FAQ rich results to well-known government and health sites.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: site.institute,
  description: seo.description,
  ...(hasConfiguredSiteUrl ? { url: `${siteUrl}/` } : {}),
  telephone: "+91-6306113942",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.district,
    addressRegion: site.state,
    addressCountry: site.countryCode,
  },
  employee: {
    "@type": "Person",
    name: site.director,
    jobTitle: "Director",
    worksFor: { "@id": `${siteUrl}/#organization` },
  },
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Learn />
        <Projects />
        <Who />
        <How />
        <Director />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
