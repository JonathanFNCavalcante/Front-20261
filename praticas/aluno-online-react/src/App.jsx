import './App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';
import Notas from './pages/Notas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';

function App() {
  return (
    <section className="app-layout">
      {/* Sidebar na esquerda */}
      <Sidebar />
      
      {/* Todo o resto fica do lado direito */}
      <main className="main-content">
        <Header />
        
        {/* Alterne aqui qual tela você quer renderizar */}
        <Dashboard />
      </main>
    </section>
  );
}

export default App;