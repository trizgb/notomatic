import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NoteCard } from 'components/NoteCard'

import './NotesList.css'

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      <div className="notes-list-wrapper">
        <ul>
          {notes.map(({ id, title, created_at, content }) => (
            <li key={id}>
              <Link to={`/note/${id}`}>
                <NoteCard
                  id={id}
                  title={title}
                  subtitle={created_at}
                  content={content}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

NotesList.propTypes = {
  notes: Proptypes.array.isRequired,
}

export default NotesList
