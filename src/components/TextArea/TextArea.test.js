import { render, screen, fireEvent } from '@testing-library/react'
import TextArea from './TextArea'

describe('TextArea', () => {
  it('renders', () => {
    render(<TextArea label="Test label" />)
    expect(screen.getByText('Test label')).toBeInTheDocument()
  })

  it('has error', () => {
    render(<TextArea label="Test" error="Error" />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('updates on change', () => {
    render(<TextArea label="Test label" />)

    const input = screen.getByRole('textbox', { name: 'Form multiline input' })
    fireEvent.change(input, { target: { value: 'new test' } })
    expect(input.value).toBe('new test')
  })
})
