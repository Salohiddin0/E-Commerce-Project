import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    const data = await response.json()

    // Add random discount to each product
    const productsWithDiscount = data.map(product => {
      const discountPercentage = Math.floor(Math.random() * 20) + 20 // Random discount between 20-40%
      const originalPrice = Math.round(product.price)
      const discountedPrice = Math.round(
        (originalPrice * (100 - discountPercentage)) / 100
      )

      return {
        ...product,
        originalPrice: originalPrice,
        currentPrice: discountedPrice,
        discount: discountPercentage,
        reviews: Math.floor(Math.random() * 50) + 50 // Random reviews between 50-100
      }
    })

    return productsWithDiscount
  }
)

// Async thunk for fetching a single product
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async id => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch product')
    }
    const product = await response.json()

    // Add the same transformations as in fetchProducts
    const discountPercentage = Math.floor(Math.random() * 20) + 20
    const originalPrice = Math.round(product.price)
    const discountedPrice = Math.round(
      (originalPrice * (100 - discountPercentage)) / 100
    )

    return {
      ...product,
      originalPrice: originalPrice,
      currentPrice: discountedPrice,
      discount: discountPercentage,
      reviews: Math.floor(Math.random() * 50) + 50
    }
  }
)

// Add to cart action
export const addToCart = createAsyncThunk(
  'products/addToCart',
  async product => {
    // In a real app, you might send this to an API
    // For now, we'll just return the product to add to cart
    return product
  }
)

const initialState = {
  items: [],
  flashSaleItems: [],
  currentProduct: null,
  relatedProducts: [],
  cart: [],
  loading: false,
  error: null,
  timeLeft: {
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  }
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateCountdown: state => {
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
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
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
        state.error = action.error.message || 'Something went wrong'
      })

      // Handle fetchProductById
      .addCase(fetchProductById.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false
        state.currentProduct = action.payload

        // Set related products (products in the same category)
        if (state.items.length > 0) {
          state.relatedProducts = state.items
            .filter(
              product =>
                product.category === action.payload.category &&
                product.id !== action.payload.id
            )
            .slice(0, 4)
        }
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })

      // Handle addToCart
      .addCase(addToCart.fulfilled, (state, action) => {
        // Check if product already exists in cart
        const existingItem = state.cart.find(
          item => item.id === action.payload.id
        )

        if (existingItem) {
          // Increase quantity if already in cart
          existingItem.quantity += action.payload.quantity || 1
        } else {
          // Add new item with quantity
          state.cart.push({
            ...action.payload,
            quantity: action.payload.quantity || 1
          })
        }
      })
  }
})

export const { updateCountdown } = productSlice.actions
export default productSlice.reducer
