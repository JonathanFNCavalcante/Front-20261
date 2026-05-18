import { useAuth } from "../hooks/useAuth";

const Topbar = () => {
  const { usuario } = useAuth();

  return (
    <header className="topbar">
      <h1>Aluno Online</h1>
      <div className="user-profile">
        <span>Bem-vindo(a), {usuario?.nome}</span>
      </div>
    </header>
  );
};

export default Topbar;