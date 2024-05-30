import { fireEvent, render, screen } from '@testing-library/react'
import NoteCard from './NoteCard'

describe('NoteCard', () => {
  it('renders', () => {
    render(
      <NoteCard id="1" title="Note test" subtitle="10/10/10" content="Test" />,
    )

    expect(screen.getByText('Note test')).toBeInTheDocument()
  })

  it('clicks delete button', () => {
    render(<NoteCard id="1" title="Note test" content="Test" />)

    const deleteButton = screen.getByRole('button', {
      name: 'note-card.aria-delete-button',
    })

    expect(deleteButton).toBeInTheDocument()
    fireEvent.click(deleteButton)
  })
})
