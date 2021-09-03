import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const DisplaySearch = (props) => {
   const searchResults = props.results;
    
   const showProdcuts = searchResults.map((item) => {
       const product = {
           productName: item.productName,
           productPrice: item.productPrice,
           productDescription: item.productDescription
       };

    function displayProduct(productName) {
        var popup = document.getElementById("productPopup");
        popup.classList.toggle("show");

    }

       return (
           <div>
                    <ListGroupItem>
                        {product.productName}
                        {product.productPrice}
                        {product.productDescription}
                        <div class="accordion" id="accordionBg">
                            <div class="accordion-item">
                                <h4 class="accordion-header" id="viewMore">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">View More Product Details</button>
                                </h4>
                                <div id="collapseOne" class="accordion-collapse collapse close" aria-labelledby="headingOne" data-bs-parent="#accordionBg">
                                    <p>{product.productName}</p>
                                </div>
                            </div>
                        </div>
                    </ListGroupItem>

           </div>
       )

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