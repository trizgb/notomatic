import { Link } from 'react-router-dom'
import { Button } from 'components/Button'

import logo from '../../assets/icons/note-stack.png'

import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link className="header-brand" to="/">
          <div>
            <img src={logo} />
            <h1>Notomatic</h1>
          </div>
          <p>Manage your notes</p>
        </Link>
        <div className="header-actions">
          <Button href="/create">New note +</Button>
          <button onClick={() => console.log('change language')}>ES</button>
        </div>
      </div>
    </header>
  )
}

export default Header
