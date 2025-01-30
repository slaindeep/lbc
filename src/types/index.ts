export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image?: string;
}

export interface ServiceProps {
  title: string;
  description: string;
  heroImage?: string;
  keyFeatures: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  process: ProcessStep[];
}