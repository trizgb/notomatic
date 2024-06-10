import { useState } from 'react'
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

  const handleChange = e => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = async () => {
    return await createNewNote({
      title: form.title,
      content: form.content,
    }).finally(() => navigate('/'))
  }

  return (
    <section className="section-wrapper">
      <Form
        title={t('note-create.title')}
        submitText={t('form.submit-save')}
        onSubmit={handleSubmit}
      >
        <TextField
          label={t('form.textfield-label')}
          name="title"
          onChange={handleChange}
        />
        <TextArea
          label={t('form.textarea-label')}
          name="content"
          onChange={handleChange}
        />
      </Form>
    </section>
  )
}

export default NoteCreate
