import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  const login = (dadosUsuario) => {
    setAutenticado(true);
    setUsuario(dadosUsuario);
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

export const useAuth = () => useContext(AuthContext);