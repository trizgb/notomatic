import axios from 'axios'

const getNoteById = async ({ id }) => {
  const response = await axios.get(`http://localhost:3200/notes/${id}`)

  return response.data
}

export default getNoteById
