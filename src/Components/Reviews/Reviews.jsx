import React from 'react';
import axios from 'axios';


const Reviews = (props) => {
    const productId = props.productId;

    async function getProductRatingReview(productId) {
        console.log(productId);
        try {
            let response = await axios.get(`https://localhost:44394/api/review/${productId}`);
            return response.data;
        } catch (ex) {
            console.log("API call failed");
        }
    }

    const reviews = getProductRatingReview(productId);

    // map the ratings and reviews so they can be displayed with each product
    const showReviews = reviews.map((item) => {
        const review = {
            rating: item.rating,
            reviewBody: item.reviewBody,
        };

        return (
            <dl>
                <dt>{review.rating}</dt>
                <dd>{review.reviewBody}</dd>
            </dl>
        )
    });

    return ( 
        <div>
            {/* display review and ra details */}
            <h3>Product Reviews/Ratings</h3>
                {showReviews}
        </div>
    );
}

export default Reviews;