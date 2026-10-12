import { LayoutTemplate, MessageSquareText, Users } from "lucide-react";

const LAYERS = [4, 6, 6, 3];
const XS = [64, 184, 316, 436];
const COLORS = ["#22d3ee", "#8b5cf6", "#60a5fa", "#c4b5fd"];

type Node = { x: number; y: number; layer: number };

const nodes: Node[][] = LAYERS.map((count, layer) => {
  const gap = 56;
  const start = 250 - ((count - 1) * gap) / 2;
  return Array.from({ length: count }, (_, i) => ({ x: XS[layer], y: start + i * gap, layer }));
});

const edges = nodes.slice(0, -1).flatMap((from, l) =>
  from.flatMap((a, i) => nodes[l + 1].map((b, j) => ({ a, b, key: `${l}-${i}-${j}`, live: (i * 3 + j * 5 + l) % 7 === 0 }))),
);

/** Decorative hero illustration: glowing neural network plus floating "digital project" cards. */
export function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="Illustration of a glowing neural network surrounded by floating cards for an AI prompt, a website project and a group task"
      className="relative mx-auto aspect-square w-full max-w-[540px]"
    >
      <div aria-hidden="true" className="absolute inset-[6%] rounded-full bg-violet/25 blur-[80px]" />
      <div aria-hidden="true" className="absolute inset-[22%] rounded-full bg-cyan/20 blur-[70px]" />

      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
        <defs>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* holographic rings */}
        <g fill="none" stroke="#8b5cf6" strokeOpacity="0.28">
          <circle cx="250" cy="250" r="226" strokeDasharray="2 10" />
          <circle cx="250" cy="250" r="196" strokeOpacity="0.14" />
          <ellipse cx="250" cy="438" rx="150" ry="22" stroke="#22d3ee" strokeOpacity="0.35" />
          <ellipse cx="250" cy="438" rx="104" ry="14" stroke="#22d3ee" strokeOpacity="0.22" />
        </g>

        {/* circuit traces */}
        <g fill="none" stroke="#3b82f6" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 96h38l18 18h40" />
          <path d="M480 404h-40l-18-18h-36" />
          <path d="M20 404h30l16-16" />
          <path d="M480 96h-34l-16 16" />
        </g>
        <g fill="#22d3ee">
          <circle cx="20" cy="96" r="3" />
          <circle cx="480" cy="404" r="3" />
          <circle cx="20" cy="404" r="3" />
          <circle cx="480" cy="96" r="3" />
        </g>

        {/* connections */}
        <g strokeLinecap="round">
          {edges.map(({ a, b, key, live }) =>
            live ? (
              <line
                key={key}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#22d3ee"
                strokeOpacity="0.85"
                strokeWidth="1.4"
                strokeDasharray="6 18"
                className="animate-flow"
              />
            ) : (
              <line key={key} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#8b5cf6" strokeOpacity="0.2" strokeWidth="1" />
            ),
          )}
        </g>

        {/* nodes */}
        {nodes.flat().map((n, i) => (
          <g key={`${n.layer}-${n.x}-${n.y}`}>
            <circle cx={n.x} cy={n.y} r="13" fill={COLORS[n.layer]} opacity="0.5" filter="url(#node-glow)" />
            <circle
              cx={n.x}
              cy={n.y}
              r="7"
              fill="#080b18"
              stroke={COLORS[n.layer]}
              strokeWidth="2.5"
              className="animate-pulse-node"
              style={{ animationDelay: `${(i % 7) * 0.45}s` }}
            />
            <circle cx={n.x} cy={n.y} r="2.6" fill={COLORS[n.layer]} />
          </g>
        ))}
      </svg>

      {/* floating digital cards */}
      <div
        aria-hidden="true"
        className="glass animate-float absolute left-[-2%] top-[4%] w-[47%] rounded-2xl p-3 text-[0.7rem] leading-snug shadow-[0_20px_50px_-20px_rgb(0_0_0/0.8)] sm:left-0 sm:p-4 sm:text-xs"
      >
        <div className="mb-1.5 flex items-center gap-1.5 font-semibold text-cyan">
          <MessageSquareText size={14} /> Prompt
        </div>
        <p className="text-white/90">Explain rain to a Class 7 student using an everyday example.</p>
      </div>

      <div
        aria-hidden="true"
        className="glass animate-float-slow absolute right-[-2%] top-[40%] w-[44%] rounded-2xl p-3 text-[0.7rem] leading-snug shadow-[0_20px_50px_-20px_rgb(0_0_0/0.8)] sm:right-0 sm:p-4 sm:text-xs"
      >
        <div className="mb-1.5 flex items-center gap-1.5 font-semibold text-violet-soft">
          <LayoutTemplate size={14} /> Project card
        </div>
        <p className="mb-2 text-white/90">School website concept</p>
        <div className="flex flex-wrap gap-1">
          {["Plan", "Write", "Design"].map((t) => (
            <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[0.65rem] text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="glass animate-float absolute bottom-[4%] left-[4%] w-[46%] rounded-2xl p-3 text-[0.7rem] leading-snug shadow-[0_20px_50px_-20px_rgb(0_0_0/0.8)] [animation-delay:1.6s] sm:p-4 sm:text-xs"
      >
        <div className="mb-1.5 flex items-center gap-1.5 font-semibold text-blue">
          <Users size={14} /> Group task
        </div>
        <p className="text-white/90">Pick a local problem. Suggest an AI-assisted idea.</p>
      </div>
    </div>
  );
}
