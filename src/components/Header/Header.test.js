import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByText('Notomatic')).toBeInTheDocument()
  })

  it('renders New note button and it can be clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const createButton = screen.getByText('header.create-button +')
    expect(createButton).toBeInTheDocument()
    fireEvent.click(createButton)
  })

  it('renders language selector', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByAltText('header.alt-uk-flag')).toBeInTheDocument()
  })
})
