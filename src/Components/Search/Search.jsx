import React, { Component } from 'react';
import SearchResults from './SearchResults';
import axios from 'axios';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      products: {},
      category: '',
      searchTerm: "",
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
        [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
      console.log(this.searchTerm);
      event.preventDefault();
      this.getSearchResults(this.state.products);
  };

  async getSearchResults(results){
    try{
      let response = await axios.get(`https://localhost:44394/api/product/searchresults/${this.searchTerm}`);
      // set results
      if (response){
          let results = response.data;
          console.log("good api call");
          return results;
        }
    }
    catch(ex){
        console.log("bad call");
    }
}

  render() {
    return(
      <div>
      <h2>Hello {this.state.user.username}</h2>

        {/* Displays search form */}
        <div>
            <form>
              <input name="searchTerm" type="text" placeholder="Search Term" value={this.state.searchTerm} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
        </div>

        {/* Displays search form and results*/}
        <SearchResults getSearchResults={this.getSearchResults} />
      </div>
    );
  }

  
}


export default Search;