
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AddressFields } from '../AddressFields';
import { useForm } from 'react-hook-form';
import { renderHook } from '@testing-library/react';

describe('AddressFields', () => {
  const setupForm = () => {
    const { result } = renderHook(() => useForm({
      defaultValues: {
        address: '',
        city: '',
        state: 'GA',
        zipCode: ''
      }
    }));
    return result.current;
  };

  it('renders address, city, state, and zip fields', () => {
    const form = setupForm();
    render(<AddressFields form={form} />);
    
    expect(screen.getByPlaceholderText('Street Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('State')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ZIP')).toBeInTheDocument();
  });

  it('has GA as the default value for State field', () => {
    const form = setupForm();
    render(<AddressFields form={form} />);
    
    expect(screen.getByPlaceholderText('State')).toHaveAttribute('value', 'GA');
  });
});
