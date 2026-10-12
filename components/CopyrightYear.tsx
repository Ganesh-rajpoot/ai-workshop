"use client";

/** Renders the current year in the visitor's browser so a statically built page never goes stale. */
export function CopyrightYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
