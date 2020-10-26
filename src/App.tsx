import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from './Contexts/theme';
import { AuthProvider } from './Contexts/auth';

import Routes from './routes/index';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  // const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  // function toggleTheme() {
  //   setTheme(theme.title === 'light' ? dark : light);
  // }

  <BrowserRouter>
    <AuthProvider>
      <AppThemeProvider>
        <Routes />
        <GlobalStyle />
      </AppThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
