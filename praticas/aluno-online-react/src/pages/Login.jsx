import { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import learnIcon from '../assets/learn.svg';
import './Login.css';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    let novosErros = {};

    if (!email) novosErros.email = "O campo de email é obrigatório.";
    if (!senha) novosErros.senha = "O campo de senha é obrigatório.";

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({}); 
    login({ email, senha });
  };

  return (
    <div className="login-wrapper">
      <section className="login-card">
        <header className="login-header">
          <img src={learnIcon} alt="Logo Aluno Online" className="logo-icon" />
          <h1>Aluno Online</h1>
        </header>

        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={erros.email ? 'input-error' : ''}
            />
            {erros.email && <span className="error-text">{erros.email}</span>}
          </div>

          <div className="form-control">
            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id="senha" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)}
              className={erros.senha ? 'input-error' : ''}
            />
            {erros.senha && <span className="error-text">{erros.senha}</span>}
          </div>

          <button type="submit">Entrar</button>
        </form>
      </section>

      <footer className="login-footer">
        © 2026. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Login;