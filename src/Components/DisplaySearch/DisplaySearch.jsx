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

       return (
           <div>
                    <ListGroupItem>
                        {product.productName}
                        {product.productPrice}
                        {product.productDescription}
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