import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

let mockedLanguage = 'en'
const mockedChangeLanguage = jest.fn()

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        get language() {
          return mockedLanguage
        },
        changeLanguage: mockedChangeLanguage,
      },
    }
  },
}))

describe('Header', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('banner', { name: 'app header' }),
    ).toBeInTheDocument()
  })

  // PARA VER
  it.skip('render Logo and it can be clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const link = screen.getByRole('link', { text: 'Notomatic' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    fireEvent.click(link)
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/')
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
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/create')
  })

  it('renders language selector and it can be clicked', () => {
    const { rerender } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const englishButton = screen.getByRole('button', { name: 'english button' })
    expect(englishButton).toBeInTheDocument()
    fireEvent.click(englishButton)
    mockedLanguage = 'es'
    expect(mockedChangeLanguage).toHaveBeenCalledWith('es')

    rerender(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByAltText('header.alt-spain-flag')).toHaveAttribute(
      'src',
      'flag-spain.png',
    )
  })
})
