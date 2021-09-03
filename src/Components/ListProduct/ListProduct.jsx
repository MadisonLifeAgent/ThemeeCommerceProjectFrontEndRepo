import React, {Component} from 'react';
import axios from 'axios';


class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName: '',
            productPrice: '',
            productDescription: '',
            categoryId: '',
            category: ''
            
        }
    }

    async addProductRequest(product){
         
        let response = await axios.post('https://localhost:44394/api/product/add', product)
        
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
        const productName = this.state.productName;
        const productPrice = this.state.productPrice;
        const productDescription = this.state.productDescription;
        const category = this.state.category;
        const categoryId = this.state.categoryId;
        return ( 
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input name="productName" type="text" placeholder="Product Name" value={productName} onChange={this.handleChange} /> <br></br>
                    <input name="productPrice" type="int" placeholder="Price" value={productPrice} onChange={this.handleChange} /> <br></br>
                    <input name="productDescription" type="text" placeholder="Description" value={productDescription} onChange={this.handleChange} /> <br></br>
                    <input name="categoryId" type="int" placeholder="CategoryId" value={categoryId} onChange={this.handleChange} /> <br></br>
                    <input name="category" type="text" placeholder="Category" value={category} onChange={this.handleChange} /> <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>

 
            
            
         );
    }
}
 
export default ListProduct;