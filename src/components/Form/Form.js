import PropTypes from 'prop-types'
import { Button } from 'components/Button'

import './Form.css'

const Form = ({ title, children, submitText, onSubmit, isSubmitDisabled }) => {
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="form">
      <h2>{title}</h2>
      <div className="form-wrapper">
        {children}
        {submitText && (
          <div className="form-submit">
            <Button
              type="submit"
              onClick={handleSubmit}
              isDisabled={isSubmitDisabled}
            >
              {submitText}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func,
  isSubmitDisabled: PropTypes.bool,
}

export default Form
