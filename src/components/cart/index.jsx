import { useDispatch, useSelector } from 'react-redux';
import ProductCart from './productCart';
import { selectCart } from '../../redux/cart/cartSlice'
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography, } from "mdb-react-ui-kit";
import { useState } from "react";
import NoCart from './nocart';
import { Loading } from '../admin/components/loading/loading'
import toast from 'react-hot-toast';
import PaymentModal from './paymentModal';

export const Cart = () => {
  const [modal, setModal] = useState(false);
  const { cart, totalCart } = useSelector(selectCart);
  const [phone, setPhone] = useState('0779526424');
  const [email, setEmail] = useState('hairipi100@gmail.com');
  const [isLoading, setIsLoading] = useState(false);
  const handleBuyProduct = () => {
    if (!totalCart) toast.error('Chưa có đơn hàng nào cần thanh toán')
    else {
      setModal(true)
    }
  }
  return (
    <>
      {cart.length > 0 ?
        <section className="h-100 h-custom mt-4 pt-4" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard>
                  <MDBCardBody className="p-4">
                    <MDBRow className='align-items-end gap-4'>
                      <MDBCol lg="7">
                        <MDBTypography tag="h5">
                          <Link to="/products" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                            shopping
                          </Link>
                        </MDBTypography>
                        <hr />
                        {cart.length > 0 && cart.map((product, index) => {
                          return <ProductCart key={index} {...product} email={email} phone={phone} />
                        })}
                      </MDBCol>
                      <MDBCol>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Số Tiền</p>
                          <p className="mb-2">{totalCart}k</p>
                        </div>

                        <MDBBtn
                          onClick={handleBuyProduct}
                          color="info" block size="lg">
                          <div
                            className="d-flex justify-content-between">
                            <span>{totalCart}k</span>
                            <span>
                              Thanh toán
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        : <NoCart />
      }
      {isLoading && <Loading />}
      {modal && <PaymentModal amount={totalCart} modal={modal} setModal={setModal} />}
    </>
  )
}