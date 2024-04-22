import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/requests";

export const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Run this code only once when the component mounts
    setLoading(false);
  }, []);

  const search = () => {
    axios.get(`${requests.search}&query=${query}`).then((response) => {
      setResults(response.data.results);
      setFlag(!flag);
    });
  };

  return (
    <SearchContext.Provider
      value={{ query, results, flag, loading, search, setFlag, setQuery, setResults, setLoading }}
    >
      {children}
    </SearchContext.Provider>
  );
};
