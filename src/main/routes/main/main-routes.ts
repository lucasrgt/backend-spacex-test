import { Router } from 'express'

export default (router: Router): void => {
  const defaultMessage = {
    message: 'Fullstack Challenge 🏅 - Space X API'
  }
  router.get('/', (req, res) => res.send(defaultMessage))
}
