// // src/redux/flashSalesSlice.js
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   products: [],
//   loading: true,
//   error: null,
//   timeLeft: {
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56
//   }
// }

// const flashSalesSlice = createSlice({
//   name: 'flashSales',
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload
//       state.loading = false
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload
//     },
//     setError: (state, action) => {
//       state.error = action.payload
//       state.loading = false
//     },
//     updateTimeLeft: (state, action) => {
//       state.timeLeft = action.payload
//     }
//   }
// })

// export const { setProducts, setLoading, setError, updateTimeLeft } =
//   flashSalesSlice.actions

// export default flashSalesSlice.reducer
