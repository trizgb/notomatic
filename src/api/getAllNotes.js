import axios from 'axios'

const getAllNotes = async () => {
  const response = await axios.get('http://localhost:3200/notes')

  return response.data
}

export default getAllNotes
