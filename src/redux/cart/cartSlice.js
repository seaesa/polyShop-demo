import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse((sessionStorage.getItem('cart'))) || [],
    totalCart: JSON.parse(sessionStorage.getItem('cart'))?.reduce((previousValue, currentValue) => {
      if (currentValue.checked) return previousValue + currentValue.price
      else return previousValue
    }, 0) || 0,
    isChecked: false,
    buyed: JSON.parse(localStorage.getItem('buyed')) || [],
    isLoading: false
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
      } else state.cart.push({ ...product, checked: false, types: { quantity: 1, totalPrice: product.price } });
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCart(state, action) {
      const { id, ...product } = action.payload
      state.cart = state.cart.map(cart => cart.id === id ? { ...cart, ...product } : cart)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeCart(state, action) {
      const product = action.payload;
      state.cart = state.cart.filter(cart => {
        if (cart.id === product.id && state.isChecked === true) state.totalCart -= cart.types.totalPrice
        return cart.id !== product.id
      });
      sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateTotalCart: (state, action) => {
      const product = action.payload
      if (product.checked) {
        state.totalCart += +product.types.totalPrice;
        state.isChecked = true;
      } else {
        state.totalCart -= +product.types.totalPrice;
        state.isChecked = false;
      }
    },
    increaseQuantity(state, action) {
      state.cart = state.cart.map(cart => {
        let quantity = cart.types.quantity + 1
        if (cart.id === action.payload.id) {
          state.isChecked && (state.totalCart += +cart.price)
          return { ...cart, types: { quantity, totalPrice: cart.price * quantity } }
        } else return cart
      })
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    decrementQuantity(state, action) {
      state.cart = state.cart.map(cart => {
        let quantity = cart.types.quantity - 1 || 1
        if (cart.id === action.payload.id) {
          state.isChecked && quantity !== 1 && (state.totalCart -= +cart.price)
          return { ...cart, types: { quantity, totalPrice: cart.price * quantity } }
        } else return cart
      })
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    historyBuyed(state, action) {
      state.buyed.push(action.payload);
      localStorage.setItem('buyed', JSON.stringify(state.buyed));
    },
    setHistory(state, action) {
      Object.assign(state.buyed, action.payload)
    }
  }
})
export const { addCart, removeCart, setHistory, updateCart, updateTotalCart, decrementQuantity, increaseQuantity, historyBuyed } = cartSlice.actions;
export const selectCart = (state) => state.cart
export default cartSlice.reducer 