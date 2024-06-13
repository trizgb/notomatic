import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchById } from '../redux/notesSlice'
import { Form } from 'components/Form'

import trashBlack from '../assets/icons/trash-black.png'
import pencil from '../assets/icons/pencil.png'
import notFoundSvg from '../assets/svg/error-404.svg'

const NoteDetail = () => {
  const { id } = useParams()
  const { t } = useTranslation('translation')

  const dispatch = useDispatch()
  const { data: note, error } = useSelector(state => state.notes)

  useEffect(() => {
    dispatch(fetchById({ id }))
  }, [dispatch, id])

  return (
    <section className="section-wrapper">
      {!error && note && (
        <Form title={note.title}>
          <div
            className="flex-container"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              gap: '24px',
            }}
          >
            <button onClick={() => console.log('edit')}>
              <img
                className="icon icon-pencil"
                src={pencil}
                alt={t('note-detail.alt-pencil')}
              />
            </button>
            <button onClick={() => console.log('delete')}>
              <img
                className="icon icon-trash-black"
                src={trashBlack}
                alt={t('note-detail.alt-trash-black')}
              />
            </button>
          </div>
          <p>{note.content}</p>
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
