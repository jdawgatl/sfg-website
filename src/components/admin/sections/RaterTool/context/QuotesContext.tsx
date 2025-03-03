
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { InsuranceQuote, AutoQuote, HomeQuote } from "../types";

// Sample data - in a real implementation this would come from an API or database
const sampleQuotes: InsuranceQuote[] = [
  {
    id: "q-001",
    type: "auto",
    status: "completed",
    clientInfo: {
      firstName: "John",
      lastName: "Smith",
      email: "john@example.com",
      phone: "555-123-4567",
      address: "123 Main St",
      city: "Atlanta",
      state: "GA",
      zipCode: "30301",
    },
    householdMembers: [
      {
        id: "member-1",
        firstName: "John",
        lastName: "Smith",
        relationToInsured: "self",
        licenseState: "GA",
      }
    ],
    vehicles: [
      {
        id: "vehicle-1",
        year: 2022,
        make: "Toyota",
        model: "Camry",
        hasComprehensive: true,
        hasCollision: true,
      },
      {
        id: "vehicle-2",
        year: 2020,
        make: "Honda",
        model: "Civic",
        hasComprehensive: true,
        hasCollision: true,
      }
    ],
    createdAt: "2025-03-01T12:00:00Z",
    updatedAt: "2025-03-01T12:00:00Z",
    currentStep: "summary",
  },
  {
    id: "q-002",
    type: "home",
    status: "completed",
    clientInfo: {
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah@example.com",
      phone: "555-987-6543",
      address: "456 Pine St",
      city: "Atlanta",
      state: "GA",
      zipCode: "30301",
    },
    householdMembers: [
      {
        id: "member-1",
        firstName: "Sarah",
        lastName: "Johnson",
        relationToInsured: "self",
      }
    ],
    propertyInfo: {
      address: "123 Main St",
      city: "Atlanta",
      state: "GA",
      zipCode: "30301",
      yearBuilt: 2005,
      squareFootage: 2200,
      hasAlarmSystem: true,
    },
    createdAt: "2025-02-28T10:30:00Z",
    updatedAt: "2025-02-28T10:30:00Z",
    currentStep: "summary",
  },
  {
    id: "q-003",
    type: "auto",
    status: "draft",
    clientInfo: {
      firstName: "Michael",
      lastName: "Brown",
      email: "michael@example.com",
      phone: "555-555-5555",
      address: "789 Oak St",
      city: "Atlanta",
      state: "GA",
      zipCode: "30301",
    },
    householdMembers: [
      {
        id: "member-1",
        firstName: "Michael",
        lastName: "Brown",
        relationToInsured: "self",
      }
    ],
    vehicles: [
      {
        id: "vehicle-1",
        year: 2021,
        make: "Ford",
        model: "Explorer",
      }
    ],
    createdAt: "2025-02-25T14:45:00Z",
    updatedAt: "2025-02-25T14:45:00Z",
    currentStep: "vehicle",
  }
];

// Action types
type QuotesAction = 
  | { type: "SET_QUOTES"; payload: InsuranceQuote[] }
  | { type: "ADD_QUOTE"; payload: InsuranceQuote }
  | { type: "UPDATE_QUOTE"; payload: InsuranceQuote }
  | { type: "DELETE_QUOTE"; payload: string };

// Context type
type QuotesContextType = {
  quotes: InsuranceQuote[];
  getQuoteById: (id: string) => InsuranceQuote | undefined;
  addQuote: (quote: InsuranceQuote) => void;
  updateQuote: (quote: InsuranceQuote) => void;
  deleteQuote: (id: string) => void;
  createNewQuote: (type: "auto" | "home") => InsuranceQuote;
};

// Create context
const QuotesContext = createContext<QuotesContextType | undefined>(undefined);

// Reducer function
const quotesReducer = (state: InsuranceQuote[], action: QuotesAction): InsuranceQuote[] => {
  switch (action.type) {
    case "SET_QUOTES":
      return action.payload;
    case "ADD_QUOTE":
      return [...state, action.payload];
    case "UPDATE_QUOTE":
      return state.map(quote => 
        quote.id === action.payload.id ? action.payload : quote
      );
    case "DELETE_QUOTE":
      return state.filter(quote => quote.id !== action.payload);
    default:
      return state;
  }
};

// Provider component
export const QuotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quotes, dispatch] = useReducer(quotesReducer, []);

  // Load quotes from localStorage or API
  useEffect(() => {
    // In a real application, you would fetch from your backend
    // For now, we'll use the sample data
    dispatch({ type: "SET_QUOTES", payload: sampleQuotes });
  }, []);

  // Get quote by ID
  const getQuoteById = (id: string) => {
    return quotes.find(quote => quote.id === id);
  };

  // Add new quote
  const addQuote = (quote: InsuranceQuote) => {
    dispatch({ type: "ADD_QUOTE", payload: quote });
  };

  // Update existing quote
  const updateQuote = (quote: InsuranceQuote) => {
    dispatch({ type: "UPDATE_QUOTE", payload: quote });
  };

  // Delete quote
  const deleteQuote = (id: string) => {
    dispatch({ type: "DELETE_QUOTE", payload: id });
  };

  // Create a new quote
  const createNewQuote = (type: "auto" | "home"): InsuranceQuote => {
    const now = new Date().toISOString();
    const id = `q-${Date.now()}`; // Simple ID generation, use UUID in production

    const baseQuote = {
      id,
      type,
      status: "draft" as const,
      clientInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "GA", // Default state
        zipCode: "",
      },
      householdMembers: [],
      createdAt: now,
      updatedAt: now,
      currentStep: "client" as const,
    };

    if (type === "auto") {
      const autoQuote: AutoQuote = {
        ...baseQuote,
        type: "auto",
        vehicles: []
      };
      addQuote(autoQuote);
      return autoQuote;
    } else {
      const homeQuote: HomeQuote = {
        ...baseQuote,
        type: "home",
        propertyInfo: {
          address: "",
          city: "",
          state: "GA", // Default state
          zipCode: "",
        }
      };
      addQuote(homeQuote);
      return homeQuote;
    }
  };

  return (
    <QuotesContext.Provider value={{ 
      quotes, 
      getQuoteById, 
      addQuote, 
      updateQuote, 
      deleteQuote,
      createNewQuote
    }}>
      {children}
    </QuotesContext.Provider>
  );
};

// Custom hook for using the context
export const useQuotes = () => {
  const context = useContext(QuotesContext);
  if (context === undefined) {
    throw new Error("useQuotes must be used within a QuotesProvider");
  }
  return context;
};
