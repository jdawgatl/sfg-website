
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConsentCheckbox } from '../ConsentCheckbox';
import { BrowserRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { renderHook } from '@testing-library/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

describe('ConsentCheckbox', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const setupForm = () => {
    const schema = z.object({
      consent: z.boolean().refine(value => value === true, {
        message: 'You must consent to continue',
      }),
    });
    
    const { result } = renderHook(() => useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        consent: false,
      }
    }));
    
    return result.current;
  };

  it('renders the consent text and checkbox', () => {
    const form = setupForm();
    
    render(
      <BrowserRouter>
        <ConsentCheckbox form={form} />
      </BrowserRouter>
    );
    
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText(/I consent to receive calls/)).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('calls form.setValue when checkbox is clicked', () => {
    const form = setupForm();
    const setValueSpy = vi.spyOn(form, 'setValue');
    
    render(
      <BrowserRouter>
        <ConsentCheckbox form={form} />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByRole('checkbox'));
    
    expect(setValueSpy).toHaveBeenCalledWith('consent', true, expect.anything());
  });

  it('links to the privacy page', () => {
    const form = setupForm();
    
    render(
      <BrowserRouter>
        <ConsentCheckbox form={form} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Privacy Policy')).toHaveAttribute('href', '/privacy');
  });
});
