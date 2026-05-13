export const contactFormContent = {
  title: "Send us a message",
  description: "Fill out the form below and we'll get back to you within 24 hours.",
  submitLabel: "Send message",
} as const;

export const contactServiceOptions = [
  "SEO services",
  "PPC advertising",
  "Social media marketing",
  "Web development",
  "Branding and UI/UX",
  "Mobile app development",
  "Online reputation management",
  "Conversion rate optimization",
  "Virtual assistant services",
  "Software development",
  "Other",
] as const;

export const contactSidebarContent = {
  title: "Get in touch",
  description: "We'd love to hear from you. Here's how you can reach us.",
} as const;

export const contactEmails = [
  { label: "General", value: "info@axeera.com" },
  { label: "Sales", value: "sales@axeera.com" },
  { label: "Support", value: "help@axeera.com" },
] as const;

export const contactLocations = [
  {
    label: "India",
    value: "Noida, Uttar Pradesh, India",
  },
  {
    label: "United States",
    value: "Portland, Oregon, USA",
  },
] as const;

export const contactMap = {
  title: "Find us",
  description:
    "Visit our United States office at 2709 N Hayden Island Dr, STE 113775, Portland, Oregon, 97217, USA.",
  address: "2709 N Hayden Island Dr, STE 113775, Portland, Oregon, 97217, USA",
  embedUrl:
    "https://maps.google.com/maps?q=2709+N+Hayden+Island+Dr,+STE+113775,+Portland,+Oregon,+97217,+USA&z=14&output=embed",
  openInMapsHref:
    "https://www.google.com/maps/search/?api=1&query=2709+N+Hayden+Island+Dr,+STE+113775,+Portland,+Oregon,+97217,+USA",
} as const;

export const contactHours = [
  { label: "Mon - Fri", value: "9:00 AM - 6:00 PM" },
  { label: "Sat", value: "10:00 AM - 2:00 PM" },
] as const;

export const contactWhatsApp = {
  title: "Quick chat on WhatsApp",
  description: "Get fast responses to your project questions.",
  actionLabel: "Chat now",
  href: "https://wa.me/15550142088",
} as const;
