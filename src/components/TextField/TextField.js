import Proptypes from 'prop-types'

import './TextField.css'

const TextField = ({
  label,
  name,
  value,
  defaultValue,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="textfield">
      <div className="textfield-wrapper">
        <label className="textfield-label">{label}</label>
        <input
          type="text"
          className="textfield-input"
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder || ''}
          aria-label="Form input"
          onChange={onChange}
        />
      </div>
      {error && <span className="textfield-error">{error}</span>}
    </div>
  )
}

TextField.propTypes = {
  label: Proptypes.string,
  name: Proptypes.string,
  value: Proptypes.string,
  defaultValue: Proptypes.string,
  onChange: Proptypes.func,
  placeholder: Proptypes.string,
  error: Proptypes.string,
}

export default TextField
