import React from 'react';

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
                    <dt>Product Name: {product.productName}</dt>
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