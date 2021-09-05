import React, { Component } from 'react';
import axios from 'axios';
import DisplaySearchResults from '../DisplaySearchResults/DisplaySearchResults';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      products: [],
      category: '',
      searchTerm: '',
    }
  }

  async getSearchResults(searchInfo){
    try{
      let searchTerm = searchInfo.searchTerm;
      
      let response = await axios.get(`https://localhost:44394/api/product/searchresults/${searchTerm}`);
      // set results
      this.setState({
        products: response.data
        
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
      this.getSearchResults(this.state);
  };


  render() {
    return(
      <div>
          {/* Displays search form */}
          <div>
              <form onSubmit = {this.handleSubmit}>
                <input name="searchTerm" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                <input type="submit" value="Search" />
              </form>
          </div>
        <DisplaySearchResults results={this.state} />
      </div>
    );
  }

  
}


export default Search;