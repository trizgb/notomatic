import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import NoteCard from './NoteCard'

describe('NoteCard', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NoteCard
            id="1"
            title="Note test"
            subtitle="10/10/10"
            content="Test"
          />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getByText('Note test')).toBeInTheDocument()
  })

  it('clicks delete button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NoteCard
            id="1"
            title="Note test"
            subtitle="10/10/10"
            content="Test"
          />
        </MemoryRouter>
      </Provider>,
    )

    const deleteButton = screen.getByRole('button', {
      name: 'note-card.aria-delete-button',
    })

    expect(deleteButton).toBeInTheDocument()
    fireEvent.click(deleteButton)
  })
})
