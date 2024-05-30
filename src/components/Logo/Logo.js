import { useTranslation } from 'react-i18next'
import logo from '../../assets/icons/logo.png'

import './Logo.css'

const Logo = () => {
  const { t } = useTranslation('translation')
  return (
    <div className="logo">
      <div className="logo-wrapper">
        <img src={logo} alt={t('header.alt-logo')} />
        <h1>Notomatic</h1>
      </div>
      <p>{t('header.subtitle-logo')}</p>
    </div>
  )
}

export default Logo
