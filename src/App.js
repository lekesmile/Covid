import React from "react";
import "./App.css";
import Subhead from "./components/Subhead";
import LineChart from "./components/LineChart";
import Footer from "./components/Footer";
import Map from "./components/Map";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App ">
      <div className="App__h1">
        <h1>Stay upto ndate with Covid-19</h1>
      </div>
      <Subhead />
      <LineChart />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
