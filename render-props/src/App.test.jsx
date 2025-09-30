// App.test.jsx (renamed to .jsx for consistency)

import React from 'react';
import { render, screen } from '@testing-library/react';

// 1. Correctly import from 'vitest' for editor support
import { describe, test, expect } from 'vitest';

import App from './App';

// 2. Wrap tests in a 'describe' block for better organization
describe('App Component', () => {
  // Test 1: Check if the main heading is rendered
  test('renders the main heading "Menu Availability"', () => {
    render(<App />);
    const headingElement = screen.getByText(/Menu Availability/i);
    expect(headingElement).toBeInTheDocument();
  });

  // Test 2: Check if the correct number of desserts is displayed
  test('renders the correct count for desserts', () => {
    render(<App />);
    const dessertsElement = screen.getByText(/Number of desserts available: 3/i);
    expect(dessertsElement).toBeInTheDocument();
  });

  // Test 3: Check if the correct number of drinks is displayed
  test('renders the correct count for drinks', () => {
    render(<App />);
    const drinksElement = screen.getByText(/Number of drinks available: 4/i);
    expect(drinksElement).toBeInTheDocument();
  });
});