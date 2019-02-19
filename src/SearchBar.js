import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React from "react";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="searchIcon">
        <SearchIcon />
      </div>
      <InputBase className="searchInput" placeholder="Search…" />
    </div>
  );
};

export default SearchBar;
