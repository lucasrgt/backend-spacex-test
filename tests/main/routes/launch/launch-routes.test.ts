import request from 'supertest'
import app from '../../../../src/main/config/app'

describe('Launch Routes', () => {
  test('should return a launch on success', async () => {
    // arrange

    // act
    app.get('/test_cors', (req, res) => {
      res.send()
    })

    // assert
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
