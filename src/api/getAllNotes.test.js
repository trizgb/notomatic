import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import getAllNotes from './getAllNotes'

describe('getAllNotes', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('should make a GET request to /notes and returns the correct data', async () => {
    const notes = [
      {
        title: 'Test Title',
        content: 'Test Content',
        created_at: '06/06/2024',
      },
    ]

    mock.onGet('http://localhost:3200/notes').reply(200, notes)

    const result = await getAllNotes()

    expect(mock.history.get[0].url).toBe('http://localhost:3200/notes')
    expect(result).toBeInstanceOf(Array)
    expect(result[0]).toHaveProperty('title')
    expect(result[0]).toHaveProperty('content')
    expect(result[0]).toHaveProperty('created_at')
  })
})
