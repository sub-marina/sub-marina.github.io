import products from './reducer';
import * as types from './types';

describe('Testing Products reducer', () => {
    test('GET_ALL_PROD saves all items from action', () => {
        const initialState = [];
        const testItems = [{ id: 1 }, { id: 2 }, { id: 3 }]
        const action = {
            type: types.GET_ALL_PROD,
            payload: testItems
        }

        const newState = products(initialState, action);
        expect(newState).toBe(testItems);
        expect(newState.length).toBe(3);
    });

    test('Unknown action returns same state', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN_ACTION' }

        const newState = products(initialState, action);
        expect(newState).toBe(initialState);
    });
});