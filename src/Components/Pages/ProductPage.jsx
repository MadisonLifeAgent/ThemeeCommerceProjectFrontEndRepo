// react imports
import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';

//component imports
import UseGetProductDetails from "../../Hooks/UseGetProductDetails";

// this component displays one product's details
const ProductPage = (props) => {

   var { productId } = props.productId;

    // get product details
    const { getproductDetails } = UseGetProductDetails(productId);

    // how product details will be stored/set
    const [productDetails, setProductDetails] = useState({});

    // get product details as soon as page is loaded
    useEffect(() => {
        setProductDetails(getproductDetails);
    },[])

    if (getproductDetails.length > 0) {
        return (
            <div>
                <h1>Test</h1>
                <h3>{productDetails.productName}</h3>
            </div>
        )
    }
    else {
        return (
            <div>
                <Redirect to='/' />
           </div>
        )
    }
}

export default ProductPage;