import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>Main Content</main>
    </div>
  );
};

export default App;
