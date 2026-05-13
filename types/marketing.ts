export type MarketingMilestone = {
  year: string;
  label: string;
};

export type MarketingFeature = {
  title: string;
  description: string;
  icon?: string;
};

export type MarketingStat = {
  value: string;
  label: string;
  icon?: string;
};

export type MarketingStoryContent = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  teamLabel: string;
  teamSubtitle: string;
  milestones: readonly MarketingMilestone[];
};

export type MarketingSectionIntro = {
  eyebrow: string;
  title: string;
  description?: string;
};
