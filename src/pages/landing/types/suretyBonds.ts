
import { LucideIcon } from 'lucide-react';

export interface BondType {
  title: string;
  icon: LucideIcon;
  description: string;
  link: string;
  featured?: boolean;
}

export interface TitleBondType {
  title: string;
  description: string;
}

export interface TitleBondFAQ {
  question: string;
  answer: string;
}

export interface GeorgiaCity {
  city: string;
  description: string;
}
