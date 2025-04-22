import axios, { AxiosResponse } from 'axios'

export interface HttpClient {
  get<T>(url: string): Promise<T>
}

export class AxiosClient implements HttpClient {
  async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await axios.get(url)
    return response.data
  }
}
