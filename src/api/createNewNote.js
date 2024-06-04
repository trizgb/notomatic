import axios from 'axios'
import { formatDate } from 'utils/formatDate'

const createNewNote = ({ title, content }) => {
  return axios.post('http://localhost:3200/notes', {
    title,
    content,
    created_at: formatDate(new Date()),
  })
}

export default createNewNote
