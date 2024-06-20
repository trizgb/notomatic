import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../redux/notesSlice'
import { NotesList } from 'components/NotesList'

const Home = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const { data: notes } = useSelector(state => state.notes)

  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  return (
    <section className="section-wrapper" aria-label="Home section">
      {notes && notes.length ? (
        <NotesList notes={notes} />
      ) : (
        <div className="flex-container">
          <p className="empty-list-message">
            <Trans
              i18nKey="common.empty-list"
              t={t}
              components={[<Link key={0} to="/create" />]}
            />
          </p>
        </div>
      )}
    </section>
  )
}

export default Home
