
// Test: ErrorBoundary.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
};

test('catches errors and displays fallback UI', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );
  expect(getByText('Something went wrong.')).toBeInTheDocument();
});