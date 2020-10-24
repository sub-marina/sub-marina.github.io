import LocalStorage from '../../localStorage';
import * as types from './types';

const initState = JSON.parse(LocalStorage.getCartList()) || [];

const cart = (state = initState, action) => {
    switch (action.type) {
        case types.DELETE_ITEM:
            return action.payload
        case types.ADD_TO_CART:
            return action.payload
        default:
            return state;
    }
}

export default cart;