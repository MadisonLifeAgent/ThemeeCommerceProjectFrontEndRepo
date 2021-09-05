import React from 'react';


function DisplayProductDetails(props) {
    const productDetails = props.productDetails;

    async function getProductDetails(id){
        try{
            let response = await axios.get(`https://localhost:44394/api/product/${id}`);
            let productDetails = response.data;
            return productDetails;
        } catch(ex) {
            console.log("api call failed");
        }
    }

    return (
        <div>
            <dl>
                {/*                    <DisplayProductDetails productDetails={getProductDetails(details.productId)} /> */} 
                <dt>Product Name {props.productDetails.productName}</dt>
                <dd>Price: ${productDetails.productPrice}</dd>
            </dl>
        </div>
    )
}
export default DisplayProductDetails;