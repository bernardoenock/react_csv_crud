import Papa from 'papaparse'
import { saveAs } from 'file-saver'

export function downloadCsv(data: any[], filename = 'users.csv') {
  const csv = Papa.unparse(data)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  saveAs(blob, filename)
}

export function parseCsv(file: File, callback: (data: any[]) => void) {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => callback(results.data),
  })
}
