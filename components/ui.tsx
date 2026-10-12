import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 id={id} className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? <div className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{children}</div> : null}
    </div>
  );
}

type Variant = "primary" | "secondary" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-violet to-blue text-white shadow-[0_10px_30px_-10px_rgb(139_92_246/0.8)] hover:brightness-110",
  secondary: "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
  light: "bg-white text-[#1e1b4b] hover:bg-white/90",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  return (
    <a
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
