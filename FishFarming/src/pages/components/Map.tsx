import React, {useRef} from "react";
import { MapContainer, TileLayer, useMap, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends React.Component {
  render() {
    return(
      <div>
        <MapContainer center={{lat: this.props.lat, lon: this.props.lon}} zoom={13} setView={true} scrollWheelZoom={false} style={{height: "100vh", width:"100vh"}} >
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={{lat: this.props.lat, lon: this.props.lon}} />
        </MapContainer>
      </div>
    );
  }
}

export default Map;