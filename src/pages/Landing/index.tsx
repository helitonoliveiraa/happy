import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import logo from '../../assets/logo.svg';

import { Container, Wrapper, Location, SwitchButton } from './styles';

interface Props {
  toggleTheme(): void;
}

// eslint-disable-next-line react/prop-types
const Landing: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Happy" />

        <SwitchButton>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secondary}
          />
        </SwitchButton>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Rio de Janeiro</strong>
          <span>Queimados</span>
        </Location>

        <Link to="/app">
          <FiArrowRight size={26} color="#fff" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Landing;
