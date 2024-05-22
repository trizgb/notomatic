import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('is disabled and no interactive', () => {
    render(<Button isDisabled>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('button--disabled')
  })

  it('is clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Test</Button>)

    fireEvent.click(screen.getByText('Test'))
    expect(handleClick).toHaveBeenCalled()
  })
})
