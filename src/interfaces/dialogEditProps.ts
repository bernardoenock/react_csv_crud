import { User } from './user'

export interface DialogEditProps {
  editingUser: User
  setEditingUser: React.Dispatch<React.SetStateAction<User | null>>
  handleEditSave: () => void
  handleEditCancel: () => void
}
