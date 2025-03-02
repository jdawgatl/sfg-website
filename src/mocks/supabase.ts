
import { vi } from 'vitest';

export const mockSupabase = {
  from: vi.fn().mockReturnThis(),
  select: vi.fn().mockReturnThis(),
  insert: vi.fn().mockResolvedValue({ error: null }),
  update: vi.fn().mockResolvedValue({ error: null }),
  eq: vi.fn().mockReturnThis(),
  single: vi.fn().mockReturnThis(),
  functions: {
    invoke: vi.fn().mockResolvedValue({ data: { message: 'Success' }, error: null })
  }
};

vi.mock('@/integrations/supabase/client', () => ({
  supabase: mockSupabase
}));
