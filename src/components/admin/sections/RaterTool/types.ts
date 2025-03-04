
// Common type for all quotes
export type QuoteStatus = "draft" | "completed";
export type InsuranceType = "auto" | "home";
export type QuoteStep = "client" | "household" | "property" | "vehicle" | "summary" | "rating";

export type ClientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  dateOfBirth?: string;
};

export type HouseholdMember = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  gender?: string;
  maritalStatus?: string;
  licenseNumber?: string;
  licenseState?: string;
  relationToInsured: string;
};

export type PropertyInfo = {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  yearBuilt?: number;
  squareFootage?: number; // This should be squareFootage to match what we use elsewhere
  purchaseDate?: string;
  roofReplacedYear?: number;
  numberOfStories?: number;
  constructionType?: string;
  roofType?: string; // Added to match the one used in PropertyInfo
  hasAlarmSystem?: boolean;
  hasBasement?: boolean;
  hasPool?: boolean;
  hasGarage?: boolean;
  garageType?: string;
};

export type Vehicle = {
  id: string;
  year?: number;
  make?: string;
  model?: string;
  vin?: string;
  hasComprehensive?: boolean;
  hasCollision?: boolean;
  primaryDriver?: string; // ID of household member
  annualMileage?: number;
  parkingType?: string;
};

// Base Quote interface with common fields
export interface BaseQuote {
  id: string;
  type: InsuranceType;
  status: QuoteStatus;
  clientInfo: ClientInfo;
  householdMembers: HouseholdMember[];
  createdAt: string;
  updatedAt: string;
  currentStep: QuoteStep;
  sharedLink?: string;
}

// Auto insurance specific quote
export interface AutoQuote extends BaseQuote {
  type: "auto";
  vehicles: Vehicle[];
}

// Home insurance specific quote
export interface HomeQuote extends BaseQuote {
  type: "home";
  propertyInfo: PropertyInfo;
}

// Union type for both quote types
export type InsuranceQuote = AutoQuote | HomeQuote;
