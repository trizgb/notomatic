import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Button from './Button'

describe('Button', () => {
  it('renders', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  describe('component as button', () => {
    it('renders as button', () => {
      render(<Button>Test</Button>)
      expect(screen.getByText('Test').tagName).toBe('BUTTON')
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

  describe('component as link', () => {
    it('renders as link', () => {
      render(
        <MemoryRouter>
          <Button href="/">Test</Button>
        </MemoryRouter>,
      )
      expect(screen.getByText('Test').tagName).toBe('A')
    })

    it('is disabled and no interactive', () => {
      render(
        <MemoryRouter>
          <Button href="/" isDisabled>
            Test
          </Button>
        </MemoryRouter>,
      )
      expect(screen.getByText('Test')).toHaveClass('button--disabled')
    })
  })
})
