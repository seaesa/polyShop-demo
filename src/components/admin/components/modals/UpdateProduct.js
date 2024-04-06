import { useEffect, useState } from "react";
import FormImage from '../formImage/UpdateImage';
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../../redux/firebase/thunkApi";
import { doc, getDoc } from "firebase/firestore";
import DB from "../../../../db/firebase";

export default function ModalProduct({ setShow, show, item }) {
  const dispatch = useDispatch()
  const [value, setValue] = useState(item.images);
  // handle form submit
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [desc, setDesc] = useState(item.description);
  const [detailPrice, setDetailPrice] = useState(item.detailPrice)
  const [mps, setMps] = useState(item.MPS)
  const [category, setCategory] = useState('')
  useEffect(() => {
    (async () => {
      const docRef = doc(DB, "products", item.id);
      const currentDoc = await getDoc(docRef);
      const main = await getDoc(currentDoc.data()?.typeRef);
      setCategory(main.data()?.name)
    })();
  }, [item.id])
  // await loading
  const handleClose = () => setShow(false);
  const handleSubmitUpdateProduct = () => {
    setShow(false);
    dispatch(updateProduct({ name, price, description: desc, detailPrice, MPS: mps, typeRef: doc(DB, 'categories', category), images: value, id: item.id }))
  }
  return (
    <Modal show={show} onHide={handleClose} className='px-3'>
      <Form.Control
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        className='mb-3' type="text" placeholder='Name' autoComplete="true" />
      <Form.Control
        name="price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className='mb-3' type="number" placeholder='Price' />
      <Form.Control
        name="detailPrice"
        value={detailPrice}
        onChange={e => setDetailPrice(e.target.value)}
        className='mb-3' type="text" placeholder='???/tháng' />
      <Form.Control
        name="mpbs"
        value={mps}
        onChange={e => setMps(e.target.value)}
        className='mb-3' type="number" placeholder='Mpbs' />
      {Array.isArray(value) && value.map((url, index) => <FormImage index={index} key={index} name={`image ${++index}`} value={url} setValue={setValue} />)}
      <button name="" type="button" onClick={e => setValue(prev => [...prev, ''])} className="btn btn-sm btn-primary w-25 align-self-end mb-2" data-mdb-ripple-init>Add Image</button>
      <Form.Select
        name="category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        aria-label="Default select example" className='mb-3'>
        <option>Category</option>
        <option value="vinaphone">Vinaphone</option>
        <option value="mobifone">Mobifone</option>
        <option value="viettel">Viettel</option>
      </Form.Select>
      <Form.Control
        name="description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
        as="textarea" aria-label="With textarea" placeholder='Description' />
      <Button name="" onClick={handleSubmitUpdateProduct} className='mt-3' variant="primary">Update Product</Button>
    </Modal>
  )
}