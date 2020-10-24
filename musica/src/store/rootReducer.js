import { combineReducers } from 'redux';
import products from './Products/reducer';
import cart from './Cart/reducer';
import favourites from './Favourites/reducer';
import modal from './Modal/reducer';

const rootReducer = combineReducers({
        products,
        cart,
        favourites,
        modal
    }
);

export default rootReducer;

