import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Products = (props) => {
    const { products, favourites } = props;

    return (
        <div className='products'>
            {
                products.map(item =>
                    (
                        <Card
                            key={item.id}
                            id={item.id}
                            src={item.path}
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
            }
        </div>
    );
}

Products.propTypes = {
    products: PropTypes.array,
    favourites: PropTypes.array,
}

Products.defaultProps = {
    products: [],
    favourites: []
}

const mapStateToProps = ({favourites}) => ({favourites});

export default connect(mapStateToProps)(Products);