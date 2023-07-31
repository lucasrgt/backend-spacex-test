export interface UserModel {
  name: string
  key: string
  role: 'superuser' | 'user' | 'create' | 'update' | 'delete'
}
