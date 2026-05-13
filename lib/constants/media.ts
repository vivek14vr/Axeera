export type MediaImage = {
  src: string;
  alt: string;
};

export const heroImage: MediaImage = {
  src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  alt: "Design team collaborating around a laptop in a bright studio",
};

export const studioImage: MediaImage = {
  src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
  alt: "Sunlit workspace with clean desks and glass partitions",
};

export const editorialScenes = {
  about: {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
    alt: "Diverse studio team gathered around a shared table",
  },
  story: {
    src: "https://images.unsplash.com/photo-1524758637124-aa0e0a8be375?auto=format&fit=crop&w=1400&q=80",
    alt: "Minimalist studio desk with design tools and natural light",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    alt: "Remote team on a video call in a bright office",
  },
  process: {
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80",
    alt: "Product planning board with sticky notes and wireframes",
  },
  services: {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    alt: "Creative team reviewing digital work in a modern studio",
  },
} as const satisfies Record<string, MediaImage>;

export const serviceScenes = {
  "website-development": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Website analytics dashboard on a laptop",
  },
  "app-development": {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    alt: "Mobile app interface on a smartphone",
  },
  "seo-growth": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Growth metrics and charts on a display",
  },
  "ui-ux-design": {
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    alt: "UI design wireframes and color swatches on a desk",
  },
  "brand-identity": {
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    alt: "Brand mood board with typography and color samples",
  },
  "cloud-devops": {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    alt: "Server infrastructure with soft lighting",
  },
} as const;

export type ServiceSceneId = keyof typeof serviceScenes;

export const servicePageScenes = {
  seo: serviceScenes["seo-growth"],
  website: serviceScenes["website-development"],
  software: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer workstation with code editor on a large display",
  },
  mobileApp: serviceScenes["app-development"],
} as const satisfies Record<string, MediaImage>;

export const portfolioProjectImages = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Commerce website dashboard with conversion analytics",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthcare app screens displayed on a phone",
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    alt: "Brand identity boards with typography and color palette",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Agile team planning a software release on a whiteboard",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973de0b55ef?auto=format&fit=crop&w=1200&q=80",
    alt: "SaaS marketing site hero shown on a desktop monitor",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    alt: "Engineering team collaborating around monitors in an open office",
  },
] as const satisfies readonly MediaImage[];
