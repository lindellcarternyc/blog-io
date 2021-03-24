const USERS = {
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

export const login = async (data: { username: string, password: string }): Promise<{ id: string }> => {
  for (const id of getObjectKeys(USERS)) {
    const user = USERS[id]
    if (user.username === data.username) {
      if (user.password === data.password) {
        return { id }
      }
      throw new Error(`Incorrect password.`)
    }
  }

  throw new Error(`No user found.`)
}