import React, { useState } from "react";
import { Nav } from "./components/Nav";
import { Display } from "./components/Display";
import { Pad } from "./components/Pad";
import "./styles/app.css";

function App() {
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState(null);

  const numClickHandler = (number) => {
    if (input === '0') {
      setInput(number.toString());
    } else {
      setInput(input + number.toString())
    }
  }
  return (
    <div className="App">
      <Nav />
      <Display />
      <Pad />
    </div>
  );
}

export default App;
