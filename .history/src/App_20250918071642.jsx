import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import Financial from "./components/financial";
import Saving from "./components/Saving";
import Investment from "./components/Investment";
import Project from "./components/Project";
import Ejara from "./components/Ejara";
import Salut from "./components/Salut";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Financial />
      <Salut />
      <Saving />
      <Project />
      <Investment />
      <Ejara />
    </div>
  );
};

export default App;
