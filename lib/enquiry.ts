import { links } from "./site";

export const ROLES = ["Student", "Parent", "Teacher", "School Principal", "College Representative"] as const;
export type Role = (typeof ROLES)[number];

export type EnquiryValues = {
  name: string;
  mobile: string;
  role: string;
  organization: string;
  classOrCourse: string;
  message: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

export const emptyEnquiry: EnquiryValues = {
  name: "",
  mobile: "",
  role: "",
  organization: "",
  classOrCourse: "",
  message: "",
};

export const LIMITS = { name: 80, organization: 120, classOrCourse: 60, message: 500 } as const;

/**
 * Reduce a typed Indian mobile number to its 10 national digits.
 * Accepts "98765 43210", "+91 98765-43210", "091 9876543210", "09876543210".
 */
export function normalizeIndianMobile(input: string): string {
  let digits = input.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 13 && digits.startsWith("091")) digits = digits.slice(3);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

/** Indian mobile numbers are 10 digits and start with 6, 7, 8 or 9. */
export function isValidIndianMobile(input: string): boolean {
  return /^[6-9]\d{9}$/.test(normalizeIndianMobile(input));
}

const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;

export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = values.name.trim();

  if (!name) errors.name = "Enter your full name.";
  else if (name.length < 2) errors.name = "Name must have at least 2 characters.";
  else if (name.length > LIMITS.name) errors.name = `Name must be ${LIMITS.name} characters or fewer.`;
  else if (!NAME_PATTERN.test(name)) errors.name = "Use letters, spaces and . ' - only.";

  if (!values.mobile.trim()) errors.mobile = "Enter your mobile number.";
  else if (!isValidIndianMobile(values.mobile))
    errors.mobile = "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.";

  if (!values.role) errors.role = "Choose who you are.";
  else if (!(ROLES as readonly string[]).includes(values.role)) errors.role = "Choose one of the listed options.";

  if (values.organization.trim().length > LIMITS.organization)
    errors.organization = `Keep this under ${LIMITS.organization} characters.`;
  if (values.classOrCourse.trim().length > LIMITS.classOrCourse)
    errors.classOrCourse = `Keep this under ${LIMITS.classOrCourse} characters.`;
  if (values.message.trim().length > LIMITS.message)
    errors.message = `Keep your message under ${LIMITS.message} characters.`;

  return errors;
}

/** Plain-text WhatsApp message built from the validated form values. */
export function buildEnquiryMessage(values: EnquiryValues): string {
  const lines = [
    "Hello ACIT Computer Center,",
    "I would like to enquire about the AI Training Workshop.",
    "",
    `Name: ${values.name.trim()}`,
    `Mobile: +91 ${normalizeIndianMobile(values.mobile)}`,
    `I am a: ${values.role}`,
  ];
  if (values.organization.trim()) lines.push(`School/College: ${values.organization.trim()}`);
  if (values.classOrCourse.trim()) lines.push(`Class/Course: ${values.classOrCourse.trim()}`);
  if (values.message.trim()) lines.push("", `Message: ${values.message.trim()}`);
  return lines.join("\n");
}

/** Properly URL-encoded wa.me link that opens a chat with the institute's number. */
export function buildWhatsAppUrl(values: EnquiryValues): string {
  return `${links.whatsapp}?text=${encodeURIComponent(buildEnquiryMessage(values))}`;
}
