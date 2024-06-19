import Proptypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { deleteById, fetchAll } from '../../redux/notesSlice'
import trashGrey from '../../assets/icons/trash-grey.png'
import trashRed from '../../assets/icons/trash-red.png'

import './NoteCard.css'

const NoteCard = ({ id, title, subtitle, content }) => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const { error, loading } = useSelector(state => state.notes)

  const handleDelete = async e => {
    e.preventDefault()

    if (window.confirm(t('common.delete-alert'))) {
      await dispatch(deleteById({ id }))

      if (!error || !loading) {
        await dispatch(fetchAll())
      }
    }
  }

  return (
    <article className="note-card">
      <div className="note-card-wrapper">
        <div className="actions">
          <button
            aria-label={t('note-card.aria-delete-button')}
            className="button-delete"
            onClick={handleDelete}
          >
            <img
              className="icon icon-trash-grey"
              src={trashGrey}
              alt={t('note-card.alt-trash-grey')}
            />
            <img
              className="icon icon-trash-red"
              src={trashRed}
              alt={t('note-card.alt-trash-red')}
            />
          </button>
        </div>
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <p className="content">{content}</p>
      </div>
    </article>
  )
}

NoteCard.propTypes = {
  id: Proptypes.string,
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
}

export default NoteCard
