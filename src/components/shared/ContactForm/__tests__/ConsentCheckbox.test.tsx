
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConsentCheckbox } from '../ConsentCheckbox';
import { BrowserRouter } from 'react-router-dom';

describe('ConsentCheckbox', () => {
  const mockOnCheckedChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the consent text and checkbox', () => {
    render(
      <BrowserRouter>
        <ConsentCheckbox onCheckedChange={mockOnCheckedChange} />
      </BrowserRouter>
    );
    
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText(/I consent to receive calls/)).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('calls onCheckedChange when checkbox is clicked', () => {
    render(
      <BrowserRouter>
        <ConsentCheckbox onCheckedChange={mockOnCheckedChange} />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByRole('checkbox'));
    
    expect(mockOnCheckedChange).toHaveBeenCalledWith(true);
  });

  it('links to the privacy page', () => {
    render(
      <BrowserRouter>
        <ConsentCheckbox onCheckedChange={mockOnCheckedChange} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Privacy Policy')).toHaveAttribute('href', '/privacy');
  });
});
