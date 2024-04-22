import { useState , useContext} from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./Search.css"
import { useSearch } from "../../context/SearchContext";

function Search() {
    
    const {search, flag, query, setFlag, setQuery,setResults} = useSearch();


    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const cancelSearch =() =>{
        setQuery('');
        setFlag(!flag);
        setResults([]);
    }

    const handleSubmit =() => {
        if(query) {
            search();
        }
    } 

    return(
        <div className="search_form">
            <input 
                type="text"
                value={query}
                onChange ={handleChange}
                placeholder="search for movies"
                className="search_input"
            
            />

            {flag && <button type="button" className="cancel_button" onClick={cancelSearch}>X</button>}
            {!flag && <button type="button" className="search_button" onClick={handleSubmit}>Search</button>}
        </div>
    )
}

export default Search;