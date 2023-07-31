import { LaunchModel } from '../models'

export interface AddLaunchModel {}

export interface AddLaunch {
  add(launch: AddLaunchModel): Promise<LaunchModel>
}
