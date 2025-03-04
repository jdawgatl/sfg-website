
import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { InsuranceQuote, AutoQuote, HomeQuote } from "../types";
import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from "uuid";

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
  addQuote: (quote: InsuranceQuote) => Promise<void>;
  updateQuote: (quote: InsuranceQuote) => Promise<void>;
  deleteQuote: (id: string) => Promise<void>;
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
        console.log("Fetching quotes from Supabase...");
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .eq('insurance_type', 'QUOTE_TOOL')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching quotes:', error);
          return;
        }

        console.log("Received data from Supabase:", data);

        // Transform the data from Supabase format to our application format
        const transformedQuotes = data
          .map(item => {
            // Parse the message field where we stored the quote JSON
            try {
              if (item.message) {
                const quoteData = JSON.parse(item.message);
                return quoteData as InsuranceQuote;
              }
              return null;
            } catch (err) {
              console.error('Error parsing quote data:', err);
              return null;
            }
          })
          .filter(Boolean) as InsuranceQuote[];

        console.log("Transformed quotes:", transformedQuotes);
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
    console.log("Looking for quote with ID:", id);
    console.log("Available quotes:", quotes);
    const found = quotes.find(quote => quote.id === id);
    console.log("Found quote:", found);
    return found;
  };

  // Add new quote to Supabase
  const addQuote = async (quote: InsuranceQuote) => {
    try {
      console.log("Adding new quote to Supabase:", quote);
      
      // Check that we have a valid ID and all required fields
      if (!quote.id) {
        throw new Error("Quote missing ID");
      }
      
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          id: quote.id,
          first_name: quote.clientInfo.firstName || "New",
          last_name: quote.clientInfo.lastName || "Quote",
          email: quote.clientInfo.email || "",
          phone: quote.clientInfo.phone || "",
          address: quote.clientInfo.address || "",
          city: quote.clientInfo.city || "",
          state: quote.clientInfo.state || "GA",
          zip: quote.clientInfo.zipCode || "",
          insurance_type: "QUOTE_TOOL", // Special marker for quotes from the tool
          message: JSON.stringify(quote), // Store the entire quote object as JSON string
          created_at: quote.createdAt,
          consent: true
        });

      if (error) {
        console.error("Error inserting quote into Supabase:", error);
        throw error;
      }
      
      console.log("Quote added successfully, dispatching to state");
      dispatch({ type: "ADD_QUOTE", payload: quote });
    } catch (error) {
      console.error('Error adding quote:', error);
      throw error;
    }
  };

  // Update existing quote in Supabase
  const updateQuote = async (quote: InsuranceQuote) => {
    try {
      console.log("Updating quote in Supabase:", quote);
      const { error } = await supabase
        .from('contact_submissions')
        .update({
          first_name: quote.clientInfo.firstName || "New",
          last_name: quote.clientInfo.lastName || "Quote",
          email: quote.clientInfo.email || "",
          phone: quote.clientInfo.phone || "",
          address: quote.clientInfo.address || "",
          city: quote.clientInfo.city || "",
          state: quote.clientInfo.state || "GA",
          zip: quote.clientInfo.zipCode || "",
          message: JSON.stringify(quote), // Store the entire quote object as JSON string
        })
        .eq('id', quote.id);

      if (error) {
        console.error("Error updating quote in Supabase:", error);
        throw error;
      }
      
      console.log("Quote updated successfully, dispatching to state");
      dispatch({ type: "UPDATE_QUOTE", payload: quote });
    } catch (error) {
      console.error('Error updating quote:', error);
      throw error;
    }
  };

  // Delete quote from Supabase
  const deleteQuote = async (id: string) => {
    try {
      console.log("Deleting quote from Supabase with ID:", id);
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id)
        .eq('insurance_type', 'QUOTE_TOOL'); // Make sure we only delete quotes

      if (error) {
        console.error("Error deleting quote from Supabase:", error);
        throw error;
      }
      
      console.log("Quote deleted successfully, dispatching to state");
      dispatch({ type: "DELETE_QUOTE", payload: id });
    } catch (error) {
      console.error('Error deleting quote:', error);
      throw error;
    }
  };

  // Create a new quote
  const createNewQuote = async (type: "auto" | "home"): Promise<InsuranceQuote> => {
    console.log(`Creating new ${type} quote...`);
    
    try {
      const now = new Date().toISOString();
      // Use UUID for more reliable IDs
      const id = `q-${uuidv4()}`;

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
            yearBuilt: "",
            squareFeet: "",
            constructionType: "",
            roofType: "",
          }
        } as HomeQuote;
      }

      console.log("New quote created in memory:", newQuote);
      await addQuote(newQuote);
      console.log("Quote successfully added to Supabase and state");
      return newQuote;
    } catch (error) {
      console.error("Error during quote creation:", error);
      throw error;
    }
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
