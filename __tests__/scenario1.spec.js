require('dotenv').config() // apply .env to project

const axios = require('axios')

const apiPath = process.env.API_PATH
const apikey = process.env.API_KEY

jest.setTimeout(50000) // use in case API is so slow

describe('OMDB API', () => {
  it('should be `The Queen\'s Gambit` when `i` is `tt10048342`', async () => {
    const params = {
      i: 'tt10048342',
      apikey,
    }
    const response = await axios.get(apiPath, { params })

    expect(response.status).toBe(200)
    expect(response.data.Title).toBe('The Queen\'s Gambit')
  })
})