export function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 2 13.5 7 18 8.5 13.5 10 12 15 10.5 10 6 8.5 10.5 7 12 2Z"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M5 15 5.75 17.5 8 18.25 5.75 19 5 21.5 4.25 19 2 18.25 4.25 17.5 5 15Z"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M19 13 19.6 15 21 15.6 19.6 16.2 19 18 18.4 16.2 17 15.6 18.4 15 19 13Z"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="m9 6 6 6-6 6" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

export function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M4 5.5C4 4.12 5.12 3 6.5 3h1.1c.49 0 .91.34.99.82l.66 4c.08.53-.27 1.03-.81 1.1l-1.46.21c.89 2.95 3.31 5.37 6.26 6.26l.21-1.46c.07-.54.57-.89 1.1-.81l4 .66c.48.08.82.5.82.99v1.1C19 18.88 17.88 20 16.5 20h-1C9.37 20 4 14.63 4 8.5v-3Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx={12} cy={12} r={8} strokeWidth={1.5} />
      <path
        d="M12 7v5l3 2"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle cx={12} cy={10} r={3} strokeWidth={1.5} />
    </svg>
  );
}
