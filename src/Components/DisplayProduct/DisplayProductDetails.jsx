import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


class DisplayProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
        }
    }

    componentDidMount() {
        // gets the user token
        const jwt = localStorage.getItem('token');
        try{
          const user = jwt_decode(jwt);
          this.setState({
            user
          });
        } catch {
    
        }
      }


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