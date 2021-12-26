import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Icon from "./Icon";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
const MapComponent = ({ data }) => {
  function SetView({ coords }) {
    const map = useMap();
    console.log(map);
    map.setView(coords, 12);
    return null;
  }
  return (
    <MapContainer center={[40.8054, -74.0241]} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={
          data
            ? [Number(data.location.lat), Number(data.location.lng)]
            : [40.8054, -74.0241]
        }
        draggable={true}
        animate={true}
        icon={Icon}
      >
        <Popup>Hey ! I live here</Popup>
      </Marker>
      <SetView
        coords={
          data
            ? [Number(data.location.lat), Number(data.location.lng)]
            : [40.8054, -74.0241]
        }
      />
    </MapContainer>
  );
};

export default MapComponent;
