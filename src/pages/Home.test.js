import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import { Provider } from 'react-redux'
import store from '../redux/store'

describe('Home', () => {
  it('renders section tag', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    )

    expect(
      screen.getByRole('region', { name: 'Home section' }),
    ).toBeInTheDocument()
  })

  it('renders notes list', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    )

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })
})
