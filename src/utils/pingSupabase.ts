import { supabase } from "@/integrations/supabase/client";

/**
 * Pings the Supabase instance to prevent it from being paused due to inactivity
 * This can be called manually if needed, but normally the Netlify CRON job handles this
 */
export const pingSupabase = async (): Promise<{ success: boolean; timestamp?: string; error?: any }> => {
  try {
    // Call a lightweight RPC function to keep the connection active
    // Using the any type assertion to bypass TypeScript's type checking for RPC functions
    // This is necessary because the Database type definition doesn't know about our custom RPC function
    const { data, error } = await (supabase.rpc as any)('now');
    
    if (error) {
      console.error("Error pinging Supabase:", error);
      return { success: false, error };
    }
    
    console.log("Successfully pinged Supabase:", data);
    return { success: true, timestamp: data };
  } catch (error) {
    console.error("Exception when pinging Supabase:", error);
    return { success: false, error };
  }
};
