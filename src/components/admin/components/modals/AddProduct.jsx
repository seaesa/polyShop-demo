import { useState } from "react";
import FormImage from '../formImage/AddImage';
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/firebase/thunkApi";
import { Formik } from 'formik';
import * as yup from 'yup';
import { MDBInput, MDBValidation, MDBValidationItem, MDBBtn } from 'mdb-react-ui-kit';
const schema = yup.object().shape({
  name: yup.string().required().default(''),
  price: yup.number().required().default(''),
  detailPrice: yup.string().required().default(''),
  mpbs: yup.string().required().default(''),
  category: yup.string().required().default(''),
  description: yup.string().required().default(''),
});

export default function ModalProduct({ setShow, show }) {
  const [image, setImage] = useState([]);
  const dispatch = useDispatch()
  const [images, setImages] = useState([]);
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
  const handleSubmit = (data) => {
    dispatch(addProduct({ ...data, images }))
    setShow(false)
  };
  return (
    <Modal show={show} onHide={handleClose} className='px-3'>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={schema.getDefault()}
      >
        {({ handleSubmit, handleChange, values, errors, isValid, }) => {
          return (

            <MDBValidation className='row g-3' onSubmit={handleSubmit}>
              <MDBValidationItem invalid={!isValid} feedback={errors.name}>
                <MDBInput
                  required
                  value={values.name}
                  name='name'
                  onChange={handleChange}
                  label='Name'
                />
              </MDBValidationItem>
              <MDBValidationItem className='col-md-6' invalid={!isValid} feedback={errors.price}>
                <MDBInput
                  required
                  value={values.price}
                  name='price'
                  onChange={handleChange}
                  label='Price'
                />
              </MDBValidationItem>
              <MDBValidationItem className='col-md-6' invalid={!isValid} feedback={errors.detailPrice}>
                <MDBInput
                  required
                  value={values.detailPrice}
                  name='detailPrice'
                  onChange={handleChange}
                  label='Detail Price'
                />
              </MDBValidationItem>
              <MDBValidationItem invalid={!isValid} feedback={errors.mpbs}>
                <MDBInput
                  required
                  value={values.mpbs}
                  name='mpbs'
                  onChange={handleChange}
                  label='Mpbs'
                />
              </MDBValidationItem>
              {image.length > 0 && image.map((Images, index) => <Images index={index} onChange={handleSetImage} key={index} name={`image ${++index}`} />)}
              <MDBBtn type='button' onClick={handleAddImage} size='sm' className='w-25 ms-2'>Add Image</MDBBtn>
              <Form.Select
                name="category"
                value={values.category}
                onChange={(handleChange)}
                aria-label="Default select example" >
                <option>Category</option>
                <option value="vinaphone">Vinaphone</option>
                <option value="mobifone">Mobifone</option>
                <option value="viettel">Viettel</option>
              </Form.Select>
              <MDBValidationItem invalid={!isValid} feedback={errors.description}>
                <MDBInput
                  required
                  value={values.description}
                  onChange={handleChange}
                  name='description'
                  label='Description'
                />
              </MDBValidationItem>
              <Button type='submit' className='mt-3' variant="primary">Thêm</Button>
            </MDBValidation>
          )
        }}
      </Formik>
    </Modal>
  )
}