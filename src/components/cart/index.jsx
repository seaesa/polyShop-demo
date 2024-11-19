import { useDispatch, useSelector } from 'react-redux';
import ProductCart from './productCart';
import { selectCart } from '../../redux/cart/cartSlice'
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography, } from "mdb-react-ui-kit";
import { useState } from "react";
import NoCart from './nocart';
import { Loading } from '../admin/components/loading/loading'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Buyed Successfully');
export const Cart = () => {
  const { cart, totalCart } = useSelector(selectCart);
  const [phone, setPhone] = useState('0779526424');
  const [email, setEmail] = useState('hairipi100@gmail.com');
  const [isLoading, setIsLoading] = useState(false);
  const handleBuyProduct = () => {
    if (phone && email && totalCart) {
      setIsLoading(true)
      // dispatch(historyBuyed(itemCheck));
      setTimeout(() => {
        setIsLoading(false)
        notify()
      }, 2000);
    } else alert('write your phone and email or not choice product');
  }
  return (
    <>
      {cart.length > 0 ? <section className="h-100 h-custom mt-4 pt-4" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
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
                    <MDBCol lg="5">
                      <MDBCard className="bg-primary text-white rounded-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Card details
                            </MDBTypography>
                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                          </div>

                          <p className="small">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                          </a>

                          <form className="mt-4">
                            <MDBInput
                              value={phone}
                              onChange={e => setPhone(e.target.value)}
                              className="mb-4" label="Your Phone" type="number" size="lg" contrast />

                            <MDBInput
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              className="mb-4" label="Your Email" type="email" size="lg" contrast />
                          </form>
                          <hr />
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">{totalCart}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">{totalCart && 20}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">{totalCart ? totalCart + 20 : totalCart}</p>
                          </div>

                          <MDBBtn color="info" block size="lg">
                            <div
                              onClick={handleBuyProduct}
                              className="d-flex justify-content-between">
                              <span>{totalCart ? totalCart + 20 + `k` : ''}</span>
                              <span>
                                Checkout
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
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
      <Toaster />
    </>
  )
}