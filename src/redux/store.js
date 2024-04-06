import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import firebaseSlice from './firebase/firebaseSlice';
export default configureStore({
  reducer: {
    cart: cartSlice,
    firebase: firebaseSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }),
}) 