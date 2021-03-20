import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getAllProds from '../src/store/Products/operations';

jest.mock('./components/UpperHeader/UpperHeader', () => () => <div>UpperHeader</div>);
jest.mock('./components/Menu/Menu', () => () => <div>Menu</div>);
jest.mock('./routes/AppRoutes', () => () => <div>AppRoutes</div>);
jest.mock('./components/Footer/Footer', () => () => <div>Footer</div>);
jest.mock('./components/LowerFooter/LowerFooter', () => () => <div>LowerFooter</div>);
jest.mock('react-router-dom', () => ({ NavLink: 'a' }));
jest.mock('../src/store/Products/operations');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let testStore;

const testItems = [{ id: 111 }, { id: 222}, { id: 333}];
const testAction = {
    type: 'TEST_SAVE_ITEMS',
    payload: testItems
}
getAllProds.mockReturnValue(testAction);

beforeEach(() => {
    getAllProds.mockClear();
    testStore = mockStore({
        products: []
    })
});

describe('Testing App.js', () => {
    test('Smoke test', () => {
       render(<Provider store={testStore} ><App /></Provider>);
    });

    test('Products are fetched from server', async () => {
        render(<Provider store={testStore} ><App /></Provider>);

        expect(getAllProds).toHaveBeenCalledTimes(1);
        expect(testStore.getActions().length).toBe(1);
        expect(testStore.getActions()).toEqual([testAction]);
    });
});