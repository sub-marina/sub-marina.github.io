import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import Favourites from '../pages/Favourites/Favourites';
import CartPage from '../pages/Cart/CartPage';

const AppRoutes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/cart' component={CartPage} />
    </Switch>
);

export default AppRoutes;