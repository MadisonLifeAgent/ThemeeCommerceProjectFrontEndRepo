// react imports
import React from 'react';
import { Route, Link } from 'react-router-dom';

import UseGetProductDetails from "../../Hooks/UseGetProductDetails";
import ProductPage from '../Pages/ProductPage';
import AddReviewDisplay from '../AddReview/AddReviewDisplay';


// component imports
import DisplayProductReviews from '../DisplayProduct/DisplayProductReviews';
import DisplaAverageRating from '../DisplayProduct/DisplayAverageRating'; 

const SearchResults = (props) => {
    const searchResults = props.searchResults;

    // loop through the searchResults so products can be displayed one at a time
    const showProducts = searchResults.map((item) => {
        const product = {
            productId: item.productId,
            productName: item.productName,
            productPrice: item.productPrice,
            productDescription: item.productDescription,
            categoryName: item.category.categoryName,
        };

        // how each product is displayed 
        return (
            <div>
                <dl>
                    <Link to={`/product/${product.productId}`} product={product}>
                        <Route path='/product/:productId' render={props => <ProductPage {...props} UseGetProductDetails={UseGetProductDetails} productId={product.productId} />} />
                        <dt>Product Name: {product.productName}</dt>
                    </Link>
                        <dd>Price:  {product.productPrice}</dd>
                        <dd>Category: {product.categoryName}</dd>
                        <dd>Description: {product.productDescription}</dd>
                        <AddReviewDisplay product={product} />
                    <dt>Product Name: {product.productName}</dt>
                        <dd>Price:  ${product.productPrice}</dd>
                        <dd>Category: {product.categoryName}</dd>
                        <dd>Description: {product.productDescription}</dd>

                        {/* Get a product's average rating and reviews and displays them here*/}
                        <DisplaAverageRating productId={product.productId} />
                        <DisplayProductReviews productId={product.productId} />
                </dl>
            </div>
        )
    })

    // all products get rendered here as a whole
    return (
        <div>
            {showProducts}
        </div>
    )
}

export default SearchResults;