import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import About from './About';

test('renders Home component for "/" route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('renders About component for "/about" route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText('About')).toBeInTheDocument();
});