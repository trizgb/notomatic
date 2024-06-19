import { cloneElement, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { deleteById, fetchAll } from '../redux/notesSlice'
import { NotesList } from 'components/NotesList'

const Home = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const { data: notes, error, loading } = useSelector(state => state.notes)

  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  const handleDelete = async (e, id) => {
    e.preventDefault()

    if (window.confirm(t('common.delete-alert'))) {
      await dispatch(deleteById({ id }))

      if (!error || !loading) {
        await dispatch(fetchAll())
      }
    }
  }

  const newNotes =
    notes &&
    notes.length &&
    notes.map(note => {
      const clonedNote = cloneElement(note, {
        ...note,
        onClick: e => handleDelete(e, note.id),
      })

      return clonedNote.props
    })

  return (
    <section className="section-wrapper" aria-label="Home section">
      {newNotes && newNotes.length ? (
        <NotesList notes={newNotes} />
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
