import React, { Component } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';


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
      if (response){
          let results = response.data;
          console.log("good api call");
          console.log(response.data);
          return results;
        }
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
      <h2>Hello {this.state.user.username}</h2>

        {/* Displays search form */}
        <div>
            <form onSubmit = {this.handleSubmit}>
              <input name="searchTerm" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
        </div>

        {/* Displays search form and results
        <SearchResults getSearchResults={this.getSearchResults} /> */}
      </div>
    );
  }

  
}


export default Search;