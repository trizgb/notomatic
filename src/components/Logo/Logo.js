import logo from '../../assets/icons/logo.png'

import './Logo.css'

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" />
        <h1>Notomatic</h1>
      </div>
      <p>Manage your notes</p>
    </div>
  )
}

export default Logo
