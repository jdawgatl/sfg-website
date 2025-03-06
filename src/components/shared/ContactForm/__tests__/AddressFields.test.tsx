
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AddressFields } from '../AddressFields';

describe('AddressFields', () => {
  const mockRegister = vi.fn();
  const mockErrors = {};

  it('renders address, city, state, and zip fields', () => {
    render(<AddressFields register={mockRegister} errors={mockErrors} />);
    
    expect(screen.getByPlaceholderText('Street Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('State')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ZIP')).toBeInTheDocument();
  });

  it('has GA as the default value for State field', () => {
    render(<AddressFields register={mockRegister} errors={mockErrors} />);
    
    expect(screen.getByPlaceholderText('State')).toHaveAttribute('defaultValue', 'GA');
  });
});
