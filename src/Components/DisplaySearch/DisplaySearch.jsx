import axios from 'axios';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const DisplaySearch = (props) => {
   const searchResults = props.results;


   const showProducts = searchResults.products.map((item) => {
       const product = {
           productName: item.productName,
           productPrice: item.productPrice,
           productDescription: item.productDescription,
       };


    async function getProductRatingReview(productId) {
        const response = await axios.get(`https://localhost:44394/api/review/${productId}`);
        console.log(response.data);
        return response.data;
    }

    // get rating and review for product
    const productRatingReview = getProductRatingReview(item.productId);

       // render the page based on searchterm and results
        return (
            <div>
                {/* Show product details */}
                <ListGroupItem>
                    <p>{product.productName}, ${product.productPrice}</p>

                    {/* Show product details */}
                    <div class="accordion" id="accordionBg">
                        <div class="accordion-item">
                            <h4 class="accordion-header" id="viewMore">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">View More Product Details</button>
                            </h4>
                            <div id="collapseOne" class="accordion-collapse collapse close" aria-labelledby="headingOne" data-bs-parent="#accordionBg">
                                <p>Product Category: {product.CategoryName}</p>
                                <p>Product Description:  {product.productDescription}</p>
                                <dl>
                                    <dt>Review:</dt>
                                        <dd>{productRatingReview.reviewBody}</dd>
                                </dl>
                            </div>
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
 
export default DisplaySearch;