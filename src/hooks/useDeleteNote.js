import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { deleteById, fetchAll } from '../redux/notesSlice'

const useDeleteNote = ({ id, navigateUrl }) => {
  const { t } = useTranslation('translation')
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { error, loading } = useSelector(state => state.notes)

  return useCallback(async () => {
    if (window.confirm(t('common.delete-alert'))) {
      await dispatch(deleteById({ id }))

      if (!error || !loading) {
        if (navigateUrl) {
          navigate(navigateUrl)
        } else await dispatch(fetchAll())
      }
    }
    // eslint-disable-next-line
  }, [dispatch, id, navigateUrl])
}

export default useDeleteNote
