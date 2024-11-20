import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import { vnpay } from '../../config/vnpay';
import { ProductCode, VnpLocale } from 'vnpay';
import { genarateId, getIpAddress } from '../../utils/utils';
import * as yup from 'yup'
import { Formik } from 'formik';
export default function PaymentModal({ modal, setModal, amount }) {
  const toggleOpen = () => setModal(!modal);
  const handlePayment = (data) => {
    const paymentUrl = vnpay.buildPaymentUrl({
      vnp_Amount: amount,
      vnp_IpAddr: getIpAddress(),
      vnp_TxnRef: genarateId(10),
      vnp_OrderInfo: data.payment_infomation,
      vnp_OrderType: ProductCode.CardCode,
      vnp_ReturnUrl: vnpay.urlReturn,
      vnp_Locale: VnpLocale.VN,
    });
    window.open(paymentUrl)
  }
  const schema = yup.object().shape({
    email: yup.string().email().required().default('hairipi100@gmail.com'),
    phone: yup.number().required().default('0779526424'),
    payment_infomation: yup.string().default(' ')
  })
  return (
    <>
      <MDBModal open={modal} onClose={() => setModal(false)} tabIndex='-1'>
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Thanh Toán Số Tiền {amount}k</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>

            <Formik
              validationSchema={schema}
              onSubmit={handlePayment}
              initialValues={schema.getDefault()}
            >
              {({ handleSubmit, handleChange, values, errors, isValid, }) => {
                return (
                  <>
                    <MDBValidation className='row g-3' onSubmit={handleSubmit}>
                      <MDBModalBody>
                        <MDBValidationItem className='mb-3' feedback={errors.email} invalid>
                          <MDBInput
                            required
                            value={values.email}
                            name='email'
                            onChange={handleChange}
                            label='Email'
                          />
                        </MDBValidationItem>
                        <MDBValidationItem className='mb-3' feedback={errors.phone} invalid>
                          <MDBInput
                            required
                            value={values.phone}
                            name='phone'
                            onChange={handleChange}
                            label='Số Điện Thoại'
                          />
                        </MDBValidationItem>
                        <MDBValidationItem className='mb-3' feedback={errors.payment_infomation} invalid>
                          <MDBTextArea
                            required
                            value={values.payment_infomation}
                            name='payment_infomation'
                            onChange={handleChange}
                            label='Nội Dung Chuyển Khoản'
                          />
                        </MDBValidationItem>
                      </MDBModalBody>

                      <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={toggleOpen}>
                          Close
                        </MDBBtn>
                        <MDBBtn type='submit'>Thanh Toán</MDBBtn>
                      </MDBModalFooter>
                    </MDBValidation>
                  </>
                )
              }}
            </Formik>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}