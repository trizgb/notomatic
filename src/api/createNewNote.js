import axios from 'axios'

const createNewNote = ({ title, content }) => {
  return axios.post('http://localhost:3200/notes', {
    title,
    content,
    created_at: new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
  })
}

export default createNewNote
