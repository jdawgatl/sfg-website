
import { QuoteStep } from "../types";

export const steps: QuoteStep[] = ["client", "household", "property", "vehicle", "summary", "rating"];

export const stepTitles: Record<QuoteStep, string> = {
  client: "Client Information",
  household: "Household Members",
  property: "Property Information",
  vehicle: "Vehicle Information",
  summary: "Quote Summary",
  rating: "Generate Quotes"
};
