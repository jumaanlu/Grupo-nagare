export interface ServiceItem {
  name: string;
  subtitle?: string;
  items: string[];
  description: string;
  iconName: string; // Used to select Lucide icons
}

export interface PrincipleItem {
  title: string;
  description: string;
}

export interface ScenarioItem {
  title: string;
  description: string;
  image: string;
  details: string[];
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
}
