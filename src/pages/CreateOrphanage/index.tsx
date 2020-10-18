import React, { useState, FormEvent, ChangeEvent, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Sidebar from '../../components/Sidebar';
import happyMapIcon from '../../utils/happyMapIcon';
import api from '../../services/api';

import {
  Container,
  Form,
  InputBlock,
  ImageContainer,
  Label,
  SelectButtonContainer,
  ButtonConfirm,
} from './styles';

const CreateOrphanage: React.FC = () => {
  const history = useHistory();
  const { title } = useContext(ThemeContext);

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [prevewImages, setPrevewImages] = useState<string[]>([]);

  function handleMapClik(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const selectedImage = Array.from(event.target.files);

    setImages(selectedImage);

    const selectedImagePreview = selectedImage.map(image =>
      URL.createObjectURL(image));

    setPrevewImages(selectedImagePreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);

    toast.success('Cadastro realizado com sucesso!');

    setTimeout(() => {
      history.push('/app');
    }, 3000);
  }

  return (
    <Container id="page-create-orphanage">
      <Sidebar />

      <main>
        <Form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-22.701093, -43.531849]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClik}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="images">Fotos</label>

              <ImageContainer className="images-container">
                {prevewImages.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}

                <Label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </Label>
              </ImageContainer>
              <input
                multiple
                onChange={handleSelectImage}
                type="file"
                id="image[]"
              />
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={e => setOpeningHours(e.target.value)}
              />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <SelectButtonContainer className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>

                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </SelectButtonContainer>
            </InputBlock>
          </fieldset>

          <ButtonConfirm className="confirm-button" type="submit">
            Confirmar
          </ButtonConfirm>
        </Form>
      </main>
    </Container>
  );
};

export default CreateOrphanage;

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
