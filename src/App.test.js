import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {
  it('renders header tag', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('renders main tag', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
