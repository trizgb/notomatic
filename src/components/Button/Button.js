import Proptypes from 'prop-types'

import './Button.css'

const Button = ({ children, type = 'button', onClick, isDisabled }) => {
  return (
    <button
      className={`button ${isDisabled ? 'button--disabled' : ''}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
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
