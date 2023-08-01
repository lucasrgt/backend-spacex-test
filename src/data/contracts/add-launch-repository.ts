import { LaunchModel } from '../../domain/models'
import { AddLaunchModel } from '../../domain/usecases/add-launch/add-launch'

export interface AddLaunchRepository {
  add(launchData: AddLaunchModel): Promise<LaunchModel>
}
