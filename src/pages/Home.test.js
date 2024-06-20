import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Home from './Home'

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

  it('renders message for empty list', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    )

    const emptyMessage = screen.getByRole('paragraph')
    expect(emptyMessage).toBeInTheDocument()
  })
})
