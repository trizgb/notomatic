import Proptypes from 'prop-types'
import DeleteButton from './DeleteButton'

import './Actions.css'

const Actions = ({ style, onDelete }) => {
  return (
    <div style={style} className="actions">
      {onDelete && <DeleteButton onClick={onDelete} />}
    </div>
  )
}

Actions.propTypes = {
  style: Proptypes.object,
  onDelete: Proptypes.func,
}

export default Actions
