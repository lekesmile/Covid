import React from "react";
import "./App.css";
import Subhead from "./components/Subhead";
import LineChart from "./components/LineChart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <div className="App__h1">
        <h1>Stay uptodate with Covid-19</h1>
      </div>
      <Subhead />
      <LineChart />
      <Footer />
    </div>
  );
}

export default App;
