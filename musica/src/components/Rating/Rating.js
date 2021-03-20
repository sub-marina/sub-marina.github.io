import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
    const setRating = () => {
        const stars = props.rating;
        let ratingFragment = [];

        for (let i = 1; i <= 5; i++) {
            i <= stars
                ? ratingFragment.push(<i key={i} className="fas fa-star fa-star--active" data-testid='active-star'/>)
                : ratingFragment.push(<i key={i} className="fas fa-star" />)
        }

        return ratingFragment;
    }

    return (
        <div className='products__rating'>{setRating()}</div>
    );
}

Rating.propTypes = {
    rating: PropTypes.number
}

Rating.defaultProps = {
    rating: null
}

export default Rating;