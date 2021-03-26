export interface DatabaseUserModel {
  id: string
  username: string
  password: string
}

export type UserModel = Pick<DatabaseUserModel, 'id' | 'username'>

export type CreateUserModel = Pick<DatabaseUserModel, 'username' | 'password'>

export type LoginUserModel = Pick<DatabaseUserModel, 'password' | 'username'>