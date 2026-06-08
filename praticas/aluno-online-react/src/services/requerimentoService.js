const BASE_URL = 'http://localhost:3000/requerimentos';

export const listarRequerimentos = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Erro ao buscar requerimentos');
  return await response.json();
};

export const cadastrarRequerimento = async (dados) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...dados, situacao: 'Em Análise' })
  });
  if (!response.ok) throw new Error('Erro ao cadastrar requerimento');
  return await response.json();
};