import { useState } from 'react'

export function usePagination<T>(items: T[], perPage: number) {
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(items.length / perPage)
  const current = items.slice((page - 1) * perPage, page * perPage)

  const next = () => setPage(p => Math.min(p + 1, pageCount))
  const prev = () => setPage(p => Math.max(p - 1, 1))

  return { current, page, pageCount, next, prev, setPage }
}
