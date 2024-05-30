import { createSlice } from '@reduxjs/toolkit'
import getAllNotes from 'api/fetchAll'

export const notesSlice = () =>
  createSlice({
    name: 'notes',
    initialState: {
      data: [],
      loading: false,
      error: null,
    },
    reducers: {
      getAll: (state, action) => {
        return { notes: [...state.data, ...action] }
      },
    },
  })

// export const { getAll } = notesSlice.actions
export default notesSlice.reducer
