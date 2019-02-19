import React from "react";
import ReactDOM from "react-dom";
import Screen from "./Screen";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Screen />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
