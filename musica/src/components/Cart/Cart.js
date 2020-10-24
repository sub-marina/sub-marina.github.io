import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartCard from '../CartCard/CartCard';
import { connect } from 'react-redux';

const Cart = (props) => {
    const { productsInCart, closeCart } = props;

    return (
        <div className='openCart'>
            {productsInCart.map(item => (
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
            <div className='openCart__total'>
                <h4 className='openCart__total-subtitle'>Total delivery cost:</h4>
                <div className='openCart__total-sum'>
                    ${productsInCart.reduce((prev, item) => prev + item.price * item.total, 0).toFixed(2)}
                </div>
            </div>
            <div className='openCart__controls'>
                <Link to='/cart' onClick={closeCart} className='openCart__btns viewCart-btn'>View Cart &nbsp; &#x2192;</Link>
                <Link to='/cart' onClick={closeCart} className='openCart__btns checkout-btn'>Proceed to Checkout &nbsp; &#x2192;</Link>
            </div>
        </div>
    );
}

Cart.propTypes = {
    productsInCart: PropTypes.array,
    closeCart: PropTypes.func.isRequired
}

Cart.defaultProps = {
    productsInCart: []
}

const mapStateToProps = ({cart}) => ({productsInCart: cart});

export default connect(mapStateToProps)(Cart);