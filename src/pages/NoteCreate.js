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
  const [form, setForm] = useState({ title: '', content: '' })
  const [errors, setErrors] = useState({ title: '', content: '' })

  const validate = values => {
    if (values.title) {
      if (values.title.length < 3) {
        setErrors({ ...errors, title: t('form.textfield-error-1') })
      } else if (values.title.length > 3 && values.title.length < 20) {
        setErrors({ ...errors, title: '' })
      } else if (values.title.length > 20) {
        setErrors({
          ...errors,
          title: t('form.textfield-error-2'),
        })
      }
    }

    if (values.content) {
      if (values.content.length < 3) {
        setErrors({ ...errors, content: t('form.textarea-error-1') })
      } else setErrors({ ...errors, content: '' })
    }
  }

  const handleChange = e => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = async () => {
    return await createNewNote({
      title: form.title,
      content: form.content,
    }).finally(() => navigate('/'))
  }

  useEffect(() => {
    validate(form)
  }, [form])

  return (
    <section className="section-wrapper">
      <Form
        title={t('note-create.title')}
        submitText={t('form.submit-save')}
        onSubmit={handleSubmit}
        isSubmitDisabled={
          form.title === '' ||
          form.content === '' ||
          errors.title !== '' ||
          errors.content !== ''
        }
      >
        <TextField
          label={t('form.textfield-label')}
          name="title"
          onChange={handleChange}
          error={errors.title}
        />
        <TextArea
          label={t('form.textarea-label')}
          name="content"
          onChange={handleChange}
          error={errors.content}
        />
      </Form>
    </section>
  )
}

export default NoteCreate
