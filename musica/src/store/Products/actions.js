import * as types from './types';

const saveProducts = (products) => (dispatch) => {
    dispatch({
        type: types.GET_ALL_PROD,
        payload: products
    });
};

export default saveProducts;