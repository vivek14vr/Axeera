export type AppPricingPlan = {
  id: string;
  name: string;
  price: string;
  featured: boolean;
  badge?: string;
  highlights: string[];
  sections: Array<{
    title: string;
    items: string[];
  }>;
};
