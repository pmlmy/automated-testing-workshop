import React from 'react';
import { render } from '@testing-library/react';
import Greeting from './Greeting';

test('matches snapshot', () => {
  const { asFragment } = render(<Greeting name="John" />);
  expect(asFragment()).toMatchSnapshot();
});