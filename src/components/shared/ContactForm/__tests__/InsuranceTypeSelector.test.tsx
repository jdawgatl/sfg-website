
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InsuranceTypeSelector } from '../InsuranceTypeSelector';
import { useForm } from 'react-hook-form';
import { renderHook } from '@testing-library/react';

describe('InsuranceTypeSelector', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const setupForm = (defaultValue = '') => {
    const { result } = renderHook(() => useForm({
      defaultValues: {
        insuranceType: defaultValue,
      }
    }));
    return result.current;
  };

  it('renders all insurance type options', () => {
    const form = setupForm();
    render(<InsuranceTypeSelector form={form} />);
    
    expect(screen.getByText('Auto Insurance')).toBeInTheDocument();
    expect(screen.getByText('Home Insurance')).toBeInTheDocument();
    expect(screen.getByText('Commercial Insurance')).toBeInTheDocument();
    expect(screen.getByText('Surety Bonds')).toBeInTheDocument();
    expect(screen.getByText('Other')).toBeInTheDocument();
  });

  it('selects an insurance type when clicked', () => {
    const form = setupForm();
    const setValueSpy = vi.spyOn(form, 'setValue');
    
    render(<InsuranceTypeSelector form={form} />);
    
    fireEvent.click(screen.getByText('Auto Insurance'));
    
    expect(setValueSpy).toHaveBeenCalledWith('insuranceType', 'auto');
  });

  it('shows selected types with different styling', () => {
    const form = setupForm('auto');
    
    render(<InsuranceTypeSelector form={form} />);
    
    const autoElement = screen.getByText('Auto Insurance');
    expect(autoElement.parentElement?.className).toContain('border-sky-600');
    expect(autoElement.parentElement?.className).toContain('bg-sky-100');
  });

  it('allows selecting a different type', () => {
    const form = setupForm('auto');
    const setValueSpy = vi.spyOn(form, 'setValue');
    
    render(<InsuranceTypeSelector form={form} />);
    
    fireEvent.click(screen.getByText('Home Insurance'));
    
    expect(setValueSpy).toHaveBeenCalledWith('insuranceType', 'home');
  });
});
