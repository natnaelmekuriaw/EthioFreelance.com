interface StoredUser {
  accountType?: string
}

export function getStoredUser(): StoredUser | null {
  try {
    const value: unknown = JSON.parse(localStorage.getItem('user') || 'null')
    return value && typeof value === 'object' ? value as StoredUser : null
  } catch {
    return null
  }
}
