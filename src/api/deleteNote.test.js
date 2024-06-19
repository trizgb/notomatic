import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import deleteNote from './deleteNote'

describe('deleteNote', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('should make a DELETE request to /notes with the correct data', async () => {
    const noteData = {
      id: '1',
      title: 'Test Title',
      content: 'Test Content',
    }

    mock.onDelete('http://localhost:3200/notes/1').reply(200, {
      message: 'Note deleted',
    })

    await deleteNote({ id: '1' })

    expect(mock.history.delete[0].url).toBe('http://localhost:3200/notes/1')
  })
})
