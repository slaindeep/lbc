export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

export interface ImageObject {
  desktop: string;
  mobile: string;
}

export interface ServiceProps {
  title: string;
  description: string;
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
  heroImage: string | ImageObject;
}

export interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}