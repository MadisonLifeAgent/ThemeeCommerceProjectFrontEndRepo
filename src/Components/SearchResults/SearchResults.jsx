import React from 'react';
import { Route, Link } from 'react-router-dom';

import UseGetProductDetails from "../../Hooks/UseGetProductDetails";
import ProductPage from '../Pages/ProductPage';


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
                        <Route path='/product/:productId' render={props => <ProductPage {...props} productId={product.productId} />} />
                        <dt>Product Name: {product.productName}</dt>
                    </Link>
                        <dd>Price:  {product.productPrice}</dd>
                        <dd>Category: {product.categoryName}</dd>
                        <dd>Description: {product.productDescription}</dd>
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