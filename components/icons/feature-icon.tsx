type FeatureIconProps = {
  name: string;
  className?: string;
};

export function FeatureIcon({ name, className = "h-5 w-5" }: FeatureIconProps) {
  switch (name) {
    case "innovation":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 3.5 9.5 9.5 3.5 12l6 2.5L12 20.5l2.5-6 6-2.5-6-2.5L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M12 3.5v4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "transparency":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M7 11.5c0-2.5 2.5-4.5 5-4.5s5 2 5 4.5c0 3.5-5 7-5 7s-5-3.5-5-7Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11.5" r="1.75" fill="currentColor" />
        </svg>
      );
    case "results":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 20.5s-6.5-4.2-6.5-9.2c0-3.2 2.9-5.8 6.5-5.8s6.5 2.6 6.5 5.8c0 5-6.5 9.2-6.5 9.2Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "support":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 8.25v4.25l2.75 1.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "delivery":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 7.75v4.75l3 1.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 4.25 6.5 6.5v5.25c0 4.1 2.35 6.55 5.5 7.75 3.15-1.2 5.5-3.65 5.5-7.75V6.5L12 4.25Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="m9.5 12 1.75 1.75L15 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "pricing":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 4.5v15M9.25 7.5h4.25c1.45 0 2.5 1 2.5 2.25S14.95 12 13.5 12H9.25v6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "contract":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M8.25 5.25h7.5c1.15 0 2.1.95 2.1 2.1v11.3c0 1.15-.95 2.1-2.1 2.1h-7.5c-1.15 0-2.1-.95-2.1-2.1V7.35c0-1.15.95-2.1 2.1-2.1Z"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path d="M10 10.5h5M10 14h3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "award":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="9.25" r="4.25" stroke="currentColor" strokeWidth="1.75" />
          <path d="M8.75 13.25 7.5 19.5l4.5-2.25 4.5 2.25-1.25-6.25" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    case "growth":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path d="M5.5 17.5h13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="m8.5 13.5 3-3 2.25 2.25L16.5 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "globe":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
          <path d="M4.25 12h15.5M12 3.75c2.5 2.35 3.75 5.35 3.75 8.25S14.5 17.9 12 20.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M12 4.5c-2.75 0-5 2.15-5 4.85 0 1.95 1.15 3.65 2.85 4.45V15h4.3v-1.2c1.7-.8 2.85-2.5 2.85-4.45 0-2.7-2.25-4.85-5-4.85Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M10.25 17.25h3.5v2.25h-3.5v-2.25Z" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "trophy":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path d="M8.25 5.25h7.5v4.25c0 2.35-1.65 4.25-3.75 4.25S8.25 11.85 8.25 9.5V5.25Z" stroke="currentColor" strokeWidth="1.75" />
          <path d="M6.5 6.75H5.25a1.5 1.5 0 0 0 0 3H6.5M17.5 6.75h1.25a1.5 1.5 0 0 1 0 3H17.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M10.25 17.25h3.5v2.25H9.25v-2.25h1Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    case "clients":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="9.25" cy="9.75" r="3" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="16.75" cy="10.75" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M5.25 18.25c.65-2.65 2.35-4 4-4s3.35 1.35 4 4M13.75 18.25c.45-1.85 1.55-3 3-3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 4.5v4.5M12 15v4.5M4.5 12h4.5M15 12h4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "strategy":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path d="M6.5 17.5 10 8.5l4 3.5 3.5-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 17.5h13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "delivery-box":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <path d="M5.25 8.25 12 4.75l6.75 3.5v8.5L12 20.25l-6.75-3.5v-8.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M12 12.25v8M5.25 8.25 12 12.25l6.75-4" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 8.25v4.25l2.75 1.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
  }
}
