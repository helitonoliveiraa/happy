import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../Contexts/auth';

import logo from '../../assets/logotipo.svg';

import {
  Container,
  LogoContainer,
  FormContainer,
  Form,
  BoxContainer,
  WrapperForm,
  WrapperLogo,
  Button,
} from './styles';

const SignIn: React.FC = () => {
  const { signIn, signed } = useAuth();

  console.log(signed);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(event: FormEvent) {
    event.preventDefault();

    signIn({ email, password });

    // console.log(email, password);
  }

  return (
    <Container>
      <WrapperLogo>
        <LogoContainer>
          <div>
            <img src={logo} alt="Happy" />
            <strong>Queimados</strong>
            <span>Rio de Janeiro</span>
          </div>
        </LogoContainer>
      </WrapperLogo>

      <WrapperForm>
        <FormContainer>
          <Form onSubmit={handleSignIn}>
            <legend>Dados</legend>

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <BoxContainer>
              <div>
                <input id="box" type="checkbox" />
                <label htmlFor="box">Lembrar-me</label>
                <span />
              </div>

              <Link to="teste">Esqueci minha senha</Link>
            </BoxContainer>

            <Button disabled={!password || !email} type="submit">
              Entrar
            </Button>
          </Form>
        </FormContainer>
      </WrapperForm>
    </Container>
  );
};

export default SignIn;
