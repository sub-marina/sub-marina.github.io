import * as types from './types';
import LocalStorage from '../../localStorage';

const toggleFavourite = () => (dispatch) =>
    dispatch({
        type: types.TOGGLE_FAVOURITE,
        payload: JSON.parse(LocalStorage.getFavouritesList())
});

export default toggleFavourite;