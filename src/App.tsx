import React from "react";
import "./App.css";
import Homepage from "./features/homepage/homepage"
import NavBar from "./features/nav-bar/nav-bar"
function App() {
  return (
    <div className="App bg-gray-900 text-white ">
      <NavBar  />
      <Homepage />
    </div>
  );
}

export default App;
