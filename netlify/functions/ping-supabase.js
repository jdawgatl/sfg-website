const { createClient } = require('@supabase/supabase-js');

// Handler function that will be called by the CRON job
exports.handler = async function(event, context) {
  console.log("Pinging Supabase to prevent inactivity pause...");
  
  // Use the same credentials as your client-side app
  const SUPABASE_URL = "https://tgpoyuabcvemmihlsipg.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRncG95dWFiY3ZlbW1paGxzaXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDg4NTksImV4cCI6MjA1NDUyNDg1OX0.PEbN29n5SC2_8QfqBXbxePp9ZAi-cfwikUlF51YRti8";
  
  try {
    // Create a Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    
    // Perform a lightweight query to keep the connection active
    // This query just checks the current timestamp from Supabase
    const { data, error } = await supabase.rpc('now');
    
    if (error) {
      console.error("Error pinging Supabase:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to ping Supabase", error })
      };
    }
    
    console.log("Successfully pinged Supabase:", data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully pinged Supabase", timestamp: new Date().toISOString() })
    };
  } catch (error) {
    console.error("Exception when pinging Supabase:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Exception occurred", error: error.toString() })
    };
  }
};
