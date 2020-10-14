import styled from 'styled-components';
import { lighten, darken } from 'polished';
import landingImg from '../../assets/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    329.54deg,
    ${props => props.theme.colors.primary} 60%,
    ${props => props.theme.colors.grandientEffect} 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchButton = styled.div`
  position: absolute;
  right: 0;
  top: 80px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  padding-top: 10px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landingImg}) no-repeat 80% center;

  main {
    max-width: 350px;

    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  a {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background-image: linear-gradient(
      to right,
      ${props => props.theme.colors.buttonBackground1} 0%,
      ${props => props.theme.colors.buttonBackground2} 80%
    );
    border-radius: 30px;

    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.2s;

    &:hover {
      background-image: linear-gradient(
        to right,
        ${({ theme }) => darken(0.1, theme.colors.buttonBackground1)} 0%,
        ${({ theme }) => darken(0.1, theme.colors.buttonBackground2)} 80%
      );
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;
