import React from "react";
import "./App.css";
import Subhead from "./components/Subhead";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="App ">
      <div className="App__h1">
        <h1>Stay uptodate with Covid-19</h1>
      </div>
      <Subhead />
      <LineChart />
    </div>
  );
}

export default App;
