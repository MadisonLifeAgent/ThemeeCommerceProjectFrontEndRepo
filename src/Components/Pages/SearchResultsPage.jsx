// react imports
import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

// components 
import GetSearchResults from '../../Hooks/GetSearchResults';  // this is the hook to get searchresults
import SearchResults from '../SearchResults/SearchResults';
import './SearchResultsPage.css';

// 
const SearchResultsPage = (props) => {
    // call the hook to get search results and store the results
    let [resultsData] = GetSearchResults(`https://localhost:44394/api/product/searchresults/${props.searchTerm}`);

    console.log(resultsData);

    // useState to set the results
    let [searchResults, setSearchResults] = useState([]);

    // useEffect - only triggers if there is resultsData
    useEffect(() => {
         // check the results to make sure data is returned
        if (resultsData) {
            setSearchResults(resultsData);
        }
    }, [resultsData])

    // display if results returned
    if (searchResults.length > 0) {
        console.log(searchResults); //show data was passed from query to component
        return (
            <div id="searchResultsPage">
                <p>Results for "{props.searchTerm}"</p>
                
                {/* Call function to map over results otherwise it won't display properly */}
                <SearchResults searchResults={searchResults} />
            </div>
        )
    }
    // display no results message
    else if (searchResults.length === 0) {
        return (
            <div id="searchResultsPage">
                <h3>Loading Results for "{props.searchTerm}"</h3>
            </div>
        )
    }
    // display loading message if still loading results
    else {
        return (
            <div id="searchResultsPage">
                <h3>No Results for "{props.searchTerm}"</h3>
            </div>
        )
    }

}

export default SearchResultsPage;
