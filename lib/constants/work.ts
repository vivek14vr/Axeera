import { portfolioProjectImages } from "@/lib/constants/media";

export const showcaseProjects = [
  {
    name: "Northline Commerce",
    category: "Website + SEO",
    result: "142% organic growth in 6 months",
    image: portfolioProjectImages[0].src,
    imageAlt: portfolioProjectImages[0].alt,
  },
  {
    name: "Pulse Health",
    category: "App Development",
    result: "4.8 app store rating at launch",
    image: portfolioProjectImages[1].src,
    imageAlt: portfolioProjectImages[1].alt,
  },
  {
    name: "Summit Legal",
    category: "Brand + Web",
    result: "38% lift in qualified inquiries",
    image: portfolioProjectImages[2].src,
    imageAlt: portfolioProjectImages[2].alt,
  },
  {
    name: "Atlas Field Ops",
    category: "Software Platform",
    result: "60% faster reporting for field teams",
    image: portfolioProjectImages[3].src,
    imageAlt: portfolioProjectImages[3].alt,
  },
  {
    name: "Lumen SaaS",
    category: "Product Marketing",
    result: "2.4x demo requests after launch",
    image: portfolioProjectImages[4].src,
    imageAlt: portfolioProjectImages[4].alt,
  },
  {
    name: "Harbor Collective",
    category: "Design System + Web",
    result: "Unified brand across 12 service pages",
    image: portfolioProjectImages[5].src,
    imageAlt: portfolioProjectImages[5].alt,
  },
] as const;
