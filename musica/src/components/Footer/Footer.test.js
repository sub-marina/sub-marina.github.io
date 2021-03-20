import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer from './Footer';

const mockScroll = jest.fn();
jest.mock('../Button/Button', () => () => (<button onClick={mockScroll}>Scroll</button>));

describe('Testing Footer.js', () => {
    test('Smoke test', () => {
        const { container } = render(<Footer />);
       console.log(container.innerHTML);
    });

    test('Footer snapshot', () => {
        const { container } = render(<Footer />);
        expect(container.innerHTML).toMatchSnapshot();
    });

    test('Click on button scroll page to top', () => {
        const { getByText } = render(<Footer />);

        fireEvent.click(getByText('Scroll'));
        expect(mockScroll).toHaveBeenCalledTimes(1);
    });
});