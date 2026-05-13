export type SeoPricingPlan = {
  id: string;
  name: string;
  price: number;
  featured: boolean;
  badge?: string;
  highlights: string[];
};

export type SeoPricingFeature =
  | {
      label: string;
      type: "included";
    }
  | {
      label: string;
      type: "quantity";
      values: [number, number, number, number, number];
    };

export type SeoPricingSection = {
  title: string;
  features: SeoPricingFeature[];
};
