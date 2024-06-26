import { fireEvent, render, screen } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders', () => {
    render(<SearchBar />)

    expect(
      screen.getByPlaceholderText('common.search-placeholder'),
    ).toBeInTheDocument()
  })

  it('updates on change', () => {
    render(<SearchBar />)

    const input = screen.getByPlaceholderText('common.search-placeholder')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
