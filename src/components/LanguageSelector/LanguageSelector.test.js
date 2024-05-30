import { fireEvent, render, screen } from '@testing-library/react'
import LanguageSelector from './LanguageSelector'

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

describe('LanguageSelector', () => {
  it('renders', () => {
    render(<LanguageSelector />)
    expect(
      screen.getByRole('button', { name: 'english button' }),
    ).toBeInTheDocument()
  })

  it('renders english language button and when is clicked language change', () => {
    const { rerender } = render(<LanguageSelector />)

    const englishButton = screen.getByRole('button', { name: 'english button' })
    expect(englishButton).toBeInTheDocument()
    fireEvent.click(englishButton)
    mockedLanguage = 'es'
    expect(mockedChangeLanguage).toHaveBeenCalledWith('es')

    rerender(<LanguageSelector />)

    expect(screen.getByAltText('header.alt-spain-flag')).toHaveAttribute(
      'src',
      'flag-spain.png',
    )
  })

  it('renders spanish language button and when is clicked language change', () => {
    mockedLanguage = 'es'
    const { rerender } = render(<LanguageSelector />)

    const spanishButton = screen.getByRole('button', { name: 'spanish button' })
    expect(spanishButton).toBeInTheDocument()
    fireEvent.click(spanishButton)

    mockedLanguage = 'en'
    expect(mockedChangeLanguage).toHaveBeenCalledWith('en')

    rerender(<LanguageSelector />)

    expect(screen.getByAltText('header.alt-uk-flag')).toHaveAttribute(
      'src',
      'flag-uk.png',
    )
  })
})
