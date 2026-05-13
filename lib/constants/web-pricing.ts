import type { WebPricingPlan } from "@/types/web-pricing";

export const webPricingIntro = {
  heroEyebrow: "Web Development",
  heroTitle: "Web Development Pricing",
  heroDescription:
    "Transparent, one-time pricing for modern, high-performance websites",
  eyebrow: "Choose a plan",
  title: "Built for different stages of your growth",
  description:
    "Compare one-time website tiers for design, development, SEO, integrations, launch, and support.",
};

export const webPricingPlans: WebPricingPlan[] = [
  {
    id: "growth",
    name: "Growth",
    price: "$299-699",
    featured: false,
    highlights: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO",
      "Contact form",
      "1 revision",
    ],
    sections: [
      {
        title: "Design",
        items: [
          "Custom homepage layout",
          "Inner page templates",
          "Mobile-first responsive",
          "Brand color & typography",
          "Basic icon set",
        ],
      },
      {
        title: "Development",
        items: [
          "Static pages (up to 5)",
          "Contact form with validation",
          "Basic components (header/footer)",
          "Image optimization",
          "Accessibility basics",
        ],
      },
      {
        title: "SEO & Performance",
        items: [
          "Meta titles/descriptions",
          "XML sitemap",
          "Robots.txt",
          "Basic schema (Organization)",
          "Core Web Vitals check",
        ],
      },
      {
        title: "Integrations",
        items: [
          "Google Analytics",
          "Search Console",
          "Basic social share",
          "Newsletter capture – 0",
        ],
      },
      {
        title: "QA & Deployment",
        items: [
          "Cross-browser testing",
          "Responsive testing",
          "UAT round – 1",
          "Deployment to hosting",
        ],
      },
      {
        title: "Support",
        items: [
          "Bug fixes – 14 days",
          "Content updates – 2",
          "Training handoff",
          "Documentation summary",
        ],
      },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$699-1299",
    featured: true,
    badge: "Most Popular",
    highlights: [
      "Up to 12 pages",
      "CMS (Blog)",
      "On-page SEO",
      "Speed optimization",
      "3 revisions",
    ],
    sections: [
      {
        title: "Design",
        items: [
          "Custom homepage + 2 hero variants",
          "Inner page templates",
          "Mobile-first responsive",
          "Brand visuals & illustrations",
          "Icon set + SVGs",
        ],
      },
      {
        title: "Development",
        items: [
          "Dynamic pages (up to 12)",
          "CMS (Blog)",
          "Reusable components library",
          "Contact forms + spam protection",
          "Image/CDN optimization",
        ],
      },
      {
        title: "SEO & Performance",
        items: [
          "Meta titles/descriptions",
          "XML sitemap",
          "Robots.txt",
          "Expanded schema (Breadcrumb, Article)",
          "Core Web Vitals improvements",
        ],
      },
      {
        title: "Integrations",
        items: [
          "Google Analytics",
          "Search Console",
          "Newsletter (Mailchimp/Sendgrid)",
          "CRM/Webhooks – 0",
        ],
      },
      {
        title: "QA & Deployment",
        items: [
          "Cross-browser testing",
          "Responsive testing",
          "UAT rounds – 2",
          "Staging + Production deploy",
        ],
      },
      {
        title: "Support",
        items: [
          "Bug fixes – 30 days",
          "Content updates – 4",
          "Editor training session",
          "Documentation pack",
        ],
      },
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: "$1299-1999",
    featured: false,
    highlights: [
      "Up to 18 pages",
      "CMS sections",
      "Advanced SEO",
      "Image/CDN optimization",
      "4 revisions",
    ],
    sections: [
      {
        title: "Design",
        items: [
          "Custom homepage + variant",
          "Section-based library",
          "Mobile-first responsive",
          "Illustrations & icons",
          "Design accessibility pass",
        ],
      },
      {
        title: "Development",
        items: [
          "Dynamic pages (up to 18)",
          "Advanced components",
          "Reusable layouts",
          "Contact forms + file upload",
          "Image/CDN optimization + lazyload",
        ],
      },
      {
        title: "SEO & Performance",
        items: [
          "Advanced meta strategy",
          "XML sitemap + robots",
          "Schema (Breadcrumb/FAQ)",
          "Core Web Vitals improvements",
          "Preload/Prefetch tuning",
        ],
      },
      {
        title: "Integrations",
        items: [
          "Analytics + events",
          "Search Console",
          "Newsletter (Mailchimp/Sendgrid)",
          "Basic CRM webhook – 0",
        ],
      },
      {
        title: "QA & Deployment",
        items: [
          "Cross-browser matrix",
          "Responsive matrix",
          "UAT rounds – 2",
          "Staging + Production deploy",
        ],
      },
      {
        title: "Support",
        items: [
          "Bug fixes – 45 days",
          "Content updates – 6",
          "Editor training + docs",
          "Handover session",
        ],
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$1999-2999",
    featured: false,
    highlights: [
      "Custom pages",
      "Advanced animations",
      "SEO + Analytics",
      "3rd-party integrations",
      "5 revisions",
    ],
    sections: [
      {
        title: "Design",
        items: [
          "Full custom design system",
          "Landing page variants (A/B)",
          "Micro-interactions",
          "Animations (Lottie/GSAP)",
          "Design handoff files",
        ],
      },
      {
        title: "Development",
        items: [
          "Custom pages (unlimited within scope)",
          "Advanced components",
          "3rd-party integrations",
          "Forms: multi-step + file upload",
          "Headless CMS (optional)",
        ],
      },
      {
        title: "SEO & Performance",
        items: [
          "Advanced on-page SEO",
          "Schema (FAQ/HowTo/Product)",
          "Image/asset pipelines",
          "Core Web Vitals optimization",
          "Caching & CDN setup",
        ],
      },
      {
        title: "Integrations",
        items: [
          "Analytics + events",
          "Search Console",
          "Newsletter + CRM",
          "Payment gateway – 0 if not e-com",
        ],
      },
      {
        title: "QA & Deployment",
        items: [
          "Cross-browser/regression suite",
          "Responsive matrix",
          "UAT rounds – 3",
          "Zero-downtime deployment",
        ],
      },
      {
        title: "Support",
        items: [
          "Bug fixes – 60 days",
          "Content updates – 8",
          "Team training – 1 workshop",
          "Full documentation",
        ],
      },
    ],
  },
];
