import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import { Route, Link } from 'react-router-dom';


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
                        <button><Route path={`/product/${product.productName}`} component={DisplayProduct} product={product} /><Link to={`/product/${product.productName}`}>View Product</Link></button>
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