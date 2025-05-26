import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductListPage from './ProductListPage';

beforeAll(() => {
  global.fetch = jest.fn();
});

beforeEach(() => {
  fetch.mockClear();
});

it('fetches and displays products', async () => {
  // Mock for products
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => [
      {
        id: 1,
        title: 'Test Product',
        price: 10.99,
        category: 'electronics',
        image: 'test-image.jpg',
        description: 'Test description',
      }
    ]
  });

  // Mock for categories
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ['electronics']
  });

  render(
    <MemoryRouter>
      <ProductListPage />
    </MemoryRouter>
  );

  // OPTIONAL: Only if your <LoadingSpinner /> has data-testid="loading-spinner"
  // If not, remove this check or add `data-testid="loading-spinner"` inside LoadingSpinner component
  // expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
