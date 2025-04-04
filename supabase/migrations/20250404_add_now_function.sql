
-- Function to return current timestamp
-- This is just a lightweight function we can call to ping the database
create or replace function now()
returns timestamptz
language sql
as $$
  select now();
$$;
