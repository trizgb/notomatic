import Proptypes from 'prop-types'

import './TextArea.css'

const TextArea = ({
  label,
  name,
  value,
  defaultValue,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="textarea">
      <div className="textarea-wrapper">
        <label className="textarea-label">{label}</label>
        <textarea
          className="textarea-input"
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder || ''}
          maxLength={250}
          aria-label="Form multiline input"
          onChange={onChange}
        />
      </div>
      {error && <span className="textarea-error">{error}</span>}
    </div>
  )
}

TextArea.propTypes = {
  label: Proptypes.string,
  name: Proptypes.string,
  value: Proptypes.string,
  defaultValue: Proptypes.string,
  onChange: Proptypes.func,
  placeholder: Proptypes.string,
  error: Proptypes.string,
}

export default TextArea
