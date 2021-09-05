import React from 'react';

const DisplayProduct = (props) => {
    const productsInCart = props.productsInCart;

    const cartDetails = productsInCart.map((item) => {
        const details = {
            productId: item.productId,
            productName: item.product.productName,
            productPrice: item.product.productPrice,
            productQuantity: item.quantity,
        };

        return (
            <div>
                <dl class="border">
                    <dt>Product Name: {details.productName}</dt>
                        <dd>Price: ${details.productPrice}</dd>
                        <dd>Quantity: {details.productQuantity}</dd>
                </dl>
            </div>
        )
    });
    return(
        <div>
            {cartDetails}
        </div>
    )
    
}
export default DisplayProduct;