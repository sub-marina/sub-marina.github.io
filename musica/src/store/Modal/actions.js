import * as types from './types';

const toggleModalMode = (isModal, type, id) => (dispatch) => {
    dispatch({
        type: types.TOGGLE_MODAL,
        payload: !isModal,
        modalType: type,
        itemId: id
    });
}
export default toggleModalMode;