import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
  it('renders', () => {
    render(<Logo />)

    expect(screen.getByText('Notomatic')).toBeInTheDocument()
    expect(screen.getByAltText(`Notomatic's brand logo`)).toBeInTheDocument()
  })
})
