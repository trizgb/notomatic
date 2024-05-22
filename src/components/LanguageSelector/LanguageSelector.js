import { useTranslation } from 'react-i18next'
import flagSpain from '../../assets/icons/flag-spain.png'
import flagUk from '../../assets/icons/flag-uk.png'

import './LanguageSelector.css'
import LanguageButton from './LanguageButton'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation(['translation'])
  const selectedLanguage = i18n.language

  const changeLanguage = e => {
    i18n.changeLanguage(e.currentTarget.id)
  }

  return (
    <div className="language-selector">
      {selectedLanguage !== 'en' && (
        <LanguageButton
          id="en"
          onClick={changeLanguage}
          img={{ src: flagUk, alt: t('header.alt-uk-flag') }}
        />
      )}
      {selectedLanguage !== 'es' && (
        <LanguageButton
          id="es"
          onClick={changeLanguage}
          img={{ src: flagSpain, alt: t('header.alt-spain-flag') }}
        />
      )}
    </div>
  )
}

export default LanguageSelector
