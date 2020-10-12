import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Wrapper, Location } from './styles';

const Landing: React.FC = () => (
  <Container>
    <Wrapper>
      <img src={logo} alt="Happy" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <Location>
        <strong>Rio de Janeiro</strong>
        <span>Queimados</span>
      </Location>

      <Link to="/app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </Link>
    </Wrapper>
  </Container>
);

export default Landing;
