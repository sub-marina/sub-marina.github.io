import React from 'react';
import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Testing Rating.js', () => {
    test('Rendering with default prop - no any active stars', () => {
        const { queryByTestId } = render(<Rating />);
        expect(queryByTestId('active-star')).toBeNull();
    });

    test('Correct render of 3 active stars', () => {
        const { container, queryAllByTestId } = render(<Rating rating={3} />);
        console.log(container.innerHTML)
        expect(queryAllByTestId('active-star').length).toBe(3)
    });
});