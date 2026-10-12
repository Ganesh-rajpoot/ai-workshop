/**
 * Single source of truth for verified institute details.
 * Only facts supplied by ACIT Computer Center are listed here.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");

export const siteUrl = rawUrl && /^https?:\/\//.test(rawUrl) ? rawUrl : "http://localhost:3000";

/** True when a real production URL has been configured. */
export const hasConfiguredSiteUrl = siteUrl !== "http://localhost:3000";

export const site = {
  institute: "ACIT Computer Center",
  workshop: "AI Training Workshop",
  director: "Er. Ganesh Rajpoot",
  directorTitle: "Director, ACIT Computer Center",
  streetAddress: "Pendari Buzurg",
  district: "Siddharth Nagar",
  state: "Uttar Pradesh",
  country: "India",
  countryCode: "IN",
  phoneDisplay: "+91 6306113942",
  phoneE164: "+916306113942",
  whatsappNumber: "916306113942",
} as const;

export const fullAddress = `${site.streetAddress}, ${site.district}, ${site.state}, ${site.country}`;
export const shortAddress = `${site.streetAddress}, ${site.district}, ${site.state}`;

export const links = {
  tel: `tel:${site.phoneE164}`,
  whatsapp: `https://wa.me/${site.whatsappNumber}`,
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.institute}, ${site.streetAddress}, ${site.district}`,
  )}`,
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Workshop" },
  { href: "#learn", label: "What You Will Learn" },
  { href: "#who", label: "Who Can Join" },
  { href: "#contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { href: "#projects", label: "Projects" },
  { href: "#how", label: "How It Works" },
  { href: "#director", label: "Director" },
  { href: "#faq", label: "FAQ" },
] as const;

export const seo = {
  title: "AI Training Workshop for Students in Siddharth Nagar | ACIT Computer Center",
  description:
    "ACIT Computer Center runs a practical AI training workshop for school students in Classes 6–12, college students and teachers in Siddharth Nagar, Uttar Pradesh. Schools can enquire to host one.",
} as const;
