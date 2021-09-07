// react imports
import React, { useEffect, useState }from 'react';
import axios from 'axios';


// this hook gets a single products reviews
const UseGetReviews = (productId) => {
    // where and how reviews will be stored
    let [reviewResults, setReviewResults] = useState([]);

    // queries the backend for reviews and includes userinfo
    async function getReviews(productId) {
        const response = await axios.get(`https://localhost:44394/api/review/${productId}`);

        console.log("reviewResults");
        console.log(response.data);
        // store the response data
        if (response.data) {
            setReviewResults(response.data);
        }
        else {
            console.log("bad call");
        }
    }

    // get the data as soon as this hook is called
    useEffect(() => {
        getReviews(productId);
    }, [])

    // return reviewResults
    return [reviewResults];
}

export default UseGetReviews;