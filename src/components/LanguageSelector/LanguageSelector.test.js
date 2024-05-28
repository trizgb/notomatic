import { fireEvent, render, screen } from '@testing-library/react'
import LanguageSelector from './LanguageSelector'

const mockedChangeLanguage = jest.fn()

let mockedLanguage = 'en'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        language: mockedLanguage,
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

  it('renders english language button and it can be clicked', () => {
    render(<LanguageSelector />)

    const englishButton = screen.getByRole('button', { name: 'english button' })
    expect(englishButton).toBeInTheDocument()
    fireEvent.click(englishButton)
    expect(mockedChangeLanguage).toHaveBeenCalledWith('es')
    expect(screen.getByAltText('header.alt-uk-flag')).toBeInTheDocument()
  })

  it('renders spanish language button and it can be clicked', () => {
    mockedLanguage = 'es'
    render(<LanguageSelector />)

    const spanishButton = screen.getByRole('button', { name: 'spanish button' })
    expect(spanishButton).toBeInTheDocument()
    fireEvent.click(spanishButton)
    expect(mockedChangeLanguage).toHaveBeenCalledWith('en')
    expect(screen.getByAltText('header.alt-spain-flag')).toBeInTheDocument()
  })
})
