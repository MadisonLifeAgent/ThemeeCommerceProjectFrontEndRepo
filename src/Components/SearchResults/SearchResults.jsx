// react imports
import React from 'react';
import { Route, Link } from 'react-router-dom';

import UseGetProductDetails from "../../Hooks/UseGetProductDetails";
import AddReviewDisplay from '../AddReview/AddReviewDisplay';


// component imports
import DisplayProductReviews from '../DisplayProduct/DisplayProductReviews';
import DisplaAverageRating from '../DisplayProduct/DisplayAverageRating'; 
import { ListGroupItem } from 'react-bootstrap';
import './SearchResults';

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
            <div class="border border-dark p-2 m-2">
                <dl>
                    <dt>Product Name: {product.productName}</dt>
                        <dd>Price:  ${product.productPrice}</dd>
                        <dd>Category: {product.categoryName}</dd>
                        <dd>Description: {product.productDescription}</dd>

                        {/* Get a product's average rating and reviews and displays them here*/}
                        <DisplaAverageRating productId={product.productId} />
                        <DisplayProductReviews productId={product.productId} />
                </dl>
                    {/* form to add a review/rating */}
                    <AddReviewDisplay product={product} />
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