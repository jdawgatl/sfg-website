
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactInfoFields } from '../ContactInfoFields';

describe('ContactInfoFields', () => {
  const mockRegister = vi.fn();
  const mockErrors = {};

  it('renders email and phone fields', () => {
    render(<ContactInfoFields register={mockRegister} errors={mockErrors} />);
    
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone (Optional)')).toBeInTheDocument();
  });

  it('displays error message when email has an error', () => {
    const mockErrorsWithValidation = {
      email: { type: 'required', message: 'This field is required' }
    };
    
    render(<ContactInfoFields register={mockRegister} errors={mockErrorsWithValidation} />);
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });
});
