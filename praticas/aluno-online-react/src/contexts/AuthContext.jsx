import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  const login = (dadosUsuario) => {
    setAutenticado(true);
    setUsuario({ nome: dadosUsuario.email.split('@')[0], email: dadosUsuario.email });
    navigate('/');
  };

  const logout = () => {
    setAutenticado(false);
    setUsuario(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
