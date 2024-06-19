import { render, screen, fireEvent } from '@testing-library/react'
import Actions from './Actions'

describe('Actions', () => {
  it('renders', () => {
    const handleEdit = jest.fn()
    const handleDelete = jest.fn()

    render(<Actions onEdit={handleEdit} onDelete={handleDelete} />)
    expect(
      screen.getByRole('button', { name: 'Edit note' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Delete note' }),
    ).toBeInTheDocument()
  })

  it('edits when button with pencil is clicked', () => {
    const handleEdit = jest.fn()
    render(<Actions onEdit={handleEdit} />)

    fireEvent.click(screen.getByRole('button', { name: 'Edit note' }))
    expect(handleEdit).toHaveBeenCalled()
  })

  it('deletes when button with trash is clicked', () => {
    const handleDelete = jest.fn()
    render(<Actions onDelete={handleDelete} />)

    fireEvent.click(screen.getByRole('button', { name: 'Delete note' }))
    expect(handleDelete).toHaveBeenCalled()
  })
})
