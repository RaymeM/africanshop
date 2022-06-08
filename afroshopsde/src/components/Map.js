import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "../App.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Search from "../components/Search";
import SearchLeaflet from "../components/SearchLeaflet";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Map() {
 
  const position = [51.37638483311173, 7.696039042002252];
  

  const posObj = [
      {
        name: "Afroland",
        lat: 51.37601901111738,
        lng: 7.694696698597307,
        email: "afroland@gmail.com",
        phone: "0176 75202144",
        detail: "General African products"
      },
      {
        name: "Friseur Hairtrends",
        lat: 51.37347350931192,
        lng: 7.703573827433566,
        email: "-",
        phone: "02371 788730",
        detail: "Hair salon"
      },
      {
        name: "Afro Shop Becky",
        lat: 51.359387791380534,  
        lng: 7.4612658587855,
        email: "-",
        phone: "02331 3067003",
        detail: "Hair salon"
      },
      {
        name: "Afro World Dortmund",
        lat: 51.52413481709894, 
        lng: 7.480039130421862,
        email: "-",
        phone: "0231 4759235",
        detail: "African goods store"
      },
      {
        name: "AfroShop Fouta",
        lat: 51.52263494242923,
        lng:  7.477262530019894, 
        email: "-",
        phone: "0231 53098523",
        detail: "African goods store"
      },
      {
        name: "Alpha and Omega International Afro Shop",
        lat: 52.48831290524142, 
        lng: 13.426293642506666,
        email: "-",
        phone: "030 61624972",
        detail: "Wholesaler of African goods"
      },
      {
        name: "Max Afro Shop",
        lat: 52.48495715345721, 
        lng:  13.428293040660224, 
        email: "-",
        phone: "030 53606308",
        detail: "African goods store"
      },
      {
        name: "Miss Selli's Afroshop",
        lat: 52.54908896014544, 
        lng:  13.349914056002838, 
        email: "-",
        phone: "030 32594395",
        detail: "Beauty salon"
      },
      {
        name: "Asia & Afroshop",
        lat: 52.545812675161805, 
        lng:  13.35092105194194, 
        email: "-",
        phone: "030 62708505",
        detail: "African goods store / Beauty salon"
      },
      {
        name: "Exo-markt Afro Shop",
        lat: 52.567382676232405, 
        lng:  13.329404940662549,
        email: "-",
        phone: "030 95625817",
        detail: "general store"
      },
  ]

  return (
    <>
      
      <div className="leaflet-container">
        <MapContainer height={100} center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
         
          {/* {allPositions.map(pos => (
            <Marker position={}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          ) ) } */}
          {posObj.map((pos) => (
            <Marker position={[pos.lat, pos.lng]}>
            <Popup>
              <h3>{pos.name}</h3>
              <h4>{pos.detail}</h4>
              <h4>{pos.email}</h4>
              <h4>{pos.phone}</h4>
            </Popup>
          </Marker>
          ))}
          <SearchLeaflet/>
        </MapContainer>
      </div>
    </>
  );
}