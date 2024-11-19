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
    const { name, price, category, detailPrice, mpbs, images, description } = data;
    const refDoc = await addDoc(collection(DB, "products"), {
      name, price: (+price), images, detailPrice,
      description, MPS: mpbs,
      typeRef: doc(DB, 'categories', category),
      timestamp: Timestamp.fromDate(new Date())
    });
    const currentDoc = await getDoc(refDoc);
    return { ...currentDoc.data(), id: currentDoc.id }
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
    const { id, mpbs, category, ...props } = data
    await updateDoc(doc(DB, "products", id), { MPS: mpbs, typeRef: doc(DB, 'categories', category), timestamp: serverTimestamp(), ...props });
    // return data
    return {
      id,
      MPS: mpbs, typeRef: doc(DB, 'categories', category), timestamp: serverTimestamp(), ...props
    }
  })