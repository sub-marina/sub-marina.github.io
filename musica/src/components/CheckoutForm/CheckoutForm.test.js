import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let testStore;

jest.mock('react-router-dom', () => ({
        withRouter: (CheckoutForm) => (props) => <CheckoutForm {...props} />
    })
);
jest.mock('../MyField/MyField', () => () => <input/>);
const testClearCartAction = { type: 'TEST_CLEAR_CART', payload: [] }

beforeEach(() => {
    testStore = mockStore({
        cart: [{}, {}, {}],
        // clearCart: jest.fn(() => testStore.dispatch(testClearCartAction))
    })
});

describe('Testing CheckoutForm.js', () => {
    test('Correct rendering of checkout form', () => {
        const { container } = render(<Provider store={testStore}><CheckoutForm /></Provider>);
        console.log(container.innerHTML);
    });

    test("Don't render a form if cart is empty", () => {
        testStore = mockStore({
            cart: []
        })
        const { container } = render(<Provider store={testStore}><CheckoutForm /></Provider>);
        expect(container.firstElementChild).toBeNull();
    });

    // test('Click on checkout button clear cart', () => {
    //
    //     const { getByText } = render(<Provider store={testStore}><CheckoutForm /></Provider>);
    //     fireEvent.click(getByText('Checkout'));
    //     expect(testStore.getActions()).toEqual([testClearCartAction]);
    // });
});