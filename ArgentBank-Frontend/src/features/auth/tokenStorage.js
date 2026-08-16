const TOKEN_KEY = 'argentbank_token'

export function saveToken(token, remember) {
  const storage = remember ? localStorage : sessionStorage
  const otherStorage = remember ? sessionStorage : localStorage

  // Un token laissé dans l'autre stockage serait relu en priorité par
  // readToken() : on garantit qu'il n'existe qu'à un seul endroit.
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