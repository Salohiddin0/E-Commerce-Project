import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Async thunk for login
export const loginUser = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    // Replace with your actual API call
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      throw new Error("Login failed")
    }

    const data = await response.json()
    // Store token in localStorage
    localStorage.setItem("token", data.token)
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

// Async thunk for registration
export const registerUser = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
  try {
    // Replace with your actual API call
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    if (!response.ok) {
      throw new Error("Registration failed")
    }

    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem("token")
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Login failed"
      })
      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false
        // Registration successful, but user still needs to login
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Registration failed"
      })
  },
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
