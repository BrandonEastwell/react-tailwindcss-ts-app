import { render, screen } from '@testing-library/react';
import App from '../App.tsx';
import React from 'react';

describe('App', () => {
    test('renders learn react link', () => {
        render(<App />)
        const linkElement = screen.getByText(/Hello, World./i)
        expect(linkElement).toBeInTheDocument()
    })
});

