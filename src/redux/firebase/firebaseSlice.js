import { createSlice } from '@reduxjs/toolkit';
import { addProduct, removeProduct, getProduct, updateProduct } from './thunkApi';
export const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    doc: [],
    isLoading: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    // get product
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.doc = action.payload
      state.isLoading = false
    });

    // add product
    builder.addCase(addProduct.pending, state => {
      state.isLoading = true
    })
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.doc.push(action.payload)
      state.isLoading = false;
    });

    // remove product
    builder.addCase(removeProduct.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      state.doc = state.doc.filter(doc => doc.id !== action.payload);
      state.isLoading = false;
    });
    // update product
    builder.addCase(updateProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.doc = state.doc.map(doc => {
        console.log(action.payload)
        if (doc.id === action.payload.id) {
          return { ...doc, ...action.payload }
        } else return doc
      });
      state.isLoading = false;
    });
  }
})
// export const { addDoc, removeDoc } = firebaseSlice.actions;
export const selectDocFirebase = (state) => state.firebase;
export default firebaseSlice.reducer