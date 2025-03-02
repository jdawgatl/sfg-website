
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PersonalInfoFields } from '../PersonalInfoFields';

describe('PersonalInfoFields', () => {
  const mockRegister = vi.fn();
  const mockErrors = {};

  it('renders first name and last name fields', () => {
    render(<PersonalInfoFields register={mockRegister} errors={mockErrors} />);
    
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
  });

  it('displays error messages when there are errors', () => {
    const mockErrorsWithValidation = {
      firstName: { type: 'required', message: 'This field is required' },
      lastName: { type: 'required', message: 'This field is required' }
    };
    
    render(<PersonalInfoFields register={mockRegister} errors={mockErrorsWithValidation} />);
    
    expect(screen.getAllByText('This field is required').length).toBe(2);
  });
});
