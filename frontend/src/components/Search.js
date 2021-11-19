import React from "react";

const Search = ({ handleSearch, searchTerm }) => {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input
        value={searchTerm}
        onChange={handleSearch}
        id="search"
        type="text"
      />
    </>
  );
};

export default Search;
