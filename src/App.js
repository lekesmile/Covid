import React from "react";
import "./App.css";
import Subhead from "./components/Subhead";
import LineChart from "./components/LineChart";
import LineDemo from "./components/LineDemo";

function App() {
  return (
    <div className="App">
      <h1 className="App__h1">Stay uptodate with Covid-19</h1>
      <Subhead />
      <LineChart />
      <LineDemo />
    </div>
  );
}

export default App;
