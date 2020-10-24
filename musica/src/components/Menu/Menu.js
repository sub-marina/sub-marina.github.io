import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Button from '../Button/Button';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    return (
        <menu className='main-menu'>
            <div className='container'>
                <Link to='/' className='main-menu__logo'>
                    <img className='main-menu__logo-pic' src='./img/m-logo.png' alt='logo'/>
                    <span className='main-menu__logo-title'>Store</span>
                </Link>
                <nav className='main-menu__nav main-nav'>
                    <ul className='main-nav__list'>
                        <li className='main-nav__item'><NavLink exact to='/' activeClassName='link-active' className='main-nav__link'>Home</NavLink></li>
                        <li className='main-nav__item'><a href='#' className='main-nav__link'>CD's</a></li>
                        <li className='main-nav__item'><a href='#' className='main-nav__link'>DVD's</a></li>
                        <li className='main-nav__item'><a href='#' className='main-nav__link'>News</a></li>
                        <li className='main-nav__item'><a href='#' className='main-nav__link'>Portfolio</a></li>
                        <li className='main-nav__item'><a href='#' className='main-nav__link'>Contact us</a></li>
                        <Button
                            className={`main-nav__item main-nav__openSidenav-btn ${!isSidenavOpen ? '' : 'main-nav__openSidenav-btn--hidden'}`}
                            onClick={() => setIsSidenavOpen(!isSidenavOpen)}
                            children={<i className='fas fa-bars' />}
                        />
                    </ul>
                </nav>
                {isSidenavOpen && <Sidebar closeNav={() => setIsSidenavOpen(!isSidenavOpen)} />}
            </div>
        </menu>
    );
}

export default Menu;