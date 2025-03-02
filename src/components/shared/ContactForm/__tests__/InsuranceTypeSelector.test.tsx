
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InsuranceTypeSelector } from '../InsuranceTypeSelector';

describe('InsuranceTypeSelector', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all insurance type options', () => {
    render(<InsuranceTypeSelector selectedTypes={[]} onChange={mockOnChange} />);
    
    expect(screen.getByText('Auto Insurance')).toBeInTheDocument();
    expect(screen.getByText('Home Insurance')).toBeInTheDocument();
    expect(screen.getByText('Commercial Insurance')).toBeInTheDocument();
    expect(screen.getByText('Surety Bonds')).toBeInTheDocument();
    expect(screen.getByText('Other')).toBeInTheDocument();
  });

  it('selects an insurance type when clicked', () => {
    render(<InsuranceTypeSelector selectedTypes={[]} onChange={mockOnChange} />);
    
    fireEvent.click(screen.getByText('Auto Insurance'));
    
    expect(mockOnChange).toHaveBeenCalledWith(['auto']);
  });

  it('deselects an insurance type when clicked again', () => {
    render(<InsuranceTypeSelector selectedTypes={['auto']} onChange={mockOnChange} />);
    
    fireEvent.click(screen.getByText('Auto Insurance'));
    
    expect(mockOnChange).toHaveBeenCalledWith([]);
  });

  it('shows selected types with different styling', () => {
    render(<InsuranceTypeSelector selectedTypes={['auto']} onChange={mockOnChange} />);
    
    const autoElement = screen.getByText('Auto Insurance');
    expect(autoElement.className).toContain('border-sky-600');
    expect(autoElement.className).toContain('bg-sky-100');
  });

  it('allows multiple selections', () => {
    render(<InsuranceTypeSelector selectedTypes={['auto']} onChange={mockOnChange} />);
    
    fireEvent.click(screen.getByText('Home Insurance'));
    
    expect(mockOnChange).toHaveBeenCalledWith(['auto', 'home']);
  });
});
