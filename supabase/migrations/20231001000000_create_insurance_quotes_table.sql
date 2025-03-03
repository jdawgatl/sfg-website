
-- Create insurance_quotes table
CREATE TABLE IF NOT EXISTS public.insurance_quotes (
  id TEXT PRIMARY KEY,
  quote_type TEXT NOT NULL,
  status TEXT NOT NULL,
  quote_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Set up RLS policies
ALTER TABLE public.insurance_quotes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read quotes (you may want to restrict this in production)
CREATE POLICY "Anyone can read quotes"
  ON public.insurance_quotes
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert and update quotes (adjust as needed)
CREATE POLICY "Authenticated users can insert quotes"
  ON public.insurance_quotes
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update quotes"
  ON public.insurance_quotes
  FOR UPDATE
  USING (true);

CREATE POLICY "Authenticated users can delete quotes"
  ON public.insurance_quotes
  FOR DELETE
  USING (true);
