import { MDBCard, MDBCardBody, MDBCardImage, MDBIcon, MDBTypography, MDBCheckbox } from "mdb-react-ui-kit";

import { removeCart, decrementQuantity, increaseQuantity, updateTotalCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

export default function ProductCart({ name, price, images, id, types, detailPrice, email, phone, setItemCheck, ...value }) {
  const dispatch = useDispatch();

  const handleRemoveProduct = e => {
    e.preventDefault()
    dispatch(removeCart({ id }))
  }
  const handleCheckboxProduct = e => {
    if (e.target.checked) {
      setItemCheck(prev => [...prev, { name, price, images, id, types, detailPrice, ...value, userBuyed: { email, phone } }]);
      dispatch(updateTotalCart({ types, interator: '+' }));
    } else {
      setItemCheck(item => item.filter(item => item.id !== id));
      dispatch(updateTotalCart({ types, interator: '-' }));
    }
  }
  return (
    <MDBCard className="mb-3">
      <MDBCardBody>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center" style={{ flex: '1' }}>
            <MDBCheckbox
              onClick={handleCheckboxProduct}
              style={{ marginRight: '10px', backgroundImage: 'inherit' }} />
            <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
              <div>
                <MDBCardImage
                  src={images[0]}
                  fluid className="rounded-3" style={{ width: "65px", flex: '2' }}
                  alt="Shopping item" />
              </div>
            </Link>
            <div className="ms-3">
              <MDBTypography tag="h5">{name}</MDBTypography>
              <p className="small mb-0">{detailPrice}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center" style={{ flex: '1', justifyContent: 'space-between' }}>
            <div className='d-flex align-items-center'>
              <button
                onClick={e => dispatch(decrementQuantity({ id }))}
                className="btn btn-primary btn-sm mx-2">
                <i className="fas fa-minus"></i>
              </button>
              <p className="lead fw-normal mb-0">{types.quantity}</p>
              <button
                onClick={e => dispatch(increaseQuantity({ id }))}
                className="btn btn-primary btn-sm mx-2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div style={{ width: "80px" }}>
              <MDBTypography tag="h5" className="mb-0">{price}k</MDBTypography>
            </div>
            <button
              onClick={handleRemoveProduct}
              style={{ color: "#cecece" }} className="btn btn-secondary">
              <MDBIcon fas icon="trash-alt" />
            </button>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  )
}