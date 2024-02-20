import { MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
export default function ProductCart({ name, price, images, id, types }) {

  const handleIncrease = () => {

  }
  return (
    < div className="card mb-4" >
      <div className="card-body p-4">
        <div className="row align-items-center">
          <div className="col-1">
            <MDBCheckbox />
          </div>
          <div className="col">
            <Link to={`/products/${id}`}>
              <img src={images[0]}
                className="img-fluid" alt='' />
            </Link>
          </div>
          <div className="col d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-3 pb-2">Name</p>
              <p className="lead fw-normal mb-0">{name}</p>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className='d-flex flex-column align-items-center'>
              <p className="small text-muted mb-3 pb-2">Quantity</p>
              <div className='d-flex align-items-center'>
                <button
                  className="btn btn-primary btn-sm px-2 mx-3">
                  <i className="fas fa-minus"></i>
                </button>
                <p className="lead fw-normal mb-0">{types.quantity}</p>
                <button
                  onClick={handleIncrease}
                  className="btn btn-primary btn-sm px-2 mx-3">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-3 pb-2">Price</p>
              <p className="lead fw-normal mb-0">${price}</p>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <div>
              <p className="small text-muted mb-3 pb-2">Total</p>
              <p className="lead fw-normal mb-0">${types.totalPrice}</p>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <a href="!" className="text-danger">
              <i className="fas fa-trash fa-lg"></i>
            </a>
          </div>
        </div>

      </div>
    </div >
  )
}