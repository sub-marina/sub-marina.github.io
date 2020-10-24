import React from 'react';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toggleModalMode from '../../store/Modal/actions';
import LocalStorage from '../../localStorage';
import { deleteFromCart } from '../../store/Cart/actions';

const CartCard = (props) => {
    const { id, title, artist, src, rating, price, total, isModal, itemId, type, toggleModal, deleteItem } = props;

    return (
        <>
            {(id === itemId) && (type === 'DELETE') &&
                <Modal
                    header='Confirm deleting'
                    closeButton={true}
                    text='Are you sure you want to delete this item from the cart?'
                    actions={[
                        <Button children='Delete' className='btn-modal-actions' onClick={() => deleteItem(id)} key='btn1'/>,
                        <Button children='Cancel' className='btn-modal-actions' onClick={() => toggleModal} key='btn2'/>
                    ]}
                    closeModal={() => toggleModal(isModal)}
                />
            }
            <div>
                <div className='openCart__item cart-item'>
                    <div className='cart-item__content'>
                        <img src={src} alt='' />
                        <div className='cart-item__info'>
                            <h4 className='cart-item__title'>{total} x {title} &nbsp;<span>by {artist}</span></h4>
                            <Rating rating={rating}/>
                        </div>
                    </div>
                    <div className='cart-item__price-block'>
                        <div className='cart-item__price'>${(price * total).toFixed(2)}</div>
                        <Button onClick={() => toggleModal(isModal, 'DELETE', id)} children='X' className='cart-item__delete-btn'/>
                    </div>
                </div>
            </div>
        </>
    );
}

CartCard.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number,
    total: PropTypes.number.isRequired,
    deleteItem: PropTypes.func.isRequired,
    isModal: PropTypes.bool.isRequired,
    type: PropTypes.string,
    toggleModal: PropTypes.func.isRequired
}

CartCard.defaultProps = {
    artist: 'Unknown',
    rating: null,
    type: null
}

const mapStateToProps = (state) => ({
    isModal: state.modal.isOpen,
    type: state.modal.modalType,
    itemId: state.modal.itemId
});

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (id) => {
        LocalStorage.deleteFromCart(id);
        dispatch(deleteFromCart());
    },
    toggleModal: (isModal, type, id) => dispatch(toggleModalMode(isModal, type, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);