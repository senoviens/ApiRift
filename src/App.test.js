// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApiRift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApiRift/i);
    expect(titleElement).toBeInTheDocument();
});
