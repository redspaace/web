import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

export default function OrphanagesMap() {
  
  const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],

    popupAnchor: [170, 2]
  });

  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio Grande do Sul</strong>
          <span>Torres</span>
        </footer>
      </aside>

      <Map 
        center={[-29.3171788,-49.7850636]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}>
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />

        <Marker
          position={[-29.3171788,-49.7850636]}
          icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
            Lar das meninas
            <Link to="">
              <FiArrowRight size={20} color='#fff' />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}