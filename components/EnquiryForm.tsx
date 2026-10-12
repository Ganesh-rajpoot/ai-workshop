"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import {
  LIMITS,
  ROLES,
  buildWhatsAppUrl,
  emptyEnquiry,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryValues,
} from "@/lib/enquiry";

type Status = "idle" | "opening" | "opened" | "blocked";

const FIELD_ORDER: (keyof EnquiryValues)[] = ["name", "mobile", "role", "organization", "classOrCourse", "message"];

const inputClass =
  "w-full rounded-xl border bg-white/[0.06] px-4 py-3 text-base text-white placeholder:text-white/40 transition focus:border-cyan focus:bg-white/[0.09] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan/60";

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>(emptyEnquiry);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof EnquiryValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [waUrl, setWaUrl] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => void (timer.current && clearTimeout(timer.current)), []);

  const setField = (key: keyof EnquiryValues) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (touched[key]) setErrors(validateEnquiry(next));
    if (status !== "idle") setStatus("idle");
  };

  const blur = (key: keyof EnquiryValues) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateEnquiry(values));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "opening") return;

    const found = validateEnquiry(values);
    setErrors(found);
    setTouched(Object.fromEntries(FIELD_ORDER.map((k) => [k, true])));

    const firstInvalid = FIELD_ORDER.find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const url = buildWhatsAppUrl(values);
    setWaUrl(url);
    setStatus("opening");

    // Must be called directly inside the submit handler so browsers treat it as a user action.
    const win = window.open(url, "_blank");
    if (win) win.opener = null;

    timer.current = setTimeout(() => setStatus(win ? "opened" : "blocked"), 700);
  };

  const err = (k: keyof EnquiryValues) => (touched[k] ? errors[k] : undefined);
  const aria = (k: keyof EnquiryValues) => ({
    "aria-invalid": err(k) ? (true as const) : undefined,
    "aria-describedby": err(k) ? `${k}-error` : undefined,
  });
  const border = (k: keyof EnquiryValues) => (err(k) ? "border-red-400" : "border-white/15");

  const FieldError = ({ k }: { k: keyof EnquiryValues }) =>
    err(k) ? (
      <p id={`${k}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-300">
        <AlertCircle aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
        {err(k)}
      </p>
    ) : null;

  const label = "mb-1.5 block text-sm font-medium text-white/90";
  const optional = <span className="font-normal text-white/50"> (optional)</span>;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="enquiry-form-title"
      className="rounded-3xl border border-white/15 bg-ink/90 p-6 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)] backdrop-blur sm:p-8"
    >
      <h3 id="enquiry-form-title" className="text-xl font-semibold">
        Send an enquiry
      </h3>
      <p className="mt-1 text-sm text-muted">
        Fields marked with <span aria-hidden="true">*</span>
        <span className="sr-only">an asterisk</span> are required.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="name" className={label}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={LIMITS.name + 20}
            value={values.name}
            onChange={setField("name")}
            onBlur={blur("name")}
            placeholder="Your full name"
            className={`${inputClass} ${border("name")}`}
            {...aria("name")}
          />
          <FieldError k="name" />
        </div>

        <div>
          <label htmlFor="mobile" className={label}>
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <div className="flex">
            <span
              aria-hidden="true"
              className="flex items-center rounded-l-xl border border-r-0 border-white/15 bg-white/10 px-3.5 text-base text-white/80"
            >
              +91
            </span>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              required
              value={values.mobile}
              onChange={setField("mobile")}
              onBlur={blur("mobile")}
              placeholder="10-digit mobile number"
              className={`${inputClass} rounded-l-none ${border("mobile")}`}
              {...aria("mobile")}
            />
          </div>
          <FieldError k="mobile" />
        </div>

        <div>
          <label htmlFor="role" className={label}>
            I Am A <span aria-hidden="true">*</span>
          </label>
          <select
            id="role"
            name="role"
            required
            value={values.role}
            onChange={setField("role")}
            onBlur={blur("role")}
            className={`${inputClass} ${border("role")} ${values.role ? "" : "text-white/40"}`}
            {...aria("role")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {ROLES.map((r) => (
              <option key={r} value={r} className="bg-ink-2 text-white">
                {r}
              </option>
            ))}
          </select>
          <FieldError k="role" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="organization" className={label}>
              School or College Name{optional}
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              autoComplete="organization"
              value={values.organization}
              onChange={setField("organization")}
              onBlur={blur("organization")}
              className={`${inputClass} ${border("organization")}`}
              {...aria("organization")}
            />
            <FieldError k="organization" />
          </div>
          <div>
            <label htmlFor="classOrCourse" className={label}>
              Class or Course{optional}
            </label>
            <input
              id="classOrCourse"
              name="classOrCourse"
              type="text"
              placeholder="e.g. Class 8 or BSc"
              value={values.classOrCourse}
              onChange={setField("classOrCourse")}
              onBlur={blur("classOrCourse")}
              className={`${inputClass} ${border("classOrCourse")}`}
              {...aria("classOrCourse")}
            />
            <FieldError k="classOrCourse" />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={label}>
            Message{optional}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={setField("message")}
            onBlur={blur("message")}
            placeholder="Tell us about your students, preferred dates or questions."
            className={`${inputClass} resize-y ${border("message")}`}
            {...aria("message")}
          />
          <div className="mt-1 flex justify-between gap-3">
            <div>
              <FieldError k="message" />
            </div>
            <p className={`ml-auto shrink-0 text-xs ${values.message.length > LIMITS.message ? "text-red-300" : "text-white/50"}`}>
              {values.message.length}/{LIMITS.message}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 flex gap-2 rounded-xl border border-cyan/25 bg-cyan/5 p-3.5 text-sm leading-relaxed text-white/85">
        <MessageCircle aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-cyan" />
        <span>
          Submitting opens WhatsApp with your enquiry already written. Nothing is saved on this website, and your
          enquiry is sent only after you press send in WhatsApp.
        </span>
      </p>

      <button
        type="submit"
        disabled={status === "opening"}
        className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet to-blue px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgb(139_92_246/0.9)] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-80"
      >
        {status === "opening" ? (
          <>
            <Loader2 aria-hidden="true" size={20} className="animate-spin" /> Opening WhatsApp…
          </>
        ) : (
          <>
            <MessageCircle aria-hidden="true" size={20} /> Send Enquiry on WhatsApp
          </>
        )}
      </button>

      <div aria-live="polite" className="mt-4">
        <AnimatePresence mode="wait">
          {status === "opened" && (
            <motion.p
              key="opened"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2 text-sm text-emerald-300"
            >
              <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
              <span>
                WhatsApp should now be open with your message. Press send there to finish. Nothing opened?{" "}
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                  Open WhatsApp manually
                </a>
                .
              </span>
            </motion.p>
          )}
          {status === "blocked" && (
            <motion.p
              key="blocked"
              role="alert"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2 text-sm text-amber-200"
            >
              <AlertCircle aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
              <span>
                Your browser blocked the new window.{" "}
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                  Tap here to open WhatsApp
                </a>{" "}
                with your enquiry.
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
