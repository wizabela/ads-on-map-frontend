import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icons';

import 'leaflet/dist/leaflet.css'
import './Map.css'

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[52.2012031, 20.9614427]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[52.2012031, 20.9614427]}>
                    <Popup>
                        <h2>Park Szczęśliwicki</h2>
                        <p>Super park na spacery</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
};