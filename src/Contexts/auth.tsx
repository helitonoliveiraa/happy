import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import api from '../services/api';

interface User {
  name?: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  token: string;
  user: User | null;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await localStorage.getItem('@happy:user');
      const storagedToken = await localStorage.getItem('@happy:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('session', {
      email,
      password,
    });

    const userData = {
      name: response.data.user.name,
      email: response.data.user.email,
    } as User;

    const userToken = response.data.token;

    setUser(userData);

    localStorage.setItem('@happy:user', JSON.stringify(userData));
    localStorage.setItem('@happy:token', userToken);
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!user, token: '', user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
