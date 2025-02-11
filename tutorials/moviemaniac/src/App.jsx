import React, { BrowserRouter, Route } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AllRouting from "./AllRouting";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app_main">
        <AllRouting />
      </main>
    </div>
  );
};

export default App;
