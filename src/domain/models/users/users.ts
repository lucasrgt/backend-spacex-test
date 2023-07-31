import { UserRole } from './user-types'

export interface UserModel {
  name: string
  key: string
  role: UserRole
}
