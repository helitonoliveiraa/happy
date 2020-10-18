import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(
    329.54deg,
    ${props => props.theme.colors.grandientEffect} 0%,
    ${props => props.theme.colors.primary} 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }
`;

export const Footer = styled.footer`
  a,
  button {
    width: 48px;
    height: 48px;

    border: 0;

    background: ${({ theme }) => theme.colors.primary};
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${({ theme }) => lighten(0.09, theme.colors.primary)};
    }
  }
`;
