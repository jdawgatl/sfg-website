
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PersonalInfoFields } from '../PersonalInfoFields';
import { useForm } from 'react-hook-form';
import { renderHook } from '@testing-library/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

describe('PersonalInfoFields', () => {
  const setupForm = (defaultValues = {}) => {
    const schema = z.object({
      firstName: z.string().min(2, 'This field is required'),
      lastName: z.string().min(2, 'This field is required'),
    });
    
    const { result } = renderHook(() => useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        firstName: '',
        lastName: '',
        ...defaultValues
      }
    }));
    
    return result.current;
  };

  it('renders first name and last name fields', () => {
    const form = setupForm();
    render(<PersonalInfoFields form={form} />);
    
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
  });

  it('displays error messages when there are errors', () => {
    const form = setupForm();
    form.setError('firstName', { type: 'required', message: 'This field is required' });
    form.setError('lastName', { type: 'required', message: 'This field is required' });
    
    render(<PersonalInfoFields form={form} />);
    
    expect(screen.getAllByText('This field is required').length).toBe(2);
  });
});
