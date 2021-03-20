import React from 'react';
import Button from '../Button/Button';

const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='main-footer__upper-line' />
            <Button onClick={scrollTop} className='main-footer__btn-up' children='&#x2303;' />
            <div className='container'>
                <div className='main-footer__block-about'>
                    <div className='main-footer__about-us footer-about-us'>
                        <h4 className='footer-about-us__title bold'>Little about us</h4>
                        <p className='footer-about-us__latest-tweet'><span>Sed posuere</span> consectetur  est at. Nulla vitae elit libero, a pharetra.
                            Lorem ipsum <span>dolor sit</span> amet, conse ctetuer adipiscing elit.</p>
                    </div>
                    <div className='main-footer__socials footer-socials'>
                        <h4 className='footer-socials__title bold'>Socialize with us</h4>
                        <div className='footer-socials__socials social-icons'>
                            <a href='#' className='social-icons__icon social-icons__icon--fb'>
                                <i className='fab fa-facebook-f' />
                            </a>
                            <a href='#' className='social-icons__icon social-icons__icon--tw'>
                                <i className='fab fa-twitter' />
                            </a>
                            <a href='#' className='social-icons__icon social-icons__icon--drib'>
                                <i className='fab fa-dribbble' />
                            </a>
                            <a href='#' className='social-icons__icon social-icons__icon--digg'>
                                <i className='fab fa-digg' />
                            </a>
                            <a href='#' className='social-icons__icon social-icons__icon--mail'>
                                <i className='far fa-envelope' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='main-footer__archives footer-archives'>
                    <h4 className='footer-archives__title bold'>Our Archives</h4>
                    <div className='footer-archives__navbar archives-navbar'>
                        <a href='#' className='archives-navbar__link'>March 2012</a>
                        <a href='#' className='archives-navbar__link'>February 2012</a>
                        <a href='#' className='archives-navbar__link'>January 2012</a>
                        <a href='#' className='archives-navbar__link'>December 2011</a>
                    </div>
                </div>
                <div className='main-footer__posts footer-posts'>
                    <h4 className='footer-posts__title bold'>Popular Posts</h4>
                    <div className='footer-posts__posts-wrapper'>
                        <div className='footer-posts__post-block'>
                            <img src='./img/footer/post1.png' alt='album'/>
                            <div>
                                <h5 className='footer-posts__post-title'>Great Album</h5>
                                <p>
                                    <i className='fas fa-comment-alt' />
                                    <span>12 comments</span>
                                </p>
                            </div>
                        </div>
                        <div className='footer-posts__post-block'>
                            <img src='./img/footer/post2.png' alt='album'/>
                            <div>
                                <h5 className='footer-posts__post-title'>Great Album</h5>
                                <p>
                                    <i className='fas fa-comment-alt' />
                                    <span>12 comments</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-footer__block-search'>
                    <div className='main-footer__search footer-search'>
                        <h4 className='footer-search__title bold'>Search our Site</h4>
                        <input type='text' name='search' placeholder='Enter Search ...'/>
                    </div>
                    <div className='main-footer__cloud footer-cloud'>
                        <h4 className='footer-cloud__title bold'>Tag Cloud</h4>
                        <div className='footer-cloud__links'>
                            <a href='#' className=''>Audio CD</a>
                            <a href='#'>Video</a>
                            <a href='#'>Playlist</a>
                            <a href='#'>Avantgarde</a>
                            <a href='#'>Melancholic</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;