import { v4 as uuid } from 'uuid'
import { CreateUserModel, DatabaseUserModel, UserModel } from '../models/User.model'

const USERS: Record<string, DatabaseUserModel> = {
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

export const getUserByUsername = async (username: string): Promise<DatabaseUserModel | null> => {
  for (const userId of Object.keys(USERS)) {
    const user = USERS[userId]
    if (user.username === username) {
      return {
        ...user
      }
    }
  }
  return null
}

export const createUser = async (data: CreateUserModel): Promise<UserModel> => {
  try {
    const existingUser = await getUserByUsername(data.username)
    if (existingUser) {
      throw new Error(`A user with that username already exists.`)
    } 
    const newUser: DatabaseUserModel = {
      id: uuid(),
      ...data
    }
    USERS[newUser.id] = newUser
    return {
      id: newUser.id,
      username: newUser.username
    }
  } catch (err) {
    throw err
  }
}