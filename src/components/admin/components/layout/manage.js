import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import './manage.scss';
import DB from '../../../../db/firebase'

import { collection, addDoc, Timestamp } from "firebase/firestore";
import FormImage from './formImage/image';
import { Loading } from '../loading/loading';
export default function Layout({ children, onStateChange }) {
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
    <>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr >
            <th>Name</th>
            <th>Price</th>
            <th>Time</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
      <div className='addIcons' onClick={handleShow} >
        <FontAwesomeIcon className='addIconProduct' icon={faPlus} />
      </div>
      <Modal show={show} onHide={handleClose} className='px-3'>
        <Form.Control
          value={name}
          onChange={e => setName(e.target.value)}
          className='mb-3' type="text" id="inputPassword5" placeholder='Name' />
        <Form.Control
          value={price}
          onChange={e => setPrice(e.target.value)}
          className='mb-3' type="number" id="inputPassword5" placeholder='Price' />

        {image.length > 0 && image.map((Images, index) => <Images index={index} onChange={handleSetImage} key={index} name={`image ${++index}`} />)}
        <button type="button" onClick={handleAddImage} className="btn btn-sm btn-primary w-25 align-self-end mb-2" data-mdb-ripple-init>Add Image</button>
        <Form.Control
          value={desc}
          onChange={e => setDesc(e.target.value)}
          as="textarea" aria-label="With textarea" placeholder='Description' />
        <Button onClick={handleSubmitAddProduct} className='mt-3' variant="primary">Add Product</Button>
      </Modal>
      {loading && <Loading />}
    </>
  )
}
