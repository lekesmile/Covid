import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
const Map = () => {
  const state = {
    lat: 60.192,
    lng: 24.945,
    zoom: 13,
  };
  const position = [state.lat, state.lng];
  return (
    <div className="Map__main">
      <h5>Map</h5>
      <div className="map">
        <LeafletMap center={position} zoom={state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LeafletMap>
      </div>
    </div>
  );
};

export default Map;
