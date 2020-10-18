import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';

import Sidebar from '../../components/Sidebar';
import happyMapIcon from '../../utils/happyMapIcon';
import api from '../../services/api';

import {
  Container,
  MainContainer,
  OrphanageDetails,
  ImageContainer,
  ContantContainer,
  MapContainer,
  OpenDetails,
  OpenWeekends,
  CloseWeekends,
  Button,
  Hour,
} from './styles';

interface OrphanageProps {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  open_on_weekends: boolean;
  opening_hours: string;
  images: Array<{
    url: string;
    id: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const { title } = useContext(ThemeContext);

  const { id } = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<OrphanageProps>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    async function loadOrphanage() {
      const response = await api.get(`orphanages/${id}`);

      setOrphanage(response.data);
    }

    loadOrphanage();
  }, [id]);

  function toggleImg(index: number) {
    setActiveImageIndex(index);
  }

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container id="page-orphanage">
      <Sidebar />

      <MainContainer>
        <OrphanageDetails className="orphanage-details">
          <img
            src={orphanage.images[activeImageIndex].url}
            alt="Lar das meninas"
          />

          <ImageContainer className="images">
            {orphanage.images.map((image, index: number) => (
              <button
                key={image.id}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => toggleImg(index)}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </ImageContainer>

          <ContantContainer className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails className="open-details">
              <Hour className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </Hour>

              {orphanage.open_on_weekends ? (
                <OpenWeekends className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </OpenWeekends>
              ) : (
                <CloseWeekends className="close-on-weekends">
                  <FiInfo size={32} color="#FF669D" />
                  Não Atendemos <br />
                  fim de semana
                </CloseWeekends>
              )}
            </OpenDetails>

            <Button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </Button>
          </ContantContainer>
        </OrphanageDetails>
      </MainContainer>
    </Container>
  );
};

export default Orphanage;
