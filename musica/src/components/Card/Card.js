import React from 'react';
import Button from '../Button/Button';
import '../../localStorage';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';
import LocalStorage from '../../localStorage';
import toggleFavourite from '../../store/Favourites/actions';
import { addToCartList } from '../../store/Cart/actions';
import { connect } from 'react-redux';
import toggleModalMode from '../../store/Modal/actions';

const Card = (props) => {
    const { id, src, title, artist, desc, price, discount, rating, isFavourite, addToCart, toggleFavourites, isModal, type, itemId, toggleModal } = props;

    return (
        <>
            {(id === itemId) && (type === 'ADD') &&
                <Modal
                    header='Confirm your selection'
                    closeButton={true}
                    text='Check the correctness of the entered data. Are you sure you want to add this item to the cart?'
                    actions={[
                        <Button children='Add' className='btn-modal-actions' onClick={() => addToCart(props)} key='btn1'/>,
                        <Button children='Cancel' className='btn-modal-actions' onClick={() => toggleModal} key='btn2' />
                    ]}
                    closeModal={() => toggleModal(isModal)}
                />
            }
            <div className='products__card'>
                <div className='products__image-block'>
                    <img className='products__image' src={src} alt='product' />
                    <Button
                        className={
                            isFavourite
                                ? 'products__favourite products__favourite--active'
                                : 'products__favourite'
                        }
                        onClick={() => toggleFavourites(props)}
                        data-testid='star-btn'
                    >{<i className="fas fa-star" />}</Button>
                    {discount && (<div className='products__sale'>Sale</div>)}
                </div>
                <div className='products__content'>
                   <h4 className='products__title'>
                       {title}<br />
                       <span>by {artist}</span>
                   </h4>
                    <Rating rating={rating} />
                    <p className='products__info'>{desc}</p>
                    <div className='products__buy buy'>
                        <div className='buy__price price'>
                            {discount &&
                                (
                                    <>
                                        <span className='price__old'><s>${price}</s></span>
                                        <span className='price__new'>${discount}</span>
                                    </>
                                )
                            }
                            {!discount && (<span>${price}</span>)}
                        </div>
                        <Button className='buy__btn' children='Add to cart' onClick={() => toggleModal(isModal, 'ADD', id)} />
                    </div>
               </div>
            </div>
        </>
    );
}

Card.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
    artist: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string.isRequired,
    discount: PropTypes.string,
    rating: PropTypes.number,
    addToCart: PropTypes.func.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    toggleFavourites: PropTypes.func.isRequired,
    isModal: PropTypes.bool.isRequired,
    type: PropTypes.string,
    toggleModal: PropTypes.func.isRequired
}

Card.defaultProps = {
    src: '',
    artist: 'Unknown',
    desc: 'Information in progress',
    price: '0.00',
    discount: null,
    rating: 0,
    addToCart: () => {},
    isFavourite: false,
    toggleFavourites: () => {},
    isModal: false,
    toggleModal: () => {}
}

const mapStateToProps = (state) => ({
    isModal: state.modal.isOpen,
    type: state.modal.modalType,
    itemId: state.modal.itemId
});

const mapDispatchToProps = (dispatch) => ({
    toggleFavourites: (...params) => {
        LocalStorage.setFavouritesList(...params);
        dispatch(toggleFavourite());
    },
    addToCart: (...params) => {
        LocalStorage.setCartList(...params);
        dispatch(addToCartList());
    },
    toggleModal: (isModal, type, id) => dispatch(toggleModalMode(isModal, type, id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Card);