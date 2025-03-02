
import { vi } from 'vitest';

export const mockSupabase = {
  from: vi.fn().mockReturnThis(),
  insert: vi.fn().mockResolvedValue({ error: null }),
  functions: {
    invoke: vi.fn().mockResolvedValue({ data: { message: 'Success' }, error: null })
  }
};

vi.mock('@/integrations/supabase/client', () => ({
  supabase: mockSupabase
}));
