
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InsuranceTypeSelector } from '../InsuranceTypeSelector';

describe('InsuranceTypeSelector', () => {
  const mockOnSelectionChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all insurance type options', () => {
    render(<InsuranceTypeSelector selected={[]} onSelectionChange={mockOnSelectionChange} />);
    
    expect(screen.getByText('Auto Insurance')).toBeInTheDocument();
    expect(screen.getByText('Home Insurance')).toBeInTheDocument();
    expect(screen.getByText('Commercial Insurance')).toBeInTheDocument();
    expect(screen.getByText('Surety Bonds')).toBeInTheDocument();
    expect(screen.getByText('Other')).toBeInTheDocument();
  });

  it('selects an insurance type when clicked', () => {
    render(<InsuranceTypeSelector selected={[]} onSelectionChange={mockOnSelectionChange} />);
    
    fireEvent.click(screen.getByText('Auto Insurance'));
    
    expect(mockOnSelectionChange).toHaveBeenCalledWith(['auto']);
  });

  it('deselects an insurance type when clicked again', () => {
    render(<InsuranceTypeSelector selected={['auto']} onSelectionChange={mockOnSelectionChange} />);
    
    fireEvent.click(screen.getByText('Auto Insurance'));
    
    expect(mockOnSelectionChange).toHaveBeenCalledWith([]);
  });

  it('shows selected types with different styling', () => {
    render(<InsuranceTypeSelector selected={['auto']} onSelectionChange={mockOnSelectionChange} />);
    
    const autoElement = screen.getByText('Auto Insurance');
    expect(autoElement.className).toContain('border-sky-600');
    expect(autoElement.className).toContain('bg-sky-100');
  });

  it('allows multiple selections', () => {
    render(<InsuranceTypeSelector selected={['auto']} onSelectionChange={mockOnSelectionChange} />);
    
    fireEvent.click(screen.getByText('Home Insurance'));
    
    expect(mockOnSelectionChange).toHaveBeenCalledWith(['auto', 'home']);
  });
});
