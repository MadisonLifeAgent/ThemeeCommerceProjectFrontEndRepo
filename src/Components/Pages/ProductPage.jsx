// react imports
import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';

//component imports
import UseGetProductDetails from "../../Hooks/UseGetProductDetails";

// this component displays one product's details
const ProductPage = (props) => {

   const [product] = UseGetProductDetails(props.productId);

   console.log(product);

/*    const showProduct = product.map((item) => {
       const aProduct ={
        productId: item.productId,
        productName: item.productName,
        productPrice: item.productPrice,
        productDescription: item.productDescription,
        //categoryName: item.category.categoryName,
       };
       return (
        <div>
            <h1>Test</h1>
            <h3>{product.productName}</h3>
        </div>
        )


   }) */

   return (

        <div>
            {product.productName}
        </div>
   )

    // get product details
    //const { getproductDetails } = UseGetProductDetails(productId);

    // how product details will be stored/set
    //const [productDetails, setProductDetails] = useState({});

    // get product details as soon as page is loaded
/*     useEffect(() => {
        setProductDetails(storeProductDetails);
    },[]) */

}

export default ProductPage;