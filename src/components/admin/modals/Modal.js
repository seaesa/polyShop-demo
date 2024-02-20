import { Modal, Form, Button } from "react-bootstrap";
import FormImage from '../components/layout/formImage/image';
import { useState } from "react";

import DB from '../../../db/firebase'
import { collection, addDoc, Timestamp } from "firebase/firestore";


export default function Modals() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState([]);

  // handle form submit
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [images, setImages] = useState([]);

  // await loading
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddImage = () => {
    setImage(prev => [...prev, FormImage])
  }
  const handleSetImage = (e, index) => {
    setImages(prev => {
      prev[index] = e.target.value
      return prev
    })
  }
  const handleSubmitAddProduct = async () => {
    try {
      if (name && price) {
        setShow(false)
        setLoading(true)
        await addDoc(collection(DB, "products"), {
          name,
          price,
          images,
          description: desc,
          timestamp: Timestamp.fromDate(new Date())
        });
        setLoading(false)
        onStateChange()
      } else alert('feild is not value')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <Modal show={show} onHide={handleClose} className='px-3'>
      <Form.Control
        value={name}
        onChange={e => setName(e.target.value)}
        className='mb-3' type="text" placeholder='Name' />
      <Form.Control
        value={price}
        onChange={e => setPrice(e.target.value)}
        className='mb-3' type="number" placeholder='Price' />
      <Form.Control
        className='mb-3' type="text" placeholder='detail-price' />
      <Form.Control
        className='mb-3' type="text" placeholder='MPS' />

      {image.length > 0 && image.map((Images, index) => <Images index={index} onChange={handleSetImage} key={index} name={`image ${++index}`} />)}
      <button type="button" onClick={handleAddImage} className="btn btn-sm btn-primary w-25 align-self-end mb-2" data-mdb-ripple-init>Add Image</button>
      <Form.Select aria-label="Default select example" className='mb-3'>
        <option>Category</option>
        <option value="vinaphone">Vinaphone</option>
        <option value="mobifone">Mobifone</option>
        <option value="viettel">Viettel</option>
      </Form.Select>
      <Form.Control
        value={desc}
        onChange={e => setDesc(e.target.value)}
        as="textarea" aria-label="With textarea" placeholder='Description' />
      <Button onClick={handleSubmitAddProduct} className='mt-3' variant="primary">Add Product</Button>
    </Modal>
  )
}