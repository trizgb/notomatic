import { render, screen, fireEvent } from '@testing-library/react'
import TextField from './TextField'

describe('TextField', () => {
  it('renders', () => {
    render(<TextField label="Test label" />)
    expect(screen.getByText('Test label')).toBeInTheDocument()
  })

  it('has error', () => {
    render(<TextField label="Test" error="Error" />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('updates on change', () => {
    render(<TextField label="Test label" name="Test" />)

    const input = screen.getByRole('textbox', { name: 'Form input' })
    fireEvent.change(input, { target: { value: 'new test' } })
    expect(input.value).toBe('new test')
  })
})
