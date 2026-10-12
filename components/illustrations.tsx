/* Four distinct, decorative project illustrations. All are CSS/SVG so they load instantly. */

const common = { viewBox: "0 0 320 190", className: "h-full w-full", "aria-hidden": true, focusable: false } as const;

export function WebsiteIllustration() {
  return (
    <svg {...common}>
      <rect x="28" y="22" width="264" height="146" rx="14" fill="#0d1226" stroke="#8b5cf6" strokeOpacity="0.6" />
      <path d="M28 36a14 14 0 0 1 14-14h236a14 14 0 0 1 14 14v8H28z" fill="#8b5cf6" fillOpacity="0.25" />
      <circle cx="44" cy="33" r="3.5" fill="#c4b5fd" />
      <circle cx="56" cy="33" r="3.5" fill="#c4b5fd" fillOpacity="0.6" />
      <circle cx="68" cy="33" r="3.5" fill="#c4b5fd" fillOpacity="0.35" />
      <rect x="44" y="58" width="132" height="14" rx="5" fill="#c4b5fd" />
      <rect x="44" y="80" width="96" height="7" rx="3.5" fill="#fff" fillOpacity="0.35" />
      <rect x="44" y="94" width="112" height="7" rx="3.5" fill="#fff" fillOpacity="0.25" />
      <rect x="44" y="114" width="60" height="18" rx="9" fill="#22d3ee" />
      <rect x="196" y="58" width="80" height="74" rx="10" fill="#8b5cf6" fillOpacity="0.25" stroke="#8b5cf6" strokeOpacity="0.6" strokeDasharray="4 4" />
      <path d="M212 118l18-22 14 14 10-10 16 18z" fill="#22d3ee" fillOpacity="0.7" />
      <circle cx="226" cy="76" r="6" fill="#c4b5fd" />
      <rect x="44" y="142" width="232" height="12" rx="6" fill="#fff" fillOpacity="0.07" />
    </svg>
  );
}

export function AssistantIllustration() {
  return (
    <svg {...common}>
      <rect x="28" y="20" width="264" height="150" rx="16" fill="#0d1226" stroke="#22d3ee" strokeOpacity="0.5" />
      <rect x="48" y="38" width="150" height="34" rx="14" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeOpacity="0.6" />
      <rect x="62" y="50" width="100" height="6" rx="3" fill="#67e8f9" />
      <rect x="62" y="61" width="64" height="5" rx="2.5" fill="#67e8f9" fillOpacity="0.5" />
      <rect x="112" y="84" width="160" height="46" rx="14" fill="#3b82f6" fillOpacity="0.28" stroke="#3b82f6" strokeOpacity="0.7" />
      <rect x="126" y="96" width="120" height="6" rx="3" fill="#fff" fillOpacity="0.85" />
      <rect x="126" y="108" width="96" height="6" rx="3" fill="#fff" fillOpacity="0.5" />
      <rect x="126" y="119" width="52" height="5" rx="2.5" fill="#fff" fillOpacity="0.3" />
      <circle cx="94" cy="144" r="3" fill="#22d3ee" />
      <circle cx="106" cy="144" r="3" fill="#22d3ee" fillOpacity="0.6" />
      <circle cx="118" cy="144" r="3" fill="#22d3ee" fillOpacity="0.3" />
      <rect x="48" y="136" width="30" height="16" rx="8" fill="#22d3ee" fillOpacity="0.25" />
    </svg>
  );
}

export function PosterIllustration() {
  return (
    <svg {...common}>
      <g transform="rotate(-4 160 95)">
        <rect x="104" y="14" width="112" height="162" rx="10" fill="#0d1226" stroke="#60a5fa" strokeOpacity="0.7" />
        <rect x="116" y="26" width="88" height="62" rx="8" fill="url(#poster-g)" />
        <circle cx="146" cy="52" r="14" fill="#fff" fillOpacity="0.85" />
        <path d="M116 88l30-24 22 18 14-10 22 16z" fill="#080b18" fillOpacity="0.5" />
        <rect x="116" y="100" width="76" height="11" rx="4" fill="#93c5fd" />
        <rect x="116" y="118" width="88" height="6" rx="3" fill="#fff" fillOpacity="0.4" />
        <rect x="116" y="130" width="70" height="6" rx="3" fill="#fff" fillOpacity="0.3" />
        <rect x="116" y="148" width="44" height="16" rx="8" fill="#e879f9" />
      </g>
      <defs>
        <linearGradient id="poster-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <circle cx="52" cy="48" r="5" fill="#e879f9" />
      <circle cx="270" cy="150" r="7" fill="#22d3ee" fillOpacity="0.8" />
      <path d="M40 150l12-14 12 14zM262 36l8-10 8 10z" fill="#60a5fa" fillOpacity="0.8" />
    </svg>
  );
}

export function ProblemIllustration() {
  return (
    <svg {...common}>
      <rect x="28" y="20" width="264" height="150" rx="16" fill="#0d1226" stroke="#e879f9" strokeOpacity="0.5" />
      <g stroke="#e879f9" strokeOpacity="0.35" fill="none">
        <path d="M28 70h264M28 120h264M96 20v150M200 20v150" />
        <path d="M40 150c40-30 70-10 110-40s90-10 130-50" strokeOpacity="0.6" />
      </g>
      <path d="M160 42a26 26 0 0 1 26 26c0 20-26 48-26 48S134 88 134 68a26 26 0 0 1 26-26z" fill="#e879f9" fillOpacity="0.9" />
      <circle cx="160" cy="68" r="9" fill="#0d1226" />
      <g fill="#22d3ee">
        <circle cx="70" cy="100" r="6" />
        <circle cx="244" cy="88" r="6" />
        <circle cx="236" cy="146" r="6" />
      </g>
      <g stroke="#22d3ee" strokeOpacity="0.7" strokeDasharray="4 5">
        <path d="M76 100 134 78M244 88 186 70M236 146 176 112" />
      </g>
    </svg>
  );
}
