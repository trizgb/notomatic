import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'
import NoteDetail from './NoteDetail'

describe('Note Detail', () => {
  it('renders section tag', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NoteDetail />
        </MemoryRouter>
      </Provider>,
    )

    expect(
      screen.getByRole('region', { name: 'Detail section' }),
    ).toBeInTheDocument()
  })
})
