import React from "react";
import { Nav } from "./components/Nav";
import { Display } from "./components/Display";
import { Pad } from "./components/Pad";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Display />
      <Pad />
    </div>
  );
}

export default App;
