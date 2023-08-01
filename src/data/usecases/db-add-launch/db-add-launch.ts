import { LaunchModel } from '../../../domain/models'
import { AddLaunchModel } from '../../../domain/usecases/add-launch/add-launch-types'
import { AddLaunch } from '../../../domain/usecases/add-launch/add-launch'
import { AddLaunchRepository } from '../../contracts/add-launch-repository'

export class DbAddLaunch implements AddLaunch {
  private readonly addLaunchRepository: AddLaunchRepository

  constructor(addLaunchRepository: AddLaunchRepository) {
    this.addLaunchRepository = addLaunchRepository
  }

  async add(launchData: AddLaunchModel): Promise<LaunchModel> {
    await this.addLaunchRepository.add(launchData)
    return new Promise((resolve) => resolve({ id: 'id', ...launchData }))
  }
}
