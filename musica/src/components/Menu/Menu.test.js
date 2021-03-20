import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';

jest.mock('react-router-dom', () => ({
        NavLink: 'a',
        Link: 'a'
    })
);
jest.mock('../Sidebar/Sidebar', () => () => (<div>Sidebar</div>));

describe('Testing Menu.js', () => {
    test('Correct rendering of Menu component without sidebar', () => {
        const { queryByText } = render(<Menu />);
        expect(queryByText('Sidebar')).toBeNull();
    });

    test('Click on menu-burger button renders the sidebar', () => {
        const { getByText, getByTestId } = render(<Menu />);
        fireEvent.click(getByTestId('openSidebar-btn'));
        expect(getByText('Sidebar')).toBeInTheDocument();
    });
});