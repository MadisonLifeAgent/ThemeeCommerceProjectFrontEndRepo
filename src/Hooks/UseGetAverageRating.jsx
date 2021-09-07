// react imports
import React, { useEffect, useState }from 'react';
import axios from 'axios';


// this hook gets a single products reviews
const UseGetReviews = (productId) => {
    // where and how reviews will be stored
    let [averageRating, setAverageRating] = useState([]);

    // queries the backend for reviews and includes userinfo
    async function getAverageRating(productId) {
        const response = await axios.get(`https://localhost:44394/api/review/averagerating${productId}`);

        console.log("reviewResults");
        console.log(response.data);
        // store the response data
        if (response.data) {
            setAverageRating(response.data);
        }
        else {
            console.log("bad call");
        }
    }

    // get the data as soon as this hook is called
    useEffect(() => {
        getAverageRating(productId);
    }, [])

    // return reviewResults
    return [averageRating];
}

export default UseGetReviews;