import { LaunchModel } from '../../models'
import { AddLaunchModel } from './add-launch-types'

export interface AddLaunch {
  add(launchData: AddLaunchModel): Promise<LaunchModel>
}
