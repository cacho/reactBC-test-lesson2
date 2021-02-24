import React from "react";
import "./styles.css";
import useCounter from "./hooks/useCounter";

export default function App() {
  const { counter, increment, incrementAsync } = useCounter(1);
  return (
    <div className="App">
      <h1>Total Count: {counter}</h1>
      <h2>Start hitting the buttons!</h2>
      <button onClick={increment}>+ (sync) </button>
      <br/>
      <br/>
      <button onClick={incrementAsync}>+ (async)</button>
    </div>
  );
}
