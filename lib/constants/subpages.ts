export type DetailPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  deliverables: string[];
};

export const ourStoryContent: DetailPageContent = {
  eyebrow: "Our story",
  title: "Building success through innovation since 2021",
  description:
    "Axeera was born from a shared vision that global businesses deserved world-class technology solutions, blending strategy, technology, and marketing into one accountable team.",
  highlights: [
    {
      title: "Where we began",
      description:
        "What started as passionate discussions about transforming businesses has grown into a company that has helped over 50+ businesses achieve remarkable growth.",
    },
    {
      title: "How we deliver",
      description:
        "Our integrated approach of business strategy, technology innovation, and marketing excellence creates a powerful synergy that drives sustainable success for our clients.",
    },
    {
      title: "Where we are today",
      description:
        "We blend global best practices with deep local market understanding, ensuring every solution we deliver truly matters for businesses in the digital age.",
    },
  ],
  deliverables: [
    "Company founded in 2021",
    "50+ projects delivered by 2022",
    "Industry leadership recognized by 2024",
  ],
};

export const servicePages = {
  seo: {
    eyebrow: "SEO services",
    title: "Boost Organic Growth with Strategic SEO",
    description:
      "Technical excellence, high-intent content, and ethical link building to grow rankings, traffic, and revenue.",
    highlights: [
      {
        title: "Keyword research and strategy",
        description:
          "Identify high-intent, high-value keywords tailored to your audience and market.",
      },
      {
        title: "Technical SEO",
        description:
          "Site audits, Core Web Vitals, crawlability, indexing, schema, redirects, and sitemaps.",
      },
      {
        title: "Analytics and reporting",
        description:
          "Transparent dashboards and monthly reports focused on growth KPIs and ROI.",
      },
    ],
    deliverables: [
      "Audit and baseline reporting",
      "On-page and technical optimization",
      "Content and authority building",
      "Monthly KPI reviews",
    ],
  },
  website: {
    eyebrow: "Web design",
    title: "Creative Web Design Solutions",
    description:
      "We create stunning, user-friendly websites that not only look amazing but also drive business results. From concept to launch, we deliver designs that engage, convert, and grow your business.",
    highlights: [
      {
        title: "Creative design",
        description:
          "Unique, modern, and visually stunning designs that capture your brand's essence and engage your audience.",
      },
      {
        title: "Responsive design",
        description:
          "Websites that look perfect and function flawlessly on all devices - desktop, tablet, and mobile.",
      },
      {
        title: "User experience",
        description:
          "Intuitive navigation, clear call-to-actions, and seamless user journeys that convert visitors into customers.",
      },
    ],
    deliverables: [
      "Discovery and design planning",
      "Visual design and prototyping",
      "Responsive development and launch",
      "Ongoing design support",
    ],
  },
  software: {
    eyebrow: "Software development",
    title: "Custom Software Solutions That Drive Growth",
    description:
      "Transform your business with bespoke software applications designed to streamline operations, enhance productivity, and deliver measurable results.",
    highlights: [
      {
        title: "Custom software development",
        description:
          "Tailored solutions designed specifically for your business requirements and workflow.",
      },
      {
        title: "Cloud-native applications",
        description:
          "Scalable applications built for cloud infrastructure and deployment.",
      },
      {
        title: "Backend development",
        description:
          "Powerful server-side applications with robust APIs and business logic.",
      },
    ],
    deliverables: [
      "Requirements analysis and system design",
      "Custom application development",
      "Testing, deployment, and integration",
      "Support and maintenance",
    ],
  },
  mobileApp: {
    eyebrow: "Mobile app development",
    title: "Custom Mobile App Development",
    description:
      "We create innovative mobile applications that engage users and drive business growth. From concept to launch, we deliver apps that users love and businesses rely on.",
    highlights: [
      {
        title: "Native and cross-platform",
        description:
          "iOS and Android apps built with native performance or cross-platform solutions like React Native and Flutter.",
      },
      {
        title: "Custom app development",
        description:
          "Tailored mobile applications designed specifically for your business needs and user requirements.",
      },
      {
        title: "Backend integration",
        description:
          "Seamless integration with APIs, databases, and cloud services for robust app functionality.",
      },
    ],
    deliverables: [
      "Discovery and UI/UX design",
      "iOS and Android development",
      "Testing and app store submission",
      "Launch support and maintenance",
    ],
  },
} as const satisfies Record<string, DetailPageContent>;

export const pricingPages = {
  seo: {
    eyebrow: "SEO pricing",
    title: "SEO packages shaped around visibility, content, and reporting",
    description:
      "These starting points cover technical cleanup, on-page optimization, and growth reporting for service brands ready to invest in search.",
    highlights: [
      {
        title: "Essentials",
        description: "From $1,200 / month for audits, fixes, and baseline keyword tracking.",
      },
      {
        title: "Growth",
        description: "From $2,400 / month for content structure, landing pages, and conversion tracking.",
      },
      {
        title: "Scale",
        description: "Custom retainers for multi-location brands, content programs, and advanced analytics.",
      },
    ],
    deliverables: [
      "Technical SEO audit and fixes",
      "Keyword and content roadmap",
      "Monthly performance reporting",
      "Quarterly strategy reviews",
    ],
  },
  website: {
    eyebrow: "Website pricing",
    title: "Website pricing for launches, redesigns, and content-ready builds",
    description:
      "Project scopes vary by page count, CMS needs, and integrations. These tiers outline typical starting points before we tailor a quote.",
    highlights: [
      {
        title: "Launch site",
        description: "From $4,800 for a focused marketing site with core pages and launch support.",
      },
      {
        title: "Growth site",
        description: "From $9,500 for custom design, CMS workflows, and SEO-ready architecture.",
      },
      {
        title: "Custom build",
        description: "Scoped engagements for multi-language sites, advanced content models, and integrations.",
      },
    ],
    deliverables: [
      "Discovery and sitemap planning",
      "Design and responsive development",
      "CMS setup and editor training",
      "Pre-launch QA and analytics",
    ],
  },
  appDevelopment: {
    eyebrow: "App development pricing",
    title: "App development pricing for mobile and product delivery",
    description:
      "Mobile and software app scopes depend on platforms, integrations, and release complexity. Use these tiers as a starting point for your roadmap.",
    highlights: [
      {
        title: "MVP",
        description: "From $12,000 for a focused mobile or web app with core flows and launch support.",
      },
      {
        title: "Product build",
        description: "From $24,000 for multi-role experiences, APIs, and release operations.",
      },
      {
        title: "Scale program",
        description: "Custom delivery for ongoing feature work, DevOps, and product optimization.",
      },
    ],
    deliverables: [
      "Product discovery and roadmap",
      "UX, UI, and engineering delivery",
      "API and backend integration",
      "Release, monitoring, and iteration support",
    ],
  },
} as const satisfies Record<string, DetailPageContent>;
