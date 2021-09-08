// react imports
import React from 'react';

// component imports
import UseGetReviews from '../../Hooks/UseGetReviews';


// this componenet gets a products reviews and ratings and maps out the results for rendering
const DisplayProductReviews = (props) => {
    const productId = props.productId;

    const [reviews] = UseGetReviews(productId);

    // map through the reviews and set them for rendering
    const showReviews = reviews.map((item) => {
        const review = {
            reviewbody: item.reviewBody,
        };

        //how each review is displayed
 
            return (
                <div>
                    <dd>"{review.reviewbody}"</dd>
                </div>
            )

    })

    // return all the reviews here
    return (
        <div>
            {showReviews}
        </div>
    )
}

export default DisplayProductReviews;