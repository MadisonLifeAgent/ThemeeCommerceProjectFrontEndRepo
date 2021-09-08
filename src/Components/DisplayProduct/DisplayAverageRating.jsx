// react imports
import React from 'react';

// component imports
import UseGetAverageRating from '../../Hooks/UseGetAverageRating';


// this componenet gets a products reviews and ratings and maps out the results for rendering
const DisplaAverageRating = (props) => {
    const productId = props.productId;

    const averageRating = UseGetAverageRating(productId);


    //how each review is displayed
    // return all the reviews here
    if (averageRating <= 0) {
        return (
            <div>
                <p>No Reviews/Ratings</p>
            </div>
        )
    } else {
        return (
            <div>
            <dd>Average Rating: {averageRating}</dd>
        </div>
        )
    }

}

export default DisplaAverageRating;