import React, { Component } from 'react';


class DisplayProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
        }
    }

    componentDidMount() {
    }

/*     async function getProductDetails(id){
        try{
            let response = await axios.get(`https://localhost:44394/api/product/${id}`);
            let productDetails = response.data;
            return productDetails;
        } catch(ex) {
            console.log("api call failed");
        }
    } */

    render (){
        return(
            <div>
                <dl>
                    {/*Display product details */} 
                    <dt>Product Name {this.state.item.productName}</dt>
                    <dd>Price: ${this.state.item.productPrice}</dd>
                </dl>
            </div>
        );
    }
}
export default DisplayProductDetails;