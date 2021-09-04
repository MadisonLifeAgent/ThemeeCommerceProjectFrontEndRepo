import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useRatingReviews = (url) => {
    //
    let [ratingReviewsData, setRatingReviewsData] = useState({});

    async function getProductRatingReview(url) {
        // get product reviews
        const response = await axios.get(url);
        console.log("call data: " + response.data);
        
        if (response.data) {
            setRatingReviewsData(response.data.rating);
            
        }
        // Expecting a list of reviews/ratings as response data
    }

    // Start getting the data on load
    useEffect(() => {
        getProductRatingReview(url)
    }, [])

    return { ratingReviewsData };
}

export default useRatingReviews;