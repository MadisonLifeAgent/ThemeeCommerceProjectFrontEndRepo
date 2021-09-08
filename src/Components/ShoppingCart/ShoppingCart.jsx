import React, { Component } from 'react';
import axios from 'axios';
import DisplayProduct from '../DisplayProduct/DisplayProduct';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: props.user,
            productsInCart: [],
         }
    }
    
    //GET requires id(user) use stringconcat
    async getEntireCart(id){
        
        try{
            let response = await axios.get(`https://localhost:44394/api/shoppingcart/${id}`);
            console.log(response.data);
            this.setState({
                productsInCart: response.data,
            })
        }
        catch(ex){
            console.log(ex)
        }
    }

    async makeDeleteRequest(id){
        try{
            let response = await axios.delete(`https://localhost:44394/api/shoppingcart/${id.productId}/${id.userId}`);
            window.location = '/shoppingcart'
        }
        catch(ex){
            console.log(ex);
        }
    }
    


    render()
    
    { 
        this.getEntireCart(this.state.user.id);
        return ( 
            <div class="border border-dark p-2 m-2">
                <h1> {this.state.user.username}'s Shopping Cart </h1>
                    <DisplayProduct productsInCart={this.state.productsInCart} deleteProduct={this.makeDeleteRequest} />
            </div>
         );
    }
}
    
export default ShoppingCart;
