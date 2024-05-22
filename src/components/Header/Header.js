import { Link, useNavigate } from 'react-router-dom'
import { Logo } from 'components/Logo'
import { Button } from 'components/Button'

import './Header.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="header-wrapper">
        <Link to="/">
          <Logo />
        </Link>
        <div className="header-actions">
          <Button onClick={() => navigate('/create')}>New note +</Button>
          <button onClick={() => console.log('change language')}>ES</button>
        </div>
      </div>
    </header>
  )
}

export default Header
