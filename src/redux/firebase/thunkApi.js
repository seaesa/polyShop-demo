import { createAsyncThunk } from "@reduxjs/toolkit";
import DB from '../../db/firebase';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, serverTimestamp } from "firebase/firestore";

export const getProduct = createAsyncThunk(
  'product/getproduct',
  async () => {
    let doc = [];
    const isDoc = await getDocs(collection(DB, "products"));
    if (!isDoc.empty) {
      isDoc.forEach((data) => doc.push({ ...data.data(), id: data.id }));
      return doc
    } else return []
  })
export const addProduct = createAsyncThunk(
  'product/addproduct',
  async data => {
    const { name, price, category, detailPrice, mps, images, desc } = data;
    if (name && price && category && detailPrice && mps) {
      const refDoc = await addDoc(collection(DB, "products"), {
        name, price, images, detailPrice,
        description: desc, MPS: mps,
        typeRef: doc(DB, 'categories', category),
        timestamp: Timestamp.fromDate(new Date())
      });
      const currentDoc = await getDoc(refDoc);
      return { ...currentDoc.data(), id: currentDoc.id }
    } else alert('feild is not value')
  })
export const removeProduct = createAsyncThunk(
  'product/removeproduct',
  async id => {
    await deleteDoc(doc(DB, "products", id));
    return id
  })
export const updateProduct = createAsyncThunk(
  'product/updateproduct',
  async data => {
    await updateDoc(doc(DB, "products", data.id), { ...data, timestamp: serverTimestamp() });
    return data
  })