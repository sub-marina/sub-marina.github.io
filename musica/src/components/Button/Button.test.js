import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Testing Button.js', () => {
    test('Smoke test for Button.js', () => {
        const { container } = render(<Button />);
        console.log(container.innerHTML);
    });

    test('Correct rendering of passed props', () => {
        const testProps = {
            children: 'TestMe',
            onClick: jest.fn(),
            className: 'test-class'
        };
        const { container, getByText } = render(<Button {...testProps} />);
        getByText(testProps.children);
        expect(container.firstElementChild).toHaveClass('test-class');
    });

    test('Testing default prop "children"', () => {
        const { getByText } = render(<Button />);
        getByText(/click/i);
        expect(getByText(/click/i)).toHaveClass('default');
    });

    test('Clicking on the button calls the passed function', () => {
        const mockTestFunc = jest.fn();
        const { container } = render(<Button onClick={mockTestFunc} />);

        fireEvent.click(container.firstElementChild);
        expect(mockTestFunc).toHaveBeenCalled();
    });
});