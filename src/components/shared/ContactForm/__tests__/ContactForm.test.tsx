
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../index';
import '../../../../../src/mocks/supabase';
import { supabase } from '@/integrations/supabase/client';

// Mock the toast hook
vi.mock('@/components/ui/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}));

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the form correctly', () => {
    render(<ContactForm />);
    
    // Check that key form elements exist
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone (Optional)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Street Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('State')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ZIP')).toBeInTheDocument();
    expect(screen.getByText('Insurance Type (Select all that apply)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('How can we help you?')).toBeInTheDocument();
    expect(screen.getByText(/I consent to receive calls/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Fill out the form
    await user.type(screen.getByPlaceholderText('First Name'), 'John');
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe');
    await user.type(screen.getByPlaceholderText('Email'), 'john.doe@example.com');
    await user.type(screen.getByPlaceholderText('Phone (Optional)'), '123-456-7890');
    await user.type(screen.getByPlaceholderText('Street Address'), '123 Main St');
    await user.type(screen.getByPlaceholderText('City'), 'Atlanta');
    await user.type(screen.getByPlaceholderText('ZIP'), '30301');
    
    // Select insurance type
    fireEvent.click(screen.getByText('Auto Insurance'));
    
    await user.type(screen.getByPlaceholderText('How can we help you?'), 'Test message');
    
    // Check consent
    const consentCheckbox = screen.getByRole('checkbox');
    await user.click(consentCheckbox);
    
    // Submit the form
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    
    // Check that Supabase functions were called
    await waitFor(() => {
      expect(supabase.from).toHaveBeenCalledWith('contact_submissions');
      expect(supabase.insert).toHaveBeenCalled();
      expect(supabase.functions.invoke).toHaveBeenCalledWith('send-contact-notification', {
        body: expect.objectContaining({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com'
        })
      });
    });
  });

  it('shows validation errors when required fields are empty', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Submit the form without filling out required fields
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    
    // Check that error messages are displayed
    await waitFor(() => {
      expect(screen.getAllByText('This field is required').length).toBeGreaterThan(0);
    });
  });
});
