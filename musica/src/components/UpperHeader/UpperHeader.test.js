import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import UpperHeader from './UpperHeader';
import Menu from "../Menu/Menu";

jest.mock('../Cart/Cart', () => () => (<div>Header Cart</div>));

describe('Testing UpperHeader.js', () => {
    test('Correct rendering of UpperHeader component', () => {
        const { container } = render(<UpperHeader />);
        console.log(container.innerHTML)
    });

    test('Click on cart button renders the header cart', () => {
        const { getByText, queryByText, getByTestId } = render(<UpperHeader />);
        expect(queryByText('Header Cart')).not.toBeInTheDocument();
        fireEvent.click(getByTestId('openCart-btn'));
        expect(getByText('Header Cart')).toBeInTheDocument();
        fireEvent.click(getByTestId('openCart-btn'));
        expect(queryByText('Header Cart')).not.toBeInTheDocument();
    });
});