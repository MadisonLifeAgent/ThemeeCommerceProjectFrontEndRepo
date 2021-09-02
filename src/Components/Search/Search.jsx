import React from 'react';
import axios from 'axios';

const Search = (props) => {
  const user = props.user;
  

  async function getAllProducts(){
    try{
        let response = await axios.get('https://localhost:44394/api/product/');
        this.setState({
            products: response.data
        });
        console.log(this.state.products.productName[0]);
    }
    catch(ex){
        console.log(ex);
    }
  }
  
    return (
      <div>
        <h2>{getAllProducts}</h2>

        </div>

    );


  
}


export default Search;