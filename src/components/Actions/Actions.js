import Proptypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import trashBlack from '../../assets/icons/trash-black.png'
import pencil from '../../assets/icons/pencil.png'

import './Actions.css'

const Actions = ({ onEdit, onDelete }) => {
  const { t } = useTranslation('translation')

  const handleEdit = e => {
    e.preventDefault()

    if (onEdit) onEdit()
  }

  const handleDelete = e => {
    e.preventDefault()

    if (onDelete) onDelete()
  }

  return (
    <div className="actions">
      {onEdit && (
        <button onClick={handleEdit} aria-label="Edit note">
          <img
            className="icon icon-pencil"
            src={pencil}
            alt={t('note-detail.alt-pencil')}
          />
        </button>
      )}
      {onDelete && (
        <button onClick={handleDelete} aria-label="Delete note">
          <img
            className="icon icon-trash-black"
            src={trashBlack}
            alt={t('note-detail.alt-trash-black')}
          />
        </button>
      )}
    </div>
  )
}

Actions.propTypes = {
  onEdit: Proptypes.func,
  onDelete: Proptypes.func,
}

export default Actions
