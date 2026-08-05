export type Currency = 'EUR' | 'USD' | 'GBP';
export type Language = 'PT' | 'EN';

export interface FinancialMetric {
  title: string;
  value: string;
  numericValue: number;
  subtitle: string;
  badge?: string;
  trend?: string;
  description: string;
}

export interface EbitdaData {
  year: string;
  ebitda: number;
  revenue: number;
  opex: number;
  occupancy: number;
  note: string;
}

export interface RevenueSeason {
  period: string;
  months: string;
  type: string;
  monthlyRevenueMin: number;
  monthlyRevenueMax: number;
  totalSeasonMin: number;
  totalSeasonMax: number;
  description: string;
}

export interface RoomAsset {
  id: string;
  name: string;
  floor: number;
  type: string;
  sizeSqM: number;
  monthlyRentAcademic: number;
  summerNightRate: number;
  hasPrivateBath: boolean;
  hasBalcony: boolean;
  occupancyStatus: 'Occupied' | 'Available' | 'Reserved';
  features: string[];
  imageUrl?: string;
}

export interface SwotCategory {
  title: string;
  color: 'emerald' | 'blue' | 'amber' | 'rose';
  items: string[];
}

export interface RiskFactor {
  id: string;
  category: string;
  risk: string;
  impact: 'Low' | 'Medium' | 'High';
  probability: 'Low' | 'Medium' | 'High';
  mitigation: string;
}

export interface DataRoomDoc {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  format: string;
  isProtected: boolean;
  description: string;
  downloadCount: number;
}

export interface NdaFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  investorType: string;
  agreedToTerms: boolean;
  interestLevel: string;
}
