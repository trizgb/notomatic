import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { createNewNote } from 'api'
import { Form } from 'components/Form'
import { TextArea } from 'components/TextArea'
import { TextField } from 'components/TextField'

const NoteCreate = () => {
  const { t } = useTranslation('translation')
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')

  const validate = () => {
    if (title) {
      if (title.length < 3) {
        setTitleError('form.textfield-error-min-chars')
      } else if (title.length >= 3 && title.length < 20) {
        setTitleError('')
      } else if (title.length > 20) {
        setTitleError('form.textfield-error-max-chars')
      }
    }

    if (content) {
      if (content.length < 3) {
        setContentError('form.textarea-error-min-chars')
      } else setContentError('')
    }
  }

  const handleChange = e => {
    if (e.currentTarget.name === 'title') {
      setTitle(e.currentTarget.value)
    }

    if (e.currentTarget.name === 'content') {
      setContent(e.currentTarget.value)
    }
  }

  const handleSubmit = async () => {
    return await createNewNote({
      title,
      content,
    }).finally(() => navigate('/'))
  }

  useEffect(() => {
    validate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, content])

  return (
    <section className="section-wrapper">
      <Form
        title={t('note-create.title')}
        submitText={t('form.submit-save')}
        onSubmit={handleSubmit}
        isSubmitDisabled={
          title === '' ||
          content === '' ||
          titleError !== '' ||
          titleError !== ''
        }
      >
        <TextField
          label={t('form.textfield-label')}
          name="title"
          onChange={handleChange}
          error={titleError !== '' ? t(titleError) : ''}
        />
        <TextArea
          label={t('form.textarea-label')}
          name="content"
          onChange={handleChange}
          error={contentError !== '' ? t(contentError) : ''}
        />
      </Form>
    </section>
  )
}

export default NoteCreate
