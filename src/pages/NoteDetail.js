import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { deleteById, fetchById } from '../redux/notesSlice'
import { updateNote } from 'api'
import { isValidContent, isValidTitle } from 'utils/formValidation'
import { Form } from 'components/Form'
import { Actions } from 'components/Actions'
import { TextField } from 'components/TextField'
import { TextArea } from 'components/TextArea'
import notFoundSvg from '../assets/svg/error-404.svg'

const NoteDetail = () => {
  const { id } = useParams()
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data: note, error, loading } = useSelector(state => state.notes)

  const [isEditModeActive, setIsEditModeActive] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')

  const handleSubmit = async () => {
    return await updateNote({ id, title, content })
      .then(response => {
        if (response) {
          setIsEditModeActive(false)
          alert(t('note-detail.update-alert'))
        }
      })
      .finally(() => navigate('/'))
  }

  const handleDelete = async () => {
    if (window.confirm(t('common.delete-alert'))) {
      await dispatch(deleteById({ id }))

      if (!error || !loading) {
        return navigate('/')
      }
    }
  }

  useEffect(() => {
    dispatch(fetchById({ id }))
  }, [dispatch, id])

  useEffect(() => {
    setTitle(note.title)
    setContent(note.content)
  }, [note])

  useEffect(() => {
    setTitleError(isValidTitle(title)?.message)
    setContentError(isValidContent(content)?.message)
  }, [title, content])

  return (
    <section className="section-wrapper" aria-label="Detail section">
      {!error && note && (
        <Form
          title={!isEditModeActive ? note.title : t('note-detail.title')}
          submitText={isEditModeActive ? t('form.submit-save') : null}
          onSubmit={handleSubmit}
          isSubmitDisabled={
            title === '' ||
            content === '' ||
            titleError !== '' ||
            contentError !== ''
          }
        >
          <Actions
            onEdit={!isEditModeActive ? () => setIsEditModeActive(true) : null}
            onDelete={handleDelete}
          />
          {!isEditModeActive && <p>{note.content}</p>}
          {isEditModeActive && (
            <>
              <TextField
                label={t('form.textfield-label')}
                name="title"
                defaultValue={note.title}
                onChange={e => setTitle(e.currentTarget.value)}
                error={titleError !== '' ? t(titleError) : ''}
              />
              <TextArea
                label={t('form.textarea-label')}
                name="content"
                defaultValue={note.content}
                onChange={e => setContent(e.currentTarget.value)}
                error={contentError !== '' ? t(contentError) : ''}
              />
            </>
          )}
        </Form>
      )}
      {error && (
        <div className="flex-container">
          <img src={notFoundSvg} width="60%" alt={t('common.alt-not-found')} />
        </div>
      )}
    </section>
  )
}

export default NoteDetail
