import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchById } from '../redux/notesSlice'
import { updateNote } from 'api'
import { Form } from 'components/Form'
import { TextField } from 'components/TextField'
import { TextArea } from 'components/TextArea'
import trashBlack from '../assets/icons/trash-black.png'
import pencil from '../assets/icons/pencil.png'
import notFoundSvg from '../assets/svg/error-404.svg'

const NoteDetail = () => {
  const { id } = useParams()
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data: note, error } = useSelector(state => state.notes)

  const [isEditModeActive, setIsEditModeActive] = useState(false)
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
    return await updateNote({ id, title, content })
      .then(response => {
        if (response) {
          setIsEditModeActive(false)
          alert(t('note-detail.update-alert'))
        }
      })
      .finally(() => navigate('/'))
  }

  useEffect(() => {
    dispatch(fetchById({ id }))
  }, [dispatch, id])

  useEffect(() => {
    setTitle(note.title)
    setContent(note.content)
  }, [note])

  useEffect(() => {
    validate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, content])

  return (
    <section className="section-wrapper">
      {!error && note && (
        <Form
          title={!isEditModeActive ? note.title : t('note-detail.title')}
          submitText={isEditModeActive ? t('form.submit-save') : null}
          onSubmit={handleSubmit}
          isSubmitDisabled={
            title === '' ||
            content === '' ||
            titleError !== '' ||
            titleError !== ''
          }
        >
          <div className="flex-container note-detail-actions">
            {!isEditModeActive && (
              <button onClick={() => setIsEditModeActive(true)}>
                <img
                  className="icon icon-pencil"
                  src={pencil}
                  alt={t('note-detail.alt-pencil')}
                />
              </button>
            )}
            <button onClick={() => console.log('delete')}>
              <img
                className="icon icon-trash-black"
                src={trashBlack}
                alt={t('note-detail.alt-trash-black')}
              />
            </button>
          </div>
          {!isEditModeActive && <p>{note.content}</p>}
          {isEditModeActive && (
            <>
              <TextField
                label={t('form.textfield-label')}
                name="title"
                defaultValue={note.title}
                onChange={handleChange}
                error={titleError !== '' ? t(titleError) : ''}
              />
              <TextArea
                label={t('form.textarea-label')}
                name="content"
                defaultValue={note.content}
                onChange={handleChange}
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
