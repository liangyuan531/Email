import React from "react";
import NavBar from "./Nav";
import SearchBar from "./SearchBar";
import OperationBar from "./OperationBar";

const Screen = () => {
  return (
    <div className="screen">
      <NavBar />
      <SearchBar />
      <OperationBar />
    </div>
  );
};

export default Screen;
