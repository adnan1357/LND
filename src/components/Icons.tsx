interface IconProps {
  className?: string;
}

export const ArrowRight = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Award = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Building2 = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6h4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 10h4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14h4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18h4" />
  </svg>
);

export const Briefcase = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const Calendar = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="16" x2="16" y1="2" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="8" x2="8" y1="2" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="3" x2="21" y1="10" y2="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Calculator = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="16" height="20" x="4" y="2" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="8" x2="16" y1="6" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="16" x2="16" y1="14" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 10h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01" />
  </svg>
);

export const CheckCircle2 = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
  </svg>
);

export const ChevronDown = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
  </svg>
);

export const ChevronUp = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 15l-6-6-6 6" />
  </svg>
);

export const ClipboardList = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11h4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16h4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h.01" />
  </svg>
);

export const Clock = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const FileCheck = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15l2 2 4-4" />
  </svg>
);

export const FileText = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="16" x2="8" y1="13" y2="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="16" x2="8" y1="17" y2="17" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="10,9 9,9 8,9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Globe = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="2" x2="22" y1="12" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const Handshake = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 13h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6Z" />
  </svg>
);

export const Heart = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const Lightbulb = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21h6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3a6 6 0 0 0-6 6c0 1 .2 2 .6 2.8L9 15h6l2.4-3.2c.4-.8.6-1.8.6-2.8a6 6 0 0 0-6-6Z" />
  </svg>
);

export const Mail = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="20" height="16" x="2" y="4" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 7l-10 5L2 7" />
  </svg>
);

export const MapPin = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Menu = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="4" x2="20" y1="12" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="4" x2="20" y1="6" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="4" x2="20" y1="18" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Phone = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Send = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="22" x2="11" y1="2" y2="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polygon points="22,2 15,22 11,13 2,9 22,2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Shield = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const Star = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Target = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const TrendingUp = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <polyline points="16,7 22,7 22,13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Users = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const X = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" x2="6" y1="6" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <line x1="6" x2="18" y1="6" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const Banknote = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="20" height="12" x="2" y="6" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M18 12h.01" />
  </svg>
);

