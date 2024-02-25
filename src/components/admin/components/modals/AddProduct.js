import { useState } from "react";
import FormImage from '../formImage/AddImage';
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/firebase/thunkApi";

export default function ModalProduct({ setShow, show }) {
  const [image, setImage] = useState([]);
  const dispatch = useDispatch()
  // handle form submit
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [images, setImages] = useState([]);
  const [detailPrice, setDetailPrice] = useState('')
  const [mps, setMps] = useState(0)
  const [category, setCategory] = useState('')
  // await loading
  const handleClose = () => setShow(false);
  const handleAddImage = () => {
    setImage(prev => [...prev, FormImage])
  }
  const handleSetImage = (e, index) => {
    setImages(prev => {
      prev[index] = e.target.value
      return prev
    })
  }
  const handleSubmitAddProduct = () => {
    setShow(false)
    dispatch(addProduct({
      name, price, category,
      detailPrice, mps, images, desc
    }))
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
      {image.length > 0 && image.map((Images, index) => <Images index={index} onChange={handleSetImage} key={index} name={`image ${++index}`} />)}
      <button name="" type="button" onClick={handleAddImage} className="btn btn-sm btn-primary w-25 align-self-end mb-2" data-mdb-ripple-init>Add Image</button>
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
      <Button name="" onClick={handleSubmitAddProduct} className='mt-3' variant="primary">Add Product</Button>
    </Modal>
  )
}