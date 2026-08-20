const TOKEN_KEY = 'argentbank_token'

export function saveToken(token, remember) {
  const storage = remember ? localStorage : sessionStorage
  const otherStorage = remember ? sessionStorage : localStorage

 
  otherStorage.removeItem(TOKEN_KEY)
  storage.setItem(TOKEN_KEY, token)
}

export function readToken() {
  return localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY)
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(TOKEN_KEY)
}