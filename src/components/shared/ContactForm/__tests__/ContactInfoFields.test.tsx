
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactInfoFields } from '../ContactInfoFields';
import { useForm } from 'react-hook-form';
import { renderHook } from '@testing-library/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

describe('ContactInfoFields', () => {
  const setupForm = (defaultValues = {}) => {
    const schema = z.object({
      email: z.string().email('This field is required'),
      phone: z.string().optional(),
    });
    
    const { result } = renderHook(() => useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        email: '',
        phone: '',
        ...defaultValues
      }
    }));
    
    return result.current;
  };

  it('renders email and phone fields', () => {
    const form = setupForm();
    render(<ContactInfoFields form={form} />);
    
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();
  });

  it('displays error message when email has an error', async () => {
    const form = setupForm();
    form.setError('email', { type: 'required', message: 'This field is required' });
    
    render(<ContactInfoFields form={form} />);
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });
});
