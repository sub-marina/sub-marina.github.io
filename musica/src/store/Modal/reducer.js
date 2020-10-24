import * as types from './types';

const initState = {
    isOpen: false,
    modalType: null,
    itemId: null
}

const modal = (state = initState, action) => {
    switch (action.type) {
        case types.TOGGLE_MODAL:
            return {...state, isOpen: action.payload, modalType: action.modalType, itemId: action.itemId}
        default:
            return state;
    }
}

export default modal;