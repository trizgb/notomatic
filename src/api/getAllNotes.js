import axios from 'axios'

const getAllNotes = async () => {
  const data = await axios.get('http://localhost:3200/notes').then(response => {
    return response.data
  })

  return data
}

export default getAllNotes
