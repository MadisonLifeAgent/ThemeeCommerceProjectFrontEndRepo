import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const DisplaySearch = (props) => {
   const searchResults = props.results;
    
   const showProdcuts = searchResults.products.map((item) => {
       const product = {
           productName: item.productName,
           productPrice: item.productPrice,
           productDescription: item.productDescription
       };

       // render the page based on searchterm and results
       if (searchResults){
           return (
                <div>
                    <h3>Search Results for "{searchResults.searchTerm}"</h3>

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
                                    <p>Reviews and Ratings:</p>
                                    <dl>
                                        <dt></dt>
                                            <dd></dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </ListGroupItem>
                </div>
           )
       } else {
            return (
                <h3>No Results for "{searchResults.searchTerm}"</h3>
        )
       }

   })
    
    return ( 
        <div>
            <ListGroup>
                {showProdcuts}
            </ListGroup>
        </div>
     );
}
 
export default DisplaySearch;