import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.quantity * existingItem.currentPrice
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.currentPrice,
        })
      }

      state.totalQuantity++
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.quantity * existingItem.currentPrice
      }

      state.totalQuantity--
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)
    },
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
