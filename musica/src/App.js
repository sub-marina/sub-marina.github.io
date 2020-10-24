import React, { useEffect } from 'react';
import './App.scss';
import UpperHeader from './components/UpperHeader/UpperHeader';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import LowerFooter from './components/LowerFooter/LowerFooter';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import getAllProds from './store/Products/operations';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getAllProds()), []);

    return (
        <>
            <UpperHeader />
            <Menu />
            <AppRoutes />
            <Footer/>
            <LowerFooter/>
        </>
    )
}

export default App;