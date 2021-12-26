import L from "leaflet";
import icon from "../ip-address-tracker-master/images/icon-location.svg";

const Icon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  popupAnchor: [-3, -30],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(35, 50),
//   className: "leaflet-div-icon",
});

export default Icon;
