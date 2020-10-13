import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(
    329.54deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.grandientEffect} 100%
  );
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  h2 {
    font-size: 40px;
    font-weight: 800px;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const LinkButton = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary};

  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => lighten(0.09, theme.colors.primary)};
  }
`;
