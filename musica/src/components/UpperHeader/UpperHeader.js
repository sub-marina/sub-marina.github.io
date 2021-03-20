import React, { useState } from 'react';
import Button from '../Button/Button';
import Cart from '../Cart/Cart';

const UpperHeader = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header className='upper-header'>
            <div className='upper-header__upper-line' />
            <div className="upper-header__content">
                <div className='container'>
                    <div className='upper-header__socials'>
                        <a href='#' className='upper-header__social-icon upper-header__social-icon--fb'>
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a href='#' className='upper-header__social-icon upper-header__social-icon--drib'>
                            <i className='fab fa-dribbble' />
                        </a>
                        <a href='#' className='upper-header__social-icon upper-header__social-icon--tw'>
                            <i className='fab fa-twitter' />
                        </a>
                        <a href='#' className='upper-header__social-icon upper-header__social-icon--mail'>
                            <i className='far fa-envelope' />
                        </a>
                        <a href='#' className='upper-header__social-icon upper-header__social-icon--vimeo'>
                            <i className='fab fa-vimeo-v' />
                        </a>
                    </div>
                    <div className='upper-header__administration'>
                        <a href='#' className='upper-header__login-link'>Login</a> /
                        <a href='#' className='upper-header__register-link'> Register</a>
                        <Button
                            data-testid='openCart-btn'
                            onClick={() => setIsCartOpen(!isCartOpen)}
                            className='upper-header__cart'
                            children={<><i className='fas fa-cart-arrow-down' /><span>Cart</span></>}
                        />
                        {isCartOpen && <Cart closeCart={() => setIsCartOpen(!isCartOpen)} />}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default UpperHeader;