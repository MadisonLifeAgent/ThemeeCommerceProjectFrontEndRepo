import axios from 'axios';
import React from 'react';

// this hook adds/posts the user review
const UseAddReview = (reviewBody) => {
    async function postReview(body) {
        let response = await axios.post('https://localhost:44394/api/review/add', body);
        
        if (response) {
            console.log("good api call");
        }
        else {
            console.log("bad api call");
        }
    }
    // call the axios function
    postReview(reviewBody)
}

export default UseAddReview;