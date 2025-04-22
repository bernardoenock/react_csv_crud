import { DialogEditProps } from '../interfaces/dialogEditProps'
import './DialogEdit.css'

export default function DialogEdit({
  editingUser,
  setEditingUser,
  handleEditSave,
  handleEditCancel,
}: DialogEditProps) {
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h3 className="dialog-title">✏️ Editar Usuário</h3>
        <p className="dialog-id">
          <strong>ID:</strong> {editingUser.id}
        </p>

        <input
          className="dialog-input"
          type="text"
          value={editingUser.first_name}
          onChange={e =>
            setEditingUser({ ...editingUser, first_name: e.target.value })
          }
          placeholder="First Name"
        />

        <input
          className="dialog-input"
          type="text"
          value={editingUser.last_name}
          onChange={e =>
            setEditingUser({ ...editingUser, last_name: e.target.value })
          }
          placeholder="Last Name"
        />

        <input
          className="dialog-input"
          type="email"
          value={editingUser.email}
          onChange={e =>
            setEditingUser({ ...editingUser, email: e.target.value })
          }
          placeholder="Email"
        />

        <input
          className="dialog-input"
          type="text"
          value={editingUser.username}
          onChange={e =>
            setEditingUser({ ...editingUser, username: e.target.value })
          }
          placeholder="Username"
        />

        <div className="dialog-buttons">
          <button
            className="dialog-button save"
            onClick={handleEditSave}
          >
            💾 Save
          </button>
          <button
            className="dialog-button cancel"
            onClick={handleEditCancel}
          >
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
