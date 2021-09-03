import React, {Component} from 'react';
import axios from 'axios';


class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName: '',
            productPrice: '',
            productDescription: '',
            category: '',
            categoryId: null
         }
    }

    async addProductRequest(product){
         
        let response = await axios.post('https://localhost:44394/api/product/add', product)
        this.setState({
            product: response.data
        })
        console.log(response.data)
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addProductRequest(this.state)
    };

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="productName" type="text" placeholder="Product Name" value={this.state.productName} onChange={this.handleChange} /> <br></br>
                    <input name="productPrice" type="int" placeholder="Price" value={this.state.productPrice} onChange={this.handleChange} /> <br></br>
                    <input name="productDescription" type="text" placeholder="Description" value={this.state.productDescription} onChange={this.handleChange} /> <br></br>
                    <input name="category" type="text" placeholder="Category" value={this.state.category} onChange={this.handleChange} /> <br></br>
                    <input name="categoryId" type="int" placeholder="CategoryId" value={this.state.categoryId} onChange={this.handleChange} /> <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
            
         );
    }
}
 
export default ListProduct;