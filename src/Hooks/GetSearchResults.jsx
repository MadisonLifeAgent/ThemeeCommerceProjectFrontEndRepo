// react imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// this hook gets search results using searchTerm which is passed in from the searchbar and searchresultspage

const GetSearchResults = (incomingUrl) => {
    // this sets the query results
    let [searchResults, setSearchResults] = useState([]);

    // query the backend for results
    async function getSearch(url) {
        const response = await axios.get(url);
        console.log("searchResults");
        console.log(response.data);

        if (response.data) {
            setSearchResults(response.data);
        }
    }

    // start getting the data as soon as this hook is called
    useEffect(() => {
        getSearch(incomingUrl)
    }, [])

    // return the searchResults
    return [searchResults];
}

export default GetSearchResults;