import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({ children, type = 'button', onClick, href, isDisabled }) => {
  return !href ? (
    <button
      className={`button ${isDisabled ? 'button--disabled' : ''}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  ) : (
    <Link
      className={`button ${isDisabled ? 'button--disabled' : ''}`}
      to={href}
    >
      {children}
    </Link>
  )
}

Button.propTypes = {
  children: Proptypes.node.isRequired,
  type: Proptypes.string,
  onClick: Proptypes.func,
  href: Proptypes.any,
  isDisabled: Proptypes.bool,
}

export default Button
