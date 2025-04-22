import React, { useRef, useState } from 'react'
import './index.css'
import { AxiosClient } from '../services/httpClient'
import { useUsers } from '../hooks/useUsers'
import { usePagination } from '../hooks/usePagination'
import { parseCsv, downloadCsv } from '../utils/csvUtils'
import DialogEdit from '../components/DialogEdit'

export default function MainPage() {
  const client = new AxiosClient()
  const { users, fetchUsers, setUsers } = useUsers(client, 100)
  const {
    current: paginated,
    page,
    pageCount,
    next,
    prev,
    setPage,
  } = usePagination(users, 15)

  const [searchUserName, setSearchUserName] = useState('')
  const [searchEmail, setSearchEmail] = useState('')
  const [editingUser, setEditingUser] = useState(null as any)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const filtered = paginated.filter(u =>
    u.username.toLowerCase().includes(searchUserName.toLowerCase()) &&
    u.email.toLowerCase().includes(searchEmail.toLowerCase())
  )

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    parseCsv(file, data => {
      setUsers(data)
      setPage(1)
    })
  }

  const handleDelete = (id: string) => {
    setUsers(prev => prev.filter(u => u.id !== id))
  }

  const handleEditSave = () => {
    if (!editingUser) return
    setUsers(prev =>
      prev.map(u => (u.id === editingUser.id ? editingUser : u))
    )
    setEditingUser(null)
  }

  return (
    <div className="main-container">
      <h2>📂 Listagem de Usuários Lógicos!</h2>

      <div className="controls">
        <button className="button" onClick={fetchUsers}>
          🔄 Carregar novos usuários
        </button>
        <button
          className="button"
          onClick={() => fileInputRef.current?.click()}
        >
          📤 Upload CSV
        </button>
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleCsvUpload}
        />
        <button className="button" onClick={() => downloadCsv(users)}>
          💾 Save CSV
        </button>
      </div>

      <div className="search-container">
        <input
          className="search-input"
          placeholder="Procurar pelo Username"
          value={searchUserName}
          onChange={e => {
            setSearchUserName(e.target.value)
            setPage(1)
          }}
        />
        <input
          className="search-input"
          placeholder="Procurar pelo email"
          value={searchEmail}
          onChange={e => {
            setSearchEmail(e.target.value)
            setPage(1)
          }}
        />
      </div>

      <div className="table-container">
        <table>
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
            {filtered.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.first_name}</td>
                <td>{u.last_name}</td>
                <td>{u.email}</td>
                <td>{u.username}</td>
                <td>
                  <button
                    className="button"
                    onClick={() => setEditingUser(u)}
                  >
                    ✏️
                  </button>
                </td>
                <td>
                  <button
                    className="button"
                    onClick={() => handleDelete(u.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="button" onClick={prev} disabled={page === 1}>
          ◀️ Prev
        </button>
        <span>Página {page} de {pageCount}</span>
        <button
          className="button"
          onClick={next}
          disabled={page === pageCount}
        >
          Next ▶️
        </button>
      </div>

      {editingUser && (
        <DialogEdit
          editingUser={editingUser}
          setEditingUser={setEditingUser}
          handleEditSave={handleEditSave}
          handleEditCancel={() => setEditingUser(null)}
        />
      )}
    </div>
  )
}
