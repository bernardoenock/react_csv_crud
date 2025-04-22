import { useState } from 'react';
import axios from 'axios';
import { downloadCsv } from '../utils/csvUtils';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
}

function ApiPage() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(
        'https://random-data-api.com/api/v2/users?size=10000'
      );
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSaveToCsv = () => {
    downloadCsv(users, 'usuarios.csv');
  };

  return (
    <div>
      <h2>Listagem de usuários obtidos por meio da API do random-data-api</h2>
      <button onClick={fetchUsers}>🔄 Carregar novos usuários</button>
      <button onClick={handleSaveToCsv} disabled={users.length === 0}>💾 Savar em CSV</button>

      <table border={1} style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.first_name}</td>
              <td>{u.last_name}</td>
              <td>{u.email}</td>
              <td>{u.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiPage;
