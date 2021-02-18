import React from "react";
import "./App.css";
import { Top100List } from "./features/charts/list/chartList";
import Homepage from "./features/homepage/homepage"
import NavBar from "./features/nav-bar/nav-bar"
function App() {
  return (
    <div className="App bg-gray-300">
      <NavBar  />
      <Homepage />
    </div>
  );
}

export default App;
