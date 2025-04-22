import { useState, useEffect } from 'react'
import { HttpClient } from '../services/httpClient'
import { User } from '../interfaces/user'

export function useUsers(client: HttpClient, size: number = 100) {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    const data = await client.get<User[]>(
      `https://random-data-api.com/api/v2/users?size=${size}`
    )
    setUsers(prev => [...prev, ...data])
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return { users, fetchUsers, setUsers }
}
