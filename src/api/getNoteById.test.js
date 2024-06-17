import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import getNoteById from './getNoteById'

describe('getNoteById', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('should make a GET request to /notes with the correct data', async () => {
    const note = {
      id: '1',
      title: 'Test Title',
      content: 'Test Content',
      created_at: '06/06/2024',
    }

    mock.onGet('http://localhost:3200/notes/1').reply(200, note)

    const result = await getNoteById({ id: '1' })

    expect(mock.history.get[0].url).toBe('http://localhost:3200/notes/1')
    expect(result).toBeInstanceOf(Object)
    expect(result).toHaveProperty('title')
    expect(result).toHaveProperty('content')
    expect(result).toHaveProperty('created_at')
  })
})
