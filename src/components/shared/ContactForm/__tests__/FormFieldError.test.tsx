
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormFieldError } from '../FormFieldError';

describe('FormFieldError', () => {
  it('renders the error message with correct styling', () => {
    render(<FormFieldError message="Test error message" />);
    
    const errorElement = screen.getByText('Test error message');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement.className).toContain('text-red-500');
    expect(errorElement.className).toContain('text-sm');
  });
});
