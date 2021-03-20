import * as types from './types';

const initState = [];

const products = (state = initState, action) => {
    switch (action.type) {
        case types.GET_ALL_PROD:
            return action.payload;
        default:
            return state;
    }
}

export default products;