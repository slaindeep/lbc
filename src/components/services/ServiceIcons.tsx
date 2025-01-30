import React from 'react';
import {
  BookOpen,
  BarChart2,
  DollarSign,
  Users,
  FileText,
  PieChart,
  ClipboardCheck,
  Clock,
  Shield,
  TrendingUp,
  Award,
  HeartHandshake,
  Lightbulb,
  Target,
  Briefcase,
  BarChart,
  Building2,
  GanttChartSquare,
  Globe,
  CircleDollarSign,
  Scale,
  ScrollText,
  UserCheck,
  Building,
  FileStack,
  ArrowUpCircle,
  LibraryBig,
  Network,
  Settings,
  Wallet,
  Receipt,
  Calculator,
  LineChart,
  FolderCheck,
  BadgeCheck,
  HelpCircle,
  BrainCircuit
} from 'lucide-react';

export const ServiceIcons = {
  // Accounting Icons
  bookkeeping: BookOpen,
  financial_statements: BarChart2,
  bank_reconciliation: DollarSign,
  payroll: Users,
  tax_planning: FileText,
  financial_analysis: PieChart,
  
  // Company Formation Icons
  freezone: Building2,
  mainland: Building,
  offshore: Globe,
  restructuring: Settings,
  incorporation: LibraryBig,
  registration: BadgeCheck,
  
  // Accounting & Finance Icons
  accounts: Calculator,
  invoicing: Receipt,
  budgeting: Wallet,
  reporting: LineChart,
  vat: CircleDollarSign,
  audit: ClipboardCheck,
  
  // Legal & Compliance Icons
  legal: Scale,
  contracts: ScrollText,
  licenses: BadgeCheck,
  compliance_check: Shield,
  documentation: FileStack,
  verification: UserCheck,
  
  // Business Service Icons
  consulting: BrainCircuit,
  strategy: Target,
  optimization: GanttChartSquare,
  planning: Network,
  operations: Building,
  expansion: TrendingUp,
  
  // General Icons
  accuracy: ClipboardCheck,
  time: Clock,
  compliance: Shield,
  growth: TrendingUp,
  quality: Award,
  support: HeartHandshake,
  innovation: Lightbulb,
  professional: Briefcase,
  performance: BarChart,
  location: Target,
  progress: ArrowUpCircle,
  partnership: HeartHandshake,
  documents: FolderCheck,
  assistance: HelpCircle,
  
  // Function to get icon component by name
  getIcon: (name: string) => {
    const IconComponent = ServiceIcons[name as keyof typeof ServiceIcons];
    return IconComponent || BookOpen; // Default to BookOpen if icon not found
  }
};

export default ServiceIcons;