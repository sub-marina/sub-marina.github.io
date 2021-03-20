import React from 'react';
import { render } from '@testing-library/react';
import LowerFooter from './LowerFooter';

describe('Testing Footer.js', () => {
    test('Smoke test', () => {
        const { container } = render(<LowerFooter />);
        console.log(container.innerHTML);
    });

    test('Footer snapshot', () => {
        const { container } = render(<LowerFooter />);
        expect(container.innerHTML).toMatchSnapshot();
    });
});