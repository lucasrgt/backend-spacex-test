import { AddLaunch } from '../../../domain/usecases/add-launch/add-launch-protocol'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, ok, serverError } from '../../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../../contracts'

export class LaunchController implements Controller {
  private readonly addLaunch: AddLaunch

  constructor(addLaunch: AddLaunch) {
    this.addLaunch = addLaunch
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = [
        'flightNumber',
        'name',
        'dateUtc',
        'dateUnix',
        'dateLocal',
        'datePrecision',
        'upcoming'
      ]
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { ...data } = httpRequest.body

      const launch = await this.addLaunch.add(data)

      return ok(launch)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
