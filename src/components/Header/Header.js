import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from 'components/Logo'
import { Button } from 'components/Button'
import { LanguageSelector } from 'components/LanguageSelector'

import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation')

  return (
    <header className="header" aria-label="app header">
      <div className="header-wrapper">
        <Link to="/">
          <Logo />
        </Link>
        <div className="header-actions">
          <Button onClick={() => navigate('/create')}>
            {t('header.create-button')} +
          </Button>
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

export default Header
