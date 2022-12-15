import { TRequestOptions } from "./types"

export const request = async (url: string, options?: TRequestOptions): Promise<any> => {
  const res = await fetch(url, options)
  if (res.ok) {
    return res.json()
  }
  return await Promise.reject(`Ошибка ${res.status}`)
}
