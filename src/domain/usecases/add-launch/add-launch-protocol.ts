import { LaunchModel } from '../../models'
import { AddLaunchModel } from './add-launch'

export interface AddLaunch {
  add(launch: AddLaunchModel): Promise<LaunchModel>
}
