import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    329.54deg,
    ${props => props.theme.colors.grandientEffect} 0%,
    ${props => props.theme.colors.primary} 100%
  );

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1100px;
`;

export const WrapperLogo = styled.div`
  height: 100vh;
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 920px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 260px;
    height: 402px;
    line-height: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      display: block;
      margin-top: 100px;
      font-weight: bolder;
      font-size: 24px;
    }
  }
`;

export const WrapperForm = styled.div`
  height: 100vh;
  width: 40%;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  right: 0;
  width: 520px;
  height: 100vh;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;

  legend {
    color: #5c8599;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  label {
    color: #8fa7b2;
    font-size: 16px;
    margin-bottom: 8px;

    & + label {
      margin-top: 16px;
    }
  }

  input {
    height: 64px;
    border-radius: 20px;
    border: 1px solid #d3e2e5;
    background: #f5f8fa;
    padding: 0 16px;
    margin-bottom: 16px;

    &:focus {
      border: 1px solid #a1e9c5;
    }

    & + input {
      margin-bottom: 0;
    }
  }
`;

export const BoxContainer = styled.section`
  display: flex;
  justify-content: space-between;

  height: 24;
  margin: 24px 0 40px;

  div {
    display: flex;
    cursor: pointer;

    input {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      margin-right: 10px;
      appearance: none;
      padding: 0px;
      background: F5F8FA;
      border: 2px solid #d3e2e5;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease 0s;
      overflow: hidden;

      &:checked {
        background: #37c77f;
        border-color: #37c77f;
      }

      &:after {
        content: '';
        position: absolute;
        width: 4px;
        height: 7px;
        border-width: 0px 2px 2px 0px;
        border-right-style: solid;
        border-bottom-style: solid;
        border-right-color: rgb(255, 255, 255);
        border-bottom-color: rgb(255, 255, 255);
        /* border-image: initial;
        border-top-style: initial;
        border-top-color: initial;
        border-left-style: initial;
        border-left-color: initial; */
        left: 5px;
        top: -15px;
        transform: rotate(43deg);
        opacity: 0;
        transition: all 0.2s ease-in 0s;
      }

      &:checked::after {
        top: 2px;
        opacity: 1;
      }
    }
  }

  a {
    color: #8fa7b2;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  height: 64px;
  border: 0;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  background: #37c77f;

  &:disabled {
    background: ${lighten(0.2, '#37c77f')};
    cursor: not-allowed;
  }
`;
