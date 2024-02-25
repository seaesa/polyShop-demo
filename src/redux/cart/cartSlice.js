import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse((sessionStorage.getItem('cart'))) || [],
    totalCart: 0,
  },
  reducers: {
    addCart(state, action) {
      const product = action.payload;
      const exitsProduct = state.cart.find((item) => item.id === product.id);
      if (exitsProduct) {
        state.cart = state.cart.map((item) => {
          if (item.id === product.id) {
            let quantity = item.types.quantity + 1
            return { ...item, types: { quantity, totalPrice: item.price * quantity } };
          }
          return item;
        });
      } else state.cart.push({ ...product, types: { quantity: 1, totalPrice: product.price } });
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeCart(state, action) {
      const product = action.payload;
      state.cart = state.cart.filter(cart => cart.id !== product.id)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCart: (state, action) => {
      state.value += action.payload
    },
    increaseQuantity(state, action) {
      state.cart = state.cart.map(cart => {
        let quantity = cart.types.quantity + 1
        if (cart.id === action.payload.id) {
          return { ...cart, types: { quantity, totalPrice: cart.price * quantity } }
        } else return cart
      })
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    decrementQuantity(state, action) {
      state.cart = state.cart.map(cart => {
        let quantity = cart.types.quantity - 1 || 1
        if (cart.id === action.payload.id) {
          return { ...cart, types: { quantity, totalPrice: cart.price * quantity } }
        } else return cart
      })
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    }
  }
})
export const { addCart, removeCart, updateCart, decrementQuantity, increaseQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart
export default cartSlice.reducer