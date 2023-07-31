import { Router } from 'express'

export default (router: Router): void => {
  /**
   * Returns the default success message for Space X API challenge
   */
  const defaultMessage = {
    message: 'Fullstack Challenge 🏅 - Space X API'
  }
  router.get('/', (req, res) => res.send(defaultMessage))
}
