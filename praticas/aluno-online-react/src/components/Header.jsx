import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { usuario, logout } = useAuth();

  return (
    <header className="topbar">
      <h1>Aluno Online</h1>

      <section className="user-profile">
        <span>Bem-vindo(a), {usuario?.email}</span>
        <button onClick={logout} className="btn-sair">Sair</button>
      </section>
    </header>
  );
};

export default Header;