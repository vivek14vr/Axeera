import type { Service } from "@/types/service";

type ServiceIconProps = {
  serviceId: Service["id"];
  className?: string;
};

export function ServiceIcon({ serviceId, className }: ServiceIconProps) {
  const shared = `h-6 w-6 ${className ?? ""}`;

  switch (serviceId) {
    case "website-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <path
            d="M4 7h16M4 12h10M4 17h7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "app-development":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <rect
            x="7"
            y="3"
            width="10"
            height="18"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M10 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "seo-growth":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <path
            d="M4 17l5-5 3 3 8-9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6h5v5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ui-ux-design":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <path
            d="M12 3c3.5 0 6 2.2 6 5.5S15.5 14 12 14s-6-2.2-6-5.5S8.5 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M6 18c1.8 2.2 3.8 3 6 3s4.2-.8 6-3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "brand-identity":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M8.5 12h7M12 8.5v7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cloud-devops":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden>
          <path
            d="M7 16h11a3 3 0 0 0 .4-6 4.5 4.5 0 0 0-8.6-1.2A3.5 3.5 0 0 0 7 16Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
