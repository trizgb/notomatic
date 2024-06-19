export const isValidTitle = title => {
  const error = { message: '' }

  if (title) {
    if (title?.length < 3) {
      return { ...error, message: 'form.textfield-error-min-chars' }
    } else if (title?.length >= 3 && title?.length < 20) {
      return { ...error, message: '' }
    } else if (title?.length > 20) {
      return { ...error, message: 'form.textfield-error-max-chars' }
    }
  }
}

export const isValidContent = content => {
  const error = { message: '' }

  if (content) {
    if (content?.length < 3) {
      return { ...error, message: 'form.textarea-error-min-chars' }
    } else return { ...error, message: '' }
  }
}
