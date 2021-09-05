import React from 'react';

const DisplayProduct = (props) => {
    const productsInCart = props.productsInCart;

    const getCartDetails = productsInCart.map((item) => {
        const details = {
            productId: item.productId,
            productQuantity: item.quantity,
        };
        console.log(details.productId);
        console.log("quantity: " + details.productQuantity);
    })
    return (
        <div>
            Items go here
        </div>
    )
}
export default DisplayProduct;