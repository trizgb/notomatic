import { render, screen, fireEvent } from '@testing-library/react'
import Form from './Form'

describe('Form', () => {
  it('renders', () => {
    render(<Form>Test</Form>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('submits when button is clicked', () => {
    const handleClick = jest.fn()

    render(
      <Form submitText="Submit test" onSubmit={handleClick}>
        Test
      </Form>,
    )

    fireEvent.click(screen.getByText('Submit test'))
    expect(handleClick).toHaveBeenCalled()
  })
})
