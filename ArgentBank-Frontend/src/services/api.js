const BASE_URL = 'http://localhost:3001/api/v1'

export async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error('Identifiants incorrects')
  }

  return data.body.token
}

export async function getProfile(token) {
  let response

  try {
    response = await fetch(`${BASE_URL}/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  } catch {
    throw new Error('Serveur injoignable.')
  }

  const data = await response.json()

  if (!response.ok) {
    throw new Error('Session expirée, veuillez vous reconnecter.')
  }

  return data.body
}

export async function updateProfile(token, userName) {
  let response

  try {
    response = await fetch(`${BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    })
  } catch {
    throw new Error('Serveur injoignable.')
  }

  const data = await response.json()

  if (!response.ok) {
    throw new Error('La mise à jour a échoué.')
  }

  return data.body
}