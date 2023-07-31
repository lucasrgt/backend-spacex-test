import { Router } from 'express'

export default (router: Router): void => {
  router.get('/launches', (req, res) => res.send('estou aqui'))
}
