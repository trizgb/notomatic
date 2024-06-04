import Proptypes from 'prop-types'
import { Actions } from 'components/Actions'

import './NoteCard.css'

const NoteCard = ({ id, title, subtitle, content }) => {
  const handleClickDelete = e => {
    e.preventDefault()
    alert(`Delete ${id}`)
  }

  return (
    <article className="note-card">
      <div className="note-card-wrapper">
        <div className="actions">
          <Actions onDelete={handleClickDelete} />
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
