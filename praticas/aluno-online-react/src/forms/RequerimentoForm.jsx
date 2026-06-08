import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { cadastrarRequerimento } from '../services/requerimentoService';

export default function RequerimentoForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await cadastrarRequerimento(data);
      reset();
      navigate('/requerimentos');
    } catch (error) {
      console.error("Erro ao cadastrar requerimento:", error);
    }
  };

  const handleCancelar = () => {
    navigate('/requerimentos');
  };

  return (
    <section>
      <h2>Novo Requerimento</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select 
            id="tipo" 
            {...register("tipo", { required: "Tipo é obrigatório" })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Ajuste de Matrícula">Ajuste de Matrícula</option>
            <option value="Histórico Escolar">Histórico Escolar</option>
            <option value="Solicitação de Diploma">Solicitação de Diploma</option>
          </select>
          {errors.tipo && <span style={{ color: 'red' }}>{errors.tipo.message}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="descricao">Descrição</label>
          <textarea 
            id="descricao" 
            {...register("descricao", { 
              required: "Descrição é obrigatória",
              minLength: { value: 10, message: "A descrição deve ter no mínimo 10 caracteres" }
            })}
          />
          {errors.descricao && <span style={{ color: 'red' }}>{errors.descricao.message}</span>}
        </fieldset>

        <fieldset>
          <label htmlFor="dataRequerimento">Data do Requerimento</label>
          <input 
            id="dataRequerimento" 
            type="text" 
            defaultValue={new Date().toLocaleDateString('pt-BR')} 
            {...register("dataRequerimento")} 
            readOnly
          />
        </fieldset>

        <menu>
          <button type="button" onClick={handleCancelar}>Cancelar</button>
          <button type="submit">Salvar</button>
        </menu>
      </form>
    </section>
  );
}