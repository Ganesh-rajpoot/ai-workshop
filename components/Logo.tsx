import { site } from "@/lib/site";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#131a35" stroke="rgb(255 255 255 / 0.14)" />
      <path
        d="M14 46 32 14l18 32M21 34h22"
        stroke="url(#logo-g)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="32" cy="14" r="4" fill="#22d3ee" />
      <circle cx="14" cy="46" r="4" fill="#8b5cf6" />
      <circle cx="50" cy="46" r="4" fill="#3b82f6" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">ACIT</span>
        <span className="mt-1 text-[0.7rem] font-medium text-muted">{site.institute.replace("ACIT ", "")}</span>
      </span>
    </span>
  );
}
