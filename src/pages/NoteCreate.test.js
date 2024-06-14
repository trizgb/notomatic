import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NoteCreate from './NoteCreate'

describe('Note Create', () => {
  it('renders section tag', () => {
    render(
      <MemoryRouter>
        <NoteCreate />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('region', { name: 'Create section' }),
    ).toBeInTheDocument()
  })

  it('renders form', () => {
    render(
      <MemoryRouter>
        <NoteCreate />
      </MemoryRouter>,
    )

    expect(screen.getByText('note-create.title')).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: 'Form input' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: 'Form multiline input' }),
    ).toBeInTheDocument()
  })
})
