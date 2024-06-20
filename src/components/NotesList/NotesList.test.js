import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import NotesList from './NotesList'

describe('NotesList', () => {
  const notes = [
    {
      id: '1',
      title: 'Note test',
      content: 'Test',
      created_at: '14/04/2023',
    },
  ]

  it('renders', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NotesList notes={notes} />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getByText('Note test')).toBeInTheDocument()
  })
})
