import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('displays the error message', () => {
    const testMessage = 'Test error message';
    render(<ErrorMessage message={testMessage} />);
    
    expect(screen.getByText(`Error: ${testMessage}`)).toBeInTheDocument();
  });
});