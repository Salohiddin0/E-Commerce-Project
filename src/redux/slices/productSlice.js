import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }
  const data = await response.json()

  // Add random discount to each product
  const productsWithDiscount = data.map((product) => {
    const discountPercentage = Math.floor(Math.random() * 20) + 20 // Random discount between 20-40%
    const originalPrice = Math.round(product.price)
    const discountedPrice = Math.round((originalPrice * (100 - discountPercentage)) / 100)

    return {
      ...product,
      originalPrice: originalPrice,
      currentPrice: discountedPrice,
      discount: discountPercentage,
      reviews: Math.floor(Math.random() * 50) + 50, // Random reviews between 50-100
    }
  })

  return productsWithDiscount
})

const initialState = {
  items: [],
  flashSaleItems: [],
  loading: false,
  error: null,
  timeLeft: {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  },
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateCountdown: (state) => {
      let { days, hours, minutes, seconds } = state.timeLeft

      if (seconds > 0) {
        seconds -= 1
      } else {
        seconds = 59
        if (minutes > 0) {
          minutes -= 1
        } else {
          minutes = 59
          if (hours > 0) {
            hours -= 1
          } else {
            hours = 23
            if (days > 0) {
              days -= 1
            }
          }
        }
      }

      state.timeLeft = { days, hours, minutes, seconds }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
        state.flashSaleItems = action.payload.slice(0, 20) // First 20 items for flash sale
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export const { updateCountdown } = productSlice.actions
export default productSlice.reducer
