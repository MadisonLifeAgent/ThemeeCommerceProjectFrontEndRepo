import React, { Component } from 'react';
import axios from 'axios';
import DisplayProduct from '../DisplayProduct/DisplayProduct';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: props.user,
            productsInCart: [],
            productDetails: []
         }
         
    }
    

    componentDidMount() {
        this.getEntireCart(this.state.user.id)
        this.getSingleProduct(this.state.productsInCart)
    }
    
    //GET requires id(user) use stringconcat
    async getEntireCart(id){
        
        try{
            let response = await axios.get(`https://localhost:44394/api/shoppingcart/${id}`)
            console.log(response.data)
            this.setState({
                productsInCart: response.data
            })
        }
        catch(ex){
            console.log(ex)
        }
    }
    
    
    async getSingleProduct(productId){
        const productIds = productId.productId
        console.log(productId)
        for (const id in productIds){
            let response = await axios.get(`https://localhost:44394/api/product/${id}`)
            console.log(response.data)
            this.setState({
                productDetails: response.data
            })
        }
            
        
            
            
            
        
        
    }

    
    render() { 
        return ( 
            <div>
                <h1> {this.state.user.id} </h1>
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>
         );
    }
}
    
export default ShoppingCart;
    
    
    
    
    

    
    
//POST requires id(user) and productId and quantity
    // async addItemToCart(product){
    //     try{
    //         let response = await axios.post('https://localhost:44394/api/shoppingcart/add', product)
    //     }
    //     catch(ex){
    //         console.log(ex)
    //     }
    // }
    
    //DELETE requires product id in url followed by id(user) use stringconcat
    // async deleteItemFromCart(productIden, userIden){
    //     try{
    //         let response = await axios.delete(`https://localhost:44394/api/shoppingcart/${productIden}/${userIden}`)
    //     }
    //     catch(ex){
    //         console.log(ex)
    //     }
    // }
    
    
    
    
    
 
