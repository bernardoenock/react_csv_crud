import { Routes, Route, Link } from 'react-router-dom';
import MePage from './pages/MePage';
import MainPage from './pages';
import './index.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/react_csv_crud/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/react_csv_crud/me">Sobre o candidato</Link>
      </nav>

      <Routes>
        <Route path="/react_csv_crud/" element={<MainPage />} />
        <Route path="/react_csv_crud/me" element={<MePage />} />
      </Routes>
    </div>
  );
}

export default App;