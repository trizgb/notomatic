import axios from 'axios'

const deleteNote = async ({ id }) => {
  const response = await axios.delete(`http://localhost:3200/notes/${id}`)

  return response.data
}

export default deleteNote
