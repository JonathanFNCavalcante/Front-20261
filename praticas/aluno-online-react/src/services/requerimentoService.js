import { authService } from './authService';

const BASE_URL = 'http://localhost:3000/requerimentos';

const getHeaders = () => {
  const token = authService.getToken();

  if (!token) {
    throw new Error('401');
  }
  
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

const forceLogout = () => {
  authService.logout();
  window.location.reload(); 
};

export const listarRequerimentos = async () => {
  try {
    const headers = getHeaders();
    const response = await fetch(BASE_URL, { headers });

    if (response.status === 401) throw new Error('401');
    if (!response.ok) throw new Error('Erro ao buscar requerimentos');
    
    return await response.json();
  } catch (error) {
    if (error.message === '401') forceLogout();
    throw error;
  }
};

export const cadastrarRequerimento = async (dados) => {
  try {
    const headers = getHeaders();
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers, 
      body: JSON.stringify({ ...dados, situacao: 'Em Análise' })
    });

    if (response.status === 401) throw new Error('401');
    if (!response.ok) throw new Error('Erro ao cadastrar requerimento');

    return await response.json();
  } catch (error) {
    if (error.message === '401') forceLogout();
    throw error;
  }
};