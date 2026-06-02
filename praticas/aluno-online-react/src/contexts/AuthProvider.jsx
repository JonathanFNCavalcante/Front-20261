import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(true);

  return (
    <AuthContext.Provider value={{ autenticado, setAutenticado }}>
      {children}
    </AuthContext.Provider>
  );
};