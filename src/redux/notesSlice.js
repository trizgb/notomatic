import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { deleteNote, getAllNotes, getNoteById } from 'api'

export const fetchAll = createAsyncThunk('notes/getAllNotes', async () =>
  getAllNotes(),
)

export const fetchById = createAsyncThunk('notes/getNoteById', async ({ id }) =>
  getNoteById({ id }),
)

export const deleteById = createAsyncThunk('notes/deleteNote', async ({ id }) =>
  deleteNote({ id }),
)

const notesSlice = createSlice({
  name: 'notes',
  initialState: { data: [], loading: false, error: false },
  extraReducers: builder => {
    // fetch all notes cases
    builder.addCase(fetchAll.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    })
    builder.addCase(fetchAll.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
    // fetch note cases
    builder.addCase(fetchById.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchById.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    })
    builder.addCase(fetchById.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
    // delete note cases
    builder.addCase(deleteById.pending, state => {
      state.loading = true
    })
    builder.addCase(deleteById.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    })
    builder.addCase(deleteById.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default notesSlice.reducer
