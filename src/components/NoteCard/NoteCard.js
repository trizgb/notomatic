import Proptypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import trashGrey from '../../assets/icons/trash-grey.png'
import trashRed from '../../assets/icons/trash-red.png'

import './NoteCard.css'

const NoteCard = ({ id, title, subtitle, content }) => {
  const { t } = useTranslation('translation')

  const handleClickDelete = e => {
    e.preventDefault()
    alert(`Delete ${id}`)
  }

  return (
    <article className="note-card">
      <div className="note-card-wrapper">
        <div className="actions">
          <button
            aria-label={t('note-card.aria-delete-button')}
            className="button-delete"
            onClick={handleClickDelete}
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
