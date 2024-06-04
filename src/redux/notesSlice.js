import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllNotes } from 'api'

export const fetchAll = createAsyncThunk('notes/getAllNotes', async () =>
  getAllNotes(),
)

const notesSlice = createSlice({
  name: 'notes',
  initialState: { data: [], loading: false, error: false },
  extraReducers: builder => {
    builder.addCase(fetchAll.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchAll.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default notesSlice.reducer
