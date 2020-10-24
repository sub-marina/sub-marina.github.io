import React from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
    const { closeNav } = props;

    return (
        <div className='main-menu__sidenav main-sidenav'>
            <Button className='main-sidenav__btn-close' onClick={closeNav} children={<i className='fas fa-times'/>} />
            <ul>
                <li className='main-sidenav__item'><NavLink exact to='/' activeClassName='link-active' onClick={closeNav}>Home</NavLink></li>
                <li className='main-sidenav__item'><NavLink to='/favourites' activeClassName='link-active' onClick={closeNav}>Favourites</NavLink></li>
                <li className='main-sidenav__item'><NavLink to='/cart' activeClassName='link-active' onClick={closeNav}>Cart</NavLink></li>
            </ul>
        </div>
    );
}

Sidebar.propTypes = {
    closeNav: PropTypes.func.isRequired
}

export default Sidebar;