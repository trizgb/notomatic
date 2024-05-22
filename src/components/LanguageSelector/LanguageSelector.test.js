import { fireEvent, render, screen } from '@testing-library/react'
import LanguageSelector from './LanguageSelector'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

describe('LanguageSelector', () => {
  it('renders', () => {
    render(<LanguageSelector />)
    expect(screen.getByAltText('header.alt-uk-flag')).toBeInTheDocument()
  })

  it('renders english language button and it can be clicked', () => {
    render(<LanguageSelector />)

    const langButton = screen.getByAltText('header.alt-uk-flag').parentElement
    expect(langButton).toBeInTheDocument()
    fireEvent.click(langButton)
  })
})
