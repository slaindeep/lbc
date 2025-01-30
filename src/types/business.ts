export interface TabContentProps {
  title: string;
  subtitle?: string;
  description: string;
  services: {
    icon: string;
    title: string;
    description: string;
  }[];
  icon?: string;
}