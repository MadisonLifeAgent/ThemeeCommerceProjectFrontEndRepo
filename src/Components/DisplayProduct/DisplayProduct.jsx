import React from 'react';

const DisplayProduct = (props) => {
    const product = props.product;
    console.log(product.productName)
    return (
        <div>
            <h1>Hello</h1>
            <h2>{product.productName}</h2>
        </div>
    )
}
export default DisplayProduct;