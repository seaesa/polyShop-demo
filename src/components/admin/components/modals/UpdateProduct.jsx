import { useMemo, useState } from "react";
import FormImage from '../formImage/UpdateImage';
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../../redux/firebase/thunkApi";
import { Formik } from 'formik';
import * as yup from 'yup';
import { MDBInput, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
export default function ModalProduct({ setShow, show, item }) {
  const dispatch = useDispatch()
  const [value, setValue] = useState(item.images);
  // handle form submit 
  // await loading
  const handleClose = () => setShow(false);
  const handleSubmitUpdateProduct = (data) => {
    dispatch(updateProduct({ images: value, id: item.id, timestamp: item.timestamp, ...data }))
    setShow(false);
  }
  const schema = useMemo(() => {
    return yup.object().shape({
      name: yup.string().required().default(item.name),
      price: yup.number().required().default(item.price),
      detailPrice: yup.string().required().default(item.detailPrice),
      mpbs: yup.string().required().default(item.MPS),
      category: yup.string().required().default(item.typeRef.id),
      description: yup.string().required().default(item.description),
    });
  }, [item])
  return (
    <Modal show={show} onHide={handleClose} className='px-3'>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmitUpdateProduct}
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
              {Array.isArray(value) && value.map((url, index) => <FormImage index={index} key={index} name={`image ${++index}`} value={url} setValue={setValue} />)}
              <button name="" type="button" onClick={() => setValue(prev => [...prev, ''])} className="btn btn-sm btn-primary w-25 align-self-end ms-2 mb-2" data-mdb-ripple-init>Add Image</button>
              <Form.Select
                name="category"
                value={values.category}
                onChange={(handleChange)}
                aria-label="Default select example" >
                <option >category</option>
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