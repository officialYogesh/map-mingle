import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon } from "leaflet";

const Map = () => {
  const [markers] = useState([
    {
      geocode: [33.97791908665812, -117.33147563686414],
      popUp: "Getaway Cafe",
    },
    {
      geocode: [33.974738370122274, -117.32818699929638],
      popUp: "The Habit Burger Grill",
    },
    {
      geocode: [33.975251919150686, -117.33806951443785],
      popUp: "Mongolian BBQ",
    },
    {
      geocode: [33.97287587241276, -117.33054502552945],
      popUp: "The Barn",
    },
    {
      geocode: [33.97761408780611, -117.3382975261192],
      popUp: "Cravin' Crab Haus",
    },
  ]);

  const customMarkerIcon = new Icon({
    iconUrl: require("../img/marker-icon.png"),
    iconSize: [38, 38],
  });

  return (
    <MapContainer center={[33.97386562552932, -117.32761379253915]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker) => (
          <Marker
            key={marker.geocode}
            position={marker.geocode}
            icon={customMarkerIcon}
          >
            <Popup>
              {marker.popUp} <br />
              Location: {marker.geocode[0]}, {marker.geocode[1]}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
