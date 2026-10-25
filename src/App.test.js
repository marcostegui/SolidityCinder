// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityCinder title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityCinder/i);
    expect(titleElement).toBeInTheDocument();
});
