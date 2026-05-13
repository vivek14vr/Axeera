import type { SeoPricingFeature, SeoPricingPlan, SeoPricingSection } from "@/types/seo-pricing";

const included = (label: string): SeoPricingFeature => ({ label, type: "included" });

const quantity = (
  label: string,
  values: [number, number, number, number, number],
): SeoPricingFeature => ({ label, type: "quantity", values });

export const seoPricingPlans: SeoPricingPlan[] = [
  {
    id: "launch",
    name: "Launch",
    price: 500,
    featured: false,
    highlights: [
      "30 Keywords",
      "6 Landing Pages",
      "50 Backlinks",
      "GBP (GMB)",
      "Social Media",
      "Video Marketing",
      "Marketing Automation",
    ],
  },
  {
    id: "grow",
    name: "Grow",
    price: 700,
    featured: true,
    badge: "Most Chosen",
    highlights: [
      "50 Keywords",
      "10 Landing Pages",
      "90 Backlinks",
      "GBP (GMB)",
      "Social Media",
      "Video Marketing",
      "Marketing Automation",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: 1000,
    featured: true,
    highlights: [
      "75 Keywords",
      "15 Landing Pages",
      "150 Backlinks",
      "GBP (GMB)",
      "Social Media",
      "Video Marketing",
      "Marketing Automation",
    ],
  },
  {
    id: "dominate",
    name: "Dominate",
    price: 1500,
    featured: false,
    highlights: [
      "100 Keywords",
      "20 Landing Pages",
      "250 Backlinks",
      "GBP (GMB)",
      "Social Media",
      "Video Marketing",
      "Marketing Automation",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: 2000,
    featured: false,
    highlights: [
      "150 Keywords",
      "30 Landing Pages",
      "350 Backlinks",
      "GBP (GMB)",
      "Social Media",
      "Video Marketing",
      "Marketing Automation",
    ],
  },
];

export const seoPricingSections: SeoPricingSection[] = [
  {
    title: "SEO Audit & Website Analysis",
    features: [
      included("Initial Website Analysis"),
      included("Pre-optimization site audit"),
      included("Keyword Research & Analysis"),
      included("Duplicate Content Check"),
      included("Competitors Backlink Analysis"),
      included("Baseline Ranking Check"),
      included("Google Penalty Check"),
      included("Backlink Analysis"),
      included("Backlink Strategy Gap Analysis"),
      included("Brand Mention Audit"),
    ],
  },
  {
    title: "OnPage SEO",
    features: [
      included("Title Tag Optimization"),
      included("Meta Description Optimization"),
      included("Image Alt Tags Optimization"),
      included("Content Optimization"),
      included("URL Optimization"),
      included("Robots.txt Creation"),
      included("404 Page Implementation"),
      included("Website Loading Speed Analysis"),
      included("Google Indexed Pages Check"),
      included("Website Canonical Check"),
      included("Broken Links Analysis"),
      included("Site Navigation Tree Analysis"),
      included("HTML Sitemap Creation"),
      included("Header Tags Optimization"),
      included("XML Sitemap Creation"),
    ],
  },
  {
    title: "Technical SEO",
    features: [
      included("HTTPS Security Analysis"),
      included("Site Structure Analysis"),
      included("Internal Links Analysis"),
      included("Structured Data Setup"),
      included("Google Knowledge Panel Optimization"),
    ],
  },
  {
    title: "Measurement & Tracking",
    features: [
      included("Google Search Console Integration"),
      included("Google Analytics Integration"),
    ],
  },
  {
    title: "Off Page Optimization",
    features: [
      quantity("Classified Submissions", [20, 25, 25, 60, 80]),
      included("Business Listing"),
      quantity("Social Bookmarking", [20, 25, 25, 60, 100]),
      quantity("Article Writing", [1, 2, 2, 8, 8]),
      quantity("Article Submissions", [1, 2, 2, 8, 8]),
      quantity("Article Marketing", [1, 2, 2, 8, 8]),
      quantity("PDF Submissions", [2, 3, 3, 8, 8]),
      quantity("Podcast Submissions", [1, 2, 2, 8, 8]),
      quantity("Image Submissions", [2, 4, 4, 10, 10]),
      quantity("Blog Creation (One-Time)", [1, 2, 2, 6, 6]),
      quantity("Blog Writing", [1, 2, 2, 6, 8]),
      quantity("Blog Posting", [1, 2, 2, 6, 8]),
      quantity("Blog Marketing", [5, 10, 10, 30, 30]),
      included("Product Listing"),
      quantity("Profile Creation", [4, 8, 8, 20, 20]),
      quantity("PPT Submissions", [0, 1, 1, 2, 2]),
    ],
  },
  {
    title: "Content Marketing",
    features: [
      quantity("On-site Blog Creation", [1, 2, 3, 4, 6]),
      quantity("On-site Blog Posting", [1, 2, 3, 4, 6]),
      quantity("On-site blog optimization", [1, 2, 3, 4, 6]),
      quantity("Featured Image Creation", [1, 2, 3, 4, 6]),
      quantity("Blog Promotion", [4, 8, 12, 16, 24]),
    ],
  },
  {
    title: "Social Media Marketing",
    features: [
      included("Facebook Profile Creation"),
      included("Facebook Fan Page Creation"),
      quantity("Facebook Posts", [0, 0, 4, 12, 16]),
      quantity("Facebook Group Sharing", [0, 0, 4, 16, 16]),
      included("Instagram Profile Creation"),
      quantity("Posting/Updates", [0, 0, 4, 12, 16]),
      included("Hashtag Marketing"),
      included("Twitter Profile Creation"),
      quantity("Twitter Posting", [0, 0, 4, 12, 16]),
      included("Retweets, likes and comments"),
      included("Trending hashtag promotion"),
      included("Pinterest: Account Creation/Management"),
      included("Pinterest Followers"),
      quantity("Pin boards updation", [0, 0, 0, 6, 8]),
      included("Pins (Images to be provided by the client)"),
    ],
  },
  {
    title: "Brand Building",
    features: [
      included("Citations"),
      included("Brand Name Promotion"),
      included("Brand Mentions Tracking"),
    ],
  },
  {
    title: "Video Marketing",
    features: [
      included("YT Shorts"),
      included("Insta Reels"),
      included("Video Promotion"),
      included("Video Search Optimization"),
    ],
  },
  {
    title: "Marketing Automation",
    features: [
      included("AIDA Optimization"),
      included("Lead Magnet"),
      included("CTA Optimization"),
      included("AI Automation Tool Integration"),
      included("Lead Nurturing"),
      included("Conversion Rate Optimization"),
    ],
  },
  {
    title: "Reporting",
    features: [
      included("Monthly Keyword Ranking Report"),
      included("Monthly Traffic Report"),
      included("Monthly SEO Optimization Report"),
    ],
  },
  {
    title: "Support",
    features: [included("Email"), included("Chat"), included("Phone")],
  },
];

export const seoPricingIntro = {
  heroEyebrow: "SEO Services",
  heroTitle: "SEO Pricing",
  heroDescription:
    "Transparent monthly pricing for sustainable organic growth and measurable search performance",
  eyebrow: "Choose a plan",
  title: "Grow organic traffic with the right tier",
  description:
    "Compare monthly SEO tiers for technical optimization, content, links, reporting, and ongoing support.",
};
