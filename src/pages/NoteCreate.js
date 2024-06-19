import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { createNewNote } from 'api'
import { isValidContent, isValidTitle } from 'utils/formValidation'
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

  const handleSubmit = async () => {
    return await createNewNote({
      title,
      content,
    }).finally(() => navigate('/'))
  }

  useEffect(() => {
    setTitleError(isValidTitle(title)?.message)
    setContentError(isValidContent(content)?.message)
  }, [title, content])

  return (
    <section className="section-wrapper" aria-label="Create section">
      <Form
        title={t('note-create.title')}
        submitText={t('form.submit-save')}
        onSubmit={handleSubmit}
        isSubmitDisabled={
          title === '' ||
          content === '' ||
          titleError !== '' ||
          contentError !== ''
        }
      >
        <TextField
          label={t('form.textfield-label')}
          name="title"
          onChange={e => setTitle(e.currentTarget.value)}
          error={titleError !== '' ? t(titleError) : ''}
        />
        <TextArea
          label={t('form.textarea-label')}
          name="content"
          onChange={e => setContent(e.currentTarget.value)}
          error={contentError !== '' ? t(contentError) : ''}
        />
      </Form>
    </section>
  )
}

export default NoteCreate
