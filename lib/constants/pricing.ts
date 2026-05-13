export const pricingPlans = [
  {
    name: "Launch",
    price: "From $4,800",
    description:
      "For teams that need a polished website or landing experience with a clear launch path.",
    features: [
      "Discovery and positioning workshop",
      "Responsive website design and build",
      "Core SEO setup and analytics",
      "Two revision rounds before launch",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "From $9,500",
    description:
      "For service brands ready to combine product design, engineering, and ongoing growth support.",
    features: [
      "Website or app experience design",
      "Custom build with CMS or app flows",
      "Technical SEO and content structure",
      "Launch support and optimization sprint",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description:
      "For teams with multi-surface roadmaps, complex integrations, or long-term product delivery.",
    features: [
      "Dedicated cross-functional squad",
      "Roadmap planning and delivery ops",
      "Cloud, DevOps, and observability",
      "Quarterly growth and product reviews",
    ],
    featured: false,
  },
] as const;
