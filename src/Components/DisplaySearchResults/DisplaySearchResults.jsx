import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

// display search results
const DisplaySearchResults = (props) => {
    const searchResults = props.results;

    // maps through all products from search and displays one at a time
    const showProducts = searchResults.products.map((item) => {
        const product = {
           entireProduct: item,
        };


        // render the page based on searchterm and results
        return (
            <div>
                    {/* Show product details */}
                    <ListGroupItem>
                        <dt>{product.entireProduct.productName} </dt>
                        <dd>Sale Price: ${product.entireProduct.productPrice}</dd>
                        {/* Show product details on button click*/}
                        <p>
                            <a class="btn btn-info" data-bs-toggle="collapse" href={`#collapse${product.entireProduct.productId}`} role="button" aria-expanded="false" aria-controls={`collapse${product.entireProduct.productId}`}>
                                View Product Details
                            </a>
                        </p>
                        <div class="collapse" id={`collapse${product.entireProduct.productId}`}>
                            <div class="card card-body">
                                <dt>Product Description</dt>
                                    <dd>Category: {product.entireProduct.category.categoryName}</dd>
                                    <dd>{product.entireProduct.productDescription}</dd>
                            </div>
                        </div>

                    </ListGroupItem>
            </div>
        )

    });
    
    return ( 
        <div>
            <h3>Search Results for "{searchResults.searchTerm}"</h3>
            <ListGroup>
                {showProducts}
            </ListGroup>
        </div>
     );
}
 
export default DisplaySearchResults;