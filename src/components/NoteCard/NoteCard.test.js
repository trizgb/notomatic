import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import NoteCard from './NoteCard'

describe('NoteCard', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <NoteCard id="1" title="Note test" subtitle="10/10/10" content="Test" />
      </Provider>,
    )

    expect(screen.getByText('Note test')).toBeInTheDocument()
  })

  it('clicks delete button', () => {
    render(
      <Provider store={store}>
        <NoteCard id="1" title="Note test" subtitle="10/10/10" content="Test" />
      </Provider>,
    )

    const deleteButton = screen.getByRole('button', {
      name: 'note-card.aria-delete-button',
    })

    expect(deleteButton).toBeInTheDocument()
    fireEvent.click(deleteButton)
  })
})
