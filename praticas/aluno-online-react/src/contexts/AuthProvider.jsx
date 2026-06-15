import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { authService } from '../services/authService'; 

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const storagedUser = authService.getUser();
    const storagedToken = authService.getToken();

    if (storagedUser && storagedToken) {
      return storagedUser;
    }
    return null;
  });

  const autenticado = !!usuario;

  const login = async (email, senha) => {
    try {
      const data = await authService.login(email, senha);
      setUsuario(data.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};