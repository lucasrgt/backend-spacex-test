import { LaunchModel } from '../../../domain/models'
import { AddLaunchModel } from '../../../domain/usecases/add-launch/add-launch-types'
import { AddLaunchRepository } from '../../contracts/add-launch-repository'
import { fakeLaunch } from '../../../../tests/shared/fake-models/fake-launch'

const makeAddLaunchRepository = (): AddLaunchRepository => {
  class AddLaunchRepositoryStub implements AddLaunchRepository {
    async add(launchData: AddLaunchModel): Promise<LaunchModel> {
      return new Promise((resolve) => resolve(fakeLaunch))
    }
  }
  return new AddLaunchRepositoryStub()
}

const makeSut = () => {
  const addLaunchRepositoryStub = makeAddLaunchRepository()
  return addLaunchRepositoryStub
}

describe('DbAddLaunch Usecase', () => {
  test('should call AddLaunchRepository with correct values', async () => {
    // arrange
    const sut = makeSut()
    const addSpy = jest.spyOn(sut, 'add')

    // act
    await sut.add(fakeLaunch)

    // assert
    expect(addSpy).toHaveBeenCalledWith(fakeLaunch)
  })
  test('should throw if AddLaunchRepository throws', async () => {
    // arrange
    const sut = makeSut()
    jest
      .spyOn(sut, 'add')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error()))
      )

    // act
    const promise = sut.add(fakeLaunch)

    // assert
    await expect(promise).rejects.toThrow()
  })
})
