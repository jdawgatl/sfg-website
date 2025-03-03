
import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { InsuranceQuote, AutoQuote, HomeQuote } from "../types";
import { supabase } from "@/integrations/supabase/client";

// Action types
type QuotesAction = 
  | { type: "SET_QUOTES"; payload: InsuranceQuote[] }
  | { type: "ADD_QUOTE"; payload: InsuranceQuote }
  | { type: "UPDATE_QUOTE"; payload: InsuranceQuote }
  | { type: "DELETE_QUOTE"; payload: string };

// Context type
type QuotesContextType = {
  quotes: InsuranceQuote[];
  isLoading: boolean;
  getQuoteById: (id: string) => InsuranceQuote | undefined;
  addQuote: (quote: InsuranceQuote) => void;
  updateQuote: (quote: InsuranceQuote) => void;
  deleteQuote: (id: string) => void;
  createNewQuote: (type: "auto" | "home") => Promise<InsuranceQuote>;
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
  const [isLoading, setIsLoading] = useState(true);

  // Load quotes from Supabase
  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true);
      try {
        // @ts-ignore - Using any to bypass type checking for Supabase tables
        const { data, error } = await supabase
          .from('insurance_quotes')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching quotes:', error);
          return;
        }

        // Transform the data from Supabase format to our application format
        const transformedQuotes = data.map(item => {
          // Parse the JSONB quote_data field to get the full quote object
          try {
            // If quote_data is already an object, use it, otherwise parse the string
            const quoteData = typeof item.quote_data === 'string' 
              ? JSON.parse(item.quote_data) 
              : item.quote_data;
              
            return quoteData as InsuranceQuote;
          } catch (err) {
            console.error('Error parsing quote data:', err);
            return null;
          }
        }).filter(Boolean) as InsuranceQuote[];

        dispatch({ type: "SET_QUOTES", payload: transformedQuotes });
      } catch (error) {
        console.error('Error processing quotes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  // Get quote by ID
  const getQuoteById = (id: string) => {
    return quotes.find(quote => quote.id === id);
  };

  // Add new quote to Supabase
  const addQuote = async (quote: InsuranceQuote) => {
    try {
      // @ts-ignore - Using any to bypass type checking for Supabase tables
      const { error } = await supabase
        .from('insurance_quotes')
        .insert({
          id: quote.id,
          quote_type: quote.type,
          status: quote.status,
          quote_data: quote, // Store the entire quote object in JSONB
          created_at: quote.createdAt,
          updated_at: quote.updatedAt
        });

      if (error) throw error;
      
      dispatch({ type: "ADD_QUOTE", payload: quote });
    } catch (error) {
      console.error('Error adding quote:', error);
    }
  };

  // Update existing quote in Supabase
  const updateQuote = async (quote: InsuranceQuote) => {
    try {
      // @ts-ignore - Using any to bypass type checking for Supabase tables
      const { error } = await supabase
        .from('insurance_quotes')
        .update({
          quote_type: quote.type,
          status: quote.status,
          quote_data: quote, // Store the entire quote object in JSONB
          updated_at: quote.updatedAt
        })
        .eq('id', quote.id);

      if (error) throw error;
      
      dispatch({ type: "UPDATE_QUOTE", payload: quote });
    } catch (error) {
      console.error('Error updating quote:', error);
    }
  };

  // Delete quote from Supabase
  const deleteQuote = async (id: string) => {
    try {
      // @ts-ignore - Using any to bypass type checking for Supabase tables
      const { error } = await supabase
        .from('insurance_quotes')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      dispatch({ type: "DELETE_QUOTE", payload: id });
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };

  // Create a new quote
  const createNewQuote = async (type: "auto" | "home"): Promise<InsuranceQuote> => {
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

    let newQuote: InsuranceQuote;

    if (type === "auto") {
      newQuote = {
        ...baseQuote,
        type: "auto",
        vehicles: []
      } as AutoQuote;
    } else {
      newQuote = {
        ...baseQuote,
        type: "home",
        propertyInfo: {
          address: "",
          city: "",
          state: "GA", // Default state
          zipCode: "",
        }
      } as HomeQuote;
    }

    await addQuote(newQuote);
    return newQuote;
  };

  return (
    <QuotesContext.Provider value={{ 
      quotes, 
      isLoading,
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
