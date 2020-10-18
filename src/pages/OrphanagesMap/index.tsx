import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FiPlus, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../../services/api';

import happyMapIcon from '../../utils/happyMapIcon';
import mapMarkerImg from '../../assets/map-marker.svg';

import { Container, Aside, Header, Footer, LinkButton } from './styles';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const { title } = useContext(ThemeContext);

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    async function loadOrphanages() {
      const response = await api.get('orphanages');

      setOrphanages(response.data);
    }

    loadOrphanages();
  }, []);

  return (
    <Container>
      <Aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <div>
            <strong>Rio de Janeiro</strong>
            <span>Queimados</span>
          </div>

          <Link to="/">
            <FiArrowLeft size={20} color="#fff" />
          </Link>
        </Footer>
      </Aside>

      <Map
        center={[-22.701093, -43.531849]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage: Orphanage) => (
          <Marker
            key={orphanage.id}
            icon={happyMapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <LinkButton to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </LinkButton>
    </Container>
  );
};

export default OrphanagesMap;

/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */
