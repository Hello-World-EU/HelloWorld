const request = require('supertest')
const app = require('../')

describe('Get route', () => {
  it('page should return hello world 1', async (done) => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual('Hello World 1')
    done()
  })
})

afterAll(async () => { await app.close() })
