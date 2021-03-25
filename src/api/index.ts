import { v4 as uuid } from 'uuid'

const USERS: Record<string, { username: string, password: string, id: string }> = {
  'user1': {
    username: 'lindell',
    password: 'password',
    id: 'user1'
  },
  'user2': {
    username: 'jason',
    password: 'password',
    id: 'user2'
  }
}

const getObjectKeys = <T>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>
}

export const login = async (data: { username: string, password: string }): Promise<{ username: string, id: string }> => {
  for (const id of getObjectKeys(USERS)) {
    const user = USERS[id]
    if (user.username === data.username) {
      if (user.password === data.password) {
        return { username: data.username, id }
      }
      throw new Error(`Incorrect password.`)
    }
  }

  throw new Error(`No user found.`)
}

export const signup = async (data: { username: string, password: string }): Promise<{ username: string, id: string }> => {
  for (const id of getObjectKeys(USERS)) {
    if (USERS[id].username === data.username) {
      throw new Error(`That username already exists.`)
    }
  }

  const id = uuid()
  USERS[id] = {
    id,
    username: data.username,
    password: data.password
  }

  return { id, username: data.username }
}