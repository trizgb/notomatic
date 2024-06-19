import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import updateNote from './updateNote'

describe('updateNote', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('should make a PATCH request to /notes with the correct data', async () => {
    const noteData = {
      id: '1',
      title: 'Test Title',
      content: 'Test Content',
    }

    mock.onPatch('http://localhost:3200/notes/1').reply(200, {
      message: 'Note updated',
    })

    await updateNote(noteData)

    expect(mock.history.patch[0].url).toBe('http://localhost:3200/notes/1')
    expect(JSON.parse(mock.history.patch[0].data)).toEqual({
      title: 'Test Title',
      content: 'Test Content',
      created_at: new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    })
  })
})
