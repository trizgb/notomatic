import axios from 'axios'

const updateNote = async ({ id, title, content }) => {
  const response = await axios.patch(`http://localhost:3200/notes/${id}`, {
    title,
    content,
    created_at: new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
  })

  return response.data
}

export default updateNote
