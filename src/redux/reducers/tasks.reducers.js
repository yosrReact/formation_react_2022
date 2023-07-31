import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as api from "../../services/tasks.service"

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await api.fetchTasks()
  return response
})

export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await api.addTask(task)
  return response
})
export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  await api.deleteTask(id)
  return id
})
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, title, duration }) => {
    const response = await api.updateTask(id, { title, duration })
    return response
  }
)
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
    error: false,
  },
  reducers: {
    toggleTodo: (state, action) => {
      console.log(action)
    },
    otherExample: (state, action) => {
      console.log(action)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false
        state.list.push(action.payload)
      })
      .addCase(addTask.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false
        state.list = state.list.filter((task) => task._id !== action.payload)
      })
      .addCase(deleteTask.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false
        state.list = state.list.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload
          }
          return task
        })
      })
      .addCase(updateTask.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})
export const { toggleTodo, otherExample } = tasksSlice.actions
export default tasksSlice.reducer
