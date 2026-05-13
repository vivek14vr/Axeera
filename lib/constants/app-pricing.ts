import type { AppPricingPlan } from "@/types/app-pricing";

export const appPricingIntro = {
  heroEyebrow: "App Development",
  heroTitle: "App Development Pricing",
  heroDescription:
    "Transparent, project-based pricing for high-performance mobile and product apps",
  eyebrow: "Choose a plan",
  title: "Momentum for every product stage",
  description:
    "Compare project tiers for design, development, integrations, launch, and post-launch support.",
};

export const appPricingPlans: AppPricingPlan[] = [
  {
    id: "grow",
    name: "Grow",
    price: "$599-1999",
    featured: false,
    highlights: [
      "Single platform (iOS or Android)",
      "Core features (2-3)",
      "Basic UI kit",
      "API integration",
      "4-6 weeks",
    ],
    sections: [
      {
        title: "Architecture",
        items: [
          "Single platform (iOS or Android)",
          "REST API integration",
          "Local storage",
          "Basic error handling",
          "Monorepo – 0",
        ],
      },
      {
        title: "Features",
        items: [
          "Auth (email/OTP)",
          "Core flows (2-3)",
          "Push notifications – 0",
          "In-app feedback – 0",
          "Versioning & releases",
        ],
      },
      {
        title: "UI/UX",
        items: [
          "Basic UI kit",
          "Essential screens",
          "Adaptive layouts",
          "Light theme only",
          "Accessibility basics",
        ],
      },
      {
        title: "Quality",
        items: [
          "Unit tests (core)",
          "Basic logging",
          "Crash reporting",
          "UAT – 1 round",
          "Testflight/Alpha deploy",
        ],
      },
      {
        title: "Ops & Handoff",
        items: [
          "Store listing setup",
          "Release notes",
          "Developer handoff",
          "Docs summary",
        ],
      },
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: "$1999-3999",
    featured: true,
    badge: "Best Value",
    highlights: [
      "Single platform",
      "Custom UI/UX",
      "Auth & forms",
      "Analytics baseline",
      "6-8 weeks",
    ],
    sections: [
      {
        title: "Architecture",
        items: [
          "Single platform",
          "Secure storage",
          "Feature flags – 0",
          "REST/GraphQL APIs",
          "Monorepo – 0",
        ],
      },
      {
        title: "Features",
        items: [
          "Auth (email/social)",
          "Core flows (4-5)",
          "Payments – 0",
          "Deep linking",
          "Push notifications – 0",
        ],
      },
      {
        title: "UI/UX",
        items: [
          "Custom UI kit",
          "Design tokens",
          "Dark mode – 0",
          "Micro-interactions",
          "Onboarding flows",
        ],
      },
      {
        title: "Quality",
        items: [
          "Unit + integration tests",
          "Analytics events",
          "Crashlytics/Sentry",
          "UAT – 2 rounds",
          "Beta deploys",
        ],
      },
      {
        title: "Ops & Handoff",
        items: [
          "App Store / Play Store",
          "Basic CI for builds – 0",
          "Release notes + changelogs",
          "Team training – 0",
          "Docs pack",
        ],
      },
    ],
  },
  {
    id: "dominate",
    name: "Dominate",
    price: "$3999-9999",
    featured: true,
    highlights: [
      "Cross-platform (iOS & Android)",
      "Custom flows (4-6)",
      "Payments integration",
      "Crashlytics/Analytics",
      "8-12 weeks",
    ],
    sections: [
      {
        title: "Architecture",
        items: [
          "Cross-platform (iOS & Android)",
          "GraphQL + REST",
          "Secure storage + encryption",
          "Feature flags",
          "Modular code structure",
        ],
      },
      {
        title: "Features",
        items: [
          "Auth (email/social)",
          "Payments (Stripe/Razorpay)",
          "Core flows (4-6)",
          "Offline caching",
          "Deep links",
        ],
      },
      {
        title: "UI/UX",
        items: [
          "Custom design system",
          "Light/Dark themes",
          "Animations & micro-interactions",
          "Accessibility AA – 0",
          "Design handoff",
        ],
      },
      {
        title: "Quality",
        items: [
          "Unit + integration tests",
          "Analytics & events",
          "Crash monitoring",
          "UAT – 2 rounds",
          "Staged beta deploys",
        ],
      },
      {
        title: "Ops & Handoff",
        items: [
          "Store listings",
          "CI for builds",
          "Release process docs",
          "Team training session",
          "Docs pack",
        ],
      },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: "$9999-11999",
    featured: false,
    highlights: [
      "Enterprise-ready",
      "Role-based access",
      "Offline-first",
      "Observability",
      "12-20 weeks",
    ],
    sections: [
      {
        title: "Architecture",
        items: [
          "Enterprise-ready modules",
          "Role-based architecture",
          "Secure storage + encryption",
          "Feature flags + A/B",
          "Observability hooks",
        ],
      },
      {
        title: "Features",
        items: [
          "SSO/Enterprise auth",
          "Role-based flows",
          "Subscriptions",
          "Offline-first",
          "Campaign deep links",
        ],
      },
      {
        title: "UI/UX",
        items: [
          "Full design system",
          "Accessibility AA",
          "Advanced animations",
          "Theming (Light/Dark)",
          "Design handoff",
        ],
      },
      {
        title: "Quality",
        items: [
          "Unit + integration + e2e",
          "Logs/metrics/traces",
          "Crash & performance budget",
          "UAT – 3 rounds",
          "Staged rollouts",
        ],
      },
      {
        title: "Ops & Handoff",
        items: [
          "CI/CD pipelines",
          "Infra as code – 0",
          "Runbooks & playbooks",
          "Admin training",
          "Full documentation",
        ],
      },
    ],
  },
];
