import axios from 'axios';
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';


const DisplaySearch = (props) => {
    const searchResults = props.results;

    const showProducts = searchResults.products.map((item) => {
        const product = {
           productName: item.productName,
           productPrice: item.productPrice,
           productDescription: item.productDescription,
           productId: item.productId,
        };

        async function getProductRatingReview(productId) {
            try {
                let response = await axios.get(`https://localhost:44394/api/review/${productId}`);
                return response.data;
            } catch (ex) {
                console.log("API call failed");
            }
        }


        // render the page based on searchterm and results
        return (
            <div>
                {/* Show product details */}
                <ListGroupItem>
                    <p>{product.productName}, ${product.productPrice}</p>
                    <p>Description:  {product.productDescription}</p>
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