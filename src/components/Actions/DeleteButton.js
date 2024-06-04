import Proptypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import trashGrey from '../../assets/icons/trash-grey.png'
import trashRed from '../../assets/icons/trash-red.png'

const DeleteButton = ({ onClick }) => {
  const { t } = useTranslation('translation')

  return (
    <button
      aria-label={t('note-card.aria-delete-button')}
      className="button-delete"
      onClick={onClick}
    >
      <img
        className="icon-trash-grey"
        src={trashGrey}
        alt={t('note-card.alt-trash-grey')}
      />
      <img
        className="icon-trash-red"
        src={trashRed}
        alt={t('note-card.alt-trash-red')}
      />
    </button>
  )
}

DeleteButton.propTypes = {
  onClick: Proptypes.func,
}

export default DeleteButton
