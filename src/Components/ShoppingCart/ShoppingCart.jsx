import React, { Component } from 'react';
import axios from 'axios';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: ''

         }
    }


    //POST requires id(user) and productId and quantity
    // async addItemToCart(product){
    //     try{
    //         let response = await axios.post('https://localhost:44394/api/shoppingcart/add', product)
    //     }
    //     catch(ex){
    //         console.log(ex)
    //     }
    // }
    
    
    
    //GET requires id(user) use stringconcat
    async getEntireCart(userId){
        try{
            let response = await axios.get(`https://localhost:44394/api/shoppingcart/${userId}`)
        }
        catch(ex){
            console.log(ex)
        }
    }

    
    
    //DELETE requires product id in url followed by id(user) use stringconcat
    // async deleteItemFromCart(productIden, userIden){
    //     try{
    //         let response = await axios.delete(`https://localhost:44394/api/shoppingcart/${productIden}/${userIden}`)
    //     }
    //     catch(ex){
    //         console.log(ex)
    //     }
    // }
    
    render() { 
        return ( 
            <h1> hello </h1>
         );
    }
}
    
    
    
    
    
    
    
    
    
    
 
export default ShoppingCart;