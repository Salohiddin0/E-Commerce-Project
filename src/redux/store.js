// // src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit'
// import flashSalesReducer from './flashSalesSlice' // Agar FlashSales uchun slice yaratsangiz

// export const store = configureStore({
//   reducer: {
//     flashSales: flashSalesReducer // Redux'da saqlanadigan state
//   }
// })
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import wishlistReducer from './slices/wishlistSlice'
import authReducer from './slices/authSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    theme: themeReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export const RootState = store.getState
export const AppDispatch = store.dispatch
