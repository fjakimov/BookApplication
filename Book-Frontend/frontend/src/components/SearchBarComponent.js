import React, { useState } from "react";
import "./SearchBar.css";
import {FaSearch} from "react-icons/fa";
export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
      onSearch(searchTerm); 
      setSearchTerm("");
  };

  return (
    <div className="search-bar-wrapper">
      <FaSearch id="search-icon"/>
       <input
        className="search-input"
        type="text"
        placeholder="Search by title, author, or genre"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
