// react imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//this hook gets product details
const UseGetProductDetails = (productId) => {
    const [productDetails, setProductDetails] = useState({});

    // get product details
    async function getproductDetails(pId) {
        let {response} = await axios.get(`https://localhost:44394/api/product/${pId}`);
        
        if (response.data) {
            console.log("product details");
            console.log(response.data);

            setProductDetails(response.data);
        }
        else {
            console.log("Bad Call");
        }
    }
    // try to get the product details as soon as called
    useEffect(() => {
        getproductDetails(productId);
    },)

    return [productDetails];
}

export default UseGetProductDetails;