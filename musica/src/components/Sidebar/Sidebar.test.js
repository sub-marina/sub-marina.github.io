import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

jest.mock('react-router-dom', () => ({
        NavLink: 'a'
    })
);

describe('Testing Sidebar.js', () => {
    test('Correct rendering of Sidebar component', () => {
        const { container,getByRole, getAllByRole } = render(<Sidebar />);
        console.log(container.innerHTML)
        expect(getAllByRole('listitem').length).toBe(3);
        expect(getByRole('button')).toBeInTheDocument();
    });

    test('Click on button closes the sidebar', () => {
        const mockCloseNav = jest.fn((container) => {
            console.log('Sidebar was closed.');
            unmountComponentAtNode(container);
        });
        const { container, queryByText, getByTestId } = render(<Sidebar closeNav={() => mockCloseNav(container)}/>);

        expect(queryByText('Home')).toBeInTheDocument();
        fireEvent.click(getByTestId('closeSidebar-btn'));
        expect(mockCloseNav).toHaveBeenCalledTimes(1);
        expect(container).toBeEmpty();
    });
});