import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Requerimentos.css';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Tabela from '../components/Tabela';
import { listarRequerimentos } from '../services/requerimentoService';

export default function Requerimentos() {
  const navigate = useNavigate();
  const [meusRequerimentos, setMeusRequerimentos] = useState([]);
  const colunas = ['Tipo de Requerimento', 'Data de Solicitação', 'Situação'];

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await listarRequerimentos();
        const dadosFormatados = dados.map(req => [req.tipo, req.dataRequerimento, req.situacao]);
        setMeusRequerimentos(dadosFormatados);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };
    
    carregarDados();
  }, []);

  return (
    <section className="requerimentos">
      <PageTitle title="Meus Requerimentos" subtitle="Faça solicitações online para a secretaria" />

      <Card title="Situação dos Requerimentos">
        <Tabela headers={colunas} data={meusRequerimentos} />
        
        <section className="card-body">
          <button className="btn-novo" onClick={() => navigate('/requerimentos/novo')}>
            ➕ Novo Requerimento
          </button>
        </section>
      </Card>
    </section>
  );
}