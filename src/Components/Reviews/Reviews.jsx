import React from 'react';

function Reviews (props) {
    const product = props.product;

    const productId = product.productId;

    // get ratings and reviews
    let productRatingReviews = props.getProductRatingReview(productId);

    // map the ratings and reviews so they can be displayed with each product
    const showReviewsRatings = productRatingReviews.reviewBody.map((item) => {
        const rating = {
            rating: item.rating,
            reviewBody: item.reviewBody,
        };

        return (
            <dl>
                <dt>{rating.rating}</dt>
                <dd>{rating.reviewBody}</dd>
            </dl>
        )
    });

    return ( 
        <div>
            {/* display review and ra details */}
            <h3>Product Reviews/Ratings</h3>
                {showReviewsRatings}
        </div>
    );
}

export default Reviews;