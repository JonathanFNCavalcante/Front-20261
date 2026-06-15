import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { authService } from '../services/authService'; 

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storagedUser = authService.getUser();
    const storagedToken = authService.getToken();

    if (storagedUser && storagedToken) {
      setAutenticado(true);
      setUsuario(storagedUser);
    }
  }, []);

  const login = async (email, senha) => {
    try {
      const data = await authService.login(email, senha);
      setUsuario(data.user);
      setAutenticado(true);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setAutenticado(false);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};