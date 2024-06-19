import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../redux/notesSlice'
import { NotesList } from 'components/NotesList'
import { SearchBar } from 'components/SearchBar'

const Home = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const { data: notes } = useSelector(state => state.notes)
  const [searchInput, setSearchInput] = useState('')

  const filteredNotes =
    notes &&
    notes.length &&
    notes.filter(
      note =>
        note.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        note.content.toLowerCase().includes(searchInput.toLowerCase()) ||
        note.created_at.toString().includes(searchInput.toString()),
    )

  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  console.log(filteredNotes)
  return (
    <>
      <SearchBar
        style={{ marginBottom: '56px' }}
        onChange={e => setSearchInput(e.currentTarget.value)}
      />
      <section className="section-wrapper" aria-label="Home section">
        {filteredNotes && filteredNotes.length > 0 ? (
          <NotesList notes={filteredNotes} />
        ) : (
          ''
        )}
        {!filteredNotes && (
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
        {searchInput !== '' && filteredNotes && filteredNotes.length === 0 ? (
          <div className="flex-container">
            <p>{t('common.search-empty')}</p>
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  )
}

export default Home
