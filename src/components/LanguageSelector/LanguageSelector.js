import { useTranslation } from 'react-i18next'
import flagSpain from '../../assets/icons/flag-spain.png'
import flagUk from '../../assets/icons/flag-uk.png'

import './LanguageSelector.css'
import LanguageButton from './LanguageButton'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation(['translation'])
  const selectedLanguage = i18n.language

  return (
    <div className="language-selector">
      {selectedLanguage === 'en' && (
        <LanguageButton
          id="en"
          onClick={() => i18n.changeLanguage('es')}
          img={{ src: flagUk, alt: t('header.alt-uk-flag') }}
        />
      )}
      {selectedLanguage === 'es' && (
        <LanguageButton
          id="es"
          onClick={() => i18n.changeLanguage('en')}
          img={{ src: flagSpain, alt: t('header.alt-spain-flag') }}
        />
      )}
    </div>
  )
}

export default LanguageSelector
