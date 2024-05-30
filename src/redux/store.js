import { configureStore } from '@reduxjs/toolkit'
import { notesSlice } from './reducer'

export default configureStore({
  reducer: {
    notes: notesSlice,
  },
})
