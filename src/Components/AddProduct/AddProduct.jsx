import React, {Component} from 'react';
import axios from 'axios';

import './AddProduct.css';


// this class allows a user to add new products to sell on the website
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName: '',
            productPrice: '',
            productDescription: '',
            categoryId: '',
        }
    }

    // request to add product to database
    async addProductRequest(product){
        const newProduct = {
            ProductName: product.productName,
            ProductDescription: product.productDescription,
            ProductPrice: product.productPrice,
            CategoryId: product.categoryId
        }
        let {response} = await axios.post('https://localhost:44394/api/product/add', newProduct);
    }
    
    // stores form input
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === "number"? event.target.valueAsNumber : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addProductRequest(this.state);
    };

    // display add product form
    render() { 
        const productName = this.state.productName;
        const productPrice = this.state.productPrice;
        const productDescription = this.state.productDescription;
        const categoryId = this.state.categoryId;
        return (
            <div>
                <div>
                    <h3>Add a product to sell!</h3>
                </div>
                <div class="input-group mb-3">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <input name="productName" type="text" placeholder="Product Name" value={productName} onChange={this.handleChange} class="form-control mt-5" /> <br></br>
                        <input name="productPrice" type="number" placeholder="Price" value={productPrice} onChange={this.handleChange} class="form-control" /> <br></br>
                        <input name="productDescription" type="text" placeholder="Description" value={productDescription} onChange={this.handleChange} class="form-control" /> <br></br>
                        <input name="categoryId" type="number" placeholder="CategoryId" value={categoryId} onChange={this.handleChange} class="form-control"/> <br></br>

                        <button id="addProductButton" type="submit" >Submit New Product</button>
                    </form>
                </div>
            </div>
            
         );
    }
}
 
export default AddProduct;