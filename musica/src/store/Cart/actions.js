import * as types from './types';
import LocalStorage from '../../localStorage';

const addToCartList = () => (dispatch) =>
    dispatch({
        type: types.ADD_TO_CART,
        payload: JSON.parse(LocalStorage.getCartList())
});

const deleteFromCart = () => (dispatch) =>
    dispatch({
        type: types.DELETE_ITEM,
        payload: JSON.parse(LocalStorage.getCartList())
});

export { addToCartList, deleteFromCart };