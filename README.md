
# Standard Financial Group Website

## Security Best Practices

### API Keys and Secrets Management

This project follows these security best practices for handling API keys and secrets:

1. **Client-side code:** 
   - Only publishable/public API keys are used in browser-accessible code
   - The Supabase publishable key in `src/integrations/supabase/client.ts` is designed to be public and has appropriate permissions restrictions
   - This publishable key has limited access controlled by Row Level Security (RLS) policies in Supabase

2. **Server-side code:**
   - All sensitive API keys and secrets are stored as environment variables in Supabase Edge Functions
   - Examples include RESEND_API_KEY and NOTIFICATION_EMAIL in the contact notification function
   - These values are never sent to the client browser

3. **Adding new API keys:**
   - Never add secret API keys to:
     - Client-side JavaScript files
     - Environment variables that get bundled with the client code
     - Public repositories
   - Always use Supabase Secrets for Edge Functions to store sensitive values
   - To add a new secret, navigate to the Supabase dashboard → Edge Functions → send-contact-notification → Secrets

4. **Accessing secrets in Edge Functions:**
   ```typescript
   // Correct way to access a secret in a Supabase Edge Function
   const apiKey = Deno.env.get("API_KEY_NAME");
   ```

5. **Supabase Key Security:**
   - Supabase uses a dual-key system:
     - **Publishable/anon key**: Safe for client code, limited by Row Level Security
     - **Secret/service key**: Never use in client code, only in secure server environments
   - Verify your Row Level Security policies in Supabase to ensure proper data protection
   - All sensitive operations should use Edge Functions that have access to the secret key
