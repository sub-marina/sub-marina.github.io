import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import { connect } from 'react-redux';

const Favourites = (props) => {
    const { favourites } = props;

    return (
        <div className='favourites-page'>
            <div className="container">
                <h2 className='favourites-page__title'>Your list of favourites</h2>
                <div className='favourites-page__content'>
                    {!favourites.length && (<p className='default-message'>No favourite items...</p>)}
                    {!!favourites.length && (
                        favourites.map(item => (
                                    <Card
                                        key={item.id}
                                        id={item.id}
                                        src={item.src}
                                        title={item.title}
                                        artist={item.artist}
                                        rating={item.rating}
                                        desc={item.desc}
                                        price={item.price}
                                        discount={item.discount}
                                        isFavourite={!!favourites.find(favourProd => item.id === favourProd.id)}
                                    />
                                )
                            )
                        )
                    }
                </div>
                <div className='cart-page__controls'>
                    <Link to='/' className='cart-page__btn goBack-btn'>Go back</Link>
                </div>
            </div>
        </div>
    );
}

Favourites.propTypes = {
    favourites: PropTypes.array,
}

Favourites.defaultTypes = {
    favourites: []
}

const mapStateToProps = (state) => ({favourites: state.favourites});

export default connect(mapStateToProps)(Favourites);