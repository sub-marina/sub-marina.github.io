import React from 'react';
import Products from '../Products/Products';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';

const MainPage = (props) => {
    const { products } = props;
    const prodsOnSale = products.filter(item => item.discount);
    const prodsFullPrice = products.filter(item => !item.discount);

    return (
        <main className='main-page'>
            <div className='container'>
                <h2 className='main-page__quote'>Welcome to <span>musica,</span> check our latest albums</h2>
                <div className='main-page__features main-feature'>
                    <div className='main-feature__block'>
                        <h4 className='main-feature__heading'>
                            <i className='fas fa-compact-disc' />
                            <span>Check our CD collection</span>
                        </h4>
                        <p className='main-feature__desc'>Donec pede justo, fringilla vel, al, vulputate
                            eget, arcu. In enim justo, lorem ipsum.
                        </p>
                    </div>
                    <div className='main-feature__block'>
                        <h4 className='main-feature__heading'>
                            <i className="fas fa-headphones" />
                            <span>Listen before purchase</span>
                        </h4>
                        <p className='main-feature__desc'>Donec pede justo, fringilla vel, al, vulputate
                            eget, arcu. In enim justo, lorem ipsum.
                        </p>
                    </div>
                    <div className='main-feature__block'>
                        <h4 className='main-feature__heading'>
                            <i className="far fa-calendar-alt" />
                            <span>Upcoming events</span>
                        </h4>
                        <p className='main-feature__desc'>Donec pede justo, fringilla vel, al, vulputate
                            eget, arcu. In enim justo, lorem ipsum.
                        </p>
                    </div>
                </div>
                <div className='main-page__arrivals arrivals'>
                <h3 className='arrivals__heading'>Latest arrivals in musica</h3>
                    {!!prodsFullPrice.length && <Products products={prodsFullPrice} />}
                </div>
                <div className='main-page__sale sale'>
                    <h3 className='sale__heading'>Albums currently on sale</h3>
                    {!!prodsOnSale.length && <Products products={prodsOnSale} />}
                </div>
                <div className='main-page__sponsors sponsors'>
                    <h3 className='sponsors__heading'>Our most important publishers</h3>
                    <div className='sponsors__logos logos'>
                        <img src='./img/sponsors/water-melocious.png' alt='logo' />
                        <img src='./img/sponsors/plant-cloud.png' alt='logo' />
                        <img src='./img/sponsors/inspired.png' alt='logo' />
                        <img src='./img/sponsors/bird.png' alt='logo' />
                        <img src='./img/sponsors/man.png' alt='logo' />
                        <img src='./img/sponsors/logo.png' alt='logo' />
                    </div>
                </div>
            </div>
        </main>
    );
}

MainPage.propTypes = {
    products: PropsTypes.array
}

MainPage.defaultProps = {
    products: []
}

const mapStateToProps = (state) => ({products: state.products});

export default connect(mapStateToProps)(MainPage);