import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllNotes, getNoteById } from 'api'

export const fetchAll = createAsyncThunk('notes/getAllNotes', async () =>
  getAllNotes(),
)

export const fetchById = createAsyncThunk('notes/getNoteById', async ({ id }) =>
  getNoteById({ id }),
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
    builder.addCase(fetchById.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchById.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchById.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default notesSlice.reducer
