import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../redux/notesSlice'
import { NotesList } from 'components/NotesList'

const Home = () => {
  const dispatch = useDispatch()
  const { data: notes } = useSelector(state => state.notes)

  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  return (
    <div>
      <NotesList notes={notes} />
    </div>
  )
}

export default Home
