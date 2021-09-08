import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import DisplaySearchResults from '../DisplaySearchResults/DisplaySearchResults';




class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      products: [],
      searchTerm: '',
    }
  }

  
  componentDidMount() {
    // gets the user token
      this.setState({
      });  
  }

  async getSearchResults(searchInfo){
    try{
      let searchTerm = searchInfo.searchTerm;
      
      let response = await axios.get(`https://localhost:44394/api/product/searchresults/${searchTerm}`);
      console.log(response.data);
      // set results
      this.setState({
        products: response.data,
      }) 
    }
    catch(ex){
        console.log("bad call");
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
      event.preventDefault();
      let data = this.getSearchResults(this.state);
      this.setState({
        products: data,
      })
  };


  render() {
    if (this.state.products.length > 0) {
      return (
        <Route path='/searchresults' 
          render={props => {
            return <DisplaySearchResults {...props} info={this.state} /> }} />
      )
    }
      return(
        <div>
            {/* Displays search form */}
            <div>
                <form onSubmit = {this.handleSubmit}>
                  <input name="searchTerm" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                  <input type="submit" value="Search" />
                </form>
            </div>
  
        
          </div>
      );
    

  }

  
}


export default Search;