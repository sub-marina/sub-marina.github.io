import LocalStorage from '../../localStorage';
import * as types from './types';

const initState = JSON.parse(LocalStorage.getFavouritesList()) || [];

const favourites = (state = initState, action) => {
    switch (action.type) {
        case types.TOGGLE_FAVOURITE:
            return action.payload;
        default: return state;
    }
}

export default favourites;