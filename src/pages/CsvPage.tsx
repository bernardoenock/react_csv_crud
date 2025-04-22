import axios from 'axios';
import { useState, useRef } from 'react';
import { parseCsv, downloadCsv } from '../utils/csvUtils';

import DialogEdit from '../components/DialogEdit';
interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
}

const USERS_PER_PAGE = 15;

function CsvPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchUserName, setSearchUserName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(
        'https://random-data-api.com/api/v2/users?size=100'
      );
      setUsers((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      parseCsv(file, (data) => {
        setUsers(data);
        setCurrentPage(1);
      });
    }
  };

  const handleDelete = (id: string) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
  };

  const handleEdit = (id: string) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      setEditingUser({ ...user });
    }
  };

  const handleEditSave = () => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? editingUser : u))
      );
      setEditingUser(null);
    }
  };
  
  const handleEditCancel = () => {
    setEditingUser(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const filteredUsers = users.filter(
    (u) =>
      u.username.toLowerCase().includes(searchUserName.toLowerCase()) &&
      u.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  const pageCount = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage < pageCount) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      <h2>📂 Manage Users from CSV</h2>

      <button onClick={fetchUsers}>🔄 Carregar novos usuários</button>

      <div>
        <button onClick={triggerFileInput}>📤 Upload CSV</button>
        <input
          type="file"
          accept=".csv"
          onChange={handleCsvUpload}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <button onClick={() => downloadCsv(users)}>💾 Save CSV</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Search by Username"
          value={searchUserName}
          onChange={(e) => {
            setSearchUserName(e.target.value);
            setCurrentPage(1);
          }}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Search by email"
          value={searchEmail}
          onChange={(e) => {
            setSearchEmail(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <table border={1} style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Username</th>
            <th>✏️ EDITAR</th>
            <th>🗑️ EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.first_name}</td>
              <td>{u.last_name}</td>
              <td>{u.email}</td>
              <td>{u.username}</td>
              <td>
                <button onClick={() => handleEdit(u.id)}>✏️</button>
              </td>
              <td>
                <button onClick={() => handleDelete(u.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          ◀️ Prev
        </button>
        <span style={{ margin: '0 10px' }}>
          Página {currentPage} de {pageCount}
        </span>
        <button onClick={nextPage} disabled={currentPage === pageCount}>
          Next ▶️
        </button>
      </div>
      {editingUser && (
        <DialogEdit
          editingUser={editingUser}
          setEditingUser={setEditingUser}
          handleEditSave={handleEditSave}
          handleEditCancel={handleEditCancel}
        />
      )}
    </div>
  );
}

export default CsvPage;
