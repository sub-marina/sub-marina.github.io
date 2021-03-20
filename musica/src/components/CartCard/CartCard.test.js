import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import CartCard from './CartCard';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as modalActions from '../../store/Modal/types';
import Modal from '../Modal/Modal';
import { deleteFromCart } from "../../store/Cart/actions";

jest.mock('../Rating/Rating', () => (props) => <div>Stars rating {props.rating}</div>);
jest.mock('../../store/Cart/actions');
const testDeleteItemAction = { type: 'TEST_DELETE_ITEM' };
deleteFromCart.mockReturnValue(testDeleteItemAction);



const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let testStore;
let testProps = {};
let testModalProps = {};

beforeEach(() => {
    testProps = {
        title: "Test title",
        price: "10.00",
        src: "test.png",
        rating: 5,
        desc: "Some description",
        artist: "Some Artist",
        id: "110",
        total: 3,
        discount: null,
    }

    testStore = mockStore({
        modal: {
            isModal: false,
            itemId: null
        }
    })
});

describe('Testing CardCard.js', () => {
    test('Correct rendering of passed props', () => {
        const { getByText, getByAltText, queryByText } = render(<Provider store={testStore}><CartCard {...testProps} /></Provider>);
        getByText(`${testProps.total} x ${testProps.title}`);
        getByText(`$${(testProps.price * testProps.total).toFixed(2)}`);
        getByText(`by ${testProps.artist}`);
        getByText(`Stars rating ${testProps.rating}`);
        expect(queryByText(`$${testProps.discount}`)).toBeNull();
        expect(getByAltText('cart-product')).toHaveAttribute('src', 'test.png');
    });

    test('Clicking on delete button render modal "Confirm deleting"', () => {
        const { getByText } = render(<Provider store={testStore} ><CartCard {...testProps} /></Provider>);
        const storeProps = testStore.getState().modal;
        const deleteBtn = getByText('X');
        fireEvent.click(deleteBtn);

        const expectedActions = [{
            type: modalActions.TOGGLE_MODAL,
            payload: !storeProps.isOpen,
            modalType: 'DELETE',
            itemId: testProps.id
        }];

        expect(testStore.getActions()).toEqual(expectedActions);
        expect(testStore.getActions()[0].payload).toBeTruthy();
        expect(testStore.getActions().length).toBe(1);
    });

    test('Clicking on modal delete button render modal delete card', () => {
        testModalProps = {
            actions: [
                <button key='1' onClick={() => testStore.dispatch(deleteFromCart())}>Delete</button>,
                <button key='2' onClick={testModalProps.closeModal}>Cancel</button>
            ],
            closeModal: jest.fn()
        }
        const { getByText } = render(<Provider store={testStore} ><Modal {...testModalProps} /></Provider>);
        const deleteBtn = getByText('Delete');
        fireEvent.click(deleteBtn);
        expect(testStore.getActions()).toEqual([testDeleteItemAction]);
    });
});