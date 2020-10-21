import React, { createContext, useState } from 'react';

import * as auth from '../services/auth';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  token: string;
  user: User | null;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    console.log(response);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, token: '', user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
