import React from 'react';
import CartCard from '../../components/CartCard/CartCard';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CartPage = (props) => {
    const { items } = props;

    return (
        <div className='cart-page'>
            <div className="container">
                <h2 className='cart-page__title'>Your product list</h2>
                <div className='cart-page__content'>
                    {!items.length && (<p className='default-message'>Your cart is empty...</p>)}
                    {items.map(item => (
                        <CartCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            artist={item.artist}
                            src={item.src}
                            rating={item.rating}
                            price={item.price}
                            total={item.total}
                        />))}
                </div>
                {!!items.length && (<div className='cart-page__total'>
                    <h4 className='cart-page__total-subtitle'>Total delivery cost:</h4>
                    <div className='cart-page__total-sum'>
                        ${items.reduce( (prev, item) => prev + item.price * item.total, 0).toFixed(2)}
                    </div>
                </div>)}
                <div className='cart-page__controls'>
                    <Link to='/' className='cart-page__btn goBack-btn'>Go back</Link>
                </div>

                <CheckoutForm />
            </div>
        </div>
    );
}

CartPage.propTypes = {
    items: PropTypes.array,
};

CartPage.defaultProps = {
    items: []
}

const mapStateToProps = ({cart}) => ({items: cart});

export default connect(mapStateToProps)(CartPage);