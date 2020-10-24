import React from 'react';

const LowerFooter = () => {
    return (
        <div className='lower-footer'>
            <div className='container'>
                <nav className='lower-footer__nav lower-nav'>
                    <ul>
                        <li><a href='#' className='lower-nav__link'>Home</a></li>
                        <li><a href='#' className='lower-nav__link'>Portfolio</a></li>
                        <li><a href='#' className='lower-nav__link'>Sitemap</a></li>
                        <li><a href='#' className='lower-nav__link'>Contact</a></li>
                    </ul>
                </nav>
                <p className='lower-footer__copyright'>Musica &#64;2013 by PremiumCoding | All Rights Reserved</p>
            </div>
        </div>
    );
}

export default LowerFooter;