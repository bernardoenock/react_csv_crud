import { Routes, Route, Link } from 'react-router-dom';
import ApiPage from './pages/ApiPage';
import CsvPage from './pages/CsvPage';

function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Fetch Users</Link>
        <Link to="/csv">CSV Manager</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ApiPage />} />
        <Route path="/csv" element={<CsvPage />} />
      </Routes>
    </div>
  );
}

export default App;