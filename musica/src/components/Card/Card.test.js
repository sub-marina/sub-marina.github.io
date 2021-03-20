import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Card from './Card';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as favourActions from '../../store/Favourites/types';
import * as modalActions from '../../store/Modal/types';
import Modal from '../Modal/Modal';
import { addToCartList } from '../../store/Cart/actions';

jest.mock('../Rating/Rating', () => (props) => <div>Stars rating {props.rating}</div>);
jest.mock('../../store/Cart/actions');
const testAddToCartAction = { type: 'TEST_ADD_TO_CART' };
addToCartList.mockReturnValue(testAddToCartAction);

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
        discount: null,
        isFavourite: false
    }

    testStore = mockStore({
        modal: {
            isModal: false,
            itemId: null
        }
    })
});

describe('Testing Card.js', () => {
    test('Smoke test', () => {
        const { container } = render(<Provider store={testStore}><Card /></Provider>);
        console.log(container.innerHTML);
    });

    test('Correct rendering of passed props', () => {
        const { getByText, getByAltText, queryByText } = render(<Provider store={testStore}><Card {...testProps} /></Provider>);
        getByText(testProps.title);
        getByText(testProps.desc);
        getByText(`$${testProps.price}`);
        getByText(`by ${testProps.artist}`);
        getByText(`Stars rating ${testProps.rating}`);
        expect(queryByText(`$${testProps.discount}`)).toBeNull();
        expect(getByAltText('product')).toHaveAttribute('src', 'test.png');
    });

    test('Testing default props', () => {
        const { getByText, queryByText, getByAltText } = render(<Provider store={testStore}><Card /></Provider>);
        getByText(/0.00/);
        getByText(/information in progress/i);
        getByText(/by unknown/i);
        expect(queryByText(/sale/i)).not.toBeInTheDocument();
        expect(getByAltText('product')).toHaveAttribute('src', '');
    });

    test('Clicking star icon toggles favorites on card', () => {
        const { getByTestId } = render(<Provider store={testStore}><Card {...testProps} /></Provider>);
        const starIcon = getByTestId('star-btn');

        fireEvent.click(starIcon);
        const expectedActions = [{
            type: favourActions.TOGGLE_FAVOURITE,
            payload: [{...testProps, ...testStore.getState().modal}]
        }];
        expect(testStore.getActions()).toEqual(expectedActions);
        expect(testStore.getActions().length).toBe(1);
    });

    test('Correct rendering discount price', () => {
        const { getByText } = render(<Provider store={testStore} ><Card {...testProps} discount='7.99' /></Provider>);
        getByText(`$${testProps.price}`);
        getByText(`$${7.99}`);
        getByText(/sale/i);
    });

    test('Clicking on "Add to cart" button render modal "Add to cart"', () => {
        const { getByText } = render(<Provider store={testStore} ><Card {...testProps} /></Provider>);
        const storeProps = testStore.getState().modal;
        const addBtn = getByText(/add to cart/i);
        fireEvent.click(addBtn);

        const expectedActions = [{
            type: modalActions.TOGGLE_MODAL,
            payload: !storeProps.isOpen,
            modalType: 'ADD',
            itemId: testProps.id
        }];
        expect(testStore.getActions()).toEqual(expectedActions);
        expect(testStore.getActions().length).toBe(1);
    });

    test('Clicking on modal "Add" button add item to cart', () => {
        testModalProps = {
            actions: [
                <button key='1' onClick={() => testStore.dispatch(addToCartList()) }>Add</button>,
                <button key='2' onClick={testModalProps.closeModal}>Cancel</button>
            ],
            closeModal: jest.fn()
        }
        const { getByText } = render(<Provider store={testStore} ><Modal {...testModalProps} /></Provider>);

        const addBtn = getByText('Add');
        const cancelBtn = getByText('Cancel');
        fireEvent.click(addBtn);
        expect(testStore.getActions()).toEqual([testAddToCartAction]);
        fireEvent.click(addBtn);
        expect(testStore.getActions().length).toBe(2);
        fireEvent.click(cancelBtn);
        expect(testModalProps.closeModal).toHaveBeenCalled();
    });
});