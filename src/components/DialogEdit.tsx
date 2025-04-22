import React from 'react'

interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  username: string
}

interface DialogEditProps {
  editingUser: User
  setEditingUser: React.Dispatch<React.SetStateAction<User | null>>
  handleEditSave: () => void
  handleEditCancel: () => void
}

function DialogEdit({
  editingUser,
  setEditingUser,
  handleEditSave,
  handleEditCancel,
}: DialogEditProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: 20,
          borderRadius: 8,
          minWidth: 300,
        }}
      >
        <h3>✏️ Edit User</h3>
        <p>
          <strong>ID:</strong> {editingUser.id}
        </p>

        <input
          type="text"
          value={editingUser.first_name}
          onChange={(e) =>
            setEditingUser({ ...editingUser, first_name: e.target.value })
          }
          placeholder="First Name"
          style={{ marginBottom: 10, display: 'block' }}
        />

        <input
          type="text"
          value={editingUser.last_name}
          onChange={(e) =>
            setEditingUser({ ...editingUser, last_name: e.target.value })
          }
          placeholder="Last Name"
          style={{ marginBottom: 10, display: 'block' }}
        />

        <input
          type="email"
          value={editingUser.email}
          onChange={(e) =>
            setEditingUser({ ...editingUser, email: e.target.value })
          }
          placeholder="Email"
          style={{ marginBottom: 10, display: 'block' }}
        />

        <input
          type="text"
          value={editingUser.username}
          onChange={(e) =>
            setEditingUser({ ...editingUser, username: e.target.value })
          }
          placeholder="Username"
          style={{ marginBottom: 10, display: 'block' }}
        />

        <button onClick={handleEditSave}>💾 Save</button>
        <button onClick={handleEditCancel} style={{ marginLeft: 10 }}>
          ❌ Cancel
        </button>
      </div>
    </div>
  )
}

export default DialogEdit
